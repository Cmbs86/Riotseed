# Riotseed

A brutalist-styled marketing site for **Riotseed**, a Berlin-based digital marketing agency for independent and DIY bands in the punk, alternative, and underground music scenes.

Built as a freelance client project for founder **Aude Leteurtre**.

**Live site:** [riotseed.com](https://riotseed.com) *(pending launch)*

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build tool** | Vite 7 |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router v7 |
| **SEO** | `react-helmet-async` + JSON-LD structured data |
| **Linting** | ESLint 9 (flat config) + `typescript-eslint` |
| **Deployment** | Cloudflare Pages |

No backend, no database, no CMS — content lives in typed data files (`src/data/`) and is edited directly in code. This is an intentional choice: the site is small, content changes are infrequent, and the client supplies copy directly to the developer rather than self-managing content.

---

## Features

- **Fully responsive**, tested down to mobile and up to large desktop monitors (custom breakpoints, see [Design System](#design-system))
- **Brutalist design system**: hard shadows, thick borders, bold color blocks, custom display fonts
- **Dynamic per-page SEO**: unique `<title>`, meta description, and Open Graph/Twitter card data for every route via `react-helmet-async`
- **Structured data (JSON-LD)**: `ProfessionalService` schema with founder bio, and `CollectionPage` schema for the projects listing — helps search engines and AI answer engines understand the business
- **Client-side routing** with scroll-restoration on navigation, and a dedicated 404 page for unmatched routes or invalid project/service slugs
- **`sitemap.xml`** and **`robots.txt`** for search engine indexing
- **Custom entrance animations** (fade/slide-in on mount, staggered reveals) built with Tailwind transitions and a small amount of targeted inline styles where Tailwind's utility classes weren't sufficient (see [A note on inline styles](#a-note-on-inline-styles))

---

## Project Structure

```
src/
├── assets/images/     # Source images (imported directly into components)
├── components/        # Shared UI: Header, Footer, Navigation, ScrollToTop
├── data/               # Typed content: projects.ts, services.ts
├── layouts/            # MainLayout (Header + Footer wrapper)
├── pages/              # Route-level pages: Home, ServiceDetail, ProjectDetail, NotFound
├── sections/           # Homepage sections: Hero, About, Services, Projects, AgencyPitch
├── types/              # Shared TypeScript interfaces
├── App.tsx             # Route definitions
├── main.tsx            # App entry point (providers: HelmetProvider, BrowserRouter)
└── index.css           # Tailwind import + design tokens (@theme)

public/
├── images/             # Duplicate of key images at stable, absolute URLs (needed for Open Graph tags, which require absolute paths outside of Vite's asset hashing)
├── logos/              # Brand logo files (favicon + header/footer wordmark)
├── robots.txt
└── sitemap.xml
```

---

## Getting Started

**Prerequisites:** Node.js 20+ and npm

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Type-check and build for production → outputs to dist/
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## Design System

Design tokens are defined in `src/index.css` under Tailwind's `@theme` directive — no separate `tailwind.config.js`, per Tailwind v4's CSS-first configuration.

**Colors** (five-step tint scales for green/black/pink):

| | Hex |
|---|---|
| Primary green | `#6bf7c9` |
| Primary black | `#000000` |
| Primary pink | `#fc568e` |
| Third pink (accent) | `#fb387a` |

**Fonts** (Google Fonts): Permanent Marker, Sedgwick Ave / Sedgwick Ave Display, Rubik Dirt, Shantell Sans, Plus Jakarta Sans

**Breakpoints** (custom, not Tailwind defaults):

| Name | Width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1440px |
| `2xl` | 1900px |

Tested primarily on a 13" laptop screen and a 27" external monitor.

### A note on inline styles

A handful of components (`Footer.tsx`, `Services.tsx`, `ProjectDetail.tsx`) use inline `style={{ ... }}` alongside Tailwind classes. This is intentional, not leftover — in each case the value is computed at runtime (e.g. a staggered animation delay based on an item's index in a list) and can't be expressed as a static Tailwind utility class. Everything that *can* be a Tailwind class, is one.

---

## SEO Implementation

- Static homepage metadata lives in `index.html`
- Per-project and per-service metadata is generated dynamically in `ProjectDetail.tsx` / `ServiceDetail.tsx` via `<Helmet>`
- Two JSON-LD schemas in `index.html`: `ProfessionalService` (business info, founder, service list, `sameAs` social links) and `CollectionPage` (projects listing)
- `public/sitemap.xml` is maintained manually — **new projects or services need a line added here**, it isn't auto-generated

---

## Known Limitations / Roadmap

- **German and French translations** are planned but not yet implemented. The site launches English-only, with translations to follow once the client's copy is delivered. No i18n scaffolding exists yet — this will be scoped once the copy arrives.
- Two case studies (Offbeat Affair, Sick Saints) are ongoing client engagements; their results/testimonial content will be updated as the work progresses.

---

## Deployment

Deployed via **Cloudflare Pages**, connected to this repository for automatic build-and-deploy on push to `main`. Domain registered and managed through **Cloudflare Registrar**.

---

## Author

Built by Carlos Sousa — freelance frontend developer.

Client: Aude Leteurtre, Riotseed (Berlin)

## License

MIT — see [LICENSE](./LICENSE)