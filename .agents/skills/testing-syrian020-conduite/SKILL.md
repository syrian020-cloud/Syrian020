---
name: Test conduite.html end-to-end
description: End-to-end testing notes for the new conduite.html practical driving exam page (FR/EN/AR, drawing board, audio, search links) in the Syrian020 repo.
---

## Page under test

- `http://localhost:8080/conduite.html` (trilingual practical driving exam study app with 12 questions)

## Key elements / selectors

- Language switcher: `.lang-switch` buttons with `data-lang="ar|en|fr"`
- Theme toggle: `#btn-theme`
- Stop audio: `#btn-stop`
- Speech-rate select: `#rate`
- Loop-mode select: `#loopmode`
- Play-all button: `#btn-global-loop`
- Drawing board toolbar button: `#btn-draw`
- Drawing board FAB: `#fab-draw`
- Drawing overlay: `#drawer`
- Canvas: `#draw-canvas`
- Drawing tools: `#draw-color`, `#draw-size`, `#draw-pen`, `#draw-eraser`, `#draw-clear`, `#draw-save`, `#draw-close`
- Per-question actions: `.speak-btn`, `.loop-btn`, `.ai-btn`, `.img-btn`
- Footer links: `footer a[href="index.html"]`, `footer a[href="french.html"]`

## Useful CDP evaluations

- Current UI language / direction: `document.documentElement.lang + '|' + document.documentElement.dir`
- Active language button: `document.querySelector('.lang-btn.active').dataset.lang`
- Drawing board open: `document.getElementById('drawer').classList.contains('open')`
- Canvas pixel sample: `c.getContext('2d').getImageData(x, y, 1, 1).data`
- Audio feedback: `document.querySelector('.question.playing')` and `document.querySelector('.line.active')`
- Search URL capture: override `window.open` before clicking `.ai-btn` / `.img-btn`
- Service worker: `navigator.serviceWorker.controller.scriptURL`

## Known quirks

- Chrome for Testing may already bind `127.0.0.1:29229` from a Devin wrapper, so a fresh instance may listen on IPv6 `[::1]:29229`. Use `http://[::1]:29229/json` if `localhost:29229` returns an unexpected page.
- The drawing canvas is a full-screen fixed overlay. Inspect it after it opens and resize if needed.
- On `index.html`, the footer link to `conduite.html` can overlap the `french.html` link in RTL layout, making the conduite link's center click target land on `french.html`. Click on the non-overlapping part of the conduite link, or use `element.click()` in CDP, and report the overlap.

## Devin Secrets Needed

None.
