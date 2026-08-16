import projectMessages from '@/features/projects/locales/en';

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
  terminal: {
    open: 'Open Terminal',
    title: 'Terminal',
    description: 'Duc Trong Luong terminal app',
    inputLabel: 'Terminal command',
    placeholder: "Type command ('help', 'projects', 'contact')...",
    runCommand: 'Run command',
    commands: {
      descriptions: {
        help: 'List available commands',
        about: 'Display bio & summary',
        projects: 'List featured systems & architecture',
        skills: 'Display technical stack',
        contact: 'Get contact information',
        resume: 'View career experience',
        clear: 'Clear terminal screen',
        whoami: 'Print current session user',
      },
    },
    output: {
      welcome: "Duc Trong Luong CLI Terminal v2.0.0.4 (x86_64-pc-linux-gnu)\nType 'help' to list available commands.",
      availableCommands: 'Available commands:',
      commandNotRecognized: "Command not recognized: '{command}'. Type 'help' for available commands.",
      about: {
        title: 'Duc Trong Luong - Front-end Developer',
        description: 'Frontend Developer specializing in modern web and cross-platform mobile applications.',
        location: 'Location: Ho Chi Minh City, Vietnam',
      },
      projects: {
        categories: {
          eLearningPlatform: 'E-Learning Platform',
          enterpriseWebApplication: 'Enterprise Web Application',
          webGame: 'Web Game',
          portfolioWebsite: 'Portfolio Website',
        },
        statuses: {
          completed: 'Completed',
          inDevelopment: 'In development',
          maintained: 'Actively maintained',
          archived: 'Archived',
        },
      },
      skills: {
        groups: ['Languages', 'Frontend', 'Mobile & Desktop', 'Databases', 'DevOps & Tools'],
        currentlyLearning: 'Currently learning:',
        learningGroups: ['Web Ecosystem', 'Cross-platform & Native', 'Infrastructure'],
      },
      contact: {
        email: 'Email',
      },
    },
  },
  contact: {
    seo: {
      title: 'Contact - Duc Trong Luong',
      description: 'Contact Duc Trong Luong about web development, collaboration, and technical projects.',
    },
    header: {
      eyebrow: 'Open for collaboration',
      firstLine: 'Initialize',
      secondLine: 'Connection.',
      note: "Let's connect over a technical challenge or collaborative project.",
    },
    direct: {
      ariaLabel: 'Direct contact options',
      title: 'Direct access',
      description: 'Contact me directly at',
      emailCopied: 'Email copied',
      copyEmail: 'Copy email address',
    },
    network: {
      title: 'Network nodes',
    },
    awaitingInput: '// awaiting input...',
    form: {
      ariaLabel: 'Contact form',
      subject: 'Portfolio inquiry from {name}',
      placeholders: {
        name: 'Enter your name',
        email: 'Enter your email',
        message: 'Enter your message...',
      },
      responseTime: '// Expect a response within 24 hours',
      send: 'Send message',
      sending: 'Sending...',
      feedback: {
        success: 'Message sent successfully.',
        successDescription: 'I will get back to you soon.',
        error: 'Your message could not be sent. Please try again.',
      },
    },
  },
  skills: {
    seo: {
      title: 'Skills - Duc Trong Luong',
      description: 'The technologies, frameworks, databases, and engineering tools used by Duc Trong Luong.',
    },
    header: {
      eyebrow: 'Engineering capabilities',
      firstLine: 'Technical',
      secondLine: 'Craft.',
      note: 'A production-tested stack for turning product ideas into reliable interfaces.',
    },
    currentStack: 'Current Stack',
    expandingHorizons: 'Expanding Horizons',
    groups: {
      languages: 'Languages',
      frontend: 'Frontend',
      mobileDesktop: 'Mobile & Desktop',
      databases: 'Databases',
      devopsTools: 'DevOps & Tools',
    },
    learningGroups: {
      webEcosystem: 'Web Ecosystem',
      crossPlatformNative: 'Cross-platform & Native',
      infrastructure: 'Infrastructure',
    },
    groupLabel: '{group} skills',
    learningGroupLabel: '{group} technologies currently learning',
  },
  projects: projectMessages,
  home: {
    seo: {
      title: 'Duc Trong Luong - Front-end Developer',
      description:
        'Duc Trong Luong is a Front-end Developer specializing in modern web applications, cross-platform experiences, and thoughtful user interfaces.',
    },
    hero: {
      greeting: "Hi, I'm Duc Trong Luong 👋",
      headline: {
        start: 'Crafting',
        highlight: 'web & mobile experiences',
        end: 'that feel effortless.',
      },
      description: 'Frontend Developer specializing in modern web and cross-platform mobile applications.',
      actions: {
        viewWork: 'View my work',
        resume: 'My Resume',
      },
    },
    timeline: {
      eyebrow: 'Career Timeline',
      title: 'Milestones that shaped the way I build.',
      description:
        'A focused timeline of my academic foundation, enterprise internship experience, and ongoing front-end development work.',
      items: {
        education: {
          period: 'Oct 2022 - Jun 2026',
          title: 'Bachelor of Information Technology',
          organization: 'FPT University',
          location: 'Ho Chi Minh City, Vietnam',
          description:
            'Focused on Software Engineering fundamentals, product thinking, and building reliable application workflows from idea to delivery.',
          highlights: ['Software Engineering', 'Degree Classification: Very Good', 'GPA 8.11/10'],
        },
        internship: {
          period: 'Jan 2025 - Apr 2025',
          title: 'SAP Intern',
          organization: 'FPT Software',
          location: 'Ho Chi Minh City, Vietnam',
          description:
            'Contributed to enterprise software delivery, learned SAP project practices, and sharpened collaboration skills within a production-focused team.',
          highlights: ['ABAP', 'Fiori applications', 'SAP ecosystem'],
        },
        developer: {
          period: 'Apr 2025 - Present',
          title: 'Front-end Developer',
          organization: 'FTES',
          location: 'Remote / Ho Chi Minh City, Vietnam',
          description:
            'Building responsive interfaces, reusable UI components, and polished user flows for modern web products.',
          highlights: ['React & Next.js', 'Design systems', 'Frontend architecture'],
        },
      },
    },
  },
};
