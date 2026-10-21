# Marcus Rust – photography site (Astro)

## Preview
1. Install Node.js 20 or newer (nodejs.org).
2. In this folder run `npm install`, then `npm run dev`, and open http://localhost:4321.

## Adding photos
- Put one web-sized JPEG per photo (about 2400px on the long edge) in
  `src/assets/photos/astro/`, `nature/` or `misc/`. Use lowercase names like `orion-nebula.jpg`.
- Astro makes the thumbnails and page-sized images itself.
- Optional details go in `src/data/photos.ts`: `subject`, `date`, and the Google Drive
  `full` link. The subject and date show above the photo without labels.

## Journal
Entries live in `src/data/journal.ts` (title, short description + paragraphs). Each one gets its own page.
The Journal page shows each entry as a clickable thumbnail. To add one, save an image named after
the entry's slug in `src/assets/journal/` (e.g. `the-equipment.jpg`, `the-process.jpg`). Entries
without an image show a gray placeholder. Any shape works; thumbnails are cropped to 3:2.

## Contact form (EmailJS: sends to your email without showing it)
1. Create a free account at emailjs.com.
2. Add an email service (connect your Gmail) and note its **Service ID**.
3. Create an email template. Set **To Email** to your address (it stays in EmailJS, not on the site),
   **Reply To** to `{{email}}`, the subject to `{{subject}}`, and put `{{name}}`, `{{email}}` and
   `{{message}}` in the body. Note its **Template ID**.
4. Copy your **Public Key** (Account page).
5. Paste the three values into `SERVICE_ID`, `TEMPLATE_ID` and `PUBLIC_KEY` in `src/pages/contact.astro`.
6. Run `npm install` (the form uses the `@emailjs/browser` package), commit the updated
   `package-lock.json`, and send yourself a test message.
These three values are visible in the page's code by design. Check EmailJS's current free-plan limits.

## Publishing
`site` in `astro.config.mjs` is set to https://marcusrust.com and `public/CNAME` holds the domain.
Push to `main`; in repo Settings → Pages set Source to **GitHub Actions**.

## Colors
All colors are variables at the top of `src/styles/site.css` (dark mode first, then light mode).

## Copyright
See `COPYRIGHT.md`. Photos may be used by anyone as long as they credit Marcus Rust.
