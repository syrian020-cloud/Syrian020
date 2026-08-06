---
name: Test Syrian020 web/PWA locally
description: How to run the local web server and end-to-end test the Syrian020 PWA pages (index, french, vocab) in Chrome.
---

## Devin Secrets Needed

None.

## Local server

The app is static files only. Serve the repo root with:

```bash
python3 -m http.server 8080
```

The relevant pages are:

- `http://localhost:8080/index.html` (video lessons)
- `http://localhost:8080/french.html` (French phrase lessons)
- `http://localhost:8080/vocab.html` (vocabulary page)

## Browser launch

`~/.local/bin/google-chrome` is a CDP wrapper, not the real binary. The actual Chrome for Testing binary is under `/opt/.devin/chrome/`, e.g.:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --remote-debugging-port=29229 \
  --remote-allow-origins='*' \
  --user-data-dir=/tmp/chromev140 \
  --no-first-run --no-default-browser-check \
  --incognito http://localhost:8080/vocab.html
```

Use a fresh `--user-data-dir` or an incognito window when testing service worker updates, otherwise an old `dross-v*` cache may control the page. `--remote-allow-origins='*'` is required for Python/WebSocket CDP helpers to connect to the DevTools protocol.

## Known environment quirks

- The VNC display is 1600x1200; Chrome maximizes to that size. Client coordinates from `getBoundingClientRect()` must be offset by the browser chrome height (`window.outerHeight - window.innerHeight`), typically ~192 px. The "Chrome for Testing" banners can push this to ~190–192 px, so always compute it from the current window.
- The `computer` mouse-click actions may not register in this environment. If clicks via `computer` fail, use `xdotool mousemove <x> <y> click 1` from `exec` instead, passing actual screen coordinates (`rect.left + rect.width/2 + window.screenX`, `rect.top + rect.height/2 + window.screenY + chromeOffset`).
- `localStorage` persists between sessions (theme, language, speech rate, loop mode, sort). If the initial theme or language is not the default, the toggles still work; do not assume a clean default state.
- The `<select id="sort">` control can be driven with `xdotool` by clicking the control and using arrow keys + `Return`; make sure to blur the select afterward (click on a neutral area) before pressing `Home`/`End`, otherwise the key will change the select instead of scrolling the page.
- Chrome may show a 404 for `favicon.ico` on first load; this is harmless and does not affect functionality.
- The `browser_console` tool can drop its CDP connection in this environment. Use `/tmp/cdp_helper.py` (Python `websocket-client`) to connect to `ws://localhost:29229/devtools/page/<id>` and evaluate JS / capture `Log.entryAdded` and `Runtime.consoleAPICalled` events.

## Vocab page quick checks (1646-entry dataset with POS, contexts, and `ex` arrays)

- `data/vocab.js` contains the active dataset; `data/vocab-batch-02.js` is currently empty (`window.VOCAB_DATA_BATCH2 = []`).
- Total entries: **1646** French headwords.
- Entry structure: every entry has `fr`, `ar`, `en`, `level` (A1/A2/B1/B2), `pos` (`verb`/`adjective`/`noun`/`phrase`/`other`), `contexts` array, and `ex` (`fr`, `ar`, `en`). `ex` may be an array of such objects.
- Levels: A1=491, A2=634, B1=385, B2=136.
- POS counts: noun=741, verb=312, adjective=239, phrase=193, other=161.
- POS chip labels are localized by UI language (AR: فعل/صفة/اسم/عبارة/آخر; EN: Verb/Adjective/Noun/Phrase/Other; FR: Verbe/Adjectif/Nom/Expression/Autre).
- Contexts include: daily (687), services (391), work (298), health (251), caf (136), housing (70), cpam (50), shop (45), bank (43), mdph (40), transport (38), school (27), phone (18), family (14), car (14), france_travail (11), food (8), weather (7), restaurant (7), prefecture (6), post (4), mairie (2), office (2), geography (1). Context chips render in a horizontally scrollable `.contexts-strip`.
- A-Z letter chips appear above the context strip, with `الكل` (All) followed by `A`–`Z` and per-letter counts. Letter chips are single-select.
- Filter is OR across selected contexts, levels, and POS; search is a substring over `fr`, `ar`, `en`, `usage`, `contexts`, `pos`, and `ex.*` text.
- Each card renders `.pos-pill`, `.level-pill`, and a `.contexts-strip` of context pills. `ex` can be an array; each object is rendered as a separate example block.
- Card action buttons (from right to left in RTL Arabic, left to right in LTR English/French):
  - `speak-btn` (🔊 / `نطق` / `Speak` / `Écouter`)
  - `loop-btn` (🔁 / `تكرار` / `Loop` / `Répéter`)
  - `google-btn` (🖼️ / `صور Google` / `Images` / `Images`) — opens `https://www.google.com/search?udm=2&q=<fr>`
  - `ai-btn` (🔍 / `Google AI` / `Google AI` / `Google IA`) — opens `https://www.google.com/search?udm=50&q=<prompt>`
- Google search links will often hit a reCAPTCHA from a VM IP; that is expected. Verify the generated URL, not the results page.
- In Chrome for Testing, opening a Google AI Mode (`udm=50`) link may crash the entire browser process. If this happens, verify the generated `href` via CDP or by overriding `window.open` instead of clicking.

## C-words batch (dross-v108)

