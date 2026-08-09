#!/usr/bin/env python3
import json, re
from pathlib import Path

RAW_PATH = Path('/tmp/t_raw.txt')
REPO_DIR = Path('/home/ubuntu/repos/Syrian020')
VOCAB_PATH = REPO_DIR / 'data' / 'vocab.js'
OUT_PATH = Path('/tmp/t_parsed.json')


def normalize(fr):
    s = fr.lower().strip()
    s = re.sub(r"\s*\([^)]*\)", '', s)
    s = re.sub(r"^(se |s'|s’|se/)", '', s)
    s = re.sub(r"['’]", '', s)
    s = re.sub(r'[^\w\s/]', ' ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s


# Override part of speech for headwords that are not verbs
HEAD_POS = {
    'toujours': 'other', 'très': 'other', 'tôt': 'other', 'tard': 'other', 'tout': 'other',
    'trop': 'other', 'tant': 'other', 'tellement': 'other', 'totalement': 'other', 'tranquillement': 'other',
    'tranquille': 'adjective', 'triste': 'adjective', 'total': 'adjective',
    'toute': 'adjective', 'tel': 'adjective', 'tarifaire': 'adjective',
    'traditionnel': 'adjective', 'théorique': 'adjective', 'temporaire': 'adjective', 'typique': 'adjective',
    'tardif': 'adjective', 'théâtral': 'adjective', 'titulaire': 'adjective',
}

def infer_pos(headword, en):
    key = headword.lower().strip()
    if key in HEAD_POS:
        return HEAD_POS[key]
    if en and re.match(r'^to\b', en, re.IGNORECASE):
        return 'verb'
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


def keyword_in_text(kw, text):
    try:
        return re.search(r'\b' + re.escape(kw) + r'\b', text, re.IGNORECASE) is not None
    except re.error:
        return kw in text


VERB_CONTEXTS = {
    'travailler': ['work'],
    'trouver': ['daily'],
    'téléphoner': ['phone', 'services'],
    'terminer': ['work'],
    'tenir': ['daily'],
    'tourner': ['transport', 'car'],
    'traverser': ['transport', 'car'],
    'tirer': ['daily'],
    'tomber': ['daily'],
    'tenter': ['daily'],
    'traduire': ['daily'],
    'traiter': ['services', 'work'],
    'transmettre': ['services', 'work'],
}


def infer_contexts(fr, en, ar, examples, pos):
    text = ' '.join([fr or '', en or '', ar or ''] + [v for ex in examples for v in ex.values()])
    text = text.lower()
    contexts = set(VERB_CONTEXTS.get(normalize(fr), ['daily']))
    mapping = [
        ('caf', ['caf']),
        ('france travail', ['france_travail']),
        ('travail', ['work']),
        ('travailler', ['work']),
        ('télétravail', ['work']),
        ('télétravailler', ['work']),
        ('emploi', ['work']),
        ('téléphone', ['phone']),
        ('téléphoner', ['phone']),
        ('appel', ['phone']),
        ('restaurant', ['restaurant']),
        ('commande', ['restaurant']),
        ('plat', ['restaurant']),
        ('voiture', ['car']),
        ('conduire', ['car']),
        ('route', ['car', 'transport']),
        ('passage piéton', ['transport']),
        ('rond-point', ['transport']),
        ('métro', ['transport']),
        ('train', ['transport']),
        ('taxi', ['transport']),
        ('ticket', ['transport']),
        ('trottoir', ['transport']),
        ('trajet', ['transport']),
        ('tarif', ['transport', 'shopping']),
        ('timbre', ['post']),
        ('dossier', ['services']),
        ('demande', ['services']),
        ('document', ['services']),
        ('formulaire', ['services']),
        ('justificatif', ['services']),
        ('tamponner', ['services']),
        ('taxe', ['services']),
        ('logement', ['housing']),
        ('appartement', ['housing']),
        ('clés', ['housing']),
        ('tapis', ['housing']),
        ('tiroir', ['housing']),
        ('toit', ['housing']),
        ('toilette', ['housing', 'daily']),
        ('terrain', ['housing']),
        ('trappe', ['housing']),
        ('tuyau', ['housing']),
        ('télévision', ['daily', 'housing']),
        ('température', ['health', 'weather']),
        ('temps', ['daily', 'weather']),
        ('tête', ['health']),
        ('taille', ['shopping']),
        ('tissu', ['shopping']),
        ('tasse', ['restaurant', 'food']),
        ('thé', ['restaurant', 'food']),
        ('table', ['restaurant', 'housing']),
        ('tante', ['family']),
        ('trousse', ['school']),
        ('tableau', ['school', 'work']),
        ('trimestre', ['school']),
        ('tâche', ['work']),
        ('tournée', ['work']),
        ('toujours', ['daily']),
        ('tard', ['daily', 'work']),
        ('tôt', ['daily', 'work']),
        ('très', ['daily']),
        ('tout', ['daily']),
        ('toute', ['daily']),
        ('tel', ['daily']),
        ('tranquille', ['daily']),
        ('triste', ['daily']),
        ('total', ['daily']),
        ('tache', ['daily']),
        ('ton', ['daily']),
        ('tour', ['daily']),
        ('trace', ['daily']),
        ('truc', ['daily']),
        ('bouteille', ['daily']),
        ('transpirer', ['health', 'daily']),
        ('tourmenter', ['health', 'daily']),
        ('tousser', ['health', 'daily']),
        ('trésor', ['daily']),
        ('tristesse', ['daily']),
        ('tentative', ['daily', 'work']),
        ('témoignage', ['services']),
        ('témoins', ['services']),
        ('télécommande', ['daily', 'housing']),
        ('tente', ['daily']),
        ('tonneau', ['daily']),
        ('tâtonnement', ['daily', 'work']),
        ('talent', ['daily', 'work']),
        ('tension', ['health', 'daily']),
        ('tendance', ['daily']),
        ('tarifaire', ['services', 'shopping']),
        ('tempête', ['weather']),
        ('terrasse', ['restaurant', 'housing']),
        ('théière', ['restaurant', 'food']),
        ('trotinette', ['transport']),
        ('texte', ['school', 'work', 'daily']),
        ('titre', ['daily', 'work']),
        ('tomate', ['food', 'restaurant', 'shopping']),
        ('tartine', ['food', 'restaurant']),
        ('théorie', ['school', 'work']),
        ('théâtre', ['daily']),
        ('thème', ['school', 'work']),
        ('tradition', ['daily', 'family']),
        ('tribunal', ['services', 'prefecture']),
        ('tunnel', ['transport']),
        ('téléchargement', ['daily', 'work']),
        ('traduction', ['daily', 'work', 'services']),
        ('trafic', ['transport']),
        ('tournage', ['work']),
        ('tournant', ['daily']),
        ('trop', ['daily']),
        ('tant', ['daily']),
        ('tellement', ['daily']),
        ('touriste', ['daily']),
        ('tramway', ['transport']),
        ('thérapie', ['health']),
        ('traditionnel', ['food', 'restaurant', 'daily']),
        ('technique', ['school', 'work']),
        ('théorique', ['school']),
        ('temporaire', ['work', 'housing']),
        ('totalement', ['daily']),
        ('tranquillement', ['daily']),
        ('typique', ['daily', 'restaurant', 'food']),
        ('timbale', ['restaurant', 'food']),
        ('tolérance', ['daily', 'health']),
        ('tonnerre', ['weather']),
        ('tournis', ['health']),
        ('tousser', ['health', 'daily']),
        ('tablier', ['daily', 'food']),
        ('thermomètre', ['health', 'weather']),
        ('tondeuse', ['housing', 'daily']),
        ('toiture', ['housing']),
        ('tuile', ['housing']),
        ('tabac', ['daily', 'services']),
        ('toilettage', ['daily', 'services']),
        ('tonne', ['daily', 'transport']),
        ('tonalité', ['daily']),
        ('tact', ['daily', 'work']),
        ('taie', ['housing', 'daily']),
        ('tampon', ['services', 'health', 'daily']),
        ('tapisserie', ['housing', 'daily']),
        ('tabouret', ['housing', 'restaurant']),
        ('teinture', ['shopping', 'daily']),
        ('temporisation', ['daily', 'work']),
        ('terminal', ['transport']),
        ('terrassement', ['work']),
        ('tuyauterie', ['housing']),
        ('tardif', ['daily', 'work']),
        ('taux', ['bank', 'services']),
        ('taxer', ['services']),
        ('terme', ['work', 'school', 'health']),
        ('tirage', ['daily', 'work']),
        ('transmission', ['car', 'transport', 'services']),
        ('tentation', ['daily']),
        ('théâtral', ['daily']),
        ('titulaire', ['services', 'bank']),
        ('trancheur', ['restaurant', 'food']),
        ('trésorier', ['work', 'bank']),
        ('tutelle', ['services', 'prefecture']),
        ('tranquillité', ['daily', 'health']),
        ('trahison', ['daily']),
        ('traumatisme', ['health']),
        ('traversée', ['transport']),
    ]
    for kw, ctxs in mapping:
        if keyword_in_text(kw, text):
            contexts.update(ctxs)
    return sorted(contexts)


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


def parse_blocks(text):
    # Split by 🇫🇷 lines
    pattern = re.compile(r'^🇫🇷\s*(.+)$', re.MULTILINE)
    matches = list(pattern.finditer(text))
    blocks = []
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i+1].start() if i + 1 < len(matches) else len(text)
        headword = m.group(1).strip()
        body = text[start:end]
        blocks.append((headword, body))
    return blocks


