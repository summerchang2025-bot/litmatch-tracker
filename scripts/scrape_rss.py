#!/usr/bin/env python3
"""
RSS 抓取脚本 - 自动抓取结构化新闻源
产出写入 data-supplement.js 的 autoScraped 字段
"""
import feedparser
import json
import re
import hashlib
from datetime import datetime
from pathlib import Path

# RSS 源配置
RSS_SOURCES = [
    {
        "name": "财联社",
        "url": "https://www.cls.cn/telegraph",
        "country": "global",
        "category": "policy"
    },
    {
        "name": "白鲸出海",
        "url": "https://www.baijing.cn/feed",
        "country": "global",
        "category": "industry"
    },
    {
        "name": "竞天公诚",
        "url": "https://www.jingtian.com/feed",
        "country": "global",
        "category": "legal"
    }
]

def load_existing_ids():
    """从 data.js 提取已有条目的 id，避免重复"""
    data_path = Path(__file__).parent.parent / "data.js"
    ids = set()
    if not data_path.exists():
        return ids
    text = data_path.read_text(encoding='utf-8')
    # 提取所有 id: "xx-xx" 格式
    for match in re.finditer(r'id:\s*"([^"]+)"', text):
        ids.add(match.group(1))
    return ids

def load_supplement():
    """加载现有的 data-supplement.js"""
    sup_path = Path(__file__).parent.parent / "data-supplement.js"
    if not sup_path.exists():
        return {"autoScraped": []}
    text = sup_path.read_text(encoding='utf-8')
    # 尝试提取 JSON 部分
    try:
        # 去掉 JS 包装，提取 JSON
        json_str = text.split('=', 1)[-1].strip().rstrip(';')
        return json.loads(json_str)
    except:
        return {"autoScraped": []}

def save_supplement(data):
    """保存到 data-supplement.js"""
    sup_path = Path(__file__).parent.parent / "data-supplement.js"
    content = "const SUPPLEMENT_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    if 'module' in str(sup_path.read_text(encoding='utf-8') if sup_path.exists() else ''):
        content += "\nif (typeof module !== 'undefined' && module.exports) {\n"
        content += "  module.exports = SUPPLEMENT_DATA;\n"
        content += "}\n"
    sup_path.write_text(content, encoding='utf-8')

def generate_id(title, date):
    """生成唯一 id"""
    base = f"{date}-{title[:30]}"
    return hashlib.md5(base.encode()).hexdigest()[:8]

def classify_country(title, summary):
    """根据标题和内容推测国家"""
    text = (title + " " + summary).lower()
    country_map = {
        'vietnam': 'vietnam', 'vn': 'vietnam', '越南': 'vietnam',
        'philippines': 'philippines', 'ph': 'philippines', '菲律宾': 'philippines',
        'indonesia': 'indonesia', 'id': 'indonesia', '印尼': 'indonesia',
        'thailand': 'thailand', 'th': 'thailand', '泰国': 'thailand',
        'malaysia': 'malaysia', 'my': 'malaysia', '马来': 'malaysia',
        'singapore': 'singapore', 'sg': 'singapore', '新加坡': 'singapore',
        'hong kong': 'hong-kong', 'hk': 'hong-kong', '香港': 'hong-kong',
        'india': 'india', 'in': 'india', '印度': 'india',
        'turkey': 'turkey', 'tr': 'turkey', '土耳其': 'turkey',
        'uae': 'uae', 'emirates': 'uae', '迪拜': 'uae', '阿联酋': 'uae',
        'egypt': 'egypt', 'eg': 'egypt', '埃及': 'egypt',
        'saudi': 'saudi-arabia', 'sa': 'saudi-arabia', '沙特': 'saudi-arabia',
        'brazil': 'brazil', 'br': 'brazil', '巴西': 'brazil'
    }
    for key, country in country_map.items():
        if key in text:
            return country
    return 'global'

def classify_type(title, summary):
    """根据标题推测条目类型"""
    text = (title + " " + summary).lower()
    if any(w in text for w in ['ban', 'blocked', '下架', '封禁', '禁止', 'block', 'removed']):
        return 'enforcement'
    if any(w in text for w in ['fine', '罚款', '处罚', 'penalty', '罚']):
        return 'enforcement'
    if any(w in text for w in ['law', 'act', 'decree', '法令', '法案', 'regulation', '条例', '规则']):
        return 'regulation'
    if any(w in text for w in ['policy', 'guideline', '政策', '指引', '指南', '框架']):
        return 'policy'
    return 'policy'

def scrape_rss():
    """主抓取函数"""
    existing_ids = load_existing_ids()
    supplement = load_supplement()
    existing_auto_ids = {item['id'] for item in supplement.get('autoScraped', [])}
    
    new_items = []
    today = datetime.now().strftime('%Y-%m-%d')
    
    for source in RSS_SOURCES:
        try:
            feed = feedparser.parse(source['url'])
            for entry in feed.entries[:10]:  # 每个源取最新10条
                title = entry.get('title', '')
                link = entry.get('link', '')
                published = entry.get('published', entry.get('updated', today))
                summary = entry.get('summary', entry.get('description', ''))[:200]
                
                # 生成 id
                item_id = f"auto-{generate_id(title, published)}"
                if item_id in existing_ids or item_id in existing_auto_ids:
                    continue
                
                # 提取日期
                date_match = re.search(r'(\d{4})[-/](\d{2})[-/](\d{2})', published)
                if date_match:
                    date = f"{date_match.group(1)}-{date_match.group(2)}-{date_match.group(3)}"
                else:
                    date = today
                
                country = classify_country(title, summary)
                item_type = classify_type(title, summary)
                
                item = {
                    "id": item_id,
                    "type": item_type,
                    "date": date,
                    "title": title,
                    "description": summary[:300],
                    "source": source['name'],
                    "url": link,
                    "tags": [source['category'], "auto-scraped"],
                    "verified": False,  # 自动抓取的需要人工审核
                    "country": country,
                    "scrapedAt": today
                }
                new_items.append(item)
                
        except Exception as e:
            print(f"Error parsing {source['name']}: {e}")
    
    if new_items:
        supplement.setdefault('autoScraped', []).extend(new_items)
        save_supplement(supplement)
        print(f"Added {len(new_items)} new auto-scraped items")
    else:
        print("No new items found")
    
    return new_items

if __name__ == '__main__':
    scrape_rss()
