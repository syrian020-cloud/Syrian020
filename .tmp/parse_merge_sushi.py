#!/usr/bin/env python3
import json
import re
import unicodedata
from pathlib import Path
from collections import Counter

RAW_PATH = Path('/home/ubuntu/sushi_raw.txt')
DATA_PATH = Path('/home/ubuntu/repos/Syrian020/data/vocab.js')
CTX = ['sushi']

SECTION_HEADERS = {
    'سأكمل بعدها: أدوات السوشي، أفعال العمل في المطبخ، أوامر المدير، عبارات الزبائن، وقواعد النظافة بنفس الطريقة.',
    'سأكمل بعد ذلك بـ أفعال العمل اليومية في مطبخ السوشي (مثل: حضّر، نظّف، خزّن، افحص، اطلب، نقص، زبون، مدير...) بنفس الأسلوب.',
    'سأكمل لاحقًا بـ عبارات وأوامر المدير في مطبخ السوشي مثل:',
    '"أسرع"، "حضّر الطلب"، "نقصنا سلمون"، "نظف الطاولة"، "انتبه للزبون"... بنفس الطريقة',
    'سأكمل بعدها بـ عبارات الزبائن في مطعم السوشي + استقبال الطلبات + الدفع والتوصيل بنفس الطريقة.',
    'سأكمل بعد ذلك بـ عبارات التواصل بين العاملين في مطبخ السوشي (بين الشيف والعمال): مثل "الطلب جاهز"، "نحتاج مساعدة"، "انتهى الأرز"، "نظف المكان"...',
    'سأكمل بعدها بـ أسماء كل أدوات السوشي والمطبخ الياباني (الأرز، الآلات، الأواني، الثلاجات، التغليف...) بنفس الطريقة.',
    'سأكمل بعدها بـ أنواع السوشي والماكي والنيغيري والروائح والطعم وعبارات الشيف في التحضير.',
}

ADJ_HEADS = {
    'Périmé', 'Épicé', 'Doux', 'Doux / Douce', 'Fin', 'Fin / Fine', 'Épais', 'Épais / Épaisse',
    'Cru / Crue', 'Cuite'
}

PHRASE_HEADS = {
    'Dépêche-toi', 'Prépare la commande', 'Vérifie la commande', 'Il manque', 'Ajoute',
    'Enlève', 'Mets', 'Prends', 'Range', 'Nettoie', 'Attention', 'Fais attention', 'Termine',
    'Commence par', 'Suis les instructions', 'C’est prêt', 'Ce n’est pas prêt', 'Encore',
    'C’est fini', 'Il reste', 'Apporte', 'Donne-moi', 'Passe-moi', 'Attends', 'Aide-moi',
    'J’ai besoin de', 'Faire attention', 'Nettoie la surface', 'Range le matériel',
    'Sur place', 'Une commande à emporter',
}

EXTRA_RESTAURANT_HEADS = {
    'Un client', 'Accueillir', 'Bienvenue', 'Une réservation', 'Réserver', 'Une table',
    'Le menu', 'Choisir', 'Commander', 'Une commande à emporter', 'Sur place', 'La livraison',
    'L’adresse de livraison', 'Le paiement', 'L’addition', 'La carte bancaire', 'Le service',
    'Le client', 'La commande', 'Servir', 'Nettoyer', 'Respecter'
}

def normalize(s):
    s = s.lower().strip()
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'\s*\([^)]*\)', '', s)
    s = re.sub(r"^(se |s'|s’|se\/|le |la |les |un |une |l'|l’|des |j'|j’|une |de |d'|d’)", '', s, flags=re.I)
    s = re.sub(r"['’]", '', s)
    s = re.sub(r'[^\w\s]', ' ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def strip_articles(s):
    return re.sub(r"^(le |la |les |un |une |l'|l’|des )", '', s, flags=re.I).strip()

def is_reflexive(head):
    return bool(re.match(r"^(se |s'|s’)", head, re.I))

def infer_level(head, en):
    h = head.lower()
    e = (en or '').lower()
    if any(x in h for x in ['nigiri','sashimi','california','makisu','spatule','charlotte','cuiseur','congélateur','peremption','péremption','fraîcheur','texture','saveur','présentation']):
        return 'A2'
    if 'to ' in e and any(x in h for x in ['aiguiser','découper','trancher','mélanger','stocker','congeler','décongeler','peser','mesurer','contrôler','jeter','emballe','emballer']):
        return 'A2'
    return 'A1'

def infer_pos(head, en):
    en0 = (en or '').strip().lower()
    h = head.strip()
    if h in ADJ_HEADS:
        return 'adjective'
    if h in PHRASE_HEADS:
        return 'phrase'
    if h.lower() in ('attention','bienvenue','encore'):
        return 'phrase'
    if en0.startswith('to be '):
        return 'phrase'
    if en0.startswith('to '):
        if ' ' in h:
            if is_reflexive(h):
                return 'verb'
            return 'phrase'
        return 'verb'
    if re.match(r"^(le |la |les |un |une |l'|l’|des )", h, re.I):
        return 'noun'
    if ' ' in h and not is_reflexive(h):
        return 'noun'
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
        if re.match(r'^---+\s*$', line):
            flush_entry()
            continue
        if re.match(r'^\d+$', line):
            flush_entry()
            continue
        if line in SECTION_HEADERS or (is_arabic_line(line) and not line.startswith('العربية:')):
            flush_entry()
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
        if in_phrase and not phrase_ar_set:
            phrase_fr_parts.append(line)
            continue
        flush_entry()
        current = {'fr': line}
    flush_entry()
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
                'fr': c.get('phrase_fr', ''),
                'ar': c.get('phrase_ar', ar),
                'en': c.get('phrase_en', en)
            }
        contexts = CTX[:]
        if strip_articles(fr).lower() in {strip_articles(x).lower() for x in EXTRA_RESTAURANT_HEADS}:
            contexts.append('restaurant')
        final.append({
            'fr': fr,
            'ar': ar,
            'en': en,
            'level': infer_level(fr, en),
            'pos': infer_pos(fr, en),
            'contexts': contexts,
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
    if len(new.get('fr','')) > len(existing.get('fr','')):
        existing['fr'] = new['fr']
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
    pos_counts = Counter(e['pos'] for e in existing)
    ctx_counts = Counter()
    for e in existing:
        for c in e.get('contexts', []):
            ctx_counts[c] += 1
    print('POS totals:', dict(pos_counts))
    print('Context totals:', dict(ctx_counts))

if __name__ == '__main__':
    main()