- `data/vocab.js` now contains **994** entries and `data/vocab-batch-02.js` is still empty.
- Cache name is `dross-v108`.
- Letter chip counts: `A (550)`, `B (138)`, `C (305)`, `F (1)`, all other letters `0`.
- POS counts: `verb` **251**, `adjective` **199**, `noun` **317**, `phrase` **195**, `other` **32**.
- 102 new C entries added and 55 existing C entries merged, increasing `C` from 203 to 305. Sample entries:
  - `Connaître` → verb
  - `Crème solaire` → noun
  - `Carte de séjour` → noun
  - `Cabine téléphonique` → noun
  - `Caméra` → noun (2 examples)
  - `Contacter` → verb (3 examples)

## C-words batch (dross-v110)

- `data/vocab.js` now contains **1150** entries and `data/vocab-batch-02.js` is still empty.
- Cache name is `dross-v110`.
- Letter chip counts: `A (550)`, `B (138)`, `C (461)`, `F (1)`, all other letters `0`.
- POS counts: `verb` **281**, `adjective` **217**, `noun` **408**, `phrase` **195**, `other` **49**.
- 84 new C entries added and 77 existing C entries merged, increasing `C` from 305 to 461. Sample entries:
  - `Cibler` → verb (B1), context `work` (duplicate context fixed; one `عمل` chip rendered)
  - `Code postal` → noun (A1), context `services`
  - `Créer` → verb (A2), 3 trilingual examples
  - `Crédit bancaire` → noun (B1)
  - `Capture d'écran` → noun (A2)
  - `Chauffeur-livreur` → noun (B1)

## C-words batch (dross-v111)

- `data/vocab.js` now contains **1204** entries and `data/vocab-batch-02.js` is still empty.
- Cache name is `dross-v111`.
- Letter chip counts: `A (550)`, `B (138)`, `C (515)`, `F (1)`, all other letters `0`.
- POS counts: `verb` **285**, `adjective` **226**, `noun` **432**, `phrase` **195**, `other` **66**.
- 54 new C entries added and 89 existing C entries merged, increasing `C` from 461 to 515. Sample entries:
  - `Combustible` → other (B2)
  - `Commande en ligne` → noun (A2)
  - `Contrat de travail` → noun (A2), context `work` (`عمل`); search also matches `Contrat` first due to substring search
  - `Croiser les bras` → other (B1)
  - `Changement climatique` → noun (B1)
  - `Climatiseur` → noun (A2), context `housing` (`سكن`), 2 trilingual examples
  - `Code postal` → noun (A1), context `services`, 2 trilingual examples
  - `Créer` → verb (A2), 3 trilingual examples
  - `Contacter` → verb (A2), 3 trilingual examples
- Search `Contacter` also matches `À défaut de` (its example contains `contacterai`) before matching `Contacter`; this is expected substring search behavior.
- Each new idiom uses the `ex` array with 2 trilingual example objects.

## C-words batch (dross-v112)

- `data/vocab.js` now contains **1243** entries and `data/vocab-batch-02.js` is still empty.
- Cache name is `dross-v112`.
- Letter chip counts: `A (550)`, `B (138)`, `C (554)`, `F (1)`, all other letters `0`.
- POS counts: `verb` **287**, `adjective` **227**, `noun` **465**, `phrase` **195**, `other` **69**.
- 39 new C entries added and 21 existing C entries merged, increasing `C` from 515 to 554. Sample entries:
  - `Cabane` → noun (B1)
  - `Caissier / Caissière` → noun (A2)
  - `Centre commercial` → noun (A1)
  - `Carnivore` → other (B2)
  - `Championnat` → noun (B1)
  - `Créer` → verb (A2), 3 trilingual examples
  - `Climatiseur` → noun (A2), context `housing` (`سكن`), 2 trilingual examples
  - `Contacter` → verb (A2), 3 trilingual examples
- Search `Créer` also returns `Créer une entreprise` because the phrase contains the substring `Créer`; this is expected substring search behavior.
- Search `Contacter` still matches `À défaut de` first due to its example containing `contacterai`.

## CAF / housing / admin batch (dross-v113)

- `data/vocab.js` now contains **1351** entries and `data/vocab-batch-02.js` is still empty.
- Cache name is `dross-v113`.
- Letter chip counts: `A (561)`, `B (143)`, `C (565)`, `D (13)`, `E (11)`, `F (3)`, `G (1)`, `H (3)`, `I (2)`, `J (4)`, `L (4)`, `M (5)`, `N (1)`, `O (4)`, `P (5)`, `Q (2)`, `R (13)`, `S (6)`, `T (3)`, `V (2)`, all other letters `0`.
- POS counts: `noun 548`, `verb 299`, `adjective 231`, `phrase 194`, `other 79`.
- Context counts: `daily 687`, `services 284`, `work 245`, `housing 70`, `health 55`, `transport 38`, `shop 45`, `bank 35`, `school 27`, `phone 18`, `caf 17`, `car 14`, `family 14`, `france_travail 11`, `weather 7`, `restaurant 7`, `food 8`, `prefecture 6`, `post 4`, `cpam 4`, `mairie 2`, `office 2`, `geography 1`.
- 108 new entries added and 19 existing entries merged (focus on CAF/housing/admin terms). Sample entries:
  - `CAF` → noun (A1), context `services`
  - `APL (Aide personnalisée au logement)` → noun (A1), contexts `services`, `housing`
  - `RSA (Revenu de solidarité active)` → noun (A1), contexts `services`, `bank`
  - `Logement` → noun (A1), context `housing`
  - `Loyer` → noun (A1), contexts `housing`, `bank`
  - `Demande` → noun (A1), context `services`
  - `Dossier` → noun (A1), context `services`
  - `Faire une demande` → other (A1), context `services`
  - `Bail` → noun (A2), context `housing`
  - `Allocations` → noun (A1), context `services`
