# Rivercity Migration Website — Fixed

This project is a React + TypeScript + Vite website.

## Run locally

1. Install Node.js (LTS).
2. Open a terminal in this project folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Important note about forms

The original site used client-side submission state only. The forms have **not** been connected to an email service, CRM, or database because no destination/account credentials were provided. They therefore should not be treated as production lead-capture forms yet.

Before publishing, connect the forms to the service you want to receive submissions (for example, your own backend, Formspree, a CRM, or an email provider) and add the required environment variables securely.
