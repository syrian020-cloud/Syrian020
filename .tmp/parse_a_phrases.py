import json, re, os
from collections import OrderedDict

src = "/tmp/a_phrases.txt"
out_vocab = "/home/ubuntu/repos/Syrian020/data/vocab.js"
out_batch2 = "/home/ubuntu/repos/Syrian020/data/vocab-batch-02.js"

with open(src, "r", encoding="utf-8") as f:
    raw = f.read()

# Split on --- separators
blocks = re.split(r"\n---\s*\n", raw)

def starts_with_arabic(s):
    return bool(re.match(r"[\u0600-\u06FF]", s.strip()))

def normalize(fr):
    return re.sub(r"[^\w\s\u00C0-\u024F\u0600-\u06FF']", "", fr.lower().strip())

# Level rules
b1_markers = [
    "condition que", "défaut de", "force de", "partir du moment où",
    "compter de", "suite de votre", "encontre de", "égard de",
    "la limite", "peine arrivé", "titre d'exemple", "titre personnel",
    "ce sujet", "ce propos", "l'instant même", "l'origine", "l'essai",
    "l'insu de", "la suite de", "à défaut de", "à condition que",
    "à force de", "à compter de", "à l'insu de", "à l'encontre de",
    "à l'égard de", "à la limite", "à peine arrivé", "à titre d'exemple",
    "à titre personnel", "à ce sujet", "à ce propos", "dès lors que",
    "pourvu que", "bien que", "quoique"
]

a1_exact = {
    "à côté", "à gauche", "à droite", "à pied", "à vélo", "à temps",
    "à bientôt", "à demain", "à plus tard", "à tout à l'heure",
    "à tout de suite", "à la prochaine", "à votre santé", "à vos souhaits",
    "à table", "à la maison", "à la gare", "à la pharmacie", "à la banque",
    "à la caisse", "à la porte", "à l'arrêt de bus", "à domicile",
    "à l'heure", "à bord", "à la fin", "à la fin du film"
}

a1_markers = [
    "côté", "gauche", "droite", "pied", "vélo", "bientôt", "demain",
    "plus tard", "tout à l'heure", "tout de suite", "prochaine", "santé",
    "souhaits", "table", "maison", "gare", "pharmacie", "banque", "caisse",
    "porte", "arrêt de bus", "domicile", "au travail", "au parc", "au cinéma",
    "au restaurant", "à la plage", "au marché"
]

def assign_level(fr):
    f = fr.lower()
    if f in a1_exact:
        return "A1"
    for m in b1_markers:
        if m in f:
            return "B1"
    for m in a1_markers:
        if m in f:
            return "A1"
    return "A2"

# Context mapping
context_keywords = {
    "transport": ["gare","bus","train","vélo","pied","trafic","voiture","parking","route","arrêt","conduire","métro","taxi","quai","passager","car","autobus","moto"],
    "work": ["travail","travailler","bureau","emploi","collègue","patron","salaire","entretien","métier","réussir","rendement","carrière","profession","poste"],
    "health": ["pharmacie","médecin","docteur","santé","maladie","hôpital","clinique","médicament","douleur","soins","pharmaceutique"],
    "housing": ["maison","appartement","domicile","immeuble","bâtiment","chambre","toilettes","cuisine","salon","logement","porte","fenêtre","ascenseur","salle"],
    "shop": ["magasin","boutique","caisse","prix","acheter","vendre","achat","produit","article","marché","client","commerçant"],
    "services": ["banque","poste","service","administration","mairie","préfecture","ofii","ofpra","emploi","impôt","taxe","attestation","dossier","guichet"],
    "restaurant": ["restaurant","café","table","déjeuner","dîner","goût","sucré","manger","boire","repas","menu","addition","dînette"],
    "weather": ["pluie","froid","chaud","neige","vent","orage","tempête","soleil","météo","humide"],
    "family": ["famille","enfant","parent","mère","père","mari","femme","fils","fille","bébé","frère","sœur","cœur"],
    "school": ["école","cours","apprendre","étudier","élève","professeur","examen","diplôme","université","études"],
    "phone": ["téléphone","appeler","numéro","portable","sms","message","appel","contact"],
    "car": ["voiture","parking","conduire","permis","essence","route","accident","garage","conducteur"],
    "bank": ["banque","compte","argent","billet","monnaie","prêt","chèque","virement"]
}

def assign_contexts(fr, en, ex):
    text = " ".join([fr, en, ex.get("fr",""), ex.get("en","")]).lower()
    contexts = ["daily"]
    for ctx, keys in context_keywords.items():
        for k in keys:
            if k in text:
                if ctx not in contexts:
                    contexts.append(ctx)
                break
    return contexts

def clean_line(line):
    # remove leading/trailing whitespace; keep content
    return line.strip()

entries_by_fr = OrderedDict()

def add_entry(fr, ar, en, ex=None):
    if not fr or not ar or not en:
        return
    key = normalize(fr)
    if not key:
        return
    existing = entries_by_fr.get(key)
    if existing:
        # Keep the one with example if new or existing lacks example
        if ex and not existing.get("ex"):
            existing["ex"] = ex
        return
    entry = {
        "fr": fr,
        "ar": ar,
        "en": en,
        "level": assign_level(fr),
        "contexts": assign_contexts(fr, en, ex or {})
    }
    if ex:
        entry["ex"] = ex
    entries_by_fr[key] = entry

for block in blocks:
    lines = [clean_line(l) for l in block.splitlines()]
    lines = [l for l in lines if l]
    if not lines:
        continue
    # Strip leading noise lines until a French À phrase is found
    while lines and (lines[0].startswith("نبدأ") or lines[0].startswith("نعم") or starts_with_arabic(lines[0]) or not re.match(r"^[Àà]", lines[0])):
        lines.pop(0)
    if not lines:
        continue
    if len(lines) < 3:
        continue
    fr = lines[0]
    ar = lines[1]
    en = lines[2]
    ex = None
    if len(lines) >= 6:
        # There can be trailing noise lines (like "نعم..."); take first example triple
        ex = {"fr": lines[3], "ar": lines[4], "en": lines[5]}
    # Validate example triple: example fr should be a French sentence (not Arabic)
    if ex:
        if starts_with_arabic(ex["fr"]) or (not ex["fr"].strip()):
            ex = None
    add_entry(fr, ar, en, ex)

entries = list(entries_by_fr.values())

print(f"Parsed {len(entries)} unique entries from {len(blocks)} blocks.")

# Write vocab.js
vocab_js = "/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"
with open(out_vocab, "w", encoding="utf-8") as f:
    f.write(vocab_js)

# batch 2 empty
batch2_js = "/* Auto-generated vocabulary batch 2: Arabic/French/English from ArabTerm and Polyglot, filtered to common words and matched examples from app lessons and Tatoeba (CC-BY). */\nwindow.VOCAB_DATA_BATCH2 = [];\n"
with open(out_batch2, "w", encoding="utf-8") as f:
    f.write(batch2_js)

print("Wrote", out_vocab, "and", out_batch2)

# Quick stats
levels = {}
for e in entries:
    levels[e["level"]] = levels.get(e["level"], 0) + 1
print("Levels:", levels)
