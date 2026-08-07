import json, re, os, sys
from collections import OrderedDict

vocab_path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
batch2_path = "/home/ubuntu/repos/Syrian020/data/vocab-batch-02.js"
src = sys.argv[1] if len(sys.argv) > 1 else "/tmp/d_batch_raw.txt"

def load_js_array(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    start = text.find('[')
    end = text.rfind(']') + 1
    return json.loads(text[start:end])

existing = load_js_array(vocab_path)
existing_batch2 = load_js_array(batch2_path)

def normalize(fr):
    s = fr.lower().strip()
    # strip leading articles / d' / l' for matching
    s = re.sub(r"^(d'|l'|le |la |les |un |une |des |se |s')+", "", s)
    s = re.sub(r"[^\w\s\u00C0-\u024F\u0600-\u06FF']", "", s)
    return s.strip()

entries_by_fr = OrderedDict()
for d in existing + existing_batch2:
    key = normalize(d["fr"])
    if key:
        entries_by_fr[key] = d

# POS classification
INF_ENDINGS = ("er", "ir", "re", "oir")
NOUN_SUFFIXES = (
    "tion", "sion", "age", "ment", "té", "tie", "ie", "ure", "sse", "eur", "oire",
    "ance", "ence", "aison", "eille", "ille", "iste", "ème", "asme", "igue",
    "ature", "ade", "aille", "erie", "ure", "at", "ate", "ats", "ates",
    "ette", "iller", "iller", "ement", "illon", "in", "on", "ot", "at", "eur"
)
ADJ_SUFFIXES = (
    "é", "ée", "és", "ées", "ant", "ante", "ants", "antes", "if", "ive", "ifs", "ives",
    "eux", "euse", "euses", "teur", "trice", "teurs", "trices", "able", "ible", "ables", "ibles",
    "al", "ale", "aux", "ales", "ien", "ienne", "iens", "iennes", "ois", "oise", "oises",
    "ain", "aine", "ains", "aines", "ard", "arde", "ards", "ardes", "u", "ue", "us", "ues", "uë",
    "i", "ie", "is", "ies", "it", "ite", "its", "ites", "air", "aire", "aires", "el", "elle",
    "els", "elles", "ique", "iques", "uel", "uelle", "uels", "uelles", "ome", "omes",
    "ent", "ente", "ents", "entes", "at", "ate", "ats", "ates", "if", "ive"
)
D_ADVERBS = {"d'abord", "d'ailleurs", "d'habitude", "désormais"}

def classify_pos(fr):
    f = fr.strip()
    lower = f.lower()
    # adverbial phrases with d'
    if lower.startswith("d'") and lower in D_ADVERBS:
        return "other"
    tokens = f.split()
    if len(tokens) > 1:
        return "phrase"
    # single word
    if lower in D_ADVERBS:
        return "other"
    # infinitive verbs (but watch noun suffixes)
    if any(lower.endswith(e) for e in INF_ENDINGS):
        # if it ends with noun suffix, treat as noun (e.g. demandeur? no, that's eur noun; handled)
        if any(lower.endswith(ns) for ns in NOUN_SUFFIXES):
            return "noun"
        return "verb"
    if any(lower.endswith(as_) for as_ in ADJ_SUFFIXES):
        return "adjective"
    if any(lower.endswith(ns) for ns in NOUN_SUFFIXES):
        return "noun"
    return "noun"

def assign_level(fr, pos):
    # simple heuristic: very common short words/phrases A1, others A2
    f = fr.lower().strip()
    a1 = {
        "d'abord", "d'accord", "d'ailleurs", "d'habitude", "danger", "date", "début",
        "décision", "demande", "départ", "difficulté", "dossier", "document", "domicile",
        "droit", "délai", "dépense", "dette", "déclaration", "déplacement", "donner",
        "dire", "dormir", "devenir", "devoir", "demander", "décider", "décrire",
        "défendre", "définir", "dépenser", "déposer", "dépendre", "déménager",
        "démontrer", "développer", "distinguer", "diviser", "douter", "durer",
        "dessiner", "dégager", "démarrer", "détenir", "détruire", "deviner",
        "diagnostiquer", "discuter", "distribuer", "disparaître", "disponible"
    }
    if f in a1:
        return "A1"
    return "A2"

context_keywords = {
    "transport": ["gare","bus","train","vélo","pied","trafic","voiture","parking","route","arrêt","conduire","métro","taxi","quai","passager","car","autobus","moto","station"],
    "work": ["travail","travailler","bureau","emploi","collègue","patron","salaire","entretien","métier","réussir","rendement","carrière","profession","poste","compétence","professionnel","mission","déléguer"],
    "health": ["pharmacie","médecin","docteur","santé","maladie","hôpital","clinique","médicament","douleur","soins","pharmaceutique","traitement","symptôme","spécialiste","diagnostiquer","désinfecter","détendre"],
    "housing": ["maison","appartement","domicile","immeuble","bâtiment","chambre","toilettes","cuisine","salon","logement","porte","fenêtre","ascenseur","salle","séjour","déménager"],
    "shop": ["magasin","boutique","caisse","prix","acheter","vendre","achat","produit","article","marché","client","commerçant","quantité"],
    "services": ["banque","poste","service","administration","mairie","préfecture","ofii","ofpra","emploi","impôt","taxe","attestation","dossier","guichet","document","déclarer","délai","déclaration","démarche","déplacement","déposer","détail"],
    "restaurant": ["restaurant","café","table","déjeuner","dîner","goût","sucré","manger","boire","repas","menu","addition","dînette"],
    "weather": ["pluie","froid","chaud","neige","vent","orage","tempête","soleil","météo","humide"],
    "family": ["famille","enfant","parent","mère","père","mari","femme","fils","fille","bébé","frère","sœur","cœur"],
    "school": ["école","cours","apprendre","étudier","élève","professeur","examen","diplôme","université","études","formation","compétence"],
    "phone": ["téléphone","appeler","numéro","portable","sms","message","appel","contact"],
    "car": ["voiture","parking","conduire","permis","essence","route","accident","garage","conducteur"],
    "bank": ["banque","compte","argent","billet","monnaie","prêt","chèque","virement"],
    "prefecture": ["préfecture","titre de séjour","résidence","naturalisation","dossier","recours","convocation","OQTF","nationalité"],
    "caf": ["caf","allocation","aide","rsa","apl","allocation"],
    "mdph": ["mdph","handicap","rqth","aah","pch","cdaph"],
    "cpam": ["cpam","sécurité sociale","remboursement","mutuelle"],
}

def assign_contexts(fr, en, ex):
    text = " ".join([fr, en, ex.get("fr",""), ex.get("en",""), ex.get("ar","")]).lower()
    contexts = ["daily"]
    for ctx, keys in context_keywords.items():
        for k in keys:
            if k in text:
                if ctx not in contexts:
                    contexts.append(ctx)
                break
    return contexts

with open(src, "r", encoding="utf-8") as f:
    raw = f.read()

# Split on --- separators
blocks = re.split(r"\n---\s*\n", raw)

def starts_with_arabic(s):
    return bool(re.match(r"[\u0600-\u06FF]", s.strip()))

def clean_line(line):
    return line.strip()

new_entries = OrderedDict()

for block in blocks:
    lines = [clean_line(l) for l in block.splitlines()]
    lines = [l for l in lines if l]
    # skip intro/header lines
    while lines and (starts_with_arabic(lines[0]) or lines[0].startswith("D —") or lines[0].startswith("سأكمل") or lines[0].startswith("نكمل") or lines[0].startswith("أكيد")):
        lines.pop(0)
    if not lines:
        continue
    # parse headword and bullet fields
    fr = lines[0]
    fields = {"en":"", "ar":"", "ex_fr":"", "ex_en":"", "ex_ar":""}
    for l in lines[1:]:
        m = re.match(r"^·?\s*(en|ar|ex fr|ex en|ex ar)\s*:\s*(.*)", l)
        if m:
            k, v = m.group(1).strip(), m.group(2).strip()
            if k == "ex fr":
                fields["ex_fr"] = v
            elif k == "ex en":
                fields["ex_en"] = v
            elif k == "ex ar":
                fields["ex_ar"] = v
            else:
                fields[k] = v
    if not fr or not fields["ar"] or not fields["en"]:
        continue
    ex = None
    if fields["ex_fr"] or fields["ex_en"] or fields["ex_ar"]:
        ex = {"fr": fields["ex_fr"], "en": fields["ex_en"], "ar": fields["ex_ar"]}
    key = normalize(fr)
    if not key:
        continue
    if key in new_entries:
        # keep the first occurrence but fill missing example
        if ex and not new_entries[key].get("ex"):
            new_entries[key]["ex"] = ex
        continue
    pos = classify_pos(fr)
    level = assign_level(fr, pos)
    entry = {
        "fr": fr,
        "ar": fields["ar"],
        "en": fields["en"],
        "level": level,
        "contexts": assign_contexts(fr, fields["en"], ex or {}),
        "pos": pos,
    }
    if ex:
        entry["ex"] = ex
    new_entries[key] = entry

new_list = list(new_entries.values())
print(f"Parsed {len(new_list)} unique D entries from {len(blocks)} blocks.")

# Merge with existing
added = 0
merged = 0
for entry in new_list:
    key = normalize(entry["fr"])
    if key in entries_by_fr:
        existing = entries_by_fr[key]
        # merge contexts
        existing["contexts"] = list(dict.fromkeys((existing.get("contexts") or []) + entry.get("contexts", [])))
        # merge example if missing
        if entry.get("ex") and not existing.get("ex"):
            existing["ex"] = entry["ex"]
        # ensure pos/level exist
        if not existing.get("pos"):
            existing["pos"] = entry.get("pos")
        if not existing.get("level"):
            existing["level"] = entry.get("level")
        merged += 1
    else:
        entries_by_fr[key] = entry
        added += 1

final = list(entries_by_fr.values())
print(f"Added {added} new, merged {merged} duplicates. Total now {len(final)}.")

# Counts
from collections import Counter
pos_counts = Counter(e.get("pos","unknown") for e in final)
ctx_counts = Counter()
for e in final:
    for c in e.get("contexts", []):
        ctx_counts[c] += 1
print("POS:", dict(pos_counts))
print("Contexts:", dict(ctx_counts))

# Write vocab.js
vocab_js = "/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(final, ensure_ascii=False, indent=2) + ";\n"
with open(vocab_path, "w", encoding="utf-8") as f:
    f.write(vocab_js)

# batch2 empty
batch2_js = "/* Auto-generated vocabulary batch 2: Arabic/French/English from ArabTerm and Polyglot, filtered to common words and matched examples from app lessons and Tatoeba (CC-BY). */\nwindow.VOCAB_DATA_BATCH2 = [];\n"
with open(batch2_path, "w", encoding="utf-8") as f:
    f.write(batch2_js)

print("Wrote", vocab_path, "and", batch2_path)