- New administrative terms often appear with `CAF` or `services`/`housing` context chips.
- Searching short administrative words (`CAF`, `Demande`, `Dossier`, `Logement`, `Loyer`) returns many results because the substring also matches contexts and examples; exact entries are present in the result list.
- TTS loop on a single-example entry (e.g. `Bail`) emits 6 unique `fr/ar/en` utterances per cycle (headword + 1 example × 3 languages).

- Sample B nouns/adjectives/phrases (each returns 1 result):
  - `Bureau` → noun
  - `Banque` → noun
  - `Bateau` → noun
  - `Boulangerie` → noun
  - `Bon marché` → phrase
  - `Bien sûr` → phrase
  - `Bas / Basse` → adjective
  - `Bref / Brève` → adjective
  - `Bref (adv.)` → phrase
  - `Beau / Belle` → adjective
- Bénévolat entries:
  - `Faire du bénévolat` → phrase, 4 trilingual examples
  - `Le bénévolat` → noun, single example
  - `Être bénévole` → phrase, single example
- Added/updated common B verbs (each returns 1 result):
  - `Bénir` → `Le prêtre a béni les mariés.`
  - `Bosser` → `Je bosse jusqu'à 18h aujourd'hui.`
  - `Boucher` → `L'évier est bouché.`
  - `Bouffer` → `On va bouffer un truc vite fait ?`
  - `Boutonner` → `Boutonne ta chemise, il fait froid.`
  - `Brasser` → `Cette entreprise brasse de la bière artisanale.`
  - `Bâiller` (updated) → `Il bâille tout le temps, il est fatigué.`
  - `Baigner` (updated) → `Je baigne mon fils tous les soirs.`
  - `Se balader` → `On se balade dans le parc ce week-end ?`
  - `Bafouiller` → `Il a bafouillé quelques excuses.`
  - `Boiter` → `Depuis son accident, il boite un peu.`
  - `Bouquiner` → `J'aime bouquiner le soir avant de dormir.`
  - `Bredouiller` → `Elle a bredouillé une réponse confuse.`
  - `Brunir` → `Sa peau a bruni au soleil.`
  - `Buller` → `Aujourd'hui, je bulle devant la télé.`
  - `Bazarder` → `J'ai bazardé mes vieux meubles.`
  - `Bifurquer` → `La route bifurque à gauche après le pont.`
  - `Botter` → `Ce projet me botte vraiment.`
  - `Braver` → `Ils ont bravé la tempête pour rentrer.`
  - `Bombarder` → `La ville a été bombardée pendant la guerre.`
  - `Brimer` → `Il se sentait brimé par son chef.`
  - `Brusquer` → `Ne le brusque pas, il a besoin de temps.`
  - `Brutaliser` → `Personne ne doit être brutalisé au travail.`
  - `Braiser` → `On va braiser la viande pendant deux heures.`
  - `Bichonner` → `Elle bichonne toujours ses plantes.`
  - `Banaliser` → `Il ne faut pas banaliser ce genre de comportement.`
  - `Bonifier` → `Le temps a bonifié ce vin.`
  - `Borner` → `Il s'est borné à répondre par oui ou non.`
  - `Bafouer` → `Cette décision bafoue les règles de l'entreprise.`
  - `Beugler` → `La vache beugle dans le champ.`
  - `Barbouiller` → `L'enfant a barbouillé le mur avec de la peinture.`
  - `Bloguer` → `Elle blogue sur la cuisine française depuis deux ans.`
  - `Butiner` → `Les abeilles butinent les fleurs du jardin.`
  - `Bourlinguer` → `Il a bourlingué pendant dix ans avant de s'installer ici.`
  - `Bomber` → `Il bombe le torse pour montrer sa fierté.`
- Also still present from previous curation: `Bouder`, `Brouiller`, `Basculer`.
- Removed rare/old/agricultural B verbs including: `Breveter`, `Bipper`, `Bourrer`, `Broncher`, `Bruiner`, `Budgétiser`, `Buter`, `Bâcler`, `Bannir`, `Baptiser`, `Bidonner`, `Blaguer`, `Blâmer`, `Bourdonner`, `Barder`, `Barrer`, `Bastonner`, `Bêcher`, `Bégayer`, `Biner`, `Bivouaquer`, `Brader`, `Broyer`, `Brouter`, `Bidouiller`, `Brailler`, `Bétonner`, `Bluffer`, `Bousiller`, `Brider`, `Broder`, `Bruncher`, `Besogner`, `Babiller`, `Barboter`, `Barguigner`, `Bénévoler`, `Bâillonner`, `Baratter`, `Biffer`, `Baragouiner`, `Bâfrer`.
- Search examples:
  - `Se balader` → 1 result under `B` filter.
  - `Bosser` / `Bénir` / `Bloguer` / `Bomber` / `Bouffer` → 1 result each.
  - `Boire` → 1 result; example `Je bois beaucoup d'eau.`; Arabic `يشرب`.
  - `Bloquer` → 1 result; example `Ma carte bancaire est bloquée.`; contexts include `bank`.
  - `Bénéficier` → 1 result; example `Je bénéficie de l'aide au logement.`
  - Arabic `يشرب` finds `Boire`.

