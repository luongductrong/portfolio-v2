# Portfolio v2 - Duc Trong Luong

A personal portfolio website built with **Nuxt 4**, **Vue 3**, **Tailwind CSS v4**, and **shadcn-nuxt** - deployed as a static site to GitHub Pages via GitHub Actions.

**Live site:** [luongductrong.dev](https://luongductrong.dev)

---

## Tech Stack

| Category        | Technology                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------- |
| Framework       | [Nuxt 4](https://nuxt.com) + [Vue 3](https://vuejs.org)                                         |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com)                                                      |
| UI Components   | [shadcn-nuxt](https://www.shadcn-vue.com) · [reka-ui](https://reka-ui.com)                      |
| Animation       | [motion-v](https://motion.dev/vue)                                                              |
| Icons           | [Lucide Vue](https://lucide.dev)                                                                |
| Utilities       | [VueUse](https://vueuse.org)                                                                    |
| Fonts           | JetBrains Mono (via `@nuxt/fonts`)                                                              |
| Spam Protection | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile) (via `@nuxtjs/turnstile`) |
| Color Mode      | `@nuxtjs/color-mode` (system preference, light/dark)                                            |
| Package Manager | [pnpm](https://pnpm.io)                                                                         |
| Deployment      | GitHub Actions → GitHub Pages                                                                   |

---

## Project Structure

```
portfolio-v2/
├── app/
│   ├── app.vue                  # Root layout & head configuration
│   ├── error.vue                # Custom error page
│   ├── assets/                  # Global CSS and static assets
│   ├── components/              # Shared components (icons/, ui/)
│   ├── features/                # Feature-scoped modules
│   │   ├── portfolio/           # Home / about section
│   │   ├── projects/            # Projects listing & detail
│   │   ├── skills/              # Skills showcase
│   │   └── contact/             # Contact form
│   ├── layouts/                 # Nuxt layouts
│   ├── lib/                     # Utility helpers
│   └── pages/                   # File-based routing
│       ├── index.vue            # Home page
│       ├── contact.vue          # Contact page
│       ├── skills.vue           # Skills page
│       └── projects/
│           ├── index.vue        # Projects listing
│           └── [slug].vue       # Project detail
├── public/                      # Static files (favicons, etc.)
├── .github/workflows/           # CI/CD pipelines
├── nuxt.config.ts
├── package.json
└── .env.example
```

---

## Getting Started

### Prerequisites

- Node.js (recommended: >= 20.x)
- Corepack (optional)
- pnpm (see `package.json` for the required version)

### Installation

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable                         | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| `NUXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key for the contact form |

### Development

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

### Lint

```bash
pnpm lint        # Check for lint errors
pnpm lint:fix    # Auto-fix lint errors
```

### Type Check

```bash
pnpm typecheck
```

---

## Building & Deployment

### Static Site Generation (GitHub Pages)

This project is deployed as a fully static site using `nuxt generate`:

```bash
pnpm generate
```

The output is placed in `.output/public/` and deployed to GitHub Pages.

### Preview Production Build Locally

```bash
pnpm dlx serve .output/public
```

---

## CI/CD - GitHub Actions

Two workflows are configured under `.github/workflows/`:

| Workflow                  | Trigger        | Target                      | URL                                            |
| ------------------------- | -------------- | --------------------------- | ---------------------------------------------- |
| `deploy-gh-pages.yml`     | Push to `main` | External `*.github.io` repo | [ldt.is-a.dev](https://ldt.is-a.dev)           |
| `deploy-dev-gh-pages.yml` | Push to `dev`  | GitHub Pages (this repo)    | [luongductrong.dev](https://luongductrong.dev) |

> **Production deploy** uses a Personal Access Token (`GH_PAGES_PAT`) to push the built output to a separate `*.github.io` repository with a custom domain (`ldt.is-a.dev`).

> **Dev deploy** uses the standard `actions/deploy-pages` flow directly on this repository for preview purposes.

---

## Features

- **Dark / Light mode** - follows system preference, toggleable
- **Static site generation** - fast, CDN-friendly, no server required
- **Smooth animations** - powered by `motion-v`, respects `prefers-reduced-motion`
- **Spam-protected contact form** - Cloudflare Turnstile integration
- **Custom monospace font** - JetBrains Mono with Latin & Vietnamese subsets
- **Fully responsive** - mobile-first layout

---

## License

This project is for personal use. Feel free to take inspiration, but please do not directly copy content or design as your own portfolio.
