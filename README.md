# Seema Labs

**Give AI autonomy, not unlimited authority.**

This repository contains the static company website for Seema Labs and the website for its first product, Trinetra.

## Websites

| Website | Source folder | Existing hosted site |
| --- | --- | --- |
| Seema Labs | `sites/seema-labs/` | https://seema-labs.zestycream11.chatgpt.site |
| Trinetra | `sites/trinetra/` | https://trinetra-focused-access.zestycream11.chatgpt.site |

Each website contains its own HTML, CSS, JavaScript, and original SVG assets. Both are responsive static sites with no package dependencies or build step. Fonts load from Google Fonts, with system fallbacks.

## Preview locally

Install Node.js 18 or newer, then run from the repository root:

```sh
npm start
```

Open http://127.0.0.1:4174 for Seema Labs. To preview Trinetra in another terminal:

```sh
npm run preview:trinetra
```

Open http://127.0.0.1:4173. Stop either preview with Ctrl+C. Set `PORT` if you need another port. No `npm install` is needed.

## Continue in Codex

Open this repository as a project in Codex. Edit the corresponding website's files in `sites/`, preview the result, and run:

```sh
npm run check
```

The check verifies local assets, section links, unique HTML IDs, and JavaScript syntax. Also review responsive layouts and interactive controls in a browser before publishing changes.

## Product and content guidelines

- Seema Labs is the company; Trinetra is its first product.
- Preserve the company's connection to Nepal and the meaning of Seema: boundary or limit.
- Seema Labs' Trinetra links point to the existing Trinetra website above.
- Permission plans and approval controls are illustrative browser-only examples. They do not grant real access or contact a backend.
- Do not invent customers, testimonials, pricing, contact details, certifications, or product guarantees.
- Keep keyboard navigation, visible focus states, reduced-motion support, and responsive layouts intact.

## Hosting

Each website folder can be served directly by a static host. Upload the contents of the chosen folder with `index.html` at its serving root.

The existing Sites deployments remain separate from this repository. Pushing to GitHub does not automatically update either hosted site. Hosting credentials and provider-specific project configuration are not included. No GitHub Pages or public deployment is enabled by this repository.
