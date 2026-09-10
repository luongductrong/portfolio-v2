import { skillsI18n } from '@/features/skills/locales/en';
import { projectsI18n } from '@/features/projects/locales/en';
import { contactI18n } from '@/features/contact/locales/en';
import { portfolioI18n, terminalI18n } from '@/features/portfolio/locales/en';

export default {
  language: {
    label: 'Language',
    change: 'Change language',
  },
  header: {
    home: 'Home',
    navigation: {
      primary: 'Primary navigation',
      mobile: 'Mobile navigation',
      title: 'Navigation',
      description: 'Explore my work, skills, and ways to get in touch.',
      open: 'Open navigation menu',
      close: 'Close navigation menu',
      items: {
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
    },
  },
  footer: {
    vietnameseNameTitle: "Duc Trong Luong's Vietnamese name",
    copyright: '© {year}. Made with ❤️ by Duc Trong Luong',
  },
  theme: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
  },
  error: {
    notFound: {
      title: 'Page not found.',
      description:
        'The page may have moved, been renamed, or never existed. You can return home or continue browsing my work.',
    },
    unexpected: {
      title: 'Something went wrong.',
      description: 'The application ran into an unexpected problem. Please return to a safe page and try again.',
    },
    actions: {
      home: 'Go back home',
      projects: 'View projects',
    },
  },
  contact: contactI18n,
  portfolio: portfolioI18n,
  projects: projectsI18n,
  skills: skillsI18n,
  terminal: terminalI18n,
};
