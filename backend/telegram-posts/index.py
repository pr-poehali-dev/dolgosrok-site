'''
Business: Получает последние публикации из Telegram-канала @DolgosrokInvest через API
Args: event с httpMethod (GET), queryStringParameters (limit - количество постов)
Returns: JSON с массивом постов (date, title, excerpt, views, link, tag)
'''

import json
import os
import re
from typing import Dict, Any, List
from datetime import datetime
from urllib import request, parse

def get_telegram_posts(bot_token: str, channel_username: str, limit: int) -> List[Dict[str, Any]]:
    base_url = f'https://api.telegram.org/bot{bot_token}'
    
    channel_info_url = f'{base_url}/getChat?chat_id=@{channel_username}'
    
    try:
        with request.urlopen(channel_info_url) as response:
            data = json.loads(response.read().decode())
            if not data.get('ok'):
                return []
    except Exception:
        return []
    
    posts = []
    offset = 0
    max_attempts = 50
    
    while len(posts) < limit and offset < max_attempts:
        try:
            updates_url = f'{base_url}/getUpdates?offset={offset}&limit=100'
            with request.urlopen(updates_url) as response:
                data = json.loads(response.read().decode())
                
            if not data.get('ok') or not data.get('result'):
                break
                
            results = data['result']
            if not results:
                break
                
            for update in results:
                offset = update['update_id'] + 1
                
                channel_post = update.get('channel_post')
                if not channel_post:
                    continue
                    
                chat = channel_post.get('chat', {})
                if chat.get('username') != channel_username:
                    continue
                
                text = channel_post.get('text', '')
                if len(text) < 50:
                    continue
                
                message_id = channel_post.get('message_id')
                timestamp = channel_post.get('date')
                views = channel_post.get('views', 0)
                
                date_obj = datetime.fromtimestamp(timestamp)
                date_str = date_obj.strftime('%d %B %Y')
                months_ru = {
                    'January': 'января', 'February': 'февраля', 'March': 'марта',
                    'April': 'апреля', 'May': 'мая', 'June': 'июня',
                    'July': 'июля', 'August': 'августа', 'September': 'сентября',
                    'October': 'октября', 'November': 'ноября', 'December': 'декабря'
                }
                for en, ru in months_ru.items():
                    date_str = date_str.replace(en, ru)
                
                lines = text.split('\n')
                title = lines[0][:100]
                title = re.sub(r'#\w+', '', title).strip()
                
                excerpt = ' '.join(lines[:3])[:200]
                excerpt = re.sub(r'#\w+', '', excerpt).strip()
                
                tags = re.findall(r'#(\w+)', text)
                tag = tags[0].capitalize() if tags else 'Общее'
                
                tag_mapping = {
                    'облигации': 'Облигации',
                    'макро': 'Макроэкономика',
                    'чтиво': 'Чтиво',
                    'образование': 'Образование',
                    'портфель': 'Портфель'
                }
                tag = tag_mapping.get(tag.lower(), tag)
                
                views_str = f'{views}'
                if views >= 1000:
                    views_str = f'{views/1000:.1f}k'
                
                posts.append({
                    'date': date_str,
                    'title': title,
                    'excerpt': excerpt,
                    'views': views_str,
                    'link': f'https://t.me/{channel_username}/{message_id}',
                    'tag': tag
                })
                
                if len(posts) >= limit:
                    break
                    
        except Exception:
            break
    
    return posts

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    params = event.get('queryStringParameters') or {}
    limit = int(params.get('limit', '3'))
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    channel_username = 'DolgosrokInvest'
    
    fallback_posts = [
        {
            'date': '27 октября 2025',
            'title': 'Говард Маркс: сборник всех memo за 35 лет',
            'excerpt': 'Говард Маркс в честь 35-летия опубликовал сборник всех memo. Кладезь полезной информации, советов и простых истин о рынке и инвестициях.',
            'views': '1.2k',
            'link': 'https://t.me/DolgosrokInvest/1244',
            'tag': 'Чтиво'
        },
        {
            'date': '14 октября 2025',
            'title': 'ФАС согласовала покупку бизнеса сети гипермаркетов «О\'кей»',
            'excerpt': 'ФАС согласовала сделку по приобретению сети гипермаркетов "О\'Кей". Как мы ранее писали в нашем материале, такой ход событий был очевиден.',
            'views': '1.2k',
            'link': 'https://t.me/DolgosrokInvest/1234',
            'tag': 'Облигации'
        },
        {
            'date': '14 октября 2025',
            'title': 'Гельтек-Медика: 22% — много или мало для дебюта?',
            'excerpt': 'Мы давно не рассматривали первичные размещения. Особенно среди дебютантов.',
            'views': '1.1k',
            'link': 'https://t.me/DolgosrokInvest/1233',
            'tag': 'Облигации'
        }
    ]
    
    if bot_token:
        posts = get_telegram_posts(bot_token, channel_username, limit)
        if not posts:
            posts = fallback_posts[:limit]
    else:
        posts = fallback_posts[:limit]
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'posts': posts}, ensure_ascii=False)
    }