def parse_verb_block(headword, body):
    lines = body.splitlines()
    # find Arabic and English definitions after the headword
    ar = None
    en = None
    idx = 0
    # skip empty and junk until first non-empty
    while idx < len(lines) and not lines[idx].strip():
        idx += 1
    if idx < len(lines):
        ar = lines[idx].strip()
        idx += 1
    while idx < len(lines) and not lines[idx].strip():
        idx += 1
    if idx < len(lines):
        en = lines[idx].strip()
        idx += 1

    examples = []
    current = {}
    while idx < len(lines):
        line = lines[idx].strip()
        idx += 1
        if not line:
            # commit current example if complete
            if current and 'fr' in current:
                examples.append(current)
                current = {}
            continue
        m = re.match(r'^\s*(?:\d+\.)\s*(.+)$', line)
        is_latin = re.search(r'[A-Za-z\u00C0-\u024F]', line) and not re.search(r'[\u0600-\u06FF]', line)
        # New example starts with a numbered line, or when we see a new French/Latin
        # line after the previous example is complete (has en), or when there is no current.
        is_new_example = bool(m) or (is_latin and (not current or 'en' in current))
        if is_new_example:
            if current and 'fr' in current:
                examples.append(current)
            fr_text = m.group(1).strip() if m else line
            current = {'fr': fr_text}
            continue
        if current:
            if 'ar' not in current and re.search(r'[\u0600-\u06FF]', line):
                current['ar'] = line
            elif 'en' not in current and re.search(r'[A-Za-z]', line):
                current['en'] = line
            # ignore extra lines once ar and en are both filled; next Latin starts a new example
    if current and 'fr' in current:
        examples.append(current)

    # clean examples: require ar and en
    examples = [ex for ex in examples if 'fr' in ex and 'ar' in ex and 'en' in ex]
    return {
        'fr': headword,
        'ar': ar or '',
        'en': en or '',
        'pos': infer_pos(headword, en or ''),
        'level': 'A1',
        'contexts': infer_contexts(headword, en, ar, examples, infer_pos(headword, en or '')),
        'ex': examples if len(examples) > 1 else (examples[0] if examples else {'fr': headword, 'ar': ar or '', 'en': en or ''}),
    }


def main():
    raw = RAW_PATH.read_text(encoding='utf-8')
    blocks = parse_blocks(raw)
    entries = []
    for headword, body in blocks:
        entry = parse_verb_block(headword, body)
        if entry['ar'] and entry['en']:
            entries.append(entry)

    print(f'Parsed {len(entries)} new T verbs')

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
    for e in entries:
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
    t_count = sum(1 for d in final if d['fr'] and d['fr'][0].lower() == 't')
    print(f'T entries: {t_count}')
    OUT_PATH.write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding='utf-8')


if __name__ == '__main__':
    main()
