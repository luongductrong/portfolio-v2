export type SkillGroupIcon = 'code' | 'frontend' | 'devices' | 'database' | 'tools';

export interface SkillGroup {
  title: string;
  icon: SkillGroupIcon;
  skills: string[];
  featured?: boolean;
}

export interface LearningGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'Java'],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Nuxt'],
    featured: true,
  },
  {
    title: 'Mobile & Desktop',
    icon: 'devices',
    skills: ['React Native', 'Electron'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'SQLite'],
  },
  {
    title: 'DevOps & Tools',
    icon: 'tools',
    skills: ['Vercel', 'Netlify', 'GitHub Actions', 'Cloudflare'],
  },
];

export const learningGroups: LearningGroup[] = [
  {
    title: 'Web Ecosystem',
    skills: ['Alpine.js', 'Astro', 'React Router Framework', 'TanStack Start', 'Solid', 'Svelte'],
  },
  {
    title: 'Cross-platform & Native',
    skills: ['Flutter', 'Tauri', 'Rust'],
  },
  {
    title: 'Infrastructure',
    skills: ['Nginx', 'Caddy', 'Docker'],
  },
];
