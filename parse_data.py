import json
import re
from collections import defaultdict

def parse_tracker_data(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到 var TRACKER_DATA = [ 开始位置
    start = content.find('var TRACKER_DATA = [')
    if start == -1:
        start = content.find('const TRACKER_DATA = [')
    
    # 找到最后的 ]; 结束位置（在导出注释之前）
    end_marker = '];\n\n// 导出'
    end = content.find(end_marker, start)
    
    if start == -1 or end == -1:
        raise ValueError("Could not find TRACKER_DATA markers")
    
    data_str = content[start:end+2]  # +2 to include "];"
    
    # 去掉 var/const TRACKER_DATA = 
    data_str = re.sub(r'^(var|const)\s+TRACKER_DATA\s*=\s*', '', data_str.strip())
    
    # 去掉所有注释行（以 // 开头的行）
    lines = []
    for line in data_str.split('\n'):
        stripped = line.strip()
        if stripped.startswith('//'):
            continue
        # 去掉行内注释（但保留字符串中的 //）
        # 简单处理：找到不在引号内的 //
        result_line = ''
        in_string = False
        string_char = None
        i = 0
        while i < len(line):
            char = line[i]
            if not in_string and char in '"\'':
                in_string = True
                string_char = char
                result_line += char
            elif in_string and char == string_char:
                # 检查是否是转义
                if i > 0 and line[i-1] != '\\':
                    in_string = False
                    string_char = None
                result_line += char
            elif not in_string and char == '/' and i+1 < len(line) and line[i+1] == '/':
                # 注释开始，忽略后续
                break
            else:
                result_line += char
            i += 1
        lines.append(result_line)
    
    clean_str = '\n'.join(lines)
    clean_str = clean_str.strip()
    
    # 解析 JSON
    data = json.loads(clean_str)
    return data

if __name__ == '__main__':
    data = parse_tracker_data('data.js')
    print(f'Total records: {len(data)}')
    
    countries = defaultdict(list)
    categories = defaultdict(list)
    
    for item in data:
        countries[item['country']].append(item)
        categories[item['category']].append(item)
    
    print('\n--- By Country ---')
    for country, items in sorted(countries.items()):
        print(f'{country}: {len(items)}条')
    
    print('\n--- By Category ---')
    for cat, items in sorted(categories.items()):
        print(f'{cat}: {len(items)}条')
