# BTLEd — Interactive Module (Project Overview)

This repository contains a small static site scaffold for an interactive ICT learning module with Progressive Web App (PWA) readiness.

Quick summary
- `index.html` — the site's landing/home page (currently a simple homepage).
- `pages/` — secondary pages (home, about, contact) intended for in-app navigation.
- `src/css/index.css` — main stylesheet for the site.
- `src/js/main.js` — minimal JavaScript for UI behavior.
- `assets/` — place static content here (icons, videos, etc.).
- `service-worker.js`, `manifest.json`, `offline.html` — PWA files (may or may not be present yet).

How to run locally
1. Install a simple static server, for example `http-server`:

```bash
npx http-server -c-1
```

2. Open the URL shown (e.g. `http://localhost:8080`).

Where to put content
- Videos and large media: `assets/videos/` — add files here and reference them with `/assets/videos/filename.mp4`.
- Icons: `assets/icons/` — put icon files used by `manifest.json` here.
- Additional pages: create files under `pages/` (e.g. `pages/lesson1.html`).

Editing the site (simple pointers)
- Styles: modify `src/css/index.css` to change colors, spacing, or layout.
- Scripts: add behavior to `src/js/main.js` (listeners, UI interactions).
- Navigation: edit links in `index.html` or in files under `pages/`.

PWA notes
- If you want the app to work offline and be installable, ensure `manifest.json` and `service-worker.js` are present and correctly reference assets.
- The `start_url` in `manifest.json` determines where the app opens when launched.

Onboarding / local user data
- There is currently no automatic onboarding stored locally. If you want an onboarding form that stores a local user profile (so the app can skip setup on return), I can add a small script that saves data to `localStorage` or `IndexedDB` and redirects to `pages/home.html` when found.

Next steps I can take (choose any):
- Add onboarding form and local-storage logic (so the app remembers users).
- Integrate current assets into the service worker cache for offline access.
- Create a small `README` inside `assets/videos/` explaining naming conventions.

If you want, tell me which next step to take and I'll implement it.
