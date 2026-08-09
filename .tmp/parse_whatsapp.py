#!/usr/bin/env python3
import json
import re
from pathlib import Path

VOCAB_PATH = Path('/home/ubuntu/repos/Syrian020/data/vocab.js')
RAW_PATH = Path('/tmp/t_raw.txt')


def load_vocab_text(text):
    start = text.find('[')
    end = text.rfind(']') + 1
    if start == -1 or end == 0:
        raise ValueError('Could not parse VOCAB_DATA')
    return json.loads(text[start:end])


def save_vocab(path, entries):
    json_text = json.dumps(entries, ensure_ascii=False, indent=2)
    path.write_text('/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = {}\n'.format(json_text), encoding='utf-8')


def get_original_vocab():
    return load_vocab_text(VOCAB_PATH.read_text(encoding='utf-8'))


def infer_pos(fr, en):
    en = en or ''
    fr = fr.strip()
    lowered = fr.lower()
    # Full sentences / imperative phrases / interjections are phrases
    if re.search(r'[.?¿!]$', fr):
        return 'phrase'
    if re.search(r'\b(je|tu|il|elle|on|nous|vous|ils|elles|ça|ce|désolé)\b', lowered):
        return 'phrase'
    if re.search(r'\bne\s+\w+\s+pas\b', lowered):
        return 'phrase'
    if re.search(r'\b(que|quand|pourquoi|comment|où|qui|quoi)\b', lowered):
        return 'phrase'
    # Imperative-like phrase with hyphenated object pronoun
    if re.search(r'-(moi|toi|lui|nous|vous|leur|le|la|les|me|te|se|y|en)$', fr) and ' ' in fr:
        return 'phrase'
    if en.lower().startswith('to '):
        return 'verb'
    if re.match(r'^(a|an|the)\b', en, re.IGNORECASE):
        return 'noun'
    if en.lower() in {'online', 'seen', 'read', 'offline', 'no problem', 'okay', 'sounds good', 'call me back'}:
        return 'other'
    return 'noun'


def parse_triple(line):
    parts = [p.strip() for p in line.split('|')]
    return parts if len(parts) == 3 else None


def parse_raw(text):
    lines = text.splitlines()
    entries = []
    current_group = []
    # skip until first triple
    started = False
    for line in lines:
        triple = parse_triple(line)
        if triple:
            started = True
            current_group.append(triple)
        else:
            if started and current_group:
                entries.append(current_group)
                current_group = []
    if current_group:
        entries.append(current_group)
    return entries


def group_to_entry(group):
    fr, ar, en = group[0]
    pos = infer_pos(fr, en)
    examples = []
    for ex in group[1:] or [group[0]]:
        examples.append({'fr': ex[0], 'ar': ex[1], 'en': ex[2]})
    return {
        'fr': fr,
        'ar': ar,
        'en': en,
        'pos': pos,
        'level': 'A1',
        'contexts': ['whatsapp'],
        'ex': examples if len(examples) > 1 else examples[0],
    }


def normalize(fr):
    s = fr.lower().strip()
    s = re.sub(r"\s*\([^)]*\)", '', s)
    s = re.sub(r"^(se |s'|s’|se/)", '', s)
    s = re.sub(r"[\s'/’-]+", '', s)
    s = re.sub(r"[àâä]", 'a', s)
    s = re.sub(r"[éèêë]", 'e', s)
    s = re.sub(r"[îï]", 'i', s)
    s = re.sub(r"[ôö]", 'o', s)
    s = re.sub(r"[ùûü]", 'u', s)
    s = re.sub(r"[ç]", 'c', s)
    s = re.sub(r"[œ]", 'oe', s)
    s = re.sub(r"[æ]", 'ae', s)
    s = re.sub(r"[^a-z0-9]", '', s)
    return s


def unique_concat(old, new):
    parts = [p.strip() for p in (old + ' / ' + new).split('/') if p.strip()]
    seen = set()
    res = []
    for p in parts:
        if p.lower() not in seen:
            seen.add(p.lower())
            res.append(p)
    return ' / '.join(res)


def merge_entry(old, new):
    old['ar'] = unique_concat(old.get('ar', ''), new.get('ar', ''))
    old['en'] = unique_concat(old.get('en', ''), new.get('en', ''))
    old['contexts'] = sorted(set(old.get('contexts', [])) | set(new.get('contexts', [])))
    if old.get('level', 'A1') in ('A2', 'B1', 'B2'):
        pass
    else:
        old['level'] = new.get('level', old.get('level', 'A1'))

    def ex_to_list(ex):
        if not ex:
            return []
        if isinstance(ex, list):
            return ex
        return [ex]
    combined = ex_to_list(old.get('ex')) + ex_to_list(new.get('ex'))
    seen = set()
    dedup = []
    for ex in combined:
        key = json.dumps(ex, ensure_ascii=False, sort_keys=True)
        if key not in seen:
            seen.add(key)
            dedup.append(ex)
    if len(dedup) == 1:
        old['ex'] = dedup[0]
    elif len(dedup) > 1:
        old['ex'] = dedup
    else:
        old.pop('ex', None)
    return old


def main():
    raw = RAW_PATH.read_text(encoding='utf-8')
    groups = parse_raw(raw)
    new_entries = [group_to_entry(g) for g in groups]

    existing = get_original_vocab()
    by_key = {}
    merged_count = 0
    for e in existing:
        key = normalize(e['fr'])
        if not key:
            continue
        if key in by_key:
            by_key[key] = merge_entry(by_key[key], e)
            merged_count += 1
        else:
            by_key[key] = e

    added = 0
    for e in new_entries:
        key = normalize(e['fr'])
        if not key:
            continue
        if key in by_key:
            by_key[key] = merge_entry(by_key[key], e)
            merged_count += 1
        else:
            by_key[key] = e
            added += 1

    final = list(by_key.values())
    save_vocab(VOCAB_PATH, final)
    print(f'Added {added}, merged {merged_count}, total {len(final)}')
    print('WhatsApp entries:', sum(1 for d in final if 'whatsapp' in (d.get('contexts') or [])))


if __name__ == '__main__':
    main()
