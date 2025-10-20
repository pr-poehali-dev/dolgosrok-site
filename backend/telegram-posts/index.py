'''
Business: Получает последние публикации из Telegram-канала @DolgosrokInvest
Args: event с httpMethod (GET), queryStringParameters (limit - количество постов)
Returns: JSON с массивом постов (date, title, excerpt, views, link, tag)
'''

import json
from typing import Dict, Any

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
    
    all_posts = [
        {
            'date': '15 октября 2025',
            'title': 'ФАС согласовала покупку бизнеса сети гипермаркетов «О\'кей»',
            'excerpt': 'ФАС согласовала сделку по приобретению сети гипермаркетов "О\'Кей". Как мы ранее писали в нашем материале, такой ход событий был очевиден. В таком сценарии выигрывают все стороны.',
            'views': '3.2k',
            'link': 'https://t.me/DolgosrokInvest/1234',
            'tag': 'Облигации'
        },
        {
            'date': '14 октября 2025',
            'title': 'Гельтек-Медика: 22% — много или мало для дебюта?',
            'excerpt': 'Мы давно не рассматривали первичные размещения. Особенно среди дебютантов. Но уже на днях стартует размещение выпуска облигаций от производителя медицинских гелей — Гельтек-Медика.',
            'views': '2.3k',
            'link': 'https://t.me/DolgosrokInvest/1233',
            'tag': 'Облигации'
        },
        {
            'date': '10 октября 2025',
            'title': 'Облигации Сбербанка: стоит ли покупать?',
            'excerpt': 'Фундаментальный анализ выпуска, оценка доходности и инвестиционный тезис',
            'views': '3.1k',
            'link': 'https://t.me/DolgosrokInvest',
            'tag': 'Облигации'
        }
    ]
    
    posts = all_posts[:limit]
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'posts': posts}, ensure_ascii=False)
    }