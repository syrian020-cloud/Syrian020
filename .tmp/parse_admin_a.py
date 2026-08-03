import json, re, os
from collections import OrderedDict

# Read existing vocab
vocab_path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
batch2_path = "/home/ubuntu/repos/Syrian020/data/vocab-batch-02.js"
src = "/tmp/a_phrases_2.txt"

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

blocks = re.split(r"\n---\s*\n", raw)

def starts_with_arabic(s):
    return bool(re.match(r"[\u0600-\u06FF]", s.strip()))

# Mapping from usage keywords to context tags
context_map = [
    ("caf", ["caf"]),
    ("france travail", ["france_travail"]),
    ("préfecture", ["prefecture"]),
    ("prefecture", ["prefecture"]),
    ("محافظة", ["prefecture"]),
    ("cpam", ["health"]),
    ("c.p.a.m", ["health"]),
    ("mairie", ["services"]),
    ("بلدية", ["services"]),
    ("العمل", ["work"]),
    ("travail", ["work"]),
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
    ("caft", ["services"]),  # typo safety
    ("تأمين", ["services", "health"]),
    ("assurance", ["services", "health"]),
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
    ("الخدمات", ["services"]),
    ("خدمات", ["services"]),
    ("الحسابات", ["bank"]),
    ("compte", ["bank"]),
    ("الضمان الاجتماعي", ["services"]),
    ("sécurité sociale", ["services"]),
    ("مساعدات", ["services"]),
    ("aide", ["services"]),
    ("شكوى", ["services"]),
    ("réclamation", ["services"]),
    ("موعد", ["services"]),
    ("rendez-vous", ["services"]),
]

def usage_to_contexts(usage):
    if not usage:
        return ["services"]
    u = usage.lower()
    ctxs = set()
    # Also check French/Arabic names as tokens
    for keyword, tags in context_map:
        if keyword in u:
            ctxs.update(tags)
    if not ctxs:
        ctxs.add("services")
    return sorted(ctxs)

a2_set = {
    "à remplir", "à fournir", "à joindre", "à transmettre", "à envoyer",
    "à signer", "à dater", "à compléter", "à retourner", "à jour",
    "à votre disposition", "à ce jour", "à votre demande", "à partir de"
}

def assign_level(fr):
    f = fr.lower().strip()
    if f in a2_set:
        return "A2"
    return "B1"

def clean_line(line):
    return line.strip()

def parse_block(block):
    lines = [clean_line(l) for l in block.splitlines()]
    lines = [l for l in lines if l]
    # Remove leading intro
    while lines and (lines[0].startswith("اضف") or lines[0].startswith("نعم") or starts_with_arabic(lines[0]) or not re.match(r"^[Àà]", lines[0])):
        lines.pop(0)
    if not lines:
        return None
    if len(lines) < 3:
        return None
    fr = lines[0]
    ar = lines[1]
    en = lines[2]
    usage = None
    ex = None
    # Look for usage line
    usage_idx = None
    example_idx = None
    for i, l in enumerate(lines):
        if l.startswith("الاستخدام:") or l.startswith("الاستخدام :"):
            usage = re.sub(r"^الاستخدام\s*:\s*", "", l).strip()
            usage_idx = i
        if l == "مثال:" or l == "مثال":
            example_idx = i
    # Example lines after "مثال:"
    if example_idx is not None and example_idx + 3 < len(lines):
        ex = {
            "fr": lines[example_idx + 1],
            "ar": lines[example_idx + 2],
        }
        # If there is an English line before next separator/end, include it
        # Since blocks are split on ---, the next line is either empty or end
        remaining = lines[example_idx + 3:]
        # The next non-Arabic/Latin? The English example should be next
        if remaining:
            ex["en"] = remaining[0]
    elif example_idx is not None and example_idx + 2 < len(lines):
        ex = {"fr": lines[example_idx + 1], "ar": lines[example_idx + 2]}
    return {
        "fr": fr,
        "ar": ar,
        "en": en,
        "level": assign_level(fr),
        "contexts": usage_to_contexts(usage),
        "usage": usage,
        "ex": ex
    }

new_entries = []
for block in blocks:
    e = parse_block(block)
    if e:
        new_entries.append(e)

print(f"Parsed {len(new_entries)} new entries from {len(blocks)} blocks.")

# Merge: replace existing duplicates, add new
for e in new_entries:
    key = normalize(e["fr"])
    if not key:
        continue
    if key in entries_by_fr:
        old = entries_by_fr[key]
        # Replace with new, but keep usage-specific contexts + any old useful contexts
        new_ctxs = set(e.get("contexts", []))
        # Add any old context that is not generic daily? keep all to be safe
        new_ctxs.update(old.get("contexts", []))
        e["contexts"] = sorted(new_ctxs)
        # Use new example if available; if not keep old
        if not e.get("ex") and old.get("ex"):
            e["ex"] = old["ex"]
        entries_by_fr[key] = e
    else:
        entries_by_fr[key] = e

entries = list(entries_by_fr.values())
print(f"Total after merge: {len(entries)}")

# Write vocab.js
vocab_js = "/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"
with open(vocab_path, "w", encoding="utf-8") as f:
    f.write(vocab_js)

# batch 2 empty
batch2_js = "/* Auto-generated vocabulary batch 2: Arabic/French/English from ArabTerm and Polyglot, filtered to common words and matched examples from app lessons and Tatoeba (CC-BY). */\nwindow.VOCAB_DATA_BATCH2 = [];\n"
with open(batch2_path, "w", encoding="utf-8") as f:
    f.write(batch2_js)

print("Wrote", vocab_path, "and", batch2_path)