## Work / health / MDPH / CAF phrases batch (dross-v114)

- `data/vocab.js` now contains **1430** entries and `data/vocab-batch-02.js` is still empty.
- Cache name is `dross-v114`.
- Letter chip counts: `A (566)`, `B (146)`, `C (573)`, `D (25)`, `E (14)`, `F (6)`, `G (1)`, `H (4)`, `I (8)`, `J (12)`, `L (5)`, `M (13)`, `N (3)`, `O (4)`, `P (8)`, `Q (2)`, `R (17)`, `S (13)`, `T (6)`, `V (4)`, all other letters `0`.
- POS counts: `noun 593`, `verb 303`, `adjective 232`, `phrase 194`, `other 108`.
- Context counts: `daily 687`, `services 327`, `work 260`, `health 83`, `housing 70`, `bank 42`, `shop 45`, `transport 38`, `school 27`, `phone 18`, `caf 17`, `car 14`, `family 14`, `france_travail 11`, `weather 7`, `restaurant 7`, `food 8`, `prefecture 6`, `post 4`, `cpam 4`, `mairie 2`, `office 2`, `geography 1`.
- 79 new entries added and 7 existing entries merged, focusing on work/health/MDPH and CAF phrases. Sample entries:
  - `Emploi` → noun (A1), context `work`
  - `Sans emploi` → other (A2), context `work`
  - `CDD` → noun (A1), context `work`
  - `CDI` → noun (A1), context `work`
  - `Salaire` → noun (A1), contexts `bank`, `work`
  - `Bulletin de salaire` → noun (B1), contexts `bank`, `work`
  - `Contrat de travail` → noun (A2), context `work`, 2 trilingual examples
  - `MDPH` → noun (A1), context `services`
  - `Handicap` → noun (A2), context `health`
  - `Fatigue` → noun (A1), context `health`
  - `Douleur` → noun (A2), context `health`
  - `Symptôme` → noun (B1), context `health`
  - `Maladie chronique` → noun (A1), context `health`
  - `Suivi médical` → noun (A1), contexts `services`, `health`
  - `Traitement médical` → noun (A1), contexts `services`, `health`
  - `Avis médical` → noun (A1), contexts `services`, `health`
  - `Décision défavorable` → other (A1), context `services`
- Useful CAF phrases (all `other` A1, context `services`):
  - `Je souhaite expliquer ma situation`
  - `Je voudrais savoir où en est mon dossier`
  - `Mon dossier est toujours en attente`
  - `J'ai envoyé tous les documents`
  - `Je n'ai pas reçu de réponse`
  - `Je souhaite faire un recours`
- Searching short work/health terms (`Emploi`, `CDI`, `Salaire`, `MDPH`, `Fatigue`) returns multiple substring matches; exact entries are present in the result list.
- TTS loop on `Contrat de travail` (2 examples) emits 9 unique `fr/ar/en` utterances per cycle.

## AAH / CPAM / hospital / pharmacy / work / admin batch (dross-v115)

- `data/vocab.js` contains **1535** entries.
- Cache name is `dross-v115`.
- Letter chip counts: `A (578)`, `B (148)`, `C (584)`, `D (34)`, `E (19)`, `F (11)`, `G (3)`, `H (7)`, `I (12)`, `J (12)`, `L (6)`, `M (17)`, `N (4)`, `O (9)`, `P (25)`, `Q (2)`, `R (28)`, `S (20)`, `T (10)`, `U (2)`, `V (4)`.
- POS counts: `noun 680`, `verb 311`, `adjective 234`, `phrase 193`, `other 117`.
- Context counts: `daily 687`, `services 361`, `work 280`, `health 157`, `housing 70`, `bank 43` (other contexts unchanged from dross-v114).
- Sample entries: `AAH (Allocation aux adultes handicapés)`, `CPAM (Caisse Primaire d'Assurance Maladie)`, `Carte Vitale`, `Hôpital`, `Pharmacie`, `Médicament`, `Traitement` (2 examples, health+services), `CV (Curriculum vitae)`, `Lettre de motivation`, `Entretien d'embauche`, `Administration` (2 examples, daily only at this point), `Démarche` (B1, no contexts at this point), `Formulaire` (A1, no contexts at this point), `Décision`, `Contester`.
- TTS loop on `Traitement` (2 examples) emits 9 unique `fr/ar/en` utterances per cycle.

## dross-v116 context patch

- `data/vocab.js` still contains **1535** entries; `sw.js` cache bumped to `dross-v116`.
- The patch adds the `services` context to `Démarche`, `Formulaire`, and `Administration`.
- After the patch:
  - `services` context count is **364** (was 361).
  - `Démarche` → noun B1, contexts `services`, 1 example.
  - `Formulaire` → noun A1, contexts `services`, 1 example.
  - `Administration` → noun A2, contexts `daily`, `services`, 2 examples.
  - `work`, `health`, `bank`, `housing`, and all other context counts remain unchanged from dross-v115.
- All other entries from dross-v115 remain unchanged.

## Medical symptoms / blood tests / hepatitis B / MDPH work batch (dross-v117)

