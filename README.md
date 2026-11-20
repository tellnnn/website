# Teruaki Kido — personal website

Academic portfolio built with [Astro](https://astro.build) and deployed to Cloudflare Workers.

## Updating content

Most updates only touch JSON files in `src/data/`:

| File | Page |
| :--- | :--- |
| `publications/publications.json` | Publications |
| `publications/preprints.json` | Preprints (hidden when empty) |
| `publications/published_preprints.json` | Preprints that have a published version (`related` points to its `id`) |
| `presentations.json` | Presentations (rendered in file order; newest first) |
| `grants-awards/grants.json`, `grants-awards/awards.json` | Grants & Awards |

Schemas are defined in `src/content.config.ts`. The About page is `src/pages/index.astro`; the CV is `public/cv.pdf`.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Build and preview with Wrangler |
| `npm run deploy` | Deploy to Cloudflare Workers |
