---
name: Test Syrian020 zeek PWA
description: How to end-to-end test the standalone zeek PWA at zeek/index.html in Chrome for Testing.
---

## Devin Secrets Needed

None.

## Local server

The app is static files only. Serve the repo ROOT (not the zeek/ dir — the page is at a subpath):

```bash
cd /home/ubuntu/repos/Syrian020 && python3 -m http.server 8080
```

Page: `http://localhost:8080/zeek/index.html`

**Note for media tests:** `python3 -m http.server` does not send `Accept-Ranges`, so `<video>` seeking may not work; serve test MP4s from a range-aware server on a second port.

## Browser launch

The Devin-managed Chrome for Testing is usually already running on CDP port 29229 with a persistent profile (`--user-data-dir=/home/ubuntu/.browser_data_dir`); check `http://localhost:29229/json` for an existing zeek tab before launching anything. If you must launch your own:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir=/tmp/chrome-zeek-test --incognito --start-maximized \
  --remote-debugging-port=29230 --remote-allow-origins='*' \
  http://localhost:8080/zeek/index.html
```

## Driving the page (verified reliable)

`browser_console` may fail to attach. The reliable path is CDP over websocket:

- `pip3 install websocket-client`, connect to the page's `webSocketDebuggerUrl` from `http://localhost:29229/json` **with `suppress_origin=True`** — websocket-client sends an Origin header that Chrome rejects with "Handshake status 403" even when `--remote-allow-origins='*'` is passed.
- **Clicks:** prefer CDP `Input.dispatchMouseEvent` (`mousePressed`+`mouseReleased`, button left, clickCount 1) at the element's `getBoundingClientRect()` center — viewport CSS px, no chrome-offset math, and it fires real pointer+click events that the app's delegated handlers accept.
- **Hidden file input** (`#import-file`, `display:none`): `DOM.enable` → `DOM.getDocument` → `DOM.querySelector` → `DOM.setFileInputFiles`, then `el.dispatchEvent(new Event('change',{bubbles:true}))` — the app's `change` listener is delegated on `#view`, so `bubbles:true` is required.
- **File-chooser dialog:** clicking `label[for="import-file"]` opens a native picker that can hang the session — call `Page.setInterceptFileChooserDialog {enabled:true}` first, then `DOM.setFileInputFiles` on the input.
- `confirm()` blocks `importLessons` — `window.confirm = () => true` before importing.
- **Mocking Capacitor FilePick** (native import path): `window.Capacitor={getPlatform:()=>'android',Plugins:{FilePick:{pick:async()=>({path,name,size}),readChunk:async({offset,length})=>({data:b64,size})}}}` — `getPlatform` is checked separately from the plugin. readChunk must slice a `window`-level byte array **dynamically per call** — capturing `const bytes=window.__x` at setup makes later fixture swaps silently reuse the first file. Chunk base64 via `String.fromCharCode.apply(null, slice.subarray(i,i+8192))`. Streaming path expects export media entries as `"id":{"type":..,"name":..,"data":"B64"}` (data LAST — `,"data":"` is the parser marker).
- **Screenshots:** `import -window root` and plain X captures may return stale/identical frames in this environment. Use CDP `Page.captureScreenshot` for evidence stills.

## Edge TTS specifics (zeek)

- `window.EdgeTTS` from `js/edge-tts.js`. `supported()` = `enabled && !down && online && (plugin||Audio)`. `down` is a **session-only** flag (resets on reload); on total source failure `lastError` gets `"src: reason"` strings and `deadSrc[src]` skips that source for 120 s. `setEnabled(true)` resets `down`/`lastError`/`deadSrc`.
- Browser path uses `https://responsivevoice.org/responsivevoice/getvoice.php` (301 → code.responsivevoice.org). **curl gets 403 API_KEY_REQUIRED, but Chrome media requests may succeed** (UA/fingerprint gating) — real MP3s play with `down` staying false. Do not assume Edge is down from a curl check.

### Forcing an Edge failure (the reliable way)

- **`Network.setBlockedURLs` is per-CDP-websocket-session** — it dies the moment your ws connection closes, and `<audio>` media-element requests can bypass it or hit the HTTP cache anyway. Observed: blocked phrases still "played" at real pace while getvoice resource count stayed flat.
- **Use an /etc/hosts blackhole instead** (passwordless sudo works on this VM):
  `echo '127.0.0.1 responsivevoice.org code.responsivevoice.org www.responsivevoice.org' | sudo tee -a /etc/hosts` → instant ERR_CONNECTION_REFUSED for all request types. Revert with `sudo sed -i '/responsivevoice/d' /etc/hosts`.
  - **Caveat:** Chrome's DNS cache keeps resolving the domain for ~minutes after recent successful fetches — a hosts entry added mid-session may have no effect (audio keeps playing). Belt-and-suspenders: keep a ws session open with `Network.setBlockedURLs` + `Network.setCacheDisabled` AND the hosts entry; URL-level blocking kills it regardless of DNS. Or block before the first successful fetch.
