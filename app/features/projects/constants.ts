import type { ProjectDefinition } from './types';

export const projectDefinitions = [
  {
    id: 'funnyCode',
    slug: 'funnycode-learning-platform',
    title: 'FunnyCode Learning Platform',
    year: '2025-2026',
    media: {
      cover: {
        id: 'funnycode-cover',
        src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@5621e3f7c90f28032522f2cb0ef0732303ba494f/images/2b0802c9_1788609753636.png',
      },
      images: [
        {
          id: 'funnycode-course-detail',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@dea458bf4cfa9251cc6472f81a6de2e71c60fca0/images/c16dd47a_1788609630044.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@bd0f77bbe4712f61e5cd1b6a3688d6e269483bdc/images/97f95cf3_1788609738526.png',
        },
        {
          id: 'funnycode-course-catalog',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@501d0f0ddb09d5cface6b86b7ec621bc9bfa6637/images/1c7cbb95_1788609609210.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@fdd89084313c94bfdc8eecd8b9b797279e176d1f/images/0627ebb1_1788609682507.png',
        },
        {
          id: 'funnycode-ai-roadmap',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@59453e74644131caf8ab5110f3ea0d2287f99870/images/93e3e414_1788609618543.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@0462645a3a4c37328bb5d74ad687e5c6ad3f298e/images/9b90cadb_1788609694789.png',
        },
        {
          id: 'funnycode-login',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@c60f5eeb176f4e238b08a9c65bcca1745abe25a2/images/6c5ec5ce_1788609597387.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@29f3bc7bdcd4fd0ac5196b67806f55d99f58de23/images/9a19f340_1788609666100.png',
        },
      ],
    },
    links: { demo: 'https://beta.funnycode.vn/' },
    status: 'maintained',
    stack: [
      { items: ['Next.js 16', 'React 19', 'TypeScript', 'App Router / PPR'] },
      { items: ['Tailwind CSS 4', 'shadcn/ui'] },
      { items: ['TanStack Query', 'Zustand', 'Axios'] },
      { items: ['Tiptap', 'Video.js', 'StompJS', 'SockJS'] },
    ],
  },
  {
    id: 'reactFioriStyle',
    slug: 'react-fiori-style',
    title: 'React Fiori Style',
    year: '2026',
    media: {
      cover: {
        id: 'fiori-cover',
        src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@b89c96564a5a54959eb9f46da94aba4cf9d5162e/images/60d43c08_1788609414453.png',
      },
      images: [
        {
          id: 'fiori-attachment-list',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@0182367972694e9302695c7b2c1ac5e179924955/images/2f476bcf_1788609312482.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@f05d4190c86ec5d8f93b53cdbac58716b9eb581f/images/ecaee280_1788609366750.png',
        },
        {
          id: 'fiori-attachment-detail',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@1e3a034b782b609505b025e7a5bed375a21cf117/images/6c067ef5_1788609320349.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@4f2d4a6de971aeb1550250fb427b0c83e2ec8070/images/79fee239_1788609382116.png',
        },
        {
          id: 'fiori-launchpad',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@3c8c4ad44db03c07ddafd613cb88a48daa1429f7/images/a542300d_1788609298950.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@9ac266826c1cabe88ecf99ac682a2c653e5ea51b/images/cbba7135_1788609351653.png',
        },
        {
          id: 'fiori-admin-dashboard',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@696b97287734e7c5551098d11d4d7bc45451d484/images/8da30b80_1788609329446.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@65f65f07e3cb40a5dffd3f0819ec6b2365f29bb5/images/ae4cfd7d_1788609391796.png',
        },
      ],
    },
    links: { source: 'https://github.com/luongductrong/react-fiori-style' },
    status: 'completed',
    stack: [
      { items: ['React 18', 'Vite', 'TypeScript', 'React Router'] },
      { items: ['@ui5/webcomponents-react', 'Tailwind CSS 4'] },
      { items: ['React Query', 'Zustand', 'Axios'] },
      { items: ['SAP OData v4', 'UI5 Tooling', 'GitHub Actions'] },
      { items: ['Google Drive Picker'] },
    ],
  },
  {
    id: 'game2048',
    slug: 'game-2048',
    title: 'Game 2048',
    year: '2024-2026',
    media: {
      cover: {
        id: 'game-2048-cover',
        src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@76789bca2ffa62659754d61de8c4c1faf29efa49/images/59e09bf2_1788609098301.png',
      },
      images: [
        {
          id: 'game-2048-gameplay',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@e24139f45a66b6086eea0d865272bfcba124d6f3/images/b662917a_1788609010014.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@dd7c2d16dd7397bb838b3c24183824d7267f0e5e/images/10844f4b_1788609060350.png',
        },
        {
          id: 'game-2048-start',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@13cab375b166c7fcbb4b5977309be6e74b71a874/images/2a79cf00_1788608997417.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@368dc412646b436ac6ed56b2f78e0eddf03f1869/images/d60f97d3_1788609046010.png',
        },
        {
          id: 'game-2048-new-game',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@203c724028685e01549ad3afc7618bc05606bf53/images/a7bc2018_1788609019350.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@1101b2e358d42b3faf4e42eedf3af6e72295b9aa/images/88004660_1788609070101.png',
        },
        {
          id: 'game-2048-game-over',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@2714aa31d8602d53037a002cd3db21af727ecaff/images/871dfb9a_1788609028153.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@23f9933fea5cb9577aa21f13d5199abd06e522f0/images/d62e7f90_1788609082461.png',
        },
      ],
    },
    links: {
      demo: 'https://ldt.is-a.dev/game-2048/',
      source: 'https://github.com/luongductrong/game-2048/',
    },
    status: 'maintained',
    stack: [
      { items: ['React 19', 'TypeScript', 'Vite 8'] },
      { items: ['Tailwind CSS 4', 'Framer Motion'] },
      { items: ['Vanilla TypeScript engine', 'React hooks', 'useSyncExternalStore'] },
      { items: ['pnpm Workspace', 'GitHub Actions', 'GitHub Pages'] },
    ],
  },
  {
    id: 'portfolioV2',
    slug: 'portfolio-v2',
    title: 'Portfolio v2',
    year: '2026',
    media: {
      cover: {
        id: 'portfolio-v2-cover',
        src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@9641c848f7cf2f20c14571788860c819ef3fc7b3/images/31202571_1788608628947.png',
      },
      images: [
        {
          id: 'portfolio-v2-home',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@7354ee30427985e2c2062677676bb903216a7164/images/c743b7c0_1788608491026.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@5c7e20a139118bc100cad9b5af7ac0d3d34d7927/images/aa4c126f_1788608674496.png',
        },
        {
          id: 'portfolio-v2-projects',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@54965cbf86d8832a1c45dd8f9fbb302cf4c145e1/images/baa5895e_1788608505570.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@618e9af097840a60134e814a08916f267e61d99d/images/f44467a9_1788608685495.png',
        },
        {
          id: 'portfolio-v2-skills',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@7c2a396b465cf47e8269cdf48969774a180a72c7/images/61055b45_1788608520234.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@48545ee707251fbe85f63bec5907a09f24b418a7/images/bb91426e_1788608695028.png',
        },
        {
          id: 'portfolio-v2-contact',
          src: 'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@8fc8e44dea356f621fbd77cf0e0ecf36fa744fa2/images/8f83ebeb_1788608534046.png',
          thumbnail:
            'https://cdn.jsdelivr.net/gh/ldt-vault/vault-38e16062@9bb92389426ea293c03a367f842bc696d5d3c8ef/images/8deafd4e_1788608706037.png',
        },
      ],
    },
    links: {
      demo: 'https://luongductrong.dev',
      source: 'https://github.com/luongductrong/portfolio-v2',
    },
    status: 'maintained',
    stack: [
      { items: ['Nuxt 4', 'Vue 3', 'TypeScript'] },
      { items: ['Tailwind CSS 4', 'shadcn-nuxt', 'Reka UI', 'Motion for Vue'] },
      { items: ['VueUse', 'Nuxt Color Mode', 'Nuxt Fonts'] },
      { items: ['Netlify', 'GitHub Actions', 'GitHub Pages', 'Netlify Forms', 'Formspree'] },
    ],
  },
] satisfies ProjectDefinition[];
