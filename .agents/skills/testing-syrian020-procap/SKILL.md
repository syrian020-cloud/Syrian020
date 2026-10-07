---
name: Test Syrian020 viper PWA
description: How to end-to-end test the standalone viper PWA at viper/index.html in Chrome for Testing.
---

## Devin Secrets Needed

None.

## Local server

The app is static files only. Serve the repo ROOT (not the viper/ dir — the page is at a subpath):

```bash
cd /home/ubuntu/repos/Syrian020 && python3 -m http.server 8080
```

Page: `http://localhost:8080/viper/index.html`

**Note for media tests:** `python3 -m http.server` does not send `Accept-Ranges`, so `<video>` seeking may not work; serve test MP4s from a range-aware server on a second port.

## Browser launch

`~/.local/bin/google-chrome` is a CDP wrapper, not the real binary. Use Chrome for Testing directly:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir=/tmp/chrome-viper-test --incognito --start-maximized \
  --remote-debugging-port=29229 --remote-allow-origins='*' \
  http://localhost:8080/viper/index.html
```

Use a fresh `--user-data-dir` + `--incognito` for storage isolation. If the URL arg is ignored (lands on chrome://newtab), navigate via CDP `Page.navigate`.

## Driving the page (verified reliable)

`browser_console` may fail to attach. The reliable path is CDP over websocket:

- `pip3 install websocket-client`, connect to the page's `webSocketDebuggerUrl` from `http://localhost:29229/json` **with `suppress_origin=True`** — websocket-client sends an Origin header that Chrome rejects with "Handshake status 403" even when `--remote-allow-origins='*'` is passed.
- **Clicks:** prefer CDP `Input.dispatchMouseEvent` (`mousePressed`+`mouseReleased`, button left, clickCount 1) at the element's `getBoundingClientRect()` center — viewport CSS px, no chrome-offset math, and it fires real pointer+click events that the app's delegated handlers accept. xdotool works too but needs `screenX/screenY + outerHeight-innerHeight` offset (~192 px).
- **Hidden file input** (`#import-file`, `display:none`): `DOM.enable` → `DOM.getDocument` → `DOM.querySelector` → `DOM.setFileInputFiles`, then `el.dispatchEvent(new Event('change',{bubbles:true}))` — the app's `change` listener is delegated on `#view`, so `bubbles:true` is required. No need to unhide it.
- `confirm()` blocks `importLessons` — `window.confirm = () => true` before importing.
- **Screenshots:** `import -window root` and plain X captures may return stale/identical frames in this environment. Use CDP `Page.captureScreenshot` for evidence stills — it renders the live page regardless of compositor state.

## Edge TTS specifics (viper)

- `window.EdgeTTS` from `js/edge-tts.js`. `supported()` = `enabled && !down && online && (plugin||Audio)`. `down` is a **session-only** flag (resets on reload); it flips true only on a real audio()/play() failure — so `down===true` after a speak is proof the Edge path was attempted and failed.
- Browser path uses `https://responsivevoice.org/responsivevoice/getvoice.php` (301 → code.responsivevoice.org). **curl gets 403 API_KEY_REQUIRED, but Chrome media requests may succeed** (UA/fingerprint gating) — real MP3s play with `down` staying false. Do not assume Edge is down from a curl check.
- To force and verify the webSpeech fallback: `Network.enable` + `Network.setBlockedURLs` for `*responsivevoice.org*` and `*code.responsivevoice.org*`. Then a speak click flips `down=true` and the highlight must still advance. Inject fake voices first so `webTTS()` is non-null.
- Fake voices: `speechSynthesis.getVoices = () => [{name:'FakeFR',lang:'fr-FR',default:false,localService:true,voiceURI:'f'}, ...ar-SA, en-US]` and `speechSynthesis.speak = u => setTimeout(() => u.onend && u.onend(), 800)` — firing `onend` exercises the real `webSpeak` resolve path (~1 s/lang vs ~5 s real audio, so fallback is distinguishable by pacing).
- Speak targets: `.tts-loop-btn` (🔂) per phrase = TTS loop over `state.langs` (default fr,ar,en); `.loop-lang[data-lang]` per line = single-lang loop; `#play-all` = whole lesson; `#btn-stop` (⏹) stops everything. Playing state = `.phrase.playing` + `.line[data-lang].active`.
- Banner: `#tts-banner` stays `display:none` while `EdgeTTS.supported()` is true even with zero `speechSynthesis` voices.

## Storage / naming to assert

- localStorage: `viper_*` keys only (`viper_lessons`, `viper_ui_lang`, `viper_theme`, ...). Note `edge_tts` exists in `edge-tts.js` but is only *written* by `EdgeTTS.setEnabled()` — nothing in the UI calls it.
- IndexedDB: `viper-media` (created lazily on first media use; `indexedDB.databases()` is empty until then). Media refs use `idb://<id>`.
- SW cache `viper-v*`; `caches.keys()` after load shows it.
- Export: home action bar `#btn-export` → modal → `#btn-export-lessons` (`viper-lessons-YYYY-MM-DD.json`, plain array) / `#btn-export-full` (`viper-full-*.json`, `{"viperExport":1,...,"media":{}}`). Downloads land directly in `~/Downloads` with Chrome for Testing defaults.
- Legacy import accepts `{"zeekExport":1,...}` marker (regex `"(?:viper|zeek)Export"`) — full files with media take the streaming importer only if JSON is compact (`,"media":{` marker is matched literally; spaced JSON falls back to the FileReader path, which also works).
- `document.title` is localized by UI lang — AR UI shows `viper — فرنسي / عربي / إنجليزي`; the static `<title>` tag is `viper — Français / العربية / English`.

## Quick end-to-end check

1. Fresh incognito profile → `/viper/index.html`: `dir==='rtl'`, `lang==='ar'`, title `viper — …`, `.logo` shows `viper` + `.logo-icon` `naturalWidth>0`, Bienvenue card, zero console errors, `caches.keys()` includes `viper-v*`.
2. `typeof EdgeTTS==='object'`, `EdgeTTS.supported()===true`, `#tts-banner` hidden.
3. Click `.tts-loop-btn` on a phrase → `.playing`/`.active` appear; real Edge audio plays (`down` stays false, ~5 s/lang).
4. Block responsivevoice → click again → `down===true`, highlight still advances ~1 s/lang (fallback).
5. `#btn-export` → lessons + full → `viper-*.json` in `~/Downloads`.
6. Import a `{"zeekExport":1,...}` fixture via `DOM.setFileInputFiles` → new card appears, `viper_lessons` updated.
7. `Object.keys(localStorage)` all `viper_*`.
