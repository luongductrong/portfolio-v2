# Portfolio v2 - Duc Trong Luong

A personal portfolio website built with **Nuxt 4**, **Vue 3**, **Tailwind CSS v4**, and **shadcn-nuxt**. The primary site is deployed to Vercel, while an external GitHub Pages deployment remains available as a static alias.

**Primary site:** [luongductrong.dev](https://luongductrong.dev)<br>
**External Pages alias:** [ldt.is-a.dev](https://ldt.is-a.dev)

---

## Tech Stack

| Category        | Technology                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Framework       | [Nuxt 4](https://nuxt.com) + [Vue 3](https://vuejs.org)                                                                   |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com)                                                                                |
| UI Components   | [shadcn-nuxt](https://www.shadcn-vue.com) · [reka-ui](https://reka-ui.com)                                                |
| Animation       | [motion-v](https://motion.dev/vue)                                                                                        |
| Icons           | [Lucide Vue](https://lucide.dev)                                                                                          |
| Utilities       | [VueUse](https://vueuse.org)                                                                                              |
| Fonts           | JetBrains Mono and Space Grotesk (via [`@nuxt/fonts`](https://fonts.nuxt.com))                                            |
| Images          | [`@nuxt/image`](https://image.nuxt.com) with local IPX fallback and Netlify Image CDN in production                       |
| Spam Protection | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile) with Formspree                                      |
| Color Mode      | `@nuxtjs/color-mode` (system preference, light/dark)                                                                      |
| Package Manager | [pnpm](https://pnpm.io)                                                                                                   |
| Deployment      | Vercel continuous deployment + GitHub Actions → external GitHub Pages                                                     |

---

## Project Structure

```
portfolio-v2/
├── app/
│   ├── app.vue                  # Root app and head configuration
│   ├── assets/                  # Global CSS
│   ├── components/              # Shared components and UI primitives
│   ├── composables/             # Shared composables, including image URL helpers
│   ├── configs/                 # Public asset manifest
│   ├── features/                # Feature-scoped modules
│   │   ├── portfolio/           # Home / about section
│   │   ├── projects/            # Projects listing, cards, and case studies
│   │   ├── skills/              # Skills showcase
│   │   └── contact/             # Contact form
│   ├── layouts/                 # Default layout and layout components
│   ├── lib/                     # Small shared utilities
│   └── pages/                   # File-based routes
├── public/                      # Static images, documents, favicons, and SEO files
├── i18n/                        # Application locale files
├── scripts/                     # Build-time validation scripts
├── .github/workflows/           # GitHub Pages deployment pipelines
├── nuxt.config.ts
├── package.json
└── .env.example
```

---

## Getting Started

### Prerequisites

- Node.js 24.x (the version used by CI)
- Corepack, or pnpm 11.x installed directly

### Installation

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env` (or `.env.local`) before local development:

```bash
cp .env.example .env
```

| Variable                         | Description                                                                                                                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NUXT_PUBLIC_SITE_URL`           | Current public origin. The image helper uses it to build absolute source URLs when the external CDN is enabled.                                      |
| `NUXT_PUBLIC_IMAGE_CDN_URL`      | Full Netlify Image CDN endpoint, for example `https://your-site.netlify.app/.netlify/images`. Leave empty locally to use Nuxt Image's IPX fallback. |
| `NUXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key used by the shared Formspree contact form.                                                                             |
| `NUXT_APP_BASE_URL`              | Deployment base path. The external GitHub Pages workflow may supply this when a base path is needed.                                                |

### Development

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

When `NUXT_PUBLIC_IMAGE_CDN_URL` is empty, images are handled by Nuxt Image's local IPX endpoint (`/_ipx/...`). When it is set, generated image URLs point to the configured Netlify Image CDN. The CDN is used only for image optimization; the portfolio itself is deployed to Vercel and GitHub Pages.

### Quality Checks

```bash
pnpm lint        # Check for lint errors
pnpm lint:fix    # Auto-fix lint errors
pnpm typecheck   # Run Nuxt/Vue type checking
```

---

## Image Optimization

Project covers, gallery images, thumbnails, and dialog previews use `<NuxtImg>` from [`@nuxt/image`](https://image.nuxt.com). Original files remain in `public/images`; no source-image migration is required.

The provider is selected at build time:

- **Local fallback:** `ipx`, served by the Nuxt development server.
- **Deployed builds:** `netlifyImageCdn`, using the external endpoint in `NUXT_PUBLIC_IMAGE_CDN_URL` on both Vercel and GitHub Pages.

The [`useImageAsset`](app/composables/useImageAsset.ts) composable returns normal public paths for local IPX and absolute source URLs based on `NUXT_PUBLIC_SITE_URL` when the external CDN is enabled. The Netlify optimizer must allow the portfolio's source hosts, including `luongductrong.dev`, `ldt.is-a.dev`, and `luongductrong.github.io`. See [Netlify Image CDN](https://docs.netlify.com/build/image-cdn/overview/) for endpoint and remote-image rules.

## Contact Forms

Both Vercel and GitHub Pages use the same Formspree contact flow with the `NuxtTurnstile` component. Configure `NUXT_PUBLIC_TURNSTILE_SITE_KEY` in both deployment environments; Formspree receives the Turnstile response with the form submission.

---

## Building & Deployment

### Production Build

Build a Node/Nitro production bundle locally:

```bash
pnpm build
```

This runs the public-asset validator before `nuxt build`. Vercel detects Nuxt/Nitro automatically, so the repository does not require a custom `vercel.json` or output-directory override.

### Static Site Generation

The GitHub Pages workflows use the `github_pages` Nitro preset:

```bash
pnpm generate
```

The command validates public assets, runs `nuxt generate --preset github_pages`, and writes the deployable site to `.output/public/`.

### Preview the Generated Site

```bash
pnpm preview
```

---

## CI/CD

Vercel deploys the connected production branch automatically. The external GitHub Pages workflow runs on pushes to `main` and can also be started manually with `workflow_dispatch`.

| Workflow                       | What it does                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `deploy-external-gh-pages.yml` | Builds and pushes `.output/public` to `<owner>/<owner>.github.io` using `GH_PAGES_PAT`; an optional `CNAME` variable sets the custom domain. |

Required GitHub Actions configuration:

- Repository variables: `NUXT_PUBLIC_IMAGE_CDN_URL`, `NUXT_PUBLIC_TURNSTILE_SITE_KEY`, `NUXT_PUBLIC_SITE_URL`, and `CNAME`.
- Repository secret: `GH_PAGES_PAT` for pushing to the external `*.github.io` repository.

Configure `NUXT_PUBLIC_SITE_URL`, `NUXT_PUBLIC_IMAGE_CDN_URL`, and `NUXT_PUBLIC_TURNSTILE_SITE_KEY` in the Vercel project. The primary domain remains `luongductrong.dev`; the external alias remains controlled by GitHub Pages settings, `NUXT_PUBLIC_SITE_URL`, and `CNAME`.

---

## Features

- **Dark / Light mode** - follows system preference, toggleable
- **Responsive image delivery** - resized, format-negotiated images through Nuxt Image and Netlify Image CDN
- **Hybrid deployment** - Vercel's Nuxt build for the primary site and static generation for the external alias
- **Smooth animations** - powered by `motion-v`, respects `prefers-reduced-motion`
- **Spam-protected contact form** - one Formspree and Cloudflare Turnstile flow across both deployments
- **Custom fonts** - JetBrains Mono and Space Grotesk with Latin & Vietnamese subsets
- **Fully responsive** - mobile-first layout

---

## License

This project is for personal use. Feel free to take inspiration, but please do not directly copy content or design as your own portfolio.