- `data/vocab.js` now contains **1646** entries; `sw.js` cache bumped to `dross-v117`.
- Letter chip counts: `A (589)`, `B (152)`, `C (591)`, `D (48)`, `E (25)`, `F (16)`, `G (4)`, `H (10)`, `I (15)`, `J (21)`, `L (8)`, `M (24)`, `N (6)`, `O (9)`, `P (30)`, `Q (2)`, `R (40)`, `S (26)`, `T (15)`, `U (2)`, `V (13)`.
- POS counts: `noun 741`, `verb 312`, `adjective 239`, `phrase 193`, `other 161`.
- Context counts: `daily 687`, `health 251`, `services 391`, `work 298`, `housing 70`, `bank 43`, `shop 45`, `transport 38`, `school 27`, `phone 18`, `caf 17`, `car 14`, `family 14`, `france_travail 11`, `weather 7`, `restaurant 7`, `food 8`, `prefecture 6`, `post 4`, `cpam 4`, `mairie 2`, `office 2`, `geography 1`.
- 111 new entries added and 17 merged, focusing on medical symptoms, blood tests, hepatitis B, and MDPH/work terms. Sample entries:
  - `Douleur` → noun A1, health, 2 examples
  - `Avoir mal` → other A1, health
  - `Fièvre` / `Toux` / `Rhume` / `Nausée` / `Vomir` / `Diarrhée` / `Constipation` / `Ballonnement` / `Reflux` / `Brûlure` / `Vertige` → A1 health
  - `J'ai des symptômes` → other A1, health
  - `Prélèvement sanguin` / `Bilan sanguin` / `Taux` / `Évolution` → noun A1, health
  - `Stable` → adjective A1, health
  - `Amélioration` → noun A1, health+services+work, 2 examples
  - `Aggravation` → noun A1, health, 2 examples
  - `Hépatite B` / `Charge virale` / `ADN viral` / `Antigène HBs` / `Anticorps` / `Sérologie` / `Transaminases` / `ALAT (Alanine aminotransférase)` / `ASAT (Aspartate aminotransférase)` / `Échographie du foie` / `Fibrose` / `Cirrhose` → noun A1, health
  - `Médecine du travail` / `Médecin du travail` / `Aptitude au travail` / `Inaptitude` → noun A1, services+work+health
  - `Mi-temps thérapeutique` → noun A1, work+health
  - `Aménager les horaires` / `Réduire le temps de travail` / `Changer de poste` / `Adapter les tâches` → other A1, work
  - `Demander un aménagement` → other A1, services+work
- Searching common short health/work terms returns multiple substring matches; exact entries are present in the result list.
- TTS loop on `Douleur` (2 examples) emits 9 unique `fr/ar/en` utterances per cycle.

## CAF / CPAM / MDPH context fix (dross-v118)

- `data/vocab.js` still contains **1646** entries; `sw.js` cache bumped to `dross-v118`.
- `vocab.html` `CTX_LABELS` now includes `mdph: { ar: 'MDPH', en: 'MDPH', fr: 'MDPH' }`.
- Re-tagged CAF/administrative entries with context `caf` (136 entries), CPAM/health-insurance entries with `cpam` (50 entries), and MDPH/handicap/work-adaptation entries with `mdph` (40 entries). Existing `services`, `health`, `work`, `bank`, and `housing` contexts are preserved.
- Context counts after the fix: `daily 687`, `services 391`, `work 298`, `health 251`, `caf 136`, `housing 70`, `cpam 50`, `shop 45`, `bank 43`, `mdph 40`, `transport 38`, `school 27`, `phone 18`, `family 14`, `car 14`, `france_travail 11`, `food 8`, `weather 7`, `restaurant 7`, `prefecture 6`, `post 4`, `mairie 2`, `office 2`, `geography 1`.
- Sample entries:
  - `CAF` / `APL (Aide personnalisée au logement)` / `RSA (Revenu de solidarité active)` / `Dossier` / `Demande` / `Attestation de droits` → context `caf` (+ existing `services`/`housing`/`bank`)
  - `CPAM (Caisse Primaire d'Assurance Maladie)` / `Carte Vitale` / `Remboursement` / `Ordonnance` / `Bilan sanguin` / `Hépatite B` → context `cpam` (+ `health`/`services`)
  - `MDPH` / `RQTH` / `Aménagement du poste` / `Capacité de travail` / `Inaptitude` / `Mi-temps thérapeutique` → context `mdph` (+ `health`/`work`/`services`)
- Filtering by the `CAF`, `CPAM`, and `MDPH` context chips returns the expected counts and renders the `ex` arrays.
- The debug APK was rebuilt after this fix.

## Modernized `vocab.html` UI (dross-v95)

- `vocab.html` now uses a refreshed dark/light palette, glass-morphism sticky `header` (`backdrop-filter: blur(12px)`), a `.hero` section with a gradient top accent line, and a `.toolbar` grid layout.
- Filter chips are wrapped in `.filter-section` cards with `var(--bg-secondary)` backgrounds.
- The A-Z letter chips render in `.letters-row` and remain single-select.
- Context chips render in a horizontally scrollable `.contexts-strip` (`overflow-x: auto`).
- Each `.vocab-card` has a 3px gradient top accent line (`::before`), a `.example` block with a left accent line, and `.card-actions` displayed as a 4-column grid (`grid-template-columns: repeat(4, 1fr)`).
- Hover on `.vocab-card` raises the card (`transform: translateY(-2px)`) and increases shadow.
- Mobile (`max-width: 640px`): `.toolbar` becomes 2-column, `#search` spans the full width (`grid-column: 1 / -1`) and uses a smaller radius, and `.card-actions` stays 4-column.

