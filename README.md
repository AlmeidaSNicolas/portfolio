# Portfolio · Nicolas Almeida

Personal portfolio built with Next.js and TypeScript. Spanish by default with an English toggle; fully static, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

- Texts: `i18n/es.ts` (Spanish) and `i18n/en.ts` (English). Both files share the same shape, so TypeScript flags any missing translation.
- Links (GitHub, LinkedIn, CV…): `lib/links.ts`.
- CV: replace `public/cv/Nicolas_Almeida_CV.pdf`.
- Styles: `app/globals.css`.

## Deploy

Push to GitHub and import the repository on [vercel.com/new](https://vercel.com/new). No environment variables needed.
