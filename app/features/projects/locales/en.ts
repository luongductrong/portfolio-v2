import type { ProjectId, ProjectTranslation } from '../types';

const items = {
  funnyCode: {
    summary:
      'A Vietnamese e-learning platform that helps learners build programming skills through structured courses, practical lessons, and an AI-assisted learning roadmap.',
    category: 'E-Learning Platform',
    media: {
      cover: {
        alt: 'FunnyCode Learning Platform cover with bold red typography and learning technology keywords',
        caption: 'FunnyCode Learning Platform.',
      },
      images: [
        {
          alt: 'FunnyCode course detail page with a video preview, lesson sections, and enrollment information',
          caption: 'Lessons organized into clear sections.',
        },
        {
          alt: 'FunnyCode course catalog with search, filters, ratings, and pricing',
          caption: 'Course search, filters, ratings, and pricing.',
        },
        {
          alt: 'FunnyCode AI roadmap form for generating a personalized learning path',
          caption: 'AI roadmaps shaped by learner goals and skills.',
        },
        {
          alt: 'FunnyCode login screen with email and third-party sign-in options',
          caption: 'Email and third-party authentication.',
        },
      ],
    },
    metadata: {
      role: 'Frontend Developer / Refactor Owner',
      timeline: 'Jun 2025 - early 2026',
      teamSize: '5 frontend contributors',
      platform: 'Responsive web application',
    },
    stackLabels: ['Frontend', 'UI System', 'State & Data', 'Learning & Realtime'],
    overview: [
      'FunnyCode guides learners from course discovery to structured, practical study.',
      'Its feature-oriented frontend combines rich content, commerce, progress tracking, and AI-assisted roadmaps.',
    ],
    objectives: [
      {
        title: 'Structure the learning journey',
        description: 'Guide learners from course discovery to practical lessons.',
      },
      { title: 'Support rich content', description: 'Unify video, documents, slides, and exercises.' },
      {
        title: 'Personalize learning',
        description: 'Generate roadmaps from each learner’s goals and skills.',
      },
    ],
    features: [
      { title: 'Course marketplace', description: 'Search, compare, and purchase courses.' },
      {
        title: 'Multi-format learning content',
        description: 'Study through video, documents, slides, and exercises.',
      },
      {
        title: 'AI-assisted learning roadmap',
        description: 'Build a learning path from personal goals and skills.',
      },
      {
        title: 'Progress and accounts',
        description: 'Track owned courses, progress, points, and certificates.',
      },
    ],
    responsibilities: [
      'Led the frontend refactor from Next.js 14 to Next.js 16 with PPR.',
      'Unified the interface with shadcn/ui and Tailwind CSS 4.',
      'Improved rendering boundaries, client JavaScript, and image delivery.',
    ],
    challenges: [
      {
        title: 'Complex course structures',
        problem: 'Courses combine many sections and lesson formats.',
        solution: 'Modeled reusable course structures behind one learning interface.',
      },
      {
        title: 'Content-heavy pages',
        problem: 'Dynamic data, rich media, and long lessons strained delivery.',
        solution: 'Combined server rendering, focused fetching, and optimized media.',
      },
    ],
    outcomes: [
      { value: '95 / 95', label: 'Performance / Accessibility', description: 'Lighthouse audit.' },
      { value: '100', label: 'Best Practices', description: 'Lighthouse audit.' },
      { value: '100', label: 'SEO', description: 'Lighthouse audit.' },
    ],
  },
  reactFioriStyle: {
    summary:
      'A Fiori-aligned React application for managing SAP file attachments, business objects, and administrative workflows.',
    category: 'Enterprise Web Application',
    media: {
      cover: {
        alt: 'React Fiori Style cover with blue SAP-inspired typography and enterprise workflow keywords',
        caption: 'React Fiori Style.',
      },
      images: [
        {
          alt: 'SAP Fiori-style attachment list with search filters, file metadata, and version information',
          caption: 'Attachment search, metadata, and versioning.',
        },
        {
          alt: 'Attachment detail screen showing metadata, audit information, preview, and version history',
          caption: 'File preview, audit data, and version history.',
        },
        {
          alt: 'SAP Fiori-style launchpad with business and administration tiles',
          caption: 'Role-aware business and administration launchpad.',
        },
        {
          alt: 'SAP Fiori-style administration dashboard with attachment, object, user, and configuration metrics',
          caption: 'System metrics and administration tools.',
        },
      ],
    },
    metadata: {
      role: 'Frontend Maintainer / Technical Owner',
      timeline: 'Jan 2026 - May 2026',
      teamSize: '2 frontend contributors',
      platform: 'SAP Fiori web application',
    },
    stackLabels: ['Frontend', 'Fiori UI', 'State & Data', 'SAP & Delivery', 'External Integrations'],
    overview: [
      'React Fiori Style streamlines attachment workflows inside SAP environments.',
      'The role-aware portal connects business tools, administration, OData services, and automated Fiori deployment.',
    ],
    objectives: [
      {
        title: 'Simplify attachment operations',
        description: 'Make attachment search, preview, and versioning intuitive.',
      },
      {
        title: 'Preserve Fiori usability',
        description: 'Keep SAP interactions familiar across every workflow.',
      },
      {
        title: 'Connect files to business context',
        description: 'Link attachments to business objects and audit data.',
      },
    ],
    features: [
      {
        title: 'Role-aware launchpad',
        description: 'Show business and administration tools by access level.',
      },
      { title: 'Attachment management', description: 'Find, create, preview, and version attachments.' },
      {
        title: 'Business object linking',
        description: 'Connect files to their SAP business context.',
      },
      {
        title: 'Administration tools',
        description: 'Manage users, configuration, deleted files, and metrics.',
      },
    ],
    responsibilities: [
      'Owned frontend architecture, technology choices, and interface direction.',
      'Built the React application and shared OData v4 integration layer.',
      'Implemented access control and automated SAP Fiori deployment.',
    ],
    challenges: [
      {
        title: 'Fiori in React',
        problem: 'A modern React app still needed to feel native to SAP.',
        solution: 'Combined UI5 controls with Tailwind-based composition.',
      },
      {
        title: 'SAP service integration',
        problem: 'OData requests required SAP context and CSRF protection.',
        solution: 'Centralized both concerns in a shared Axios layer.',
      },
    ],
    outcomes: [],
  },
  game2048: {
    summary:
      'A responsive 2048 puzzle game with smooth tile animations, undo support, persistent high scores, and touch-friendly controls.',
    category: 'Web Game',
    media: {
      cover: {
        alt: 'Game 2048 cover with playful pink typography, puzzle tiles, and interaction keywords',
        caption: 'Game 2048.',
      },
      images: [
        {
          alt: 'Game 2048 mid-game board showing animated numbered tiles and the current score',
          caption: 'Responsive 4x4 gameplay and score tracking.',
        },
        {
          alt: 'Game 2048 starting board with two tiles, score controls, and a saved high score',
          caption: 'New game, undo, and high score controls.',
        },
        {
          alt: 'Game 2048 confirmation dialog for starting a new game',
          caption: 'New game confirmation.',
        },
        {
          alt: 'Game 2048 game over dialog displayed over a full board',
          caption: 'Game over when no moves remain.',
        },
      ],
    },
    metadata: {
      role: 'Solo Developer',
      timeline: 'Nov 2024 - Aug 2026',
      teamSize: 'Solo project',
      platform: 'Responsive web game',
    },
    stackLabels: ['Frontend', 'UI & Motion', 'Game Architecture', 'Tooling & Delivery'],
    overview: [
      'Game 2048 brings the classic puzzle to desktop and mobile with fluid controls and feedback.',
      'A framework-agnostic TypeScript engine keeps game rules separate from React and animation.',
    ],
    objectives: [
      {
        title: 'Preserve classic mechanics',
        description: 'Keep movement, merging, scoring, and end states predictable.',
      },
      { title: 'Keep the engine independent', description: 'Separate game rules from React rendering.' },
      { title: 'Support every device', description: 'Provide responsive keyboard and touch controls.' },
    ],
    features: [
      { title: 'Classic 4x4 gameplay', description: 'Slide and merge tiles toward 2048.' },
      { title: 'Persistent scoring', description: 'Track the score and save the personal best.' },
      { title: 'Undo and restart', description: 'Restore the last board or start again.' },
      {
        title: 'Fluid tile animation',
        description: 'Animate movement, spawning, and merges naturally.',
      },
    ],
    responsibilities: [
      'Architected the framework-agnostic TypeScript game engine.',
      'Built the React interface, store synchronization, and tile animations.',
      'Configured the workspace, build, and GitHub Pages deployment.',
    ],
    challenges: [
      {
        title: 'Animating a 2D board',
        problem: 'Moving and merging tiles needed stable identities.',
        solution: 'Mapped unique tiles to Framer Motion layout animations.',
      },
      {
        title: 'Keeping game rules outside React',
        problem: 'UI-bound logic would couple gameplay to rendering.',
        solution: 'Connected an independent store through immutable snapshots.',
      },
    ],
    outcomes: [],
  },
  portfolioV2: {
    summary:
      'A personal developer portfolio that presents selected projects, technical capabilities, and contact pathways through a fast, responsive static website.',
    category: 'Portfolio Website',
    media: {
      cover: {
        alt: 'Portfolio v2 cover featuring green developer typography, technology labels, a terminal prompt, and an orbital web interface motif',
        caption: 'Portfolio v2 visual identity.',
      },
      images: [
        {
          alt: 'Portfolio v2 home page with developer introduction, availability status, and project call to action',
          caption: 'Role, availability, and selected work.',
        },
        {
          alt: 'Portfolio v2 projects page showing a responsive archive of project case studies',
          caption: 'Selected work as structured case studies.',
        },
        {
          alt: 'Portfolio v2 skills page organizing languages, frontend technologies, databases, and delivery tools',
          caption: 'Capabilities grouped by product role.',
        },
        {
          alt: 'Portfolio v2 contact page with inquiry form, direct email access, and professional network links',
          caption: 'Protected inquiries and direct contact links.',
        },
      ],
    },
    metadata: {
      role: 'Creator / Frontend Developer',
      timeline: 'Jul 2026 - Present',
      teamSize: 'Solo project',
      platform: 'Responsive static website',
    },
    stackLabels: ['Frontend', 'UI & Motion', 'Experience', 'Delivery & Services'],
    overview: [
      'Portfolio v2 presents my projects, capabilities, and professional context through clear browsing paths.',
      'Nuxt static generation keeps delivery simple while supporting themes, responsive layouts, and motion.',
    ],
    objectives: [
      {
        title: 'Present work with context',
        description: 'Turn projects into concise, structured case studies.',
      },
      {
        title: 'Clarify professional identity',
        description: 'Communicate my focus, capabilities, and availability.',
      },
      {
        title: 'Keep delivery lightweight',
        description: 'Use static generation and automated deployment.',
      },
    ],
    features: [
      { title: 'Project case studies', description: 'Present project context through a reusable layout.' },
      { title: 'Responsive archive', description: 'Browse selected work across screen sizes.' },
      {
        title: 'Adaptive themes and motion',
        description: 'Combine persistent color modes with restrained feedback.',
      },
      {
        title: 'Protected contact workflow',
        description: 'Use Netlify Forms on the primary deployment and Formspree with Turnstile on the external alias.',
      },
    ],
    responsibilities: [
      'Designed and built the portfolio with Nuxt, Vue, and Tailwind CSS.',
      'Created its visual system, project model, and reusable case studies.',
      'Implemented protected contact and automated static deployment.',
    ],
    challenges: [
      {
        title: 'Consistent case studies',
        problem: 'Different projects needed one flexible presentation model.',
        solution: 'Created a typed schema and reusable detail sections.',
      },
      {
        title: 'Protecting a public contact form',
        problem: 'Spam protection needed to remain unobtrusive.',
        solution: 'Selected Cloudflare Turnstile verification with Netlify Forms or Formspree according to the deployment environment.',
      },
    ],
    outcomes: [],
  },
} satisfies Record<ProjectId, ProjectTranslation>;

