# Portfolio v2 - Duc Trong Luong

A personal portfolio website built with **Nuxt 4**, **Vue 3**, **Tailwind CSS v4**, and **shadcn-nuxt**. The primary site is deployed to Netlify, while an external GitHub Pages deployment remains available as a static alias.

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
| Spam Protection | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile) for client/server verification on both deployments |
| Color Mode      | `@nuxtjs/color-mode` (system preference, light/dark)                                                                      |
| Package Manager | [pnpm](https://pnpm.io)                                                                                                   |
| Deployment      | Netlify continuous deployment + GitHub Actions → external GitHub Pages                                                    |

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
| `NUXT_PUBLIC_SITE_URL`           | Current public origin of the generated site. The image helper uses it to build absolute source URLs when the external CDN is enabled.               |
| `NUXT_PUBLIC_IMAGE_CDN_URL`      | Full Netlify Image CDN endpoint, for example `https://your-site.netlify.app/.netlify/images`. Leave empty locally to use Nuxt Image's IPX fallback. |
| `NUXT_PUBLIC_IS_NETLIFY`         | Selects the Netlify Forms flow when `true`; `false` keeps the Formspree + Turnstile flow.                                                           |
| `NUXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key for the contact form on both deployments.                                                                              |
| `NUXT_TURNSTILE_SECRET_KEY`      | Cloudflare Turnstile secret key used by the Nuxt/Nitro verification endpoint. Keep it server-only; it is required at Netlify Runtime.              |
| `NUXT_APP_BASE_URL`              | Deployment base path. The external GitHub Pages workflow may supply this when a base path is needed.                                                |

`NUXT_PUBLIC_IS_NETLIFY` is `true` in Netlify's build context and `false` in the external GitHub Pages workflow. `NUXT_PUBLIC_TURNSTILE_SITE_KEY` is public; `NUXT_TURNSTILE_SECRET_KEY` must never be exposed to the client.

### Development

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

When `NUXT_PUBLIC_IMAGE_CDN_URL` is empty, images are handled by Nuxt Image's local IPX endpoint (`/_ipx/...`). When it is set, generated image URLs point to the configured Netlify Image CDN. No output format is forced, so Netlify negotiates WebP or AVIF from the browser's `Accept` header and falls back to the source format for older clients.

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
- **Production:** `netlifyImageCdn`, using the external endpoint in `NUXT_PUBLIC_IMAGE_CDN_URL`.

The [`useImageAsset`](app/composables/useImageAsset.ts) composable keeps component templates simple. It returns normal public paths for local IPX and absolute source URLs based on `NUXT_PUBLIC_SITE_URL` when the external CDN is enabled. This matters because the separate Netlify site must fetch the original image from the deployed portfolio host, not from `localhost` or from the optimizer site itself.

The shared Netlify optimizer currently allowlists public image paths on these hosts:

- `ldt.is-a.dev`
- `luongductrong.dev`
- `luongductrong.github.io`

The allowlist controls source hosts, not which websites may call the endpoint. Keep it limited to trusted domains. See [Netlify Image CDN](https://docs.netlify.com/build/image-cdn/overview/) for the endpoint and remote-image rules.

## Contact Forms

The contact form selects its provider at build time using `NUXT_PUBLIC_IS_NETLIFY`:

- **Netlify:** Cloudflare Turnstile is rendered in the UI and verified by the Nuxt/Nitro `/api/turnstile/verify` endpoint before the URL-encoded Netlify Forms submission to `/__forms.html`. The static detection skeleton lives in `public/__forms.html`.
- **External GitHub Pages and local fallback:** Formspree with the same client-side Cloudflare Turnstile component.

Netlify's form detection must be enabled in the site dashboard. Configure `NUXT_PUBLIC_TURNSTILE_SITE_KEY` for the build and `NUXT_TURNSTILE_SECRET_KEY` at runtime on Netlify. The external GitHub Pages workflow removes `__forms.html` from the published artifact so that the Netlify-only form definition is not shipped there.

---

## Building & Deployment

### Production Build

Build a Node/Nitro production bundle locally:

```bash
pnpm build
```

This runs the public-asset validator before `nuxt build`.

Netlify uses this command with the `netlify` Nitro preset and publishes `dist/`. The committed `netlify.toml` pins the build command, publish directory, Node major version, and public deployment settings.

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

Netlify deploys the `main` branch automatically. The external GitHub Pages workflow also runs on pushes to `main` and can be started manually with `workflow_dispatch`.

| Workflow                       | What it does                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `deploy-external-gh-pages.yml` | Builds and pushes `.output/public` to `<owner>/<owner>.github.io` using `GH_PAGES_PAT`; an optional `CNAME` variable sets the custom domain. |

Required GitHub Actions configuration:

- Repository variables: `NUXT_PUBLIC_IMAGE_CDN_URL`, `NUXT_PUBLIC_TURNSTILE_SITE_KEY`, and (for the external workflow) `NUXT_PUBLIC_SITE_URL` and `CNAME`.
- Repository secret: `GH_PAGES_PAT` for pushing to the external `*.github.io` repository.

The exact public URL for the Netlify deployment is configured in Netlify Domain management. The external alias remains controlled by GitHub Pages settings, `NUXT_PUBLIC_SITE_URL`, and `CNAME`.

---

## Features

- **Dark / Light mode** - follows system preference, toggleable
- **Responsive image delivery** - resized, format-negotiated images through Nuxt Image and Netlify Image CDN
- **Hybrid deployment** - Netlify's Nuxt build for the primary site and static generation for the external alias
- **Smooth animations** - powered by `motion-v`, respects `prefers-reduced-motion`
- **Spam-protected contact form** - Cloudflare Turnstile verification with Netlify Forms or Formspree
- **Custom fonts** - JetBrains Mono and Space Grotesk with Latin & Vietnamese subsets
- **Fully responsive** - mobile-first layout

---

## License

This project is for personal use. Feel free to take inspiration, but please do not directly copy content or design as your own portfolio.
