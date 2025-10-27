'''
Business: Получает последние публикации из Telegram-канала @DolgosrokInvest через API с кэшированием в БД
Args: event с httpMethod (GET/POST), queryStringParameters (limit, refresh - для принудительного обновления)
Returns: JSON с массивом постов (date, title, excerpt, views, link, tag)
'''

import json
import os
import re
import psycopg2
from typing import Dict, Any, List, Optional
from datetime import datetime
from urllib import request

def get_db_connection():
    dsn = os.environ.get('DATABASE_URL', '')
    if not dsn:
        return None
    return psycopg2.connect(dsn)

def get_cached_posts(limit: int) -> List[Dict[str, Any]]:
    conn = get_db_connection()
    if not conn:
        return []
    
    try:
        cur = conn.cursor()
        cur.execute('''
            SELECT message_id, date, title, excerpt, views, link, tag, timestamp
            FROM telegram_posts
            ORDER BY timestamp DESC
            LIMIT %s
        ''', (limit,))
        
        posts = []
        for row in cur.fetchall():
            posts.append({
                'message_id': row[0],
                'date': row[1],
                'title': row[2],
                'excerpt': row[3],
                'views': row[4],
                'link': row[5],
                'tag': row[6],
                'timestamp': row[7]
            })
        
        cur.close()
        conn.close()
        return posts
    except Exception:
        if conn:
            conn.close()
        return []

def save_posts_to_db(posts: List[Dict[str, Any]]) -> bool:
    conn = get_db_connection()
    if not conn:
        return False
    
    try:
        cur = conn.cursor()
        
        for post in posts:
            message_id = int(post['link'].split('/')[-1])
            
            cur.execute('''
                INSERT INTO telegram_posts (message_id, date, title, excerpt, views, link, tag, timestamp, updated_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP)
                ON CONFLICT (message_id) DO UPDATE SET
                    views = EXCLUDED.views,
                    updated_at = CURRENT_TIMESTAMP
            ''', (
                message_id,
                post['date'],
                post['title'],
                post['excerpt'],
                post['views'],
                post['link'],
                post['tag'],
                post.get('timestamp', int(datetime.now().timestamp()))
            ))
        
        conn.commit()
        cur.close()
        conn.close()
        return True
    except Exception:
        if conn:
            conn.rollback()
            conn.close()
        return False

def fetch_telegram_posts(bot_token: str, channel_username: str, limit: int) -> List[Dict[str, Any]]:
    base_url = f'https://api.telegram.org/bot{bot_token}'
    
    try:
        channel_info_url = f'{base_url}/getChat?chat_id=@{channel_username}'
        with request.urlopen(channel_info_url, timeout=10) as response:
            data = json.loads(response.read().decode())
            if not data.get('ok'):
                return []
    except Exception:
        return []
    
    posts = []
    
    try:
        updates_url = f'{base_url}/getUpdates?limit=100'
        with request.urlopen(updates_url, timeout=10) as response:
            data = json.loads(response.read().decode())
            
        if not data.get('ok') or not data.get('result'):
            return []
            
        results = data['result']
        channel_posts = []
        
        for update in results:
            channel_post = update.get('channel_post')
            if not channel_post:
                continue
                
            chat = channel_post.get('chat', {})
            if chat.get('username') != channel_username:
                continue
            
            text = channel_post.get('text', '')
            if len(text) < 50:
                continue
            
            channel_posts.append(channel_post)
        
        channel_posts.sort(key=lambda x: x.get('date', 0), reverse=True)
        
        for channel_post in channel_posts[:limit]:
            message_id = channel_post.get('message_id')
            timestamp = channel_post.get('date')
            views = channel_post.get('views', 0)
            text = channel_post.get('text', '')
            
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
                'tag': tag,
                'timestamp': timestamp
            })
            
    except Exception:
        pass
    
    return posts

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method not in ['GET', 'POST']:
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    params = event.get('queryStringParameters') or {}
    limit = int(params.get('limit', '10'))
    force_refresh = params.get('refresh') == 'true' or method == 'POST'
    
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
    
    posts = []
    
    if force_refresh and bot_token:
        fresh_posts = fetch_telegram_posts(bot_token, channel_username, limit)
        if fresh_posts:
            save_posts_to_db(fresh_posts)
            posts = fresh_posts
    
    if not posts:
        cached = get_cached_posts(limit)
        if cached:
            posts = [{k: v for k, v in p.items() if k != 'timestamp'} for p in cached]
    
    if not posts and bot_token:
        fresh_posts = fetch_telegram_posts(bot_token, channel_username, limit)
        if fresh_posts:
            save_posts_to_db(fresh_posts)
            posts = fresh_posts
    
    if not posts:
        posts = fallback_posts[:limit]
    
    posts = posts[:limit]
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'posts': posts}, ensure_ascii=False)
    }
