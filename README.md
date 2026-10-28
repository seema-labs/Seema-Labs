# Seema Labs

**Give AI autonomy, not unlimited authority.**

Seema Labs is the company. Trinetra is its first product, shown on the company page.

Live at [seema-labs.tech](https://seema-labs.tech).

## Layout

```
apps/seema-labs/          the site (Vite + React)
  src/
    components/           page sections (Hero, Company, Principles, Product, Footer, ...)
    decision.js           sample-decision logic used by the boundary demo
```

`npm start` opens the company page. Products scrolls to the Trinetra section. Request a Demo emails the visitor's name, email, and contact to sanjeevkumarkhatri6@gmail.com. Animated sections use `framer-motion`.

## Preview locally

Install Node.js 18 or newer, then from the repository root:

```sh
npm install
npm start
```

Open http://127.0.0.1:4174. Stop the preview with Ctrl+C.

## Check and build

```sh
npm run check
```

That runs the sample-decision test and the production build. The site is `index.html`, built to `apps/seema-labs/dist`.

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml`, which builds the site and publishes it to GitHub Pages automatically. No manual upload needed.

## Content guidelines

- Preserve the company's connection to Nepal and the meaning of Seema: boundary or limit.
- Do not invent customers, testimonials, pricing, contact details, certifications, or product guarantees.
- Keep keyboard navigation, visible focus states, reduced-motion support, and responsive layouts intact.
