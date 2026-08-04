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

## Vocab page quick checks (550-entry dataset with POS, `usage` field, A-words + A-adjectives)

- `data/vocab.js` contains the active dataset; `data/vocab-batch-02.js` is currently empty (`window.VOCAB_DATA_BATCH2 = []`).
- Total entries: **550** French phrases (163 beginning with `À` + 236 other A-words including 78 A-verbs + 151 new A-adjectives + 89 merged entries).
- Entry structure: every entry has `fr`, `ar`, `en`, `level` (A1/A2/B1/B2), `pos` (`verb`/`adjective`/`noun`/`phrase`/`other`), `contexts` array, and `ex` (`fr`, `ar`, `en`).
- Administrative entries may also include a `usage` field rendered in a `.usage` div above the example.
- POS counts: verb=121, adjective=167, noun=80, phrase=170, other=12.
- POS chip labels are localized by UI language (AR: فعل/صفة/اسم/عبارة/آخر; EN: Verb/Adjective/Noun/Phrase/Other; FR: Verbe/Adjectif/Nom/Expression/Autre).
- Each card renders a `.pos-pill` next to `.level-pill`.
- Levels: A1=83, A2=289, B1=97, B2=81.
- Contexts include: daily (342), services (179), work (131), housing (27), health (27), bank (19), caf (16), transport (20), family (10), restaurant (5), shop (20), car (14), phone (17), France Travail (10), prefecture (6), post (4), cpam (3), school (10), mairie (2), weather (3). Context chips render in a horizontally scrollable `.contexts-strip`.
- A-Z letter chips appear above the context strip, with `الكل` (All) followed by `A`–`Z` and per-letter counts. Letter chips are single-select: clicking a letter replaces the previous selection, clicking the same letter again toggles it off, and `الكل` clears the selection. With the current 550-entry dataset only `A` has entries (550); all other letters show `0`.
- Search examples:
  - `gauche` → 1 result (`À gauche`)
  - `Abolir` → 1 result (`Abolir`)
  - `Avouer` → 1 result (`Avouer`)
  - `Acheter` → 1 result (`Acheter`)
  - `Abandonné` → 2 results (`Abandonné` + `Abandonner`); `Abandonné` card example `Ce bâtiment est abandonné.`
  - `Abordable` → 1 result; example `Un prix abordable.`
  - `Accidentel` → 1 result; example `C'était un accident.`
  - `Administratif` → 1 result; usage `الملفات والإجراءات`; example `J'ai un problème administratif.`
  - `Autonome` → 1 result; example `Je suis capable de travailler de manière autonome.`
  - `Avancé` → 1 result; example `J'ai un niveau avancé en français.`
  - `autorisation` → 1 result (`Autorisation`)
  - `CPAM` → 3 results
  - `CAF` → **25 results** now that search scans `usage`, `contexts`, `pos`, and `ex.*` text.
  - `dossier` → **20 results** because the search haystack includes `ex.fr`/`ex.ar`/`ex.en`.
  - `Mairie` (`البلدية`) → 2 results
  - `administratif` → 1 result (`Administratif`)
  - **POS text search (all UI languages):** `vocab.html` builds a `POS_BY_LABEL` map from the localized labels and first checks the query as an exact POS label before falling back to substring search.
    - English UI: `verb` → 121, `adjective` → 167, `noun` → 80, `phrase` → 170, `other` → 12
    - French UI: `Verbe` → 121, `Adjectif` → 167, `Nom` → 80, `Expression` → 170, `Autre` → 12
    - Arabic UI: `فعل` → 121, `صفة` → 167, `اسم` → 80, `عبارة` → 170, `آخر` → 12
- Filter counts:
  - level `A1` → 83, `A2` → 289, `B1` → 97, `B2` → 81
  - context `services` → 179
  - context `caf` → 16
  - context `cpam` → 3
  - context `mairie` → 2
  - POS `verb` → 121, `adjective` → 167, `noun` → 80, `phrase` → 170, `other` → 12
  - combined `POS verb` + `A2` → 25; `POS adjective` + `services` → 31