## Service worker and caching

- `sw.js` is currently on cache **`dross-v123`** and uses `new Request(url, { cache: 'reload' })` during `cache.addAll()` to force fresh network fetches.
- When testing SW updates, use a fresh incognito/profile. You can inspect the active cache with:
  ```js
  (async () => { console.log(await caches.keys()); })();
  ```
- If `data/manifest.js` or any `data/stage*.js` file is missing, the install step fails and `dross-v87` will not activate.

## Android APK testing

- The debug APK is built to `android/app/build/outputs/apk/debug/app-debug.apk` after Capacitor rebuilds.
- If no Android device or emulator is attached (`adb devices` is empty), runtime APK testing is not feasible; only inspect APK presence/size or metadata.

## CAF vocabulary batch (dross-v121)

- `data/vocab.js` now contains **1795** entries; `sw.js` cache bumped to `dross-v121`.
- This is the second CAF batch: 106 parsed entries (19 nouns, 87 phrases/sentences), 96 new unique entries added and 10 merged with existing records.
- New terms include `Le compte CAF`, `Le courrier / l'avis`, `Un justificatif`, `Le quotient familial`, `L'aide au logement (APL / ALS)`, `Une régularisation`, `Un trop-perçu`, `Faire une simulation`, `Le versement`, housing terms (`L'unité d'habitation`, `La surface habitable`, `Le loyer`, `Le bail`, `Le propriétaire`, `Le locataire`, `La quittance de loyer`, `Le DPE`, `La décence du logement`, `Changer de logement`), and 87 ready-to-use CAF situations/sentences.
- All CAF entries are tagged with context `caf` (**298** unique entries); merged entries keep existing `services`/`housing`/`bank` contexts.
- POS counts: `noun 776`, `verb 317`, `phrase 306`, `adjective 239`, `other 157`.
- Context counts: `daily 687`, `caf 298`, `services 391`, `work 298`, `health 251`, `housing 70`, `cpam 50`, `shop 45`, `bank 43`, `mdph 40`, `transport 38`, `school 27`, `phone 18`, `family 14`, `car 14`, `france_travail 11`, `food 8`, `weather 7`, `restaurant 7`, `prefecture 6`, `post 4`, `mairie 2`, `office 2`, `geography 1`.
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile.
  2. Confirm active service worker cache is `dross-v121`.
  3. Confirm `#stats` shows `1795 result(s)` and context chips match the counts above.
  4. Filter by the `CAF` context chip; expect the chip label to show `CAF (298)` and the results count to also show **298**.
  5. Search `Le compte CAF`, `Le loyer`, `Faire une simulation`, and sample situations like `Bonjour, j'ai rendez-vous avec un conseiller.` and `Je voudrais faire une demande d'APL.` Verify POS, level, context pills, and `ex` blocks.
  6. Click the `Loop` button on an entry with examples and on a situation entry (no `ex`) to verify no JS runtime errors.
  7. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  8. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this batch.

## CAF verbs batch (dross-v122)

- `data/vocab.js` now contains **1834** entries; `sw.js` cache bumped to `dross-v122`.
- This batch added 38 new CAF verbs and merged 27 existing entries to add the `caf` context.
- New/merged CAF verb sample entries (all `caf` context, `Verb` POS):
  - `Demander` → A1, 1 example
  - `Déposer (un dossier / une demande)` → A1, 1 example
  - `Fournir` → A1, 1 example
  - `Transmettre` → B1, `services` + `caf`, 3 examples
  - `Vérifier` → A1, 2 examples
  - `Réévaluer` → A1, 1 example
  - `Joindre` → B1, `services` + `caf`, 3 examples
  - `Modifier` → A2, 3 examples
  - `Consulter` → A2, `health` + `caf`, 4 examples
  - `Réclamer` → A1, 1 example
  - `Déclarer sur l'honneur` → A1, 1 example
- POS counts: `noun 776`, `verb 356`, `phrase 306`, `adjective 239`, `other 157`.
- Context counts: `daily 687`, `caf 359`, `services 391`, `work 298`, `health 251`, `housing 70`, `cpam 50`, `shop 45`, `bank 43`, `mdph 40`, `transport 38`, `school 27`, `phone 18`, `family 14`, `car 14`, `france_travail 11`, `food 8`, `restaurant 7`, `weather 7`, `prefecture 6`, `post 4`, `mairie 2`, `office 2`, `geography 1`.
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile.
  2. Confirm active service worker cache is `dross-v122`.
  3. Confirm `#stats` shows `1834 result(s)` and context chips match the counts above.
  4. Filter by the `CAF` context chip; expect the chip label to show `CAF (359)` and the results count to also show **359**.
  5. Search each of the sample CAF verbs above and verify POS pill is `Verb`, level pill matches, context pills include `CAF`, and FR/AR/EN example blocks render.
  6. Click the `Loop` button on a one-example card (e.g. `Demander`) and a multi-example card (e.g. `Consulter`); verify the card highlights and no JS runtime errors occur.
  7. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  8. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this batch.

## CAF verbs continuation batch (dross-v123)

