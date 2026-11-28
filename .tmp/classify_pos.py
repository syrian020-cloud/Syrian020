import json, re, os

vocab_path = "/home/ubuntu/repos/Syrian020/data/vocab.js"

# Load data
def load_js_array(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    start = text.find('[')
    end = text.rfind(']') + 1
    return json.loads(text[start:end])

data = load_js_array(vocab_path)

# Source files with hint
SOURCE_FILES = [
    ("/tmp/a_phrases.txt", "phrase"),
    ("/tmp/a_phrases_2.txt", "phrase"),
    ("/tmp/a_verbs.txt", "verb"),
    ("/tmp/a_words.txt", None),
    ("/tmp/a_words_v2.txt", None),
    ("/tmp/a_adjectives_1.txt", "adjective"),
    ("/tmp/a_adjectives_2.txt", "adjective"),
]

# French infinitive endings
INF_ENDINGS = ("er", "ir", "re", "oir")

# Noun suffixes (words ending with these are likely nouns)
NOUN_SUFFIXES = (
    "tion", "sion", "age", "ment", "té", "tie", "ie", "ure", "sse", "eur", "oire",
    "ance", "ence", "aison", "eille", "ille", "iste", "ème", "asme", "igue",
    "ature", "ure", "ée", "ure", "ade", "aille", "erie", "ure"
)

# Adjective suffixes
ADJ_SUFFIXES = (
    "é", "ée", "és", "ées",
    "ant", "ante", "ants", "antes",
    "if", "ive", "ifs", "ives",
    "eux", "euse", "euses",
    "teur", "trice", "teurs", "trices",
    "able", "ible", "ables", "ibles",
    "al", "ale", "aux", "ales",
    "ien", "ienne", "iens", "iennes",
    "ois", "oise", "oises",
    "ain", "aine", "ains", "aines",
    "ard", "arde", "ards", "ardes",
    "u", "ue", "us", "ues", "uë",
    "i", "ie", "is", "ies", "it", "ite", "its", "ites",
    "air", "aire", "aires",
    "el", "elle", "els", "elles",
    "ique", "iques",
    "uel", "uelle", "uels", "uelles",
    "ome", "omes",
    "ent", "ente", "ents", "entes",
    "at", "ate", "ats", "ates"
)

PREPOSITIONS = {
    "à", "avec", "après", "avant", "autour", "auprès", "auparavant",
    "en", "de", "pour", "par", "sur", "sous", "dans", "chez", "vers",
    "contre", "sans", "dès", "depuis", "pendant", "malgré"
}

ADVERBS = {
    "auparavant", "avant", "après", "aussi", "assez", "aujourd'hui", "autour",
    "auprès", "autrement", "absolument", "automatiquement", "adéquatement",
    "ailleurs", "alentour", "ainsi", "autant", "abord", "alors",
    "apaisément", "ardemment", "agréablement", "autre"
}

# Known nouns with adjective-looking endings (manual overrides)
KNOWN_NOUNS = {
    "abandon", "abri", "abus", "accès", "accord", "accroissement", "accusé de réception",
    "achat", "achèvement", "acte", "action", "activité", "actualité", "actualisation",
    "adresse", "adhesion", "adhésion", "adjoint", "adulte", "affaire", "aide",
    "adhérent", "aisance", "allégation", "allocation", "allure", "allongement", "aménagement",
    "amende", "amitié", "ampleur", "analyse", "année", "annonce", "anniversaire",
    "anomalie", "antécédent", "août", "appareil", "apparence", "appel", "appellation",
    "appétit", "apprentissage", "approche", "appui", "arbre", "arête", "argent",
    "arme", "armée", "arrangement", "arrêt", "arrondissement", "arrivée", "art",
    "article", "as", "asile", "aspiration", "assiette", "assistance", "associé",  # associé can be adj too
    "assurance", "atelier", "attache", "attente", "attention", "attestation",
    "attribution", "aube", "auberge", "audace", "autel", "autorisation", "autorité",
    "autoroute", "autruche", "auvent", "avenir", "avion", "avis", "avocat", "aviron",
    "avantage", "avancement", "augmentation", "adoption", "affection", "affluence",
    "agencement", "ambiance", "amitié", "anecdote", "angoisse", "animal", "annulaire",
    "anse", "antre", "aorte", "apaisement", "apparence", "application", "apprenti",
    "apprenant", "approbation", "archéologie", "arbitrage", "argent", "armée", "arrangement",
    "arrivée", "assemblée", "assiette", "assistance", "assurance", "athlète",
    "atlas", "atome", "attention", "attribution", "audit", "augment", "autel",
    "automne", "autonomie", "aval", "avalisation", "averse", "aviron", "avis"
}

# Known adjectives that might be missed
KNOWN_ADJECTIVES = {
    "abandonné", "abaissé", "abîmé", "abordable", "absent", "absolu", "abstrait",
    "absurde", "académique", "accablé", "accéléré", "acceptable", "accessible",
    "accidentel", "accompagné", "accompli", "accordé", "accueillant", "accumulé",
    "accusé", "actif", "actuelle", "actuel", "adapté", "adéquat", "administratif",
    "admirable", "adolescent", "adopté", "adorable", "adroit", "adulte", "aérien",
    "affectueux", "affamé", "affaibli", "affirmatif", "âgé", "agile", "agréable",
    "agressif", "agrandi", "aigu", "aiguë", "ailé", "aimable", "alarmant", "aléatoire",
    "alimentaire", "aligné", "allégé", "allongé", "ambitieux", "ambigu", "amusant",
    "ancien", "annuel", "annulable", "anonyme", "anormal", "apparent", "applicable",
    "approprié", "approfondi", "ardent", "aride", "artificiel", "artistique",
    "assidu", "associé", "assorti", "assuré", "attentif", "attentionné", "attractif",
    "attrayant", "authentique", "automatique", "autonome", "autorisé", "avancé",
    "avantageux", "avisé", "adaptable", "admissible", "agrée", "alimenté",
    "alternatif", "ample", "analytique", "approximatif", "arbitraire", "assumable",
    "acéré", "acoustique", "adaptatif", "additif", "adhésif", "adhérent", "administrable",
    "admiré", "adoptable", "adressable", "affecté", "affirmé", "agissant", "aisé",
    "alarmé", "allumé", "alterné", "anglais", "angoissant", "annexe", "annulé",
    "anticipé", "apaisant", "apaisé", "appréciable", "arbitral", "argumentatif",
    "armé", "arrangé", "articulé", "ascendant", "astucieux", "atteignable", "attendu",
    "authentifié", "automatisable", "autoritaire", "averti", "accessible financièrement",
    "abondant", "abrupt", "absentéiste", "absorbant", "accepté", "accidenté", "accru",
    "admiratif", "adoptif", "aéré", "affiché", "agité", "ambiant",
    "argumenté", "arrivé", "audacieux", "augmenté", "autrichien", "avantagé", "atypique"
}

# Verbs whose English doesn't start with "To" (rare in our data, but cover)
KNOWN_VERBS = {
    "abolir", "aborder", "absenter", "absorber", "accéder", "accélérer", "accepter",
    "accompagner", "accomplir", "accorder", "accroître", "acheter", "adapter", "adhérer",
    "admettre", "adopter", "adresser", "agir", "ajouter", "aller", "allumer", "améliorer",
    "amener", "annuler", "appliquer", "apprendre", "apporter", "apprécier", "arranger",
    "arrêter", "arriver", "assurer", "attacher", "atteindre", "attirer", "autoriser",
    "abaisser", "abandonner", "abattre", "accrocher", "accuser", "achever", "acquérir",
    "activer", "actualiser", "affirmer", "affronter", "aggraver", "ajuster", "alléger",
    "aménager", "amplifier", "anticiper", "approuver", "assembler", "analyser",
    "appartenir", "appuyer", "argumenter", "arbitrer", "associer", "assigner", "attester",
    "augmenter", "avancer", "aviser", "avertir", "avouer", "abuser", "acheminer", "assister",
    "attribuer", "aimer", "aider", "administrer", "affecter", "afficher", "agir",
    "allouer", "amender", "apparaître", "appeler", "apprécier", "approcher",
    "appartenir", "assumer", "assortir", "aérer", "abîmer", "aboutir", "accentuer",
    "accueillir", "adjoindre", "affaiblir", "agrandir", "allonger", "approfondir",
    "arbitrer", "arranger", "assainir", "assortir", "attaquer", "atterrir", "auditionner",
    "authentifier", "automatiser", "autoriser", "avaler", "avancer", "avorter"
}


def normalize(fr):
    # Lowercase, remove accents? Keep base for matching
    return re.sub(r"[^\w'\-]", "", fr.lower().strip())


def first_word(fr):
    # Take first token, strip leading s'/m'/d'/l'/j'/t'/n' and parentheses
    w = fr.split()[0].lower().strip("()'")
    # strip reflexive/object clitics s' m' t' n' etc.
    w = re.sub(r"^(s'|m'|t'|n'|j'|l'|d'|c')", "", w)
    return w


def has_suffix(w, suffixes):
    # check word ends with suffix, accounting for plurals
    for suf in suffixes:
        if w.endswith(suf):
            # avoid matching very short root (e.g. "as" -> "as")
            if len(w) > len(suf):
                return True
    return False


def ends_with_any(w, suffixes):
    return has_suffix(w, suffixes)


def base_key(fr):
    w = first_word(fr)
    # remove leading number marker if any
    w = re.sub(r"^\d+\\.?\\s*", "", w)
    return w


def classify(fr, en, source_hint=None):
    w = first_word(fr)
    base = base_key(fr)
    norm = re.sub(r"[^a-zà-ÿ'\-]", "", base.lower())
    en_lower = en.lower().strip()

    # Source hint override (adjective/verb/phrase)
    if source_hint in ("adjective", "verb", "phrase"):
        return source_hint

    # Prepositional/adverbial single words
    if base in ADVERBS:
        return "other"

    # Phrases starting with preposition
    if base in PREPOSITIONS:
        return "phrase"

    # Multi-word: decide by first word unless it is an infinitive phrase
    if ' ' in fr.strip():
        lowered = fr.strip().lower()
        # If starts with À/à -> phrase
        if lowered.startswith("à "):
            return "phrase"
        # If first word is a known verb and English starts with To -> verb phrase
        if base in KNOWN_VERBS and en_lower.startswith("to "):
            return "verb"
        # If contains a preposition -> phrase (e.g. "accusé de réception", "autour de")
        prep_re = re.compile(r"\b(de|du|des|d'|à|au|aux|en|pour|par|sur|sous|dans|chez|vers|contre|sans|avec|après|avant|auprès|malgré|depuis|dès|pendant)\b", re.I)
        if prep_re.search(fr):
            return "phrase"
        # If first word is known adjective -> adjective phrase
        if base in KNOWN_ADJECTIVES or classify_single(base, en_lower) == "adjective":
            return "adjective"
        # Otherwise inherit single-word classification (noun, other) or phrase
        single = classify_single(base, en_lower)
        if single in ("noun", "verb", "other"):
            return single
        return "phrase"

    return classify_single(base, en_lower)


def classify_single(w, en_lower):
    norm = re.sub(r"[^a-zà-ÿ'\-]", "", w.lower())

    # Known overrides
    if norm in KNOWN_VERBS:
        return "verb"
    if norm in KNOWN_ADJECTIVES:
        return "adjective"
    if norm in KNOWN_NOUNS:
        return "noun"
    if norm in ADVERBS:
        return "other"

    # Verb if English starts with To and infinitive ending
    if en_lower.startswith("to "):
        if ends_with_any(norm, INF_ENDINGS):
            return "verb"

    # Noun suffixes
    if ends_with_any(norm, NOUN_SUFFIXES):
        return "noun"

    # Adjective suffixes
    if ends_with_any(norm, ADJ_SUFFIXES):
        return "adjective"

    # Infinitive endings without To (could be noun derived from verb, but default noun unless known verb)
    if ends_with_any(norm, INF_ENDINGS):
        if norm in KNOWN_VERBS:
            return "verb"
        return "noun"

    # Default
    return "noun"


def parse_blocks(text):
    """Extract (fr, en) pairs from a source file using --- separators."""
    blocks = re.split(r"\n\s*-{3,}\s*\n", text)
    pairs = []
    for block in blocks:
        lines = [l.strip() for l in block.splitlines() if l.strip()]
        # skip intro lines and section headers
        cleaned = []
        for l in lines:
            if l.startswith(">") or l.startswith("نكمل") or l.startswith("هذه") or l.startswith("سأركز") or l.startswith("حسن") or l.startswith("نبدأ") or l.startswith("اضف"):
                continue
            cleaned.append(l)
        if len(cleaned) < 3:
            continue
        fr = re.sub(r"^\d+\.\s*", "", cleaned[0]).strip()
        ar = cleaned[1]
        en = cleaned[2]
        pairs.append((fr, en))
    return pairs


# Build source hint map (most specific wins)
pos_map = {}
for src_path, hint in SOURCE_FILES:
    if not os.path.exists(src_path):
        continue
    with open(src_path, "r", encoding="utf-8") as f:
        text = f.read()
    for fr, en in parse_blocks(text):
        key = normalize(fr)
        if key:
            # a more specific hint overrides a generic one
            if hint:
                pos_map[key] = hint
            elif key not in pos_map:
                pos_map[key] = classify(fr, en, source_hint=None)

# Apply to data and fall back to heuristic for entries not in source map
stats = {}
for d in data:
    key = normalize(d["fr"])
    source_hint = pos_map.get(key)
    pos = classify(d["fr"], d.get("en", ""), source_hint=source_hint)
    d["pos"] = pos
    stats[pos] = stats.get(pos, 0) + 1

print("POS counts:", stats)

# Save
with open(vocab_path, "w", encoding="utf-8") as f:
    f.write("/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print("Saved.")
