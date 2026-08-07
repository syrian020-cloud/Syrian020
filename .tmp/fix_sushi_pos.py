#!/usr/bin/env python3
import json, re
from pathlib import Path

def load():
    text = Path('/home/ubuntu/repos/Syrian020/data/vocab.js').read_text(encoding='utf-8')
    m = re.search(r'window\.VOCAB_DATA\s*=\s*(\[.*?\])\s*$', text, re.DOTALL)
    return json.loads(m.group(1))

def save(entries):
    json_text = json.dumps(entries, ensure_ascii=False, indent=2)
    Path('/home/ubuntu/repos/Syrian020/data/vocab.js').write_text('window.VOCAB_DATA = {}\n'.format(json_text), encoding='utf-8')

phrase_heads = {
    'Dépêche-toi','Prépare la commande','Vérifie la commande','Il manque','Ajoute','Enlève','Mets','Prends','Range','Nettoie','Attention','Fais attention','Termine','Commence par','Suis les instructions','C’est prêt','Ce n’est pas prêt','Encore','C’est fini','Il reste','Apporte','Donne-moi','Passe-moi','Attends','Aide-moi','J’ai besoin de','Faire attention','Nettoie la surface','Range le matériel','Une commande à emporter','Sur place','Nettoyer le poste de travail','Bienvenue'
}
adj_heads = {'Périmé','Épicé','Doux / Douce','Fin / Fine','Épais / Épaisse'}
verb_heads = {'Aiguiser','Stocker','Congeler','Décongeler','Peser','Mesurer','Contrôler','Jeter','Découper','Trancher','Mélanger','Cuire','Refroidir','Emballer'}

entries = load()
changed = 0
for e in entries:
    fr = e.get('fr','')
    if 'sushi' not in e.get('contexts', []):
        continue
    if fr in phrase_heads and e.get('pos') != 'phrase':
        e['pos'] = 'phrase'; changed += 1
    if fr in adj_heads and e.get('pos') != 'adjective':
        e['pos'] = 'adjective'; changed += 1
    if fr in verb_heads and e.get('pos') != 'verb':
        e['pos'] = 'verb'; changed += 1
save(entries)
print('Fixed', changed, 'entries')
