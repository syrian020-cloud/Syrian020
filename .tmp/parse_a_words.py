import json, re, os
from collections import OrderedDict

vocab_path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
batch2_path = "/home/ubuntu/repos/Syrian020/data/vocab-batch-02.js"
src = "/tmp/a_words.txt"

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

with open(src, "r", encoding="utf-8") as f:
    raw = f.read()

# Extract all non-empty lines, skipping headers
all_lines = [l.strip() for l in raw.splitlines()]
# Remove headers/intro lines (Arabic-only, not usage, not French)
lines = []
for l in all_lines:
    if not l:
        continue
    # skip known intro markers
    if l.startswith('سأركز') or l.startswith('نكمل حرف') or l.startswith('سأكمل') or l.startswith('---'):
        continue
    lines.append(l)

def starts_with_arabic(s):
    return bool(re.match(r"[\u0600-\u06FF]", s))

def is_usage(s):
    return s.startswith("الاستخدام:") or s.startswith("الاستخدام :")

# Parse blocks: detect French headword line
# A headword line is Latin, not Arabic, not usage, and looks like a word/phrase (starts with letter)
def is_french_headword(s):
    if not s:
        return False
    if starts_with_arabic(s):
        return False
    if is_usage(s):
        return False
    if re.match(r"^[A-Za-zÀ-ÿ'\- ]+$", s):
        return True
    return False

def usage_to_contexts(usage):
    if not usage:
        return ["daily"]
    u = usage.lower()
    ctxs = set()
    mapping = [
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
        ("تكوين", ["work", "school"]),
        ("formation", ["work", "school"]),
        ("apprentissage", ["work", "school"]),
        ("العقود", ["services", "work"]),
        ("عقود", ["services", "work"]),
        ("القرارات الإدارية", ["services"]),
        ("المواعيد", ["daily", "services"]),
        ("السكن", ["housing"]),
        ("سكن", ["housing"]),
        ("logement", ["housing"]),
        ("الإدارة", ["services"]),
        ("إدارة", ["services"]),
        ("administrative", ["services"]),
        ("administration", ["services"]),
        ("ملفات الطلبات", ["services"]),
        ("طلبات", ["services"]),
        ("إرسال الملفات", ["services"]),
        ("طلب مساعدة", ["services"]),
        ("مساعدة", ["services"]),
        ("اعتراض", ["services"]),
        ("ملف قانوني", ["services"]),
        ("قانوني", ["services"]),
        ("رسائل رسمية", ["services"]),
        ("رسائل", ["services", "phone"]),
        ("بريد إلكتروني", ["services", "phone"]),
        ("email", ["services", "phone"]),
        ("رد على رسالة", ["services"]),
        ("الشروط الإدارية", ["services"]),
        ("بدائل", ["services"]),
        ("إرسال وثائق", ["services"]),
        ("وثائق", ["services"]),
        ("documents", ["services"]),
        ("استمارات", ["services"]),
        ("form", ["services"]),
        ("نماذج", ["services"]),
        ("تصاريح", ["services"]),
        ("ملفات الإدارة", ["services"]),
        ("dossier", ["services"]),
        ("تأمين", ["services", "health"]),
        ("assurance", ["services", "health"]),
        ("صحة", ["health"]),
        ("santé", ["health"]),
        ("المستشفيات", ["health"]),
        ("hôpital", ["health"]),
        ("الشركات", ["work"]),
        ("entreprise", ["work"]),
        ("البريد", ["post"]),
        ("poste", ["post"]),
        ("الدفعات", ["bank"]),
        ("paiement", ["bank"]),
        ("الفواتير", ["bank"]),
        ("facture", ["bank"]),
        ("الإيجار", ["housing"]),
        ("loyer", ["housing"]),
        ("impôt", ["taxes"]),
        ("taxe", ["taxes"]),
        ("ضريب", ["taxes"]),
        ("الخدمات", ["services"]),
        ("خدمات", ["services"]),
        ("الحسابات", ["bank"]),
        ("compte", ["bank"]),
        ("ضمان الاجتماعي", ["services"]),
        ("sécurité sociale", ["services"]),
        ("مساعدات", ["services"]),
        ("aide", ["services"]),
        ("allocation", ["services"]),
        ("شكوى", ["services"]),
        ("réclamation", ["services"]),
        ("موعد", ["services"]),
        ("rendez-vous", ["services"]),
        ("هاتف", ["phone"]),
        ("téléphone", ["phone"]),
        ("مكالمة", ["phone"]),
        ("appel", ["phone"]),
        ("مدرسة", ["school"]),
        ("école", ["school"]),
        ("تعلم", ["school"]),
        ("transports", ["transport"]),
        ("مواصلات", ["transport"]),
        ("bus", ["transport"]),
        ("سيارة", ["car"]),
        ("voiture", ["car"]),
        ("مطعم", ["restaurant"]),
        ("restaurant", ["restaurant"]),
        ("محلات", ["shop"]),
        ("magasin", ["shop"]),
        ("courses", ["shop"]),
        ("عائلة", ["family"]),
        ("famille", ["family"]),
        ("طقس", ["weather"]),
        ("météo", ["weather"]),
        ("محكمة", ["services"]),
    ]
    for keyword, tags in mapping:
        if keyword in u:
            ctxs.update(tags)
    if not ctxs:
        ctxs.add("daily")
    return sorted(ctxs)

# B1 keywords
b1_words = {
    "accusé de réception", "actualisation", "actualiser", "administration",
    "administratif", "administrer", "admissible", "admission", "affiliation",
    "allouer", "aménagement", "appartenir", "approbation", "apprentissage",
    "assurance", "attestation de droits", "attestation de travail", "attestation",
    "automatique", "automatiquement", "autonome", "autonomie", "autorisation",
    "autoriser", "avaliser", "avis d'imposition", "accompagnement", "accord",
    "accorder", "adresser", "adresse mail", "affecter", "afficher", "appareil",
    "apparition", "appui", "association", "associer", "ajustement"
}

