#!/usr/bin/env python3
import json
import re
import unicodedata
from pathlib import Path

RAW_PATH = Path('/home/ubuntu/caf_verbs_raw.txt')
DATA_PATH = Path('/home/ubuntu/repos/Syrian020/data/vocab.js')

def normalize(s):
    s = s.lower().strip()
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'\s*\([^)]*\)', '', s)
    s = re.sub(r"^(se |s'|s’|y |en |se\/)", '', s)
    s = re.sub(r"['’]", '', s)
    s = re.sub(r'[^\w\s]', ' ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def unique_concat(old, new, sep=' / '):
    if not old:
        return new
    if not new:
        return old
    parts = [p.strip() for p in re.split(r'\s*/\s*', old) if p.strip()]
    for p in re.split(r'\s*/\s*', new):
        p = p.strip()
        if p and p not in parts:
            parts.append(p)
    return sep.join(parts)

def parse_raw(path):
    lines = path.read_text(encoding='utf-8').splitlines()
    entries = []
    current = None
    for raw_line in lines:
        line = raw_line.strip()
        if not line or line == '---':
            continue
        m = re.match(r'^\d+\.\s+(.+)$', line)
        if m and not line.startswith('·'):
            # finalize previous
            if current and 'ar' in current and 'en' in current:
                entries.append(build_entry(current))
            current = {'fr': m.group(1).strip()}
            continue
        m = re.match(r'^·\s*(ar|en|ex fr|ex ar|ex en):\s*(.*)$', line)
        if m and current:
            k, v = m.group(1), m.group(2).strip()
            current[k] = v
    if current and 'ar' in current and 'en' in current:
        entries.append(build_entry(current))
    return entries

def build_entry(fields):
    ex = None
    if 'ex fr' in fields and 'ex ar' in fields and 'ex en' in fields:
        ex = {'fr': fields['ex fr'], 'ar': fields['ex ar'], 'en': fields['ex en']}
    return {
        'fr': fields['fr'],
        'ar': fields['ar'],
        'en': fields['en'],
        'level': 'A1',
        'pos': 'verb',
        'contexts': ['caf'],
        'ex': ex,
    }

def load_vocab(path):
    text = path.read_text(encoding='utf-8')
    m = re.search(r'window\.VOCAB_DATA\s*=\s*(\[.*?\])\s*$', text, re.DOTALL)
    if not m:
        raise ValueError('Could not parse VOCAB_DATA')
    return json.loads(m.group(1))

def save_vocab(path, entries):
    json_text = json.dumps(entries, ensure_ascii=False, indent=2)
    path.write_text('window.VOCAB_DATA = {}\n'.format(json_text), encoding='utf-8')

def merge_examples(existing_ex, new_ex):
    if not new_ex:
        return existing_ex
    if not existing_ex:
        return new_ex
    if isinstance(existing_ex, dict):
        existing_ex = [existing_ex]
    new_list = existing_ex[:]
    candidates = [new_ex] if isinstance(new_ex, dict) else new_ex
    for cand in candidates:
        if not any(n.get('fr') == cand.get('fr') for n in new_list):
            new_list.append(cand)
    return new_list

def dedup_new_entries(new_entries):
    by_key = {}
    for e in new_entries:
        k = normalize(e['fr'])
        if k in by_key:
            existing = by_key[k]
            existing['ar'] = unique_concat(existing['ar'], e['ar'])
            existing['en'] = unique_concat(existing['en'], e['en'])
            existing['ex'] = merge_examples(existing['ex'], e['ex'])
        else:
            by_key[k] = e.copy()
    return list(by_key.values())

def main():
    new_entries = parse_raw(RAW_PATH)
    print(f'Parsed {len(new_entries)} verb entries from raw')
    new_entries = dedup_new_entries(new_entries)
    print(f'Deduped new batch to {len(new_entries)} entries')
    existing = load_vocab(DATA_PATH)
    by_key = {normalize(e['fr']): e for e in existing}
    added = 0
    merged = 0
    for e in new_entries:
        k = normalize(e['fr'])
        if k in by_key:
            ex = by_key[k]
            if 'caf' not in ex.get('contexts', []):
                ex['contexts'].append('caf')
            ex['ex'] = merge_examples(ex.get('ex'), e['ex'])
            ex['ar'] = unique_concat(ex.get('ar', ''), e['ar'])
            ex['en'] = unique_concat(ex.get('en', ''), e['en'])
            merged += 1
        else:
            existing.append(e)
            by_key[k] = e
            added += 1
    for e in existing:
        if 'contexts' in e:
            e['contexts'] = list(dict.fromkeys(e['contexts']))
    save_vocab(DATA_PATH, existing)
    print(f'Added {added}, merged {merged}. Total {len(existing)}')

if __name__ == '__main__':
    main()
