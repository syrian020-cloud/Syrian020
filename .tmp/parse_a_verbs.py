import json, re, os
from collections import OrderedDict

vocab_path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
batch2_path = "/home/ubuntu/repos/Syrian020/data/vocab-batch-02.js"
src = "/tmp/a_verbs.txt"

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

all_lines = [l.strip() for l in raw.splitlines()]
lines = []
for l in all_lines:
    if not l:
        continue
    if l == '---' or l.startswith('---'):
        continue
    lines.append(l)

def starts_with_arabic(s):
    return bool(re.match(r"[\u0600-\u06FF]", s))

def is_usage(s):
    return s.startswith("الاستخدام:") or s.startswith("الاستخدام :")

def is_french_headword(s):
    if not s:
        return False
    if starts_with_arabic(s):
        return False
    if is_usage(s):
        return False
    # allow letters, spaces, apostrophes, hyphens, parentheses, slashes
    return bool(re.match(r"^[A-Za-zÀ-ÿ'\- \(\)/]+$", s))

def extract_level_from_header(s):
    m = re.search(r"\b(A[12]|B[12])\b", s)
    return m.group(1) if m else None

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
    ("قانون", ["services"]),
    ("loi", ["services"]),
    ("إجراء", ["services"]),
    ("démarche", ["services"]),
    ("procédure", ["services"]),
    ("dossier", ["services"]),
    ("رسائل رسمية", ["services"]),
    ("رسائل", ["services", "phone"]),
    ("بريد إلكتروني", ["services", "phone"]),
    ("email", ["services", "phone"]),
    ("adresse mail", ["services", "phone"]),
    ("courrier", ["services", "post"]),
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
    ("تأمين", ["services", "health"]),
    ("assurance", ["services", "health"]),
    ("صحة", ["health"]),
    ("santé", ["health"]),
    ("المستشفيات", ["health"]),
    ("hôpital", ["health"]),
    ("médecin", ["health"]),
    ("médical", ["health"]),
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
    ("carte", ["bank"]),
    ("bancaire", ["bank"]),
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
    ("métro", ["transport"]),
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
    ("tribunal", ["services"]),
    ("justice", ["services"]),
    ("tâche", ["work"]),
    ("mission", ["work"]),
    ("projet", ["work"]),
    ("réunion", ["work"]),
    ("اجتماع", ["work"]),
    ("qualité", ["work"]),
    ("étude", ["school"]),
    ("connaissance", ["school"]),
    ("compétence", ["work", "school"]),
    ("cv", ["work"]),
    ("série", ["daily"]),
    ("film", ["daily"]),
    ("médias", ["daily"]),
    ("actu", ["daily"]),
    ("information", ["daily"]),
    ("المنزل", ["daily"]),
    ("maison", ["daily"]),
    ("الأجهزة", ["daily"]),
    ("appareil", ["daily"]),
    ("الأطفال", ["family"]),
    ("enfant", ["family"]),
    ("طبيب", ["health"]),
    ("médecin", ["health"]),
    ("المحادثات", ["daily"]),
    ("conversation", ["daily"]),
    ("وصف الأشياء", ["daily"]),
    ("السكن", ["housing"]),
    ("logement", ["housing"]),
    ("العمل", ["work"]),
    ("travail", ["work"]),
    ("الإنترنت", ["daily"]),
    ("internet", ["daily"]),
    ("الوقت", ["daily"]),
    ("temps", ["daily"]),
]

def usage_to_contexts(usage):
    if not usage:
        return ["daily"]
    u = usage.lower()
    ctxs = set()
    for keyword, tags in context_map:
        if keyword in u:
            ctxs.update(tags)
    if not ctxs:
        ctxs.add("daily")
    return sorted(ctxs)

def level_rank(l):
    return {"A1":1,"A2":2,"B1":3,"B2":4}.get(l,2)

def parse_blocks(lines):
    blocks = []
    current_level = "A1"
    i = 0
    n = len(lines)
    while i < n:
        s = lines[i]
        # detect Arabic section headers with level markers
        if starts_with_arabic(s) and not is_usage(s) and not re.match(r"^\d", s):
            lvl = extract_level_from_header(s)
            if lvl:
                current_level = lvl
            i += 1
            continue
        if not is_french_headword(s):
            i += 1
            continue
        # headword must be followed by Arabic translation
        if i + 1 < n and not starts_with_arabic(lines[i + 1]):
            i += 1
            continue
        fr = s
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
        if i >= n:
            break
        ex_fr = lines[i]
        i += 1
        if i >= n:
            break
        ex_ar = lines[i]
        i += 1
        ex_en = None
        if i < n and not is_french_headword(lines[i]) and not is_usage(lines[i]) and not (starts_with_arabic(lines[i]) and extract_level_from_header(lines[i])):
            ex_en = lines[i]
            i += 1
        blocks.append({
            "fr": fr,
            "ar": ar,
            "en": en,
            "level": current_level,
            "usage": usage,
            "ex": {"fr": ex_fr, "ar": ex_ar, "en": ex_en} if ex_en else {"fr": ex_fr, "ar": ex_ar},
        })
    return blocks

blocks = parse_blocks(lines)
print(f"Parsed {len(blocks)} blocks.")

new_count = 0
merged_count = 0
for b in blocks:
    key = normalize(b["fr"])
    if not key:
        continue
    # derive contexts from usage if present; else from existing or daily
    ctxs = usage_to_contexts(b.get("usage"))
    if key in entries_by_fr:
        merged_count += 1
        old = entries_by_fr[key]
        if b.get("usage"):
            if old.get("usage"):
                if b["usage"] not in old["usage"]:
                    old["usage"] += " | " + b["usage"]
            else:
                old["usage"] = b["usage"]
        old_ctx = set(old.get("contexts", []))
        old_ctx.update(ctxs)
        old["contexts"] = sorted(old_ctx)
        if not old.get("ex"):
            old["ex"] = b["ex"]
        elif b.get("ex", {}).get("en") and not old["ex"].get("en"):
            old["ex"] = b["ex"]
        # take higher CEFR level
        if level_rank(b["level"]) > level_rank(old.get("level", "A2")):
            old["level"] = b["level"]
        entries_by_fr[key] = old
    else:
        entry = {
            "fr": b["fr"],
            "ar": b["ar"],
            "en": b["en"],
            "level": b["level"],
            "contexts": ctxs,
            "ex": b["ex"]
        }
        if b.get("usage"):
            entry["usage"] = b["usage"]
        entries_by_fr[key] = entry
        new_count += 1

entries = list(entries_by_fr.values())
print(f"Total entries: {len(entries)} (new: {new_count}, merged: {merged_count}).")

missing_en = [d["fr"] for d in entries if not d.get("ex") or not d["ex"].get("en")]
print(f"Missing ex.en: {len(missing_en)}")
if missing_en:
    for m in missing_en[:20]:
        print("-", m)

# Report new entries with their levels
new_entries = [d for d in entries if normalize(d["fr"]) in [normalize(b["fr"]) for b in blocks if normalize(b["fr"]) not in [normalize(x["fr"]) for x in existing + existing_batch2]]]
print(f"Truly new entries count: {len(new_entries)}")

with open(vocab_path, "w", encoding="utf-8") as f:
    f.write("/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n")

with open(batch2_path, "w", encoding="utf-8") as f:
    f.write("/* Auto-generated vocabulary batch 2: Arabic/French/English from ArabTerm and Polyglot, filtered to common words and matched examples from app lessons and Tatoeba (CC-BY). */\nwindow.VOCAB_DATA_BATCH2 = [];\n")

print("Wrote files.")
