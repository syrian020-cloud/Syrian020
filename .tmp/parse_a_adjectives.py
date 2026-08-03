import json, re, os
from collections import OrderedDict

vocab_path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
batch2_path = "/home/ubuntu/repos/Syrian020/data/vocab-batch-02.js"
src_files = ["/tmp/a_adjectives_1.txt", "/tmp/a_adjectives_2.txt"]

def load_js_array(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    start = text.find('[')
    end = text.rfind(']') + 1
    return json.loads(text[start:end])

existing = load_js_array(vocab_path)
existing_batch2 = load_js_array(batch2_path)

def normalize(fr):
    return re.sub(r"[^\w\s\u00C0-\u024F\u0600-\u06FF']", "", fr.lower().strip())

entries_by_fr = OrderedDict()
for d in existing + existing_batch2:
    key = normalize(d["fr"])
    if key:
        entries_by_fr[key] = d

# combine both files
raw = ""
for src in src_files:
    with open(src, "r", encoding="utf-8") as f:
        raw += f.read() + "\n"

# split into blocks by ---
blocks_raw = re.split(r"\n\s*-{3,}\s*\n", raw)

def starts_with_arabic(s):
    return bool(re.match(r"[\u0600-\u06FF]", s))

def is_latin(s):
    return bool(re.search(r"[A-Za-zÀ-ÿ]", s))

context_map = [
    ("caf", ["caf"]),
    ("france travail", ["france_travail"]),
    ("préfecture", ["prefecture"]),
    ("prefecture", ["prefecture"]),
    ("cpam", ["cpam", "services"]),
    ("c.p.a.m", ["cpam", "services"]),
    ("mairie", ["mairie", "services"]),
    ("بلدية", ["mairie", "services"]),
    ("العمل", ["work"]),
    ("travail", ["work"]),
    ("emploi", ["work"]),
    ("fonction", ["work"]),
    ("entreprise", ["work"]),
    ("société", ["work"]),
    ("salaire", ["work"]),
    ("contract", ["work"]),
    ("contrat", ["work"]),
    ("projet", ["work"]),
    ("mission", ["work"]),
    ("tâche", ["work"]),
    ("formation", ["work", "school"]),
    ("tuteur", ["work", "school"]),
    ("association", ["services", "work"]),
    ("association", ["work"]),
    ("école", ["school"]),
    ("classe", ["school"]),
    ("étude", ["school"]),
    ("cours", ["school"]),
    ("élève", ["school"]),
    ("étudiant", ["school"]),
    ("langue", ["school"]),
    ("français", ["school"]),
    ("anglais", ["school"]),
    ("médecin", ["health"]),
    ("hôpital", ["health"]),
    ("douleur", ["health"]),
    ("maladie", ["health"]),
    ("allergie", ["health"]),
    ("handicap", ["health"]),
    ("médical", ["health"]),
    ("patient", ["health"]),
    ("santé", ["health"]),
    ("logement", ["housing"]),
    ("appartement", ["housing"]),
    ("maison", ["housing"]),
    ("chambre", ["housing"]),
    ("séjour", ["housing"]),
    ("prix", ["shop"]),
    ("argent", ["shop"]),
    ("produit", ["shop"]),
    ("achat", ["shop"]),
    ("compte", ["bank"]),
    ("banque", ["bank"]),
    ("carte", ["bank"]),
    ("bancaire", ["bank"]),
    ("paiement", ["bank"]),
    ("facture", ["bank"]),
    ("impôt", ["taxes"]),
    ("taxe", ["taxes"]),
    ("déclaration", ["taxes"]),
    ("véhicule", ["car"]),
    ("voiture", ["car"]),
    ("auto", ["car"]),
    ("batterie", ["car"]),
    ("route", ["transport"]),
    ("transport", ["transport"]),
    ("bus", ["transport"]),
    ("métro", ["transport"]),
    ("avion", ["transport"]),
    ("aérien", ["transport"]),
    ("restaurant", ["restaurant"]),
    ("repas", ["restaurant"]),
    ("manger", ["restaurant"]),
    ("enfant", ["family"]),
    ("famille", ["family"]),
    ("bébé", ["family"]),
    ("mari", ["family"]),
    ("femme", ["family"]),
    ("téléphone", ["phone"]),
    ("appel", ["phone"]),
    ("sms", ["phone"]),
    ("message", ["phone"]),
    ("bureau", ["office"]),
    ("secrétaire", ["office"]),
    ("collègue", ["work"]),
    ("dossier", ["services"]),
    ("document", ["services"]),
    ("demande", ["services"]),
    ("formulaire", ["services"]),
    ("service", ["services"]),
    ("administratif", ["services"]),
    ("règle", ["services"]),
    ("décision", ["services"]),
    ("loi", ["services"]),
    ("procédure", ["services"]),
    ("accès", ["services"]),
    ("autorisation", ["services"]),
    ("assurance", ["services", "health"]),
    ("télé", ["daily"]),
    ("film", ["daily"]),
    ("musique", ["daily"]),
    ("livre", ["daily"]),
    ("jeu", ["daily"]),
    ("sport", ["daily"]),
    ("temps", ["weather"]),
    ("météo", ["weather"]),
    ("pluie", ["weather"]),
    ("froid", ["weather"]),
]

def derive_contexts(text):
    if not text:
        return ["daily"]
    u = text.lower()
    ctxs = set()
    for keyword, tags in context_map:
        if keyword in u:
            ctxs.update(tags)
    if not ctxs:
        ctxs.add("daily")
    return sorted(ctxs)

def parse_block(block_text):
    lines = [l.strip() for l in block_text.splitlines() if l.strip()]
    # skip section headers and intro lines
    cleaned = []
    for l in lines:
        if l.startswith(">"):
            # note line; skip, but keep following example lines to be captured later
            continue
        if l.startswith("نكمل") or l.startswith("هذه") or l.startswith("حسن"):
            continue
        cleaned.append(l)
    if len(cleaned) < 3:
        return None
    # strip numbering from first line
    fr = re.sub(r"^\d+\.\s*", "", cleaned[0]).strip()
    if not fr:
        return None
    ar = cleaned[1]
    en = cleaned[2]
    # remaining lines are example triples (possibly multiple after note)
    rest = cleaned[3:]
    examples = []
    i = 0
    while i + 2 < len(rest):
        a = rest[i]
        b = rest[i+1]
        c = rest[i+2]
        # Check pattern: a Latin (French), b Arabic, c Latin (English)
        if is_latin(a) and starts_with_arabic(b) and is_latin(c):
            examples.append({"fr": a, "ar": b, "en": c})
            i += 3
        else:
            i += 1
    if not examples:
        return None
    # use the last example triple (in case a note provided a more natural alternative)
    ex = examples[-1]
    return {"fr": fr, "ar": ar, "en": en, "ex": ex}

parsed = []
for block in blocks_raw:
    entry = parse_block(block)
    if entry:
        parsed.append(entry)

print(f"Parsed {len(parsed)} adjective blocks.")

new_count = 0
merged_count = 0
for b in parsed:
    key = normalize(b["fr"])
    if not key:
        continue
    full_text = " ".join([b["fr"], b["ar"], b["en"], b["ex"]["fr"], b["ex"]["ar"], b["ex"]["en"]])
    ctxs = derive_contexts(full_text)
    if key in entries_by_fr:
        merged_count += 1
        old = entries_by_fr[key]
        old_ctx = set(old.get("contexts", []))
        old_ctx.update(ctxs)
        old["contexts"] = sorted(old_ctx)
        # prefer existing example if present; otherwise use new
        if not old.get("ex") and b.get("ex"):
            old["ex"] = b["ex"]
        # keep higher CEFR level (existing levels are generally more accurate)
        # new adjectives default to A2, so only update if new is higher (unlikely)
        # do nothing
        entries_by_fr[key] = old
    else:
        entry = {
            "fr": b["fr"],
            "ar": b["ar"],
            "en": b["en"],
            "level": "A2",
            "contexts": ctxs,
            "ex": b["ex"]
        }
        entries_by_fr[key] = entry
        new_count += 1

entries = list(entries_by_fr.values())
print(f"Total entries: {len(entries)} (new: {new_count}, merged: {merged_count}).")

missing_en = [d["fr"] for d in entries if not d.get("ex") or not d["ex"].get("en")]
print(f"Missing ex.en: {len(missing_en)}")
if missing_en:
    for m in missing_en[:20]:
        print("-", m)

with open(vocab_path, "w", encoding="utf-8") as f:
    f.write("/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n")

with open(batch2_path, "w", encoding="utf-8") as f:
    f.write("/* Auto-generated vocabulary batch 2: Arabic/French/English from ArabTerm and Polyglot, filtered to common words and matched examples from app lessons and Tatoeba (CC-BY). */\nwindow.VOCAB_DATA_BATCH2 = [];\n")

print("Wrote files.")