- `data/vocab.js` now contains **1851** entries; `sw.js` cache bumped to `dross-v123`.
- This batch parsed 25 entries (11 verbs, 12 phrases, 2 noun phrases); 17 were new and 8 were merged with existing records.
- New/merged CAF sample entries:
  - `Annuler` → Verb A2, `daily` + `services` + `work` + `caf`, 3 examples
  - `Renoncer` / `Remplacer` / `Solliciter` / `Revendiquer` → Verb A1, `caf`, 1 example each
  - `Prendre en compte` → Phrase A1, `caf`
  - `Actualiser sa situation` → Other A1, `caf` + `services`, 2 examples
  - `Toucher (recevoir)` → Verb A1, `caf`
  - `Toucher une aide` / `Toucher le RSA` / `Toucher la prime d'activité` → Phrase A1, `caf`
  - `Les montants touchés` → Noun A1, `caf`
- POS counts: `noun 778`, `verb 362`, `phrase 315`, `adjective 239`, `other 157`.
- Context counts: `daily 687`, `caf 377`, `services 391`, `work 298`, `health 251`, `housing 70`, `cpam 50`, `shop 45`, `bank 43`, `mdph 40`, `transport 38`, `school 27`, `phone 18`, `family 14`, `car 14`, `france_travail 11`, `food 8`, `restaurant 7`, `weather 7`, `prefecture 6`, `post 4`, `mairie 2`, `office 2`, `geography 1`.
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile.
  2. Confirm active service worker cache is `dross-v123`.
  3. Confirm `#stats` shows `1851 result(s)` and context chips match the counts above.
  4. Filter by the `CAF` context chip; expect the chip label to show `CAF (377)` and the results count to also show **377**.
  5. Search each of the sample entries above and verify POS, level, context pills, and FR/AR/EN example blocks render correctly.
  6. Click the `Loop` button on a multi-example card (`Annuler`) and a single-example card (`Renoncer`); verify the card highlights and no JS runtime errors occur.
  7. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  8. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this batch.

## Stage / work / restaurant vocabulary batch (dross-v124)

- `data/vocab.js` now contains **1908** entries; `sw.js` cache bumped to `dross-v124`.
- Added `stage` context label (`تدريب` / `Internship` / `Stage`) in `vocab.html`.
- This batch parsed 108 raw stage/work/restaurant entries (format A/B mixed) and merged article variants (`Le contrat`/`Contrat`, `La commande`/`Commande`, etc.); 57 new entries and 42 merged.
- New `stage` context count: **99** entries; `work` context count: **380** entries.
- POS counts: `noun 824`, `verb 371`, `phrase 316`, `adjective 239`, `other 158`.
- Context counts: `daily 687`, `services 391`, `work 380`, `caf 377`, `health 251`, `housing 70`, `cpam 50`, `shop 45`, `bank 43`, `mdph 40`, `transport 38`, `stage 99`, `school 27`, `phone 18`, `family 14`, `car 14`, `france_travail 11`, `food 8`, `restaurant 7`, `weather 7`, `prefecture 6`, `post 4`, `mairie 2`, `office 2`, `geography 1`.
- Sample `stage` entries:
  - `La convention` → Noun B1, `Work` + `Internship`, 3 examples
  - `Le responsable` → Noun A1, `Internship` + `Work`, 2 examples
  - `Une inscription` → Noun A2, `Work` + `Internship`, 3 examples
  - `Remplir` → Verb A1, `CAF` + `Internship` + `Work`, 5 examples
  - `S’adapter` → Verb A2, `Daily` + `Work` + `Internship`, 2 examples
  - `Appliquer` → Verb A1, `Daily` + `CAF` + `Internship` + `Work`, 3 examples
  - `Une période d’essai` → Noun A1, `Work` + `Internship`, 2 examples
  - `Actuellement` → Other A1, `Internship` + `Work`
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile.
  2. Confirm active service worker cache is `dross-v124`.
  3. Confirm `#stats` shows `1908 result(s)` and context chips match the counts above.
  4. Filter by the `Stage` context chip; expect the chip label to show `Internship (99)` and the results count to also show **99**.
  5. Filter by the `Work` context chip; expect the chip label to show `Work (380)` and the results count to also show **380**.
  6. Search each sample entry and verify POS, level, context pills, and FR/AR/EN example blocks render correctly.
  7. Click `Loop` on a multi-example card (`Remplir`) and a single-example card (`S’adapter`); verify the card highlights and no JS runtime errors occur.
  8. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  9. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this batch.

## Stage context cleanup (dross-v125)

- `data/vocab.js` still contains **1908** entries; `sw.js` cache bumped to `dross-v125`.
- Removed the `stage` context from `Ajouter`, `Couper`, and `Le couteau`.
- Removed the `J’ajoute la sauce sur le sushi.` example from `Ajouter`; remaining example is `Je voudrais ajouter un document à mon dossier.`.
- `stage` context count decreased from 99 to **96**; `work` context count remains **380**.
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile.
  2. Confirm active service worker cache is `dross-v125`.
  3. Confirm `#stats` shows `1908 result(s)` and context chips show `Internship (96)` and `Work (380)`.
  4. Search `Ajouter` and verify no `Stage`/`Internship` pill and the sushi example is gone.
  5. Search `Couper` and `Le couteau` and verify no `Stage`/`Internship` pill.
  6. Click `Loop` on `Remplir` and verify no JS errors.
  7. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  8. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this cleanup.

## Sushi / Japanese restaurant vocabulary batch (dross-v126)

