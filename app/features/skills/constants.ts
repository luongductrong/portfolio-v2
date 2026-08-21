export interface SkillGroup {
  id: 'languages' | 'frontend' | 'mobileDesktop' | 'databases' | 'devopsTools';
  skills: string[];
  featured?: boolean;
}

export interface LearningGroup {
  id: 'webEcosystem' | 'crossPlatformNative' | 'infrastructure';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    skills: ['JavaScript', 'TypeScript', 'Java'],
  },
  {
    id: 'frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Nuxt'],
    featured: true,
  },
  {
    id: 'mobileDesktop',
    skills: ['React Native', 'Electron'],
  },
  {
    id: 'databases',
    skills: ['PostgreSQL', 'SQLite'],
  },
  {
    id: 'devopsTools',
    skills: ['Vercel', 'Netlify', 'GitHub Actions', 'Cloudflare'],
  },
];

export const learningGroups: LearningGroup[] = [
  {
    id: 'webEcosystem',
    skills: ['Alpine.js', 'Astro', 'React Router Framework', 'TanStack Start', 'Solid', 'Svelte'],
  },
  {
    id: 'crossPlatformNative',
    skills: ['Flutter', 'Tauri', 'Rust'],
  },
  {
    id: 'infrastructure',
    skills: ['Nginx', 'Caddy', 'Docker'],
  },
];