# A1 common words
a1_words = {
    "abandonner", "absence", "absent", "absolument", "accepter", "accepter",
    "accès", "accéder", "accompagner", "accord", "acheminer", "acte", "actualiser",
    "actualisation", "ajouter", "adresse", "adhérer", "adhésion", "administratif",
    "administration", "administrer", "admissible", "admission", "adopter", "adresser",
    "adresse mail", "affecter", "affaire", "afficher", "affiliation", "agir", "aide",
    "aider", "aisance", "allocation", "allouer", "améliorer", "aménagement", "amende",
    "année", "annuler", "annulation", "apparaître", "appel", "appeler", "apporter",
    "appliquer", "approuver", "approbation", "apprentissage", "apprendre", "apprenant",
    "approcher", "approche", "appui", "apporter", "appartenir", "appareil", "apparition",
    "arrêt", "arrêter", "arrivée", "arriver", "assister", "association", "associer",
    "attacher", "atteindre", "attendre", "attente", "attention", "attirer", "auparavant",
    "autorisation", "autoriser", "automatique", "automatiquement", "autonomie", "autonome",
    "autour de", "autrement", "avaler", "avance", "avancer", "avancement", "avant",
    "avec", "avis", "avis d'imposition", "avoir", "aider", "aide", "adresse", "absolument",
    "apporter", "appartenir", "arrêter", "arriver", "attendre", "attente", "attention"
}

# The above a1 list is too broad; let's define a precise common A1 set
a1_exact = {
    "avec", "avoir", "avant", "appeler", "attendre", "arriver", "aider", "aide",
    "ajouter", "abandonner", "absence", "absent", "absolument", "accepter", "accepter",
    "accès", "accéder", "acheminer", "acte", "actualiser", "actualisation", "adresse",
    "adhérer", "adhésion", "administratif", "administration", "administrer", "adresser",
    "affecter", "affaire", "afficher", "agir", "aider", "améliorer", "amende", "année",
    "annuler", "annulation", "apparaître", "appel", "apporter", "appliquer", "apprendre",
    "apprenant", "approcher", "arrêt", "arrêter", "arrivée", "arriver", "assister",
    "associer", "attacher", "atteindre", "attendre", "attente", "attention", "attirer",
    "autour de", "autrement", "avaler", "avancer", "avancement", "avant", "avec", "avis",
    "avoir"
}

def assign_level(fr):
    f = fr.lower().strip()
    if f in b1_words:
        return "B1"
    if f in a1_exact:
        return "A1"
    return "A2"

def parse_blocks(lines):
    blocks = []
    i = 0
    n = len(lines)
    while i < n:
        # find next French headword
        while i < n and not is_french_headword(lines[i]):
            i += 1
        if i >= n:
            break
        fr = lines[i]
        i += 1
        if i >= n:
            break
        ar = lines[i]
        i += 1
        if i >= n:
            break
        en = lines[i]
        i += 1
        usage = None
        if i < n and is_usage(lines[i]):
            usage = re.sub(r"^الاستخدام\s*:\s*", "", lines[i]).strip()
            i += 1
        # Now example FR, AR, EN (skip blank was already done)
        if i >= n:
            break
        ex_fr = lines[i]
        i += 1
        if i >= n:
            break
        ex_ar = lines[i]
        i += 1
        ex_en = None
        if i < n and not is_french_headword(lines[i]) and not is_usage(lines[i]):
            ex_en = lines[i]
            i += 1
        blocks.append({
            "fr": fr,
            "ar": ar,
            "en": en,
            "usage": usage,
            "ex": {"fr": ex_fr, "ar": ex_ar, "en": ex_en} if ex_en else {"fr": ex_fr, "ar": ex_ar}
        })
    return blocks

blocks = parse_blocks(lines)
print(f"Parsed {len(blocks)} blocks.")

new_count = 0
for b in blocks:
    key = normalize(b["fr"])
    if not key:
        continue
    if key in entries_by_fr:
        # merge: keep richer usage, contexts, example
        old = entries_by_fr[key]
        if b.get("usage"):
            if old.get("usage"):
                old["usage"] += " | " + b["usage"]
            else:
                old["usage"] = b["usage"]
        old_ctx = set(old.get("contexts", []))
        old_ctx.update(usage_to_contexts(b.get("usage")))
        old["contexts"] = sorted(old_ctx)
        if not old.get("ex") and b.get("ex"):
            old["ex"] = b["ex"]
        entries_by_fr[key] = old
    else:
        entry = {
            "fr": b["fr"],
            "ar": b["ar"],
            "en": b["en"],
            "level": assign_level(b["fr"]),
            "contexts": usage_to_contexts(b.get("usage")),
            "ex": b["ex"]
        }
        if b.get("usage"):
            entry["usage"] = b["usage"]
        entries_by_fr[key] = entry
        new_count += 1

entries = list(entries_by_fr.values())
print(f"Total entries: {len(entries)} (new: {new_count}).")

# write
vocab_js = "/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"
with open(vocab_path, "w", encoding="utf-8") as f:
    f.write(vocab_js)

with open(batch2_path, "w", encoding="utf-8") as f:
    f.write("/* Auto-generated vocabulary batch 2: Arabic/French/English from ArabTerm and Polyglot, filtered to common words and matched examples from app lessons and Tatoeba (CC-BY). */\nwindow.VOCAB_DATA_BATCH2 = [];\n")

print("Wrote files.")