export default {
  seo: {
    title: 'Projects - Duc Trong Luong',
    detailTitle: '{project} - Duc Trong Luong',
    description: 'Selected web, mobile, and technical projects by Duc Trong Luong.',
  },
  gallery: {
    eyebrow: 'Selected work',
    firstLine: 'Web',
    secondLine: 'Engineering.',
    note: 'Selected projects pairing clean interfaces with scalable, reliable engineering.',
    archive: 'Project archive',
    count: '{count} projects',
  },
  card: {
    viewLabel: 'View {project} project',
    technologies: 'Technologies used',
    viewCaseStudy: 'View project',
  },
  statuses: {
    completed: 'Completed',
    inDevelopment: 'In development',
    maintained: 'Actively maintained',
    archived: 'Archived',
  },
  detail: {
    allProjects: 'All projects',
    liveDemo: 'Live demo',
    sourceCode: 'Source code',
    quickHighlights: 'Quick Highlights',
    overview: 'Project overview',
    objectives: 'Objectives',
    features: 'Key features',
    challengesAndDecisions: 'Challenges and decisions',
    challenge: 'Challenge',
    decision: 'Decision',
    contribution: 'My contribution',
    information: 'Project information',
    facts: 'Project facts',
    role: 'Role',
    timeline: 'Timeline',
    team: 'Team',
    platform: 'Platform',
    technologyStack: 'Technology stack',
    resources: 'Project resources',
    readDocumentation: 'Read documentation',
  },
  media: {
    previewImage: 'Preview image {index}: {description}',
    showImage: 'Show image {index}: {description}',
    thumbnails: 'Project image thumbnails',
    dialogTitle: 'Project image preview',
    dialogDescription: 'Use the previous and next buttons or arrow keys to browse project images.',
    previousImage: 'Previous image',
    nextImage: 'Next image',
  },
  items,
};
