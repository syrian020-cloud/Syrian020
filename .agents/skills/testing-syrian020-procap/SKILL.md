---
name: Test Syrian020 sexual-education Procap PWA
description: How to end-to-end test the standalone Procap copy at sexual-education/procap.html in Chrome for Testing.
---

## Devin Secrets Needed

None.

## Local server

The app is static files only. Serve the repo root with:

```bash
python3 -m http.server 8080
```

The relevant page is:

- `http://localhost:8080/sexual-education/procap.html`

## Browser launch

`~/.local/bin/google-chrome` is a CDP wrapper, not the real binary. The actual Chrome for Testing binary is under `/opt/.devin/chrome/`, e.g.:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir=/tmp/chrome-sexed-test --incognito --start-maximized \
  --remote-debugging-port=29229 --remote-allow-origins='*' \
  http://localhost:8080/sexual-education/procap.html
```

Use a fresh `--user-data-dir` and `--incognito` when testing service-worker or storage isolation, otherwise cached `dross-v*` / `sexed-v2` data and old lessons may affect the page.

## Known environment quirks

- The VNC display is 1600x1200; Chrome maximizes to that size. Client coordinates from `getBoundingClientRect()` must be offset by the browser chrome height (`window.outerHeight - window.innerHeight`), typically ~192 px.
- The `computer` mouse-click actions may not register in this environment. Use `xdotool mousemove <x> <y> click 1` from `exec`, passing actual screen coordinates (`rect.left + rect.width/2 + window.screenX`, `rect.top + rect.height/2 + window.screenY + chromeOffset`).
- The app is RTL Arabic by default (`<html lang="ar" dir="rtl">`). Language buttons are `.lang-btn[data-lang="ar|en|fr"]`.
- `localStorage` keys use the `sexed_` prefix (`sexed_lessons`, `sexed_ui_lang`, `sexed_theme`, `sexed_favs`, `sexed_notes`); the service-worker cache is `sexed-v2`. There should be no `procap_` keys in this copy.
- Chrome for Testing may crash when opening Google AI Mode (`udm=50`) links. To verify the Google AI button, either override `window.open` to capture the generated URL, or let it open and accept the crash risk.
- The test VM typically has no `speechSynthesis` voices, so TTS buttons silently do nothing by default. To verify the TTS/loop UI feedback path, inject a fake voice (`window.speechSynthesis.getVoices = () => [{ name: 'Fake', lang: 'fr-FR', default: false, localService: true, voiceURI: '' }]`) and optionally make `speechSynthesis.speak` a no-op so the highlight state persists long enough to observe.

## Quick end-to-end check

1. Open `http://localhost:8080/sexual-education/procap.html` in a fresh incognito Chrome profile.
2. Assert `html.dir === 'rtl'`, `html.lang === 'ar'`, library title is `المكتبة`, and the Bienvenue lesson card appears.
3. Toggle `#btn-theme` and assert `data-theme` switches between dark and light and the icon changes.
4. Switch languages AR → EN → FR and assert `dir`, `lang`, titles, placeholders, and action-bar labels update.
5. Add a folder with a trilingual title, then inside it add a lesson with pipe-delimited phrases such as `Bonjour | مرحبا | Hello`.
6. Open the lesson and assert `.line.fr` has `dir="ltr"`, `.line.ar` has `dir="rtl"`, `.line.en` has `dir="ltr"`, with matching text.
7. Click a speak/loop button and verify the phrase card gets `.playing` and the active line gets `.active`.
8. Click `.ai-btn` and verify a new tab is opened to a Google search URL containing `udm=50` and the phrase text.
9. Click `#btn-export`, confirm the `sexed-lessons.json` download, and inspect the JSON for the built-in Bienvenue lesson plus the custom folder/lesson.
10. Import a JSON file via the `label[for="import-file"]` picker and verify the new library state.
11. Confirm `Object.keys(localStorage)` contains only `sexed_*` keys and no `procap_*` keys.
