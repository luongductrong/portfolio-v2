export interface SkillGroup {
  title: string;
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
    skills: ['JavaScript', 'TypeScript', 'Java'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Nuxt'],
    featured: true,
  },
  {
    title: 'Mobile & Desktop',
    skills: ['React Native', 'Electron'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'SQLite'],
  },
  {
    title: 'DevOps & Tools',
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
