import type { ProjectDefinition } from './types';
import { publicAssets } from '@/configs/public-assets';

export const projectDefinitions = [
  {
    id: 'funnyCode',
    slug: 'funnycode-learning-platform',
    title: 'FunnyCode Learning Platform',
    year: '2025-2026',
    media: {
      cover: { id: 'funnycode-cover', src: publicAssets.projects.funnyCode.cover },
      images: [
        {
          id: 'funnycode-course-detail',
          src: publicAssets.projects.funnyCode.image4,
          thumbnail: publicAssets.projects.funnyCode.thumbnail4,
        },
        {
          id: 'funnycode-course-catalog',
          src: publicAssets.projects.funnyCode.image2,
          thumbnail: publicAssets.projects.funnyCode.thumbnail2,
        },
        {
          id: 'funnycode-ai-roadmap',
          src: publicAssets.projects.funnyCode.image3,
          thumbnail: publicAssets.projects.funnyCode.thumbnail3,
        },
        {
          id: 'funnycode-login',
          src: publicAssets.projects.funnyCode.image1,
          thumbnail: publicAssets.projects.funnyCode.thumbnail1,
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
      cover: { id: 'fiori-cover', src: publicAssets.projects.reactFioriStyle.cover },
      images: [
        {
          id: 'fiori-attachment-list',
          src: publicAssets.projects.reactFioriStyle.image2,
          thumbnail: publicAssets.projects.reactFioriStyle.thumbnail2,
        },
        {
          id: 'fiori-attachment-detail',
          src: publicAssets.projects.reactFioriStyle.image3,
          thumbnail: publicAssets.projects.reactFioriStyle.thumbnail3,
        },
        {
          id: 'fiori-launchpad',
          src: publicAssets.projects.reactFioriStyle.image1,
          thumbnail: publicAssets.projects.reactFioriStyle.thumbnail1,
        },
        {
          id: 'fiori-admin-dashboard',
          src: publicAssets.projects.reactFioriStyle.image4,
          thumbnail: publicAssets.projects.reactFioriStyle.thumbnail4,
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
      cover: { id: 'game-2048-cover', src: publicAssets.projects.game2048.cover },
      images: [
        {
          id: 'game-2048-gameplay',
          src: publicAssets.projects.game2048.image2,
          thumbnail: publicAssets.projects.game2048.thumbnail2,
        },
        {
          id: 'game-2048-start',
          src: publicAssets.projects.game2048.image1,
          thumbnail: publicAssets.projects.game2048.thumbnail1,
        },
        {
          id: 'game-2048-new-game',
          src: publicAssets.projects.game2048.image3,
          thumbnail: publicAssets.projects.game2048.thumbnail3,
        },
        {
          id: 'game-2048-game-over',
          src: publicAssets.projects.game2048.image4,
          thumbnail: publicAssets.projects.game2048.thumbnail4,
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
      cover: { id: 'portfolio-v2-cover', src: publicAssets.projects.portfolioV2.cover },
      images: [
        {
          id: 'portfolio-v2-home',
          src: publicAssets.projects.portfolioV2.image1,
          thumbnail: publicAssets.projects.portfolioV2.thumbnail1,
        },
        {
          id: 'portfolio-v2-projects',
          src: publicAssets.projects.portfolioV2.image2,
          thumbnail: publicAssets.projects.portfolioV2.thumbnail2,
        },
        {
          id: 'portfolio-v2-skills',
          src: publicAssets.projects.portfolioV2.image3,
          thumbnail: publicAssets.projects.portfolioV2.thumbnail3,
        },
        {
          id: 'portfolio-v2-contact',
          src: publicAssets.projects.portfolioV2.image4,
          thumbnail: publicAssets.projects.portfolioV2.thumbnail4,
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