- `data/vocab.js` now contains **2016** entries; `sw.js` cache bumped to `dross-v126`.
- Added a new `sushi` context label (`سوشي` / `Sushi` / `Sushi`) and a `food` context label (`طعام` / `Food` / `Alimentation`) in `vocab.html`.
- Parsed and merged 125 raw sushi/restaurant/kitchen entries; after deduplication 122 unique entries were added/merged (108 new, 14 merged with existing).
- `sushi` context count: **122** entries; `restaurant` context count increased to **24**.
- POS distribution after merge: `noun 882`, `verb 383`, `phrase 349`, `adjective 244`, `other 158`.
- New sample entries:
  - `Le sushi` → Noun A1, `Sushi`, example `Je prépare des sushis frais.`
  - `Le saumon` → Noun A1, `Sushi`, example `Le saumon est utilisé pour les sushis.`
  - `Dépêche-toi` → Phrase A1, `Sushi`, example `Dépêche-toi, la commande est prête.`
  - `Attention` → Phrase A1, contexts `Phone` + `Services` + `Sushi`
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile and hard-refresh to ensure `dross-v126` is active.
  2. Confirm `#stats` shows `2016 result(s)` and context chips show `Sushi (122)` and `Restaurant (24)`.
  3. Click the `Sushi (122)` context chip and verify filtered results show `122 result(s)` and cards like `Le sushi`, `Dépêche-toi`, `Attention` render correctly.
  4. Search `Le sushi` and verify the `Le sushi` card with `Sushi` context and the example `Je prépare des sushis frais.` appears.
  5. Search `Attention` and verify the `Phrase` pill and `Sushi` context pill are present.
  6. Click `Loop` on a multi-example card (`La cuisson`) and a single-example card (`Le sushi`); verify no JS runtime errors.
  7. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  8. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this batch.

## Sushi batch 126–208 (dross-v127)

- `data/vocab.js` now contains **2095** entries; `sw.js` cache bumped to `dross-v127`.
- Parsed and merged the user's second sushi/restaurant vocabulary batch (126–208, 83 entries) into `data/vocab.js`; all 83 were added/merged.
- `sushi` context count increased from **122** to **204**; `restaurant` context count increased from **24** to **76**.
- POS distribution after merge: `noun 929`, `verb 388`, `phrase 358`, `adjective 262`, `other 158`.
- New sample entries:
  - `Rouler` → Verb A2, contexts `sushi` + `restaurant`, example `Je roule le maki avec le tapis de bambou.`
  - `Le thon rouge` → Noun A2, `sushi`, example `Le thon rouge est très apprécié pour les sushis.`
  - `Croustillant / Croustillante` → Adjective A1, `sushi`, example `La tempura est bien croustillante.`
  - `La quantité suffisante` → Phrase A1, `sushi`, example `Ajoute une quantité suffisante de riz.`
  - `La qualité` → Noun A1, contexts `stage` + `work` + `sushi` after merge; added example `La qualité est très importante en cuisine.`
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh Chrome incognito/profile and hard-refresh to ensure `dross-v127` is active.
  2. Confirm `#stats` shows `2095 result(s)` and context chips show `Sushi (204)` and `Restaurant (76)`.
  3. Click the `Sushi (204)` context chip and verify filtered results show `204 result(s)` and cards like `Rouler` and `Le poulpe` render correctly.
  4. Search `Rouler` and verify it returns the `Rouler` verb card with `Sushi` and `Restaurant` contexts and example `Je roule le maki avec le tapis de bambou.`.
  5. Search `Croustillant` and verify the adjective card with `Sushi` context appears.
  6. Click `Loop` on `Rouler` and verify the button toggles to the pause state with no JS runtime errors.
  7. Toggle dark/light mode and verify `<html data-theme>` flips without errors.
  8. Verify Google Images link includes `udm=2&q=<fr>` and Google AI link includes `udm=50`.
- The debug APK was rebuilt after this batch.

## Per-example loop icons (dross-v128)

- Added a small 🔁 loop button to each example sentence inside a vocab card in `vocab.html`.
- Clicking the per-example loop icon repeats only that example (respecting the selected language loop mode); the existing card-level `Loop` button still repeats the whole card (headword + all examples).
- Added CSS for `.loop-ex-btn` and `.example.playing` so the active example gets a green border and the button switches to a pause icon.
- Refactored TTS code into a shared `playSeq()` used by `speakEntry()` and the new `speakExample()` function.
- `state.loop` now stores `{ key, ex }` where `ex` is `null` for whole-card loops or an example index for per-example loops.
- Bumped service worker cache to `dross-v128` and rebuilt the debug APK.
- E2E verification steps:
  1. Open `http://localhost:8080/vocab.html` in a fresh incognito/profile and hard-refresh.
  2. Search `Le chef` to find a card with multiple example sentences.
  3. Verify each `.example` block has a small 🔁 button in its top-right corner.
  4. Click the first example loop icon; verify only that example's border turns green and the icon changes to ⏸, while the card-level `Loop` button remains 🔁.
  5. Stop audio and click the card-level `Loop` button; verify it still loops the headword and all examples.
  6. Ensure no JS runtime errors in DevTools console.
- The debug APK was rebuilt after this change.

## Known data-quality issues (last observed)

- None. All 2095 entries have `fr`, `ar`, `en`, `level`, `contexts`, and a complete `ex` object or array (`ex.fr`, `ex.ar`, `ex.en`) when a separate example was provided. Situation sentences use `fr`/`ar`/`en` directly and may not have a separate `ex` block. Administrative entries may also include a `usage` field.