- Sorting:
  - A → Z first term: `À bas`
  - Z → A first term: `Avouer` (non-`À` A-words sort before `À` in `localeCompare`; `Avouer` is alphabetically last)
- Pagination: `pageSize` is 100; the `#load-more` button shows remaining counts `450`, `350`, `250`, `150`, `50` for the 550-entry dataset, and after a fifth click renders all 550 cards and removes the button.
- There is currently **no copy/clipboard UI** in `vocab.html`; only localized `copied` toast strings exist in `UI`.
- `usage` field:
  - Rendered in a `.usage` div with `dir="rtl"` between the `.meta` pills and the `.example` block.
  - Styled with a right accent border and subtle accent background (`vocab.html` line 116).
  - Only appears on entries that have a `usage` property; non-admin cards (e.g., `À gauche`) do not have a `.usage` element.
- Audio uses Web Speech API or Capacitor TTS; in the VM the audio may not play, but the buttons should not throw console errors.
- Card action buttons (from right to left in RTL Arabic, left to right in LTR English/French):
  - `speak-btn` (🔊 / `نطق` / `Speak` / `Écouter`)
  - `loop-btn` (🔁 / `تكرار` / `Loop` / `Répéter`)
  - `google-btn` (🖼️ / `صور Google` / `Images` / `Images`) — opens `https://www.google.com/search?udm=2&q=<fr>`
  - `ai-btn` (🔍 / `Google AI` / `Google AI` / `Google IA`) — opens `https://www.google.com/search?udm=50&q=<prompt>`
- Google AI prompt per UI language (also asks for common examples used in daily life in France):
  - AR: `تصحيح العبارة الفرنسية "<fr>" وتحليلها كلمة كلمة مع ترجمة الكلمات والجملة إلى العربية والإنجليزية والفرنسية وإعطاء أمثلة شائعة في الحياة اليومية في فرنسا`
  - EN: `Correct and analyze the French phrase "<fr>" word by word, translate the words and the phrase into Arabic, English, and French, and give common examples used in daily life in France`
  - FR: `Corriger et analyser la phrase française "<fr>" mot par mot, traduire les mots et la phrase en arabe, anglais et français, et donner des exemples courants de la vie quotidienne en France`
- `index.html` (VidCap lesson player/editor) also has a `🤖` AI button on each sentence card (next to the `📝` notebook button). It calls `openGoogleAiMode(i)` and opens `https://www.google.com/search?udm=50&hl=<lang>&q=<prompt>` where the prompt asks to correct/analyze the French phrase word by word, translate into Arabic/French/English, and give common examples used in daily life in France.
- Google search links will often hit a reCAPTCHA from a VM IP; that is expected. Verify the generated URL, not the results page.
- In Chrome for Testing, opening a Google AI Mode (`udm=50`) link may crash the entire browser process. If this happens, verify the generated `href` via CDP (`document.querySelector('.ai-btn').getAttribute('href')`) or by overriding `window.open` instead of clicking.

## Service worker and caching

- `sw.js` is currently on cache **`dross-v94`** and uses `new Request(url, { cache: 'reload' })` during `cache.addAll()` to force fresh network fetches.
- When testing SW updates, use a fresh incognito/profile. You can inspect the active cache with:
  ```js
  (async () => { console.log(await caches.keys()); })();
  ```
- If `data/manifest.js` or any `data/stage*.js` file is missing, the install step fails and `dross-v87` will not activate.

## Android APK testing

- The debug APK is built to `android/app/build/outputs/apk/debug/app-debug.apk` after Capacitor rebuilds.
- If no Android device or emulator is attached (`adb devices` is empty), runtime APK testing is not feasible; only inspect APK presence/size or metadata.

## Known data-quality issues (last observed)

- None. All 550 entries now have `fr`, `ar`, `en`, `level`, `contexts`, and a complete `ex` object (`ex.fr`, `ex.ar`, `ex.en`). Administrative entries may also include a `usage` field.
