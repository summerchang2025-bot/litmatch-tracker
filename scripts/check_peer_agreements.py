#!/usr/bin/env python3
"""
同业协议日期检查脚本
检测 Bigo/MICO/TikTok/Likee/SUGO/TopTop 用户协议/隐私政策的 Last Updated 日期
如有变化，写入 data-supplement.js 的 agreementUpdates 字段
"""
import json
import re
from datetime import datetime
from pathlib import Path

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    import subprocess
    subprocess.check_call(['pip', 'install', 'requests', 'beautifulsoup4'])
    import requests
    from bs4 import BeautifulSoup

# 同业协议页面配置
PEER_AGREEMENTS = [
    {
        "name": "Bigo Live",
        "type": "privacy",
        "url": "https://www.bigo.tv/privacy",
        "selector": None,  # 用文本匹配
        "country": "global"
    },
    {
        "name": "Bigo Live",
        "type": "terms",
        "url": "https://www.bigo.tv/terms",
        "selector": None,
        "country": "global"
    },
    {
        "name": "MICO",
        "type": "privacy",
        "url": "https://www.micoworld.com/privacy",
        "selector": None,
        "country": "global"
    },
    {
        "name": "MICO",
        "type": "terms",
        "url": "https://www.micoworld.com/terms",
        "selector": None,
        "country": "global"
    },
    {
        "name": "TikTok",
        "type": "privacy",
        "url": "https://www.tiktok.com/legal/privacy-policy",
        "selector": None,
        "country": "global"
    },
    {
        "name": "TikTok",
        "type": "terms",
        "url": "https://www.tiktok.com/legal/terms-of-service",
        "selector": None,
        "country": "global"
    },
    {
        "name": "Likee",
        "type": "privacy",
        "url": "https://likee.video/privacy",
        "selector": None,
        "country": "global"
    },
    {
        "name": "Likee",
        "type": "terms",
        "url": "https://likee.video/terms",
        "selector": None,
        "country": "global"
    }
]

def load_supplement():
    """加载 data-supplement.js"""
    sup_path = Path(__file__).parent.parent / "data-supplement.js"
    if not sup_path.exists():
        return {"autoScraped": [], "agreementUpdates": []}
    text = sup_path.read_text(encoding='utf-8')
    try:
        json_str = text.split('=', 1)[-1].strip().rstrip(';')
        return json.loads(json_str)
    except:
        return {"autoScraped": [], "agreementUpdates": []}

def save_supplement(data):
    """保存到 data-supplement.js"""
    sup_path = Path(__file__).parent.parent / "data-supplement.js"
    content = "const SUPPLEMENT_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    content += "\nif (typeof module !== 'undefined' && module.exports) {\n"
    content += "  module.exports = SUPPLEMENT_DATA;\n"
    content += "}\n"
    sup_path.write_text(content, encoding='utf-8')

def extract_date(text):
    """从页面文本中提取日期"""
    # 匹配常见日期格式
    patterns = [
        r'Last Updated[\s:]+(\w+ \d{1,2},? \d{4})',
        r'Last Updated[\s:]+(\d{1,2}/\d{1,2}/\d{4})',
        r'Last Updated[\s:]+(\d{4}-\d{2}-\d{2})',
        r'Updated[\s:]+(\w+ \d{1,2},? \d{4})',
        r'Updated[\s:]+(\d{4}-\d{2}-\d{2})',
        r'Effective Date[\s:]+(\w+ \d{1,2},? \d{4})',
        r'Effective[\s:]+(\d{4}-\d{2}-\d{2})',
        r'(\d{4})年(\d{1,2})月(\d{1,2})日',
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            return match.group(1)
    return None

def check_agreement(peer):
    """检查单个协议页面"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        resp = requests.get(peer['url'], headers=headers, timeout=15)
        resp.raise_for_status()
        
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        # 移除 script/style
        for script in soup(['script', 'style']):
            script.decompose()
        
        text = soup.get_text(separator=' ', strip=True)
        date_str = extract_date(text)
        
        return {
            "name": peer['name'],
            "type": peer['type'],
            "url": peer['url'],
            "dateFound": date_str,
            "checkedAt": datetime.now().strftime('%Y-%m-%d'),
            "country": peer['country']
        }
    except Exception as e:
        return {
            "name": peer['name'],
            "type": peer['type'],
            "url": peer['url'],
            "dateFound": None,
            "error": str(e),
            "checkedAt": datetime.now().strftime('%Y-%m-%d'),
            "country": peer['country']
        }

def main():
    supplement = load_supplement()
    existing = supplement.get('agreementUpdates', [])
    
    # 构建已有记录字典
    existing_map = {}
    for item in existing:
        key = f"{item['name']}-{item['type']}"
        existing_map[key] = item
    
    today = datetime.now().strftime('%Y-%m-%d')
    new_updates = []
    
    for peer in PEER_AGREEMENTS:
        result = check_agreement(peer)
        key = f"{result['name']}-{result['type']}"
        
        old = existing_map.get(key)
        if old and old.get('dateFound') and result.get('dateFound'):
            if old['dateFound'] != result['dateFound']:
                print(f"🔔 UPDATE: {key} changed from {old['dateFound']} to {result['dateFound']}")
                result['changed'] = True
                result['previousDate'] = old['dateFound']
                new_updates.append(result)
            else:
                print(f"  OK: {key} = {result['dateFound']}")
        elif result.get('dateFound'):
            print(f"  NEW: {key} = {result['dateFound']}")
            new_updates.append(result)
        else:
            print(f"  FAIL: {key} - {result.get('error', 'no date found')}")
    
    if new_updates:
        supplement['agreementUpdates'] = existing + new_updates
        save_supplement(supplement)
        print(f"\nSaved {len(new_updates)} agreement updates")
    else:
        print("\nNo agreement updates found")
    
    return new_updates

if __name__ == '__main__':
    main()
