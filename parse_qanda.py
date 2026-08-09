#!/usr/bin/env python3
# Parse the BRPCE PDF text into Q&A data for qanda.html
import re, json, sys
from collections import Counter

def load_and_clean(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    text = text.replace('\x0c', '\n')
    lines = text.splitlines()
    cleaned = []
    for line in lines:
        s = line.strip()
        if s in ('VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII',
                 'BRPCE', 'DSR/BRPCE', '1er janvier 2018',
                 'Banque :', 'Délégation à la Sécurité Routière',
                 'Sous-direction de l\'Éducation Routière',
                 'Questions en lien avec la sécurité',
                 'Questions portant sur les notions',
                 'routière.', 'élémentaires de premiers secours.',
                 'Vérifications techniques.', ''):
            continue
        # Drop standalone numbers (item numbers and page numbers are too noisy to disambiguate)
        if re.fullmatch(r'\d{1,2}', s):
            continue
        cleaned.append(s)
    return cleaned

def is_category(s):
    return s in ('VE', 'QSER', '1ers secours')

def is_hard_break(s):
    return is_category(s) or s == 'Réponse'

def is_question(p):
    if p.endswith('?'):
        return True
    first_word = re.match(r"^([A-Za-zÀ-ÿ']+)", p)
    if first_word:
        w = first_word.group(1)
        ve_verbs = ('Montrez', 'Mettez', 'Vérifiez', 'Contrôlez', 'Faites',
                    'Actionnez', 'Ouvrez', 'Fermez', 'Allumez', 'Éteignez',
                    'Eteignez', 'Activez', 'Désactivez', 'Localisez', 'Indiquez',
                    'Démarrez', 'Coupez', 'Appuyez', 'Passez', 'Repérez',
                    'Vérifiez,', 'Contrôlez,', 'Montrez,', 'Mettez,',
                    'Ouvrez,', 'Fermez,', 'Allumez,', 'Éteignez,')
        if w in ve_verbs:
            return True
    return False

def reflow_paragraphs(lines):
    """Join broken lines into paragraphs, but keep structural markers and bullets separate."""
    paras = []
    cur = ''
    for line in lines:
        if not line:
            if cur:
                paras.append(cur.strip())
                cur = ''
            continue
        if is_hard_break(line):
            if cur:
                paras.append(cur.strip())
                cur = ''
            paras.append(line)
            continue
        if line.startswith('-') or line.startswith('–') or line.startswith('—'):
            if cur:
                paras.append(cur.strip())
                cur = ''
            paras.append(line)
            continue
        if cur:
            if cur[-1] in '.?!:;':
                paras.append(cur.strip())
                cur = line
            else:
                cur += ' ' + line
        else:
            cur = line
    if cur:
        paras.append(cur.strip())
    return paras

def classify(p):
    s = p.strip()
    if is_category(s):
        return 'cat', s
    if s == 'Réponse':
        return 'skip', s
    if is_question(s):
        return 'q', s
    return 'a', s

def parse():
    lines = load_and_clean('/tmp/extracted.txt')
    paras = reflow_paragraphs(lines)
    items = []
    pending_category = None
    current_q = None
    current_a_lines = []
    item_counter = 0
    
    def flush():
        nonlocal current_q, current_a_lines, pending_category, item_counter
        if current_q:
            cat = pending_category
            if not cat:
                cat = 'VE' if not current_q.endswith('?') else 'QSER'
            ans = '\n'.join(current_a_lines).strip()
            item_counter += 1
            items.append({'n': str(item_counter), 'cat': cat, 'q': current_q, 'a': ans})
            pending_category = None
        current_q = None
        current_a_lines = []
    
    for p in paras:
        typ, val = classify(p)
        if typ == 'cat':
            if current_q:
                flush()
            pending_category = val
            continue
        if typ == 'skip':
            continue
        if typ == 'q':
            if current_q:
                flush()
            current_q = val
            continue
        if typ == 'a':
            if current_q is None:
                continue
            current_a_lines.append(val)
    flush()
    return items

def main():
    items = parse()
    filtered = []
    seen = set()
    for i in items:
        if len(i['q']) < 5:
            continue
        q = re.sub(r'^(QSER|1ers secours|VE)\s+Réponse\s*', '', i['q']).strip()
        q = re.sub(r'^Réponse\s*', '', q).strip()
        i['q'] = q
        key = i['q'][:80]
        if key in seen:
            continue
        seen.add(key)
        filtered.append(i)
    cat_order = {'VE': 0, 'QSER': 1, '1ers secours': 2}
    # Keep insertion order but group by generated n won't make sense; just keep order.
    out = '/home/ubuntu/repos/Syrian020/data/qanda.js'
    with open(out, 'w', encoding='utf-8') as f:
        f.write('window.QANDA_DATA = ' + json.dumps(filtered, ensure_ascii=False, indent=2) + ';')
    print('Wrote', len(filtered), 'Q&A pairs to', out)
    print('Categories:', Counter(i['cat'] for i in filtered))
    for i in filtered[:20]:
        print('---')
        print(i['n'], i['cat'])
        print('Q:', i['q'][:160])
        print('A:', i['a'][:160])

if __name__ == '__main__':
    main()
