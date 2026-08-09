#!/usr/bin/env python3
import json
import re
from pathlib import Path

VOCAB_PATH = Path('/home/ubuntu/repos/Syrian020/data/vocab.js')
RAW_PATHS = [Path('/tmp/t_raw.txt'), Path('/tmp/t_raw2.txt')]


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
    en_lower = en.lower().strip()
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
    # Infinitive verb or verb-phrase indicator
    if en_lower.startswith('to '):
        return 'verb'
    if en_lower in {'write', 'send', 'reply', 'forward', 'copy', 'delete', 'edit', 'mark', 'add', 'invite',
                    'leave', 'block', 'unblock', 'report', 'post', 'view', 'back up', 'restore', 'free up',
                    'use', 'link', 'scan', 'disappear', 'pin', 'unpin', 'create', 'vote', 'follow', 'unfollow',
                    'join', 'enable', 'disable', 'mute', 'turn on', 'turn off', 'search', 'call back',
                    'use less data'}:
        return 'verb'
    # Determiner / adjective-noun phrases
    if re.match(r"^(un|une|le|la|les|l'|des|du|de|ce|cette|ces|mon|ton|son|ma|ta|sa|mes|tes|ses|cet|nouveau|nouvelle|nouveaux|nouvelles|tout|toute|tous|toutes)\b", lowered):
        return 'noun'
    # Adjective-like single words
    if lowered in {'quotidien', 'quotidienne', 'hebdomadaire', 'mensuel', 'mensuelle', 'en ligne', 'hors ligne'}:
        return 'other'
    # If the French phrase starts with an infinitive verb and looks like an action, treat as verb
    first = re.split(r"[ '\-’]", lowered)[0]
    if re.search(r'(er|ir|re|oir)$', first) and first not in {'member', 'membre', 'nombre', 'timbre', 'cadre', 'ordre'}:
        return 'verb'
    if re.match(r'^(a|an|the)\b', en, re.IGNORECASE):
        return 'noun'
    if en_lower in {'online', 'seen', 'read', 'offline', 'no problem', 'okay', 'sounds good', 'call me back',
                    'maybe', 'later', 'not yet', 'as you want', 'go ahead', 'of course', 'with pleasure',
                    'good night', 'good day', 'good evening', 'good luck', 'hang in there'}:
        return 'other'
    return 'noun'


def parse_triple(line):
    parts = [p.strip() for p in line.split('|')]
    if len(parts) != 3:
        return None
    fr = parts[0]
    # Skip column header lines and non-French entries
    if not re.search(r'[A-Za-z\u00C0-\u024F]', fr):
        return None
    if fr.lower() in ('français', 'francais'):
        return None
    return parts


def is_example_sentence(fr):
    # A French example is usually a complete sentence ending with . ? ! …
    return bool(re.search(r'[.?!…]$', fr.strip()))


def split_blocks(text):
    """Split raw text into blocks separated by blank lines or non-triple headers."""
    blocks = []
    current = []
    for line in text.splitlines():
        triple = parse_triple(line)
        if triple:
            current.append(triple)
        else:
            if current:
                blocks.append(current)
                current = []
    if current:
        blocks.append(current)
    return blocks


def group_block(block):
    """Turn a block of triples into one or more (headword, examples) groups.

    If the block alternates headword/example, split it into pairs.
    Otherwise treat the first triple as the headword and the rest as examples.
    """
    if len(block) <= 2:
        return [block]
    # Detect alternating headword/example pattern: headword not ending in punctuation, example ending in punctuation
    pairs = []
    i = 0
    while i < len(block):
        if i + 1 < len(block) and not is_example_sentence(block[i][0]) and is_example_sentence(block[i+1][0]):
            pairs.append(block[i:i+2])
            i += 2
        else:
            # No clear alternation; consume remaining as one group
            pairs.append(block[i:])
            break
    return pairs


def parse_raw(text):
    groups = []
    for block in split_blocks(text):
        groups.extend(group_block(block))
    return groups


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
    new_entries = []
    for raw_path in RAW_PATHS:
        raw = raw_path.read_text(encoding='utf-8')
        groups = parse_raw(raw)
        new_entries.extend([group_to_entry(g) for g in groups])

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
