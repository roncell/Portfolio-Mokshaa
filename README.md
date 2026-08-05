# Mokshaa Shivlani — Portfolio

Personal portfolio site for Mokshaa Shivlani, a fashion & lifestyle journalist. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- **Home** — intro, featured work carousel, beats overview, newsletter teaser
- **About** — bio and beats
- **Portfolio** — published work grouped by beat
- **Writing** — Substack newsletter posts
- **CV** — embedded resume PDF plus a full text version
- **Contact** — form wired to Formspree

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Most site content (articles, publications, beats, resume data) lives in [`src/lib/data.ts`](src/lib/data.ts) — edit there rather than in individual page files.

To update the résumé, replace `public/cv.pdf` and update the corresponding fields in `src/lib/data.ts`.
