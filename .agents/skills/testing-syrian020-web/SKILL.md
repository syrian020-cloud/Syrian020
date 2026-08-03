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

## Vocab page quick checks (399-entry dataset with `usage` field and A-words)

- `data/vocab.js` contains the active dataset; `data/vocab-batch-02.js` is currently empty (`window.VOCAB_DATA_BATCH2 = []`).
- Total entries: **399** French phrases (163 beginning with `À` + 236 other A-words, including 78 A-verbs).
- Entry structure: every entry has `fr`, `ar`, `en`, `level` (A1/A2/B1/B2), `contexts` array, and `ex` (`fr`, `ar`, `en`).
- **26 administrative `À` entries and many new A-word entries include a `usage` field** (Arabic usage context) rendered on the card above the example.
- Levels: A1=86, A2=126, B1=93, B2=81.
- Contexts include: daily (236), services (157), work (120), housing (24), health (20), bank (16), caf (16), transport (18), family (6), restaurant (5), shop (8), car (6), phone (14), France Travail (10), prefecture (6), post (4), cpam (3), school (4), mairie (2), weather (3).
- Search examples:
  - `gauche` → 1 result (`À gauche`)
  - `Abolir` → 1 result (`Abolir`) with example `Le gouvernement veut abolir cette loi.`
  - `Accélérer` → 1 result (`Accélérer`)
  - `Avouer` → 1 result (`Avouer`)
  - `Acheter` → 1 result (`Acheter`)
  - `autorisation` → 1 result (`Autorisation`)
  - `CPAM` → 4 results (`À la demande de`, `Affiliation`, `Assurance`, `Attestation de droits`)
  - `CAF` → **25 results** now that search scans `usage`, `contexts`, and `ex.*` text across 399 entries.
  - `dossier` → **20 results** because the search haystack includes `ex.fr`/`ex.ar`/`ex.en`.
  - `Mairie` → 7 results
  - `demande` → 3 results (`À la suite de votre demande`, `À la demande de`, `À votre demande`)
  - `remplir` → 1 result (`À remplir`)
  - `envoyer` → 1 result (`À envoyer`)
  - `réception` → 1 result (`À réception de`)
  - `Préfecture` → 2 results (`À la demande de`, `À remplir`)
  - `France Travail` → 3 results (`À la demande de`, `À fournir`, `À transmettre`)
  - `paiement` → 1 result (`À défaut de paiement`)
- Filter counts:
  - level `A1` → 86, `A2` → 126, `B1` → 93, `B2` → 81
  - context `services` → 157
  - context `caf` → 16
  - context `cpam` → 3
  - context `mairie` → 2
- Sorting:
  - A → Z first term: `À bas`
  - Z → A first term: `Avouer` (non-`À` A-words sort before `À` in `localeCompare`; `Avouer` is now alphabetically last)
- Pagination: `pageSize` is 100; the `#load-more` button shows remaining counts `299`, `199`, `99` for the 399-entry dataset, and after a fourth click renders all 399 cards and removes the button.
- `usage` field:
  - Rendered in a `.usage` div with `dir="rtl"` between the `.meta` pills and the `.example` block.
  - Styled with a right accent border and subtle accent background (`vocab.html` line 116).
  - Only appears on entries that have a `usage` property; non-admin cards (e.g., `À gauche`) do not have a `.usage` element.
- Audio uses Web Speech API or Capacitor TTS; in the VM the audio may not play, but the buttons should not throw console errors.
- Card action buttons (from right to left in RTL Arabic, left to right in LTR English/French):
  - `speak-btn` (🔊 / `نطق` / `Speak` / `Écouter`)
  - `loop-btn` (🔁 / `تكرار` / `Loop` / `Répéter`)
  - `google-btn` (🖼️ / `صور Google` / `Images` / `Images`) — opens `https://www.google.com/search?udm=2&q=<fr>`
  - `ai-btn` (✨ / `Google AI` / `Google AI` / `Google IA`) — opens `https://www.google.com/search?udm=50&q=<fr>%20<prompt>`
- Google AI prompt per UI language:
  - AR: `<fr> ترجمة للعربية والفرنسية مع أمثلة شائعة`
  - EN: `<fr> translation to Arabic and French with common examples`
  - FR: `<fr> traduction arabe français avec exemples courants`
- Google search links will often hit a reCAPTCHA from a VM IP; that is expected. Verify the generated URL, not the results page.
- In Chrome for Testing, opening a Google AI Mode (`udm=50`) link may crash the entire browser process. If this happens, verify the generated `href` via CDP (`document.querySelector('.ai-btn').getAttribute('href')`) instead of clicking.

## Service worker and caching

- `sw.js` is currently on cache **`dross-v87`** and uses `new Request(url, { cache: 'reload' })` during `cache.addAll()` to force fresh network fetches.
- When testing SW updates, use a fresh incognito/profile. You can inspect the active cache with:
  ```js
  (async () => { console.log(await caches.keys()); })();
  ```
- If `data/manifest.js` or any `data/stage*.js` file is missing, the install step fails and `dross-v87` will not activate.

## Android APK testing

- The debug APK is built to `android/app/build/outputs/apk/debug/app-debug.apk` after Capacitor rebuilds.
- If no Android device or emulator is attached (`adb devices` is empty), runtime APK testing is not feasible; only inspect APK presence/size or metadata.

## Known data-quality issues (last observed)

- None. All 163 entries now have `fr`, `ar`, `en`, `level`, `contexts`, and a complete `ex` object (`ex.fr`, `ex.ar`, `ex.en`). The 26 administrative entries also include a `usage` field.
