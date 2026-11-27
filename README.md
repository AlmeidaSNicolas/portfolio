# Portfolio · Nicolas Almeida

Personal portfolio built with Next.js and TypeScript. Spanish by default with an English toggle; deployed on Vercel. The project list comes from the [PortfolioSync API](https://github.com/AlmeidaSNicolas/portfoliosync-api) on the server (ISR, revalidated every hour), with the static cards as a fallback.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Without `PORTFOLIO_API_URL` (or with the API down), the page still renders with the static cards.

## Edit content

- Texts: `i18n/es.ts` (Spanish) and `i18n/en.ts` (English). Both files share the same shape, so TypeScript flags any missing translation.
- Links (GitHub, LinkedIn, CV…): `lib/links.ts`.
- CV: replace `public/cv/Nicolas_Almeida_CV.pdf`.
- Styles: `app/globals.css`.

## Deploy

Push to GitHub and import the repository on [vercel.com/new](https://vercel.com/new). Add one environment variable in *Settings → Environment Variables*:

- `PORTFOLIO_API_URL`: `https://portfoliosync-api.onrender.com` (no trailing slash).

The API runs on Render's free plan, which sleeps when idle: the first request can take about 50 seconds. The 5-second timeout in `lib/projects.ts` makes the page fall back to the static cards instead of waiting.