- **SW catch-all gotcha:** `sw.js` does `fetch(req).catch(() => caches.match('./index.html'))` — a dead cross-origin request RESOLVES with index.html (a page-context `fetch()` returns type 'basic', not an error). For an `<audio>` element this means it receives HTML → fast `onerror` → EdgeTTS error `'audio playback error'` (not a hang). Don't interpret a resolved fetch as "network is alive".
- Timing signatures (wrap `EdgeTTS.play` to log `{l,ok,ms,src|err}`): real rv success ~3000–4500 ms; fake-voice webSpeech fallback ~800 ms + gap (~1 s/lang); connection-refused failure ~15–25 ms with `'rv: audio playback error'`; stalled playback 15 s+ with `'rv: audio timeout'`.
- Instrument the toast: `new MutationObserver(...).observe(document.getElementById('toast'), {attributes:true,childList:true,characterData:true,subtree:true})` — `#toast` retains `textContent` after the `.show` class expires, so poll `classList.contains('show')` for visibility.
- **stop() history:** an earlier build let the in-flight `playUrl` watchdog outlive `stop()` → a stopped utterance later rejected `'audio timeout'` and spuriously set `deadSrc.rv`/`down`. Current code settles the promise with a marked `{stopped:true}` error (no deadSrc/toast/fallback). If `down` flips true with `lastError` set but your `__log` shows no genuine failure, suspect a stale watchdog from a previous stop — reload for a clean slate.
- Voice-settings UI: `#btn-voice` 🎙 → `#voices-modal` (`.show`); `#edge-enabled` → `EdgeTTS.setEnabled` + `edge_tts` localStorage; `#edge-voice-{fr,ar,en}` selects → `zeek_edge_voices`; `[data-voice-preview="fr|ar|en"]` ▶ → `anySpeak(EDGE_VOICE_SAMPLE[l])`; close via `#btn-close-voices`.
- Fake voices: `speechSynthesis.getVoices = () => [{name:'FakeFR',lang:'fr-FR',default:false,localService:true,voiceURI:'f'}, ...ar-SA, en-US]` and `speechSynthesis.speak = u => setTimeout(() => u.onend && u.onend(), 800)` — firing `onend` exercises the real `webSpeak` resolve path.
- Speak targets: `.tts-loop-btn` (🔂) per phrase = TTS loop over `state.langs` (default fr,ar,en); `.loop-lang[data-lang]` per line; `#play-all`; `#btn-stop` (⏹). Playing state = `.phrase.playing` + `.line[data-lang].active`.
- Banner: `#tts-banner` stays `display:none` while `EdgeTTS.supported()` is true even with zero `speechSynthesis` voices.

## Storage / naming to assert

- localStorage: `zeek_*` keys only (`zeek_lessons`, `zeek_ui_lang`, `zeek_theme`, `zeek_edge_voices`, ...). `edge_tts` is intentionally unprefixed — written by `EdgeTTS.setEnabled()` (🎙 toggle).
- IndexedDB: `zeek-media` (created lazily on first media use). Media refs use `idb://<id>`.
- SW cache `zeek-v*`; stale-SW can serve old `js/*.js` mid-upgrade — if new code doesn't appear, unregister SWs + delete caches + `Network.setCacheDisabled` + reload.
- Export: `#btn-export` → modal → `#btn-export-lessons` (`zeek-lessons-YYYY-MM-DD.json`, plain array) / `#btn-export-full` (`{"zeekExport":1,...}`). Downloads land in `~/Downloads`.
- Legacy import accepts `{"zeekExport":1,...}` marker (regex `"(?:Zeek|zeek)Export"`); compact JSON takes the streaming importer, spaced JSON falls back to FileReader path — both work.
- `document.title` is localized by UI lang — AR UI shows `zeek — فرنسي / عربي / إنجليزي`.

## Quick end-to-end check

1. Fresh profile → `/zeek/index.html`: `dir==='rtl'`, `lang==='ar'`, title `zeek — …`, `.logo` shows `zeek` + icon `naturalWidth>0`, Bienvenue card, zero console errors, `caches.keys()` includes `zeek-v*`.
2. `typeof EdgeTTS==='object'`, `EdgeTTS.supported()===true`, `#tts-banner` hidden.
3. Click `.tts-loop-btn` → `.playing`/`.active`; real Edge audio (`down` false, ~3–4.5 s/utterance).
4. Hosts-blackhole responsivevoice + reload → click → `down===true`, `lastError` has `rv: ...`, highlight advances ~1 s/lang via webSpeech (inject fake voices first).
5. Second tap → `EdgeTTS.play` not called again (`supported()===false`), no new getvoice fetches.
6. Unblock + 🎙 `#edge-enabled` off→on → `down` resets; speak → real audio again.
7. `#btn-export` → `zeek-*.json` in `~/Downloads`; import `{"zeekExport":1,...}` fixture → new card.
8. `Object.keys(localStorage)` all `zeek_*` + `edge_tts`.
