# Marcus Rust – photography site (Astro)

## First-time setup
1. Install Node.js 20 or newer (nodejs.org).
2. In this folder run `npm install` (this creates `package-lock.json`; commit it).
3. Run `npm run dev` and open http://localhost:4321 to preview.

## Adding photos
- Put one web-sized JPEG per photo (about 2400px on the long edge) in
  `src/assets/photos/astro/`, `nature/` or `misc/`. Use lowercase names like `orion-nebula.jpg`.
- Astro makes the thumbnails and page-sized images itself. Nothing else to export.
- Optional: add a title, date, location, camera, settings, description and the Google Drive
  "Full resolution" link in `src/data/photos.ts`.

## Publishing
1. In `astro.config.mjs`, set `site` to your address (and `base` if the repo isn't named `yourusername.github.io`).
2. Push to GitHub (branch `main`).
3. Repo Settings → Pages → Source: **GitHub Actions**. Every push then rebuilds and publishes the site.
