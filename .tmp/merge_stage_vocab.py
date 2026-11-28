#!/usr/bin/env python3
import json
import re
import unicodedata
from pathlib import Path

RAW_PATH = Path('/home/ubuntu/stage_vocab_raw.txt')
DATA_PATH = Path('/home/ubuntu/repos/Syrian020/data/vocab.js')
CTX = ['stage', 'work']

SECTION_HEADERS = {
    'سأكمل لك مجموعة ثانية من كلمات العمل والمطاعم والسوشي بنفس الطريقة.',
    'سأجعلها بهذا الشكل: الكلمة المهمة من العبارة + ترجمتها إنجليزي + العبارة كاملة + ترجمتها عربي وإنجليزي',
    'سأكمل لك باقي عبارات الاتصال مع France Travail بنفس الطريقة.'
}

def normalize(s):
    s = s.lower().strip()
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'\s*\([^)]*\)', '', s)
    s = re.sub(r"^(se |s'|s’|se\/|le |la |les |un |une |l'|l’|des )", '', s, flags=re.I)
    s = re.sub(r"['’]", '', s)
    s = re.sub(r'[^\w\s]', ' ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def strip_articles(s):
    return re.sub(r"^(le |la |les |un |une |l'|l’|des )", '', s, flags=re.I).strip()

def is_reflexive(head):
    return bool(re.match(r"^(se |s'|s’)", head, re.I))

def infer_pos(head, en):
    en0 = (en or '').strip().lower()
    h = strip_articles(head)
    # adverb marker
    if h.lower() in ('actuellement',):
        return 'other'
    if en0.startswith('to be '):
        return 'phrase'
    if en0.startswith('to '):
        if ' ' in h:
            if is_reflexive(head):
                return 'verb'
            return 'phrase'
        return 'verb'
    # otherwise: noun if it has an article or is a multi-word noun phrase
    if re.match(r"^(le |la |les |un |une |l'|l’|des )", head, re.I):
        return 'noun'
    if ' ' in h and not is_reflexive(head):
        # e.g. "Immersion professionnelle", "Projet professionnel"
        return 'noun'
    # fallback
    return 'noun'

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

def is_key_line(line):
    return bool(re.match(r'^(العربية:|English:|Ex fr:|Ex ar:|Ex en:|Phrase:)$', line))

def is_arabic_line(line):
    return bool(re.match(r'^[\u0600-\u06FF]', line))

def parse_raw(path):
    text = path.read_text(encoding='utf-8')
    lines = text.splitlines()
    entries = []
    current = None
    in_phrase = False
    phrase_fr_parts = []
    phrase_ar_set = False
    phrase_en_set = False
    i = 0
    def flush_entry():
        nonlocal current, in_phrase, phrase_fr_parts
        if current and current.get('ar') and current.get('en'):
            if in_phrase and 'phrase_fr' not in current and phrase_fr_parts:
                current['phrase_fr'] = ' '.join(phrase_fr_parts)
            entries.append(current)
        current = None
        in_phrase = False
        phrase_fr_parts = []
    while i < len(lines):
        raw = lines[i]
        line = raw.strip()
        i += 1
        if not line:
            continue
        # separator
        if re.match(r'^---+\s*$', line):
            flush_entry()
            continue
        # standalone number line -> new entry starts next
        if re.match(r'^\d+$', line):
            flush_entry()
            continue
        # skip section headers (Arabic-only explanation lines or known phrases)
        if line in SECTION_HEADERS or (is_arabic_line(line) and not line.startswith('العربية:')):
            flush_entry()
            continue
        # key lines
        if line.startswith('Ex fr:'):
            if current is None:
                current = {}
            current['ex_fr'] = line[6:].strip()
            continue
        if line.startswith('Ex ar:'):
            if current is None:
                current = {}
            current['ex_ar'] = line[6:].strip()
            continue
        if line.startswith('Ex en:'):
            if current is None:
                current = {}
            current['ex_en'] = line[6:].strip()
            continue
        if line == 'Phrase:':
            if current is None:
                current = {}
            in_phrase = True
            phrase_fr_parts = []
            phrase_ar_set = False
            phrase_en_set = False
            continue
        if line.startswith('العربية:'):
            val = line[8:].strip()
            if current is None:
                current = {}
            if in_phrase:
                if 'phrase_fr' not in current and phrase_fr_parts:
                    current['phrase_fr'] = ' '.join(phrase_fr_parts)
                if not phrase_ar_set:
                    current['phrase_ar'] = val
                    phrase_ar_set = True
                else:
                    current['phrase_ar'] = unique_concat(current.get('phrase_ar',''), val)
            else:
                current['ar'] = unique_concat(current.get('ar',''), val)
            continue
        if line.startswith('English:'):
            val = line[8:].strip()
            if current is None:
                current = {}
            if in_phrase:
                if 'phrase_fr' not in current and phrase_fr_parts:
                    current['phrase_fr'] = ' '.join(phrase_fr_parts)
                if not phrase_en_set:
                    current['phrase_en'] = val
                    phrase_en_set = True
                    in_phrase = False
                else:
                    current['phrase_en'] = unique_concat(current.get('phrase_en',''), val)
            else:
                current['en'] = unique_concat(current.get('en',''), val)
            continue
        # not a key: could be phrase French continuation or a new headword
        if in_phrase and not phrase_ar_set:
            phrase_fr_parts.append(line)
            continue
        # otherwise new headword
        flush_entry()
        current = {'fr': line}
    flush_entry()
    # build final entries
    final = []
    for c in entries:
        fr = c.get('fr')
        ar = c.get('ar')
        en = c.get('en')
        if not fr or not ar or not en:
            continue
        ex = None
        if c.get('phrase_fr') or c.get('phrase_ar') or c.get('phrase_en'):
            ex = {
                'fr': ' '.join(c.get('phrase_fr', [])) if isinstance(c.get('phrase_fr'), list) else c.get('phrase_fr', ''),
                'ar': c.get('phrase_ar', ar),
                'en': c.get('phrase_en', en)
            }
        elif c.get('ex_fr') and c.get('ex_ar') and c.get('ex_en'):
            ex = {'fr': c['ex_fr'], 'ar': c['ex_ar'], 'en': c['ex_en']}
        final.append({
            'fr': fr,
            'ar': ar,
            'en': en,
            'level': 'A1',
            'pos': infer_pos(fr, en),
            'contexts': CTX[:],
            'ex': ex,
        })
    return final

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

def merge_entries(existing, new):
    existing['ar'] = unique_concat(existing.get('ar',''), new.get('ar',''))
    existing['en'] = unique_concat(existing.get('en',''), new.get('en',''))
    existing['ex'] = merge_examples(existing.get('ex'), new.get('ex'))
    existing['contexts'] = list(dict.fromkeys(existing.get('contexts', []) + new.get('contexts', [])))
    # keep longer/more specific French headword
    if len(new.get('fr','')) > len(existing.get('fr','')):
        existing['fr'] = new['fr']
    # prefer noun/phrase pos over other when ambiguous
    if new.get('pos') == 'noun' and existing.get('pos') not in ('verb','phrase'):
        existing['pos'] = 'noun'

def dedup_new_entries(new_entries):
    by_key = {}
    for e in new_entries:
        k = normalize(e['fr'])
        if k in by_key:
            merge_entries(by_key[k], e)
        else:
            by_key[k] = e.copy()
    return list(by_key.values())

def main():
    new_entries = parse_raw(RAW_PATH)
    from collections import Counter
    print(f'Parsed {len(new_entries)} entries')
    print('POS distribution:', dict(Counter(e['pos'] for e in new_entries)))
    new_entries = dedup_new_entries(new_entries)
    print(f'Deduped to {len(new_entries)} entries')
    existing = load_vocab(DATA_PATH)
    by_key = {normalize(e['fr']): e for e in existing}
    added = 0
    merged = 0
    for e in new_entries:
        k = normalize(e['fr'])
        if k in by_key:
            merge_entries(by_key[k], e)
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
