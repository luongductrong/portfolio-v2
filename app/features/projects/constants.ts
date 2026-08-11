import type { Project } from './types';
import { FunnyCode1, FunnyCode2, FunnyCode3, FunnyCode4 } from '@/assets/images/projects/re-funnycode-frontend';
import { FioriStyle1, FioriStyle2, FioriStyle3, FioriStyle4 } from '@/assets/images/projects/react-fiori-style';
import { Game1, Game2, Game3, Game4 } from '@/assets/images/projects/game-2048';

export const projects = [
  {
    slug: 'funnycode-learning-platform',
    title: 'FunnyCode Learning Platform',
    summary:
      'A Vietnamese e-learning platform that helps learners build programming skills through structured courses, practical lessons, and an AI-assisted learning roadmap.',
    category: 'E-Learning Platform',
    year: '2025-2026',
    media: {
      images: [
        {
          id: 'funnycode-course-detail',
          src: FunnyCode4,
          alt: 'FunnyCode course detail page with a video preview, lesson sections, and enrollment information',
          caption: 'Course detail and learning content organized into lessons and sections.',
        },
        {
          id: 'funnycode-course-catalog',
          src: FunnyCode2,
          alt: 'FunnyCode course catalog with search, filters, ratings, and pricing',
          caption: 'Course discovery with category filters, ratings, and pricing.',
        },
        {
          id: 'funnycode-ai-roadmap',
          src: FunnyCode3,
          alt: 'FunnyCode AI roadmap form for generating a personalized learning path',
          caption: 'AI-assisted roadmap generation based on a learner’s goals and existing skills.',
        },
        {
          id: 'funnycode-login',
          src: FunnyCode1,
          alt: 'FunnyCode login screen with email and third-party sign-in options',
          caption: 'Authentication entry point for the learning platform.',
        },
      ],
    },
    links: {
      demo: 'https://funnycode.vn/',
    },
    metadata: {
      role: 'Frontend Developer / Refactor Owner',
      timeline: 'Jun 2025 - early 2026',
      status: 'maintained',
      teamSize: '5 frontend contributors',
      platform: 'Responsive web application',
    },
    stack: [
      { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'App Router / PPR'] },
      { label: 'UI System', items: ['Tailwind CSS 4', 'shadcn/ui'] },
      { label: 'State & Data', items: ['TanStack Query', 'Zustand', 'Axios'] },
      { label: 'Learning & Realtime', items: ['Tiptap', 'Video.js', 'StompJS', 'SockJS'] },
    ],
    overview: [
      'FunnyCode is an online learning platform for programming that helps learners move from course discovery to structured study and practical application in one responsive web experience.',
      'The product brings together searchable courses, detailed lesson delivery, video and document-based materials, account access, purchase flows, learner progress, and an AI-assisted roadmap workflow.',
      'Its feature-oriented frontend supports a broad learning product with server-rendered content, cached client data, rich educational content, and realtime platform integrations.',
      'A recent owner-provided seven-day production snapshot recorded approximately 400 visitors, 2.8K page views, and 56K edge requests. These figures describe traffic, not performance benchmarks.',
    ],
    objectives: [
      {
        title: 'Make programming learning structured',
        description:
          'Give learners a clear path from discovering a course to working through organized lessons and practical materials.',
      },
      {
        title: 'Support different learning formats',
        description:
          'Combine video, documents, slides, rich text, and exercises inside a consistent course experience.',
      },
      {
        title: 'Personalize the learning journey',
        description: 'Use learner context and existing skills to generate a more relevant AI-assisted roadmap.',
      },
      {
        title: 'Connect learning with product workflows',
        description:
          'Make authentication, course access, purchasing, progress, and achievements work together across the platform.',
      },
    ],
    features: [
      {
        title: 'Course discovery and purchase',
        description:
          'Browse courses with search, categories, ratings, pricing, cart, orders, packages, and promotions.',
      },
      {
        title: 'Multi-format learning content',
        description: 'Deliver structured courses containing video lessons, documents, slides, and practical exercises.',
      },
      {
        title: 'AI-assisted learning roadmap',
        description:
          'Generate a personalized learning path from a learner’s study context, target field, and existing skills.',
      },
      {
        title: 'Authentication and account access',
        description:
          'Support JWT-based sessions, device tracking, Google sign-in, and account-specific learning access.',
      },
      {
        title: 'Rich educational content',
        description:
          'Support rich text and code-oriented learning content through an editor and lesson content system.',
      },
      {
        title: 'Progress and achievements',
        description:
          'Organize learner progress around owned courses, points, certificates, and achievement-oriented experiences.',
      },
    ],
    responsibilities: [
      'Owned the frontend-wide refactor across the product feature modules, moving the codebase from Next.js 14 to Next.js 16 with PPR.',
      'Consolidated a mixed UI library setup into a consistent shadcn/ui and Tailwind CSS 4 system.',
      'Reworked SSR and rendering boundaries to improve the delivery of content-heavy learning pages.',
      'Reduced unnecessary client-side JavaScript and improved image loading and optimization across key routes.',
      'Refined the core course, authentication, roadmap, and commerce experiences while keeping the product ready for continued feature development.',
    ],
    challenges: [
      {
        title: 'Representing complex course structures',
        problem:
          'A single course can contain multiple parts and different lesson types, while learners still need a simple and predictable way to navigate the content.',
        solution:
          'Organized course and lesson data into reusable domain structures and presented video, document, and slide lessons through a consistent learning surface.',
      },
      {
        title: 'Keeping account, access, and commerce in sync',
        problem:
          'Authentication, owned courses, cart activity, and orders all depend on the same user context across a large set of routes.',
        solution:
          'Combined centralized authentication state with cached server data and shared API handling so feature modules could respond consistently to session changes.',
      },
      {
        title: 'Keeping content-heavy pages responsive',
        problem:
          'Course discovery and learning pages combine dynamic data, rich media, video content, and long lesson structures.',
        solution:
          'Used server-rendered content, focused client-side data fetching, bundle optimization, and responsive image delivery to keep the experience fast and usable.',
      },
    ],
    outcomes: [
      {
        value: '95 / 95 / 100 / 100',
        label: 'Lighthouse audit',
        description: 'Performance / Accessibility / Best Practices / SEO.',
      },
      {
        value: '~400 · ~2.8K',
        label: 'Visitors / page views · 7 days',
        description: 'Recent owner-provided production traffic snapshot.',
      },
      {
        value: '~56K',
        label: 'Edge requests · 7 days',
        description: 'Recent owner-provided production traffic snapshot.',
      },
    ],
  },
  {
    slug: 'react-fiori-style',
    title: 'React Fiori Style',
    summary:
      'A Fiori-aligned React application for managing SAP file attachments, business objects, and administrative workflows.',
    category: 'Enterprise Web Application',
    year: '2026',
    media: {
      images: [
        {
          id: 'fiori-attachment-list',
          src: FioriStyle2,
          alt: 'SAP Fiori-style attachment list with search filters, file metadata, and version information',
          caption: 'Attachment discovery with filters, metadata, versioning, and familiar Fiori actions.',
        },
        {
          id: 'fiori-attachment-detail',
          src: FioriStyle3,
          alt: 'Attachment detail screen showing metadata, audit information, preview, and version history',
          caption: 'Attachment details with preview, audit information, linked objects, and version history.',
        },
        {
          id: 'fiori-launchpad',
          src: FioriStyle1,
          alt: 'SAP Fiori-style launchpad with business and administration tiles',
          caption: 'Role-aware launchpad connecting business and system administration workflows.',
        },
        {
          id: 'fiori-admin-dashboard',
          src: FioriStyle4,
          alt: 'SAP Fiori-style administration dashboard with attachment, object, user, and configuration metrics',
          caption: 'Administrative overview of attachments, business objects, users, and configuration health.',
        },
      ],
    },
    links: {
      source: 'https://github.com/luongductrong/react-fiori-style',
    },
    metadata: {
      role: 'Frontend Maintainer / Technical Owner',
      timeline: 'Jan 2026 - May 2026',
      status: 'completed',
      teamSize: '2 frontend contributors',
      platform: 'SAP Fiori web application',
    },
    stack: [
      { label: 'Frontend', items: ['React 18', 'Vite', 'TypeScript', 'React Router'] },
      { label: 'Fiori UI', items: ['@ui5/webcomponents-react', 'Tailwind CSS 4'] },
      { label: 'State & Data', items: ['React Query', 'Zustand', 'Axios'] },
      { label: 'SAP & Delivery', items: ['SAP OData v4', 'UI5 Tooling', 'GitHub Actions'] },
      { label: 'External Integrations', items: ['Google Drive Picker'] },
    ],
    overview: [
      'React Fiori Style is an enterprise frontend that streamlines file attachment operations inside an SAP environment. It gives business users a focused way to browse, upload, version, preview, and connect files to business records.',
      'The application is organized as a role-aware portal with separate business workflows and administration tools. Users can move from a launchpad into attachment and business object areas, while administrators can manage users, configuration files, deleted attachments, and system activity.',
      'Built with React and Vite, the application uses SAP UI5 Web Components to preserve Fiori interaction patterns while React Query, Zustand, and Axios coordinate server data, local state, and API requests across feature modules.',
      'The frontend integrates with multiple SAP OData v4 services and is packaged for deployment into an SAP ABAP/Fiori environment. GitHub Actions automates the validation and deployment workflow for the SPA.',
    ],
    objectives: [
      {
        title: 'Simplify attachment operations',
        description:
          'Make searching, creating, updating, previewing, and versioning SAP attachments clear for everyday business users.',
      },
      {
        title: 'Preserve Fiori usability',
        description:
          'Deliver familiar SAP interaction patterns and visual language across business and administrative screens.',
      },
      {
        title: 'Connect files to business context',
        description:
          'Allow attachments to be linked with business objects and reviewed together with their metadata and audit trail.',
      },
      {
        title: 'Support safe administration',
        description:
          'Give authorized users visibility into system metrics, user access, configuration rules, and deleted records.',
      },
    ],
    features: [
      {
        title: 'Launchpad and role-based navigation',
        description:
          'Start from a centralized launchpad where business and administration tiles are shown according to user access.',
      },
      {
        title: 'Attachment search and management',
        description:
          'Browse attachments in table or grid views, filter by metadata, create records, and upload new file versions.',
      },
      {
        title: 'Preview, version history, and audit',
        description:
          'Inspect file metadata, preview documents, review version history, and follow audit information from one detail view.',
      },
      {
        title: 'Business object linking',
        description:
          'Connect attachments to SAP business objects and inspect the relationships that give files their business context.',
      },
      {
        title: 'Google Drive uploads',
        description: 'Import files from Google Workspace alongside standard local file uploads.',
      },
      {
        title: 'Administration dashboard',
        description:
          'Review system metrics and manage users, configuration files, deleted attachments, and operational information.',
      },
    ],
    responsibilities: [
      'Acted as the primary maintainer for the frontend repository and owned the technical direction, architecture, and core technology choices.',
      'Designed the initial interface direction and brought the business and administration screens to their final UI and interaction form.',
      'Built the React and Vite application around SAP UI5 Web Components, Tailwind CSS, React Router, React Query, and Zustand.',
      'Worked with the backend team to define the OData v4 contracts and implemented the shared Axios integration layer, including SAP client context and CSRF token handling.',
      'Implemented protected administration routes, role-aware navigation, and the automated GitHub Actions workflow for deploying the SPA into the SAP Fiori environment.',
    ],
    challenges: [
      {
        title: 'Recreating the Fiori experience in React',
        problem:
          'The application needed to feel native to an SAP environment while being built with a modern React stack and covering both business and administrative workflows.',
        solution:
          'Used SAP UI5 Web Components for business controls and Fiori interaction patterns, with Tailwind CSS reserved for layout, spacing, and responsive composition.',
      },
      {
        title: 'Working with SAP OData v4 services',
        problem:
          'SAP requests require client-specific parameters, CSRF protection, and consistent handling across multiple attachment, business object, user, and dashboard services.',
        solution:
          'Centralized API behavior in an Axios integration layer that resolves SAP context, manages CSRF token lifecycles, and keeps feature-level data hooks focused on business operations.',
      },
      {
        title: 'Deploying a Vite SPA into SAP Fiori',
        problem:
          'The target Fiori environment did not provide a direct deployment path for the Vite application, while deep links still needed to work reliably after deployment.',
        solution:
          'Packaged the SPA with UI5 tooling, used HashRouter for deployment-compatible navigation, and automated validation and delivery through GitHub Actions.',
      },
      {
        title: 'Supporting multiple upload sources',
        problem:
          'Users needed to upload files from their device or bring them directly from Google Drive without creating separate business flows.',
        solution:
          'Integrated the Google Drive Picker alongside local file inputs and normalized both sources into the same attachment upload workflow.',
      },
    ],
    outcomes: [],
  },
  {
    slug: 'game-2048',
    title: 'Game 2048',
    summary:
      'A responsive 2048 puzzle game with smooth tile animations, undo support, persistent high scores, and touch-friendly controls.',
    category: 'Web Game',
    year: '2024–2026',
    media: {
      images: [
        {
          id: 'game-2048-gameplay',
          src: Game2,
          alt: 'Game 2048 mid-game board showing animated numbered tiles and the current score',
          caption: 'The core 4x4 gameplay experience with responsive tile movement and score tracking.',
        },
        {
          id: 'game-2048-start',
          src: Game1,
          alt: 'Game 2048 starting board with two tiles, score controls, and a saved high score',
          caption: 'A clean starting state with new game, undo, and high score controls.',
        },
        {
          id: 'game-2048-new-game',
          src: Game3,
          alt: 'Game 2048 confirmation dialog for starting a new game',
          caption: 'A focused confirmation flow for restarting the current game.',
        },
        {
          id: 'game-2048-game-over',
          src: Game4,
          alt: 'Game 2048 game over dialog displayed over a full board',
          caption: 'The game over state when no valid moves remain.',
        },
      ],
    },
    links: {
      demo: 'https://ldt.is-a.dev/game-2048/',
      source: 'https://github.com/luongductrong/game-2048/',
    },
    metadata: {
      role: 'Solo Developer',
      timeline: 'Nov 2024 – Aug 2026',
      status: 'maintained',
      teamSize: 'Solo project',
      platform: 'Responsive web game',
    },
    stack: [
      { label: 'Frontend', items: ['React 19', 'TypeScript', 'Vite 8'] },
      { label: 'UI & Motion', items: ['Tailwind CSS 4', 'Framer Motion'] },
      { label: 'Game Architecture', items: ['Vanilla TypeScript engine', 'React hooks', 'useSyncExternalStore'] },
      { label: 'Tooling & Delivery', items: ['pnpm Workspace', 'GitHub Actions', 'GitHub Pages'] },
    ],
    overview: [
      'Game 2048 is a modern web implementation of the classic sliding tile puzzle. Players combine matching numbers on a 4x4 board and try to reach the 2048 tile through careful moves and planning.',
      'The experience is designed to feel immediate on both desktop and mobile, with keyboard controls, touch gestures, responsive board sizing, score feedback, and clear win and game-over states.',
      'Its core gameplay is separated from the React view layer through a framework-agnostic TypeScript engine. A custom store exposes read-only snapshots to React, while stable tile identities allow the interface to animate movement and merges naturally.',
      'This solo project began as an early TypeScript learning project in November 2024 and was substantially restructured in August 2026 to clarify the game engine and create a smoother animation layer.',
    ],
    objectives: [
      {
        title: 'Build faithful 2048 mechanics',
        description: 'Implement sliding, merging, score updates, random tile spawning, win detection, and game-over detection with predictable behavior.',
      },
      {
        title: 'Keep the engine independent',
        description: 'Separate board rules and state transitions from React rendering so the gameplay core stays testable and framework-agnostic.',
      },
      {
        title: 'Make movement feel fluid',
        description: 'Give tile movement, spawning, and merging enough visual feedback without turning animation logic into application logic.',
      },
      {
        title: 'Support different play styles',
        description: 'Offer a responsive board with keyboard controls for desktop and swipe gestures for touch devices.',
      },
    ],
    features: [
      {
        title: 'Classic 4x4 gameplay',
        description: 'Slide and merge numbered tiles in four directions while working toward the 2048 tile.',
      },
      {
        title: 'Score and high score tracking',
        description: 'Update the current score in real time and persist the best score locally in the browser.',
      },
      {
        title: 'Undo and new game controls',
        description: 'Restore the immediately previous board state or start a fresh game through focused action controls.',
      },
      {
        title: 'Keyboard and touch input',
        description: 'Play with desktop arrow keys or mobile swipe gestures using the same game engine.',
      },
      {
        title: 'Win and game-over states',
        description: 'Use modal feedback to make reaching 2048 and running out of valid moves easy to understand.',
      },
      {
        title: 'Animated tile presentation',
        description: 'Use stable tile identities and layout animation to make movement and merges feel continuous.',
      },
    ],
    responsibilities: [
      'Architected the framework-agnostic TypeScript game engine around Board, Line, Tile, and GameStore responsibilities.',
      'Developed the React frontend and custom hooks that synchronize engine snapshots with the rendered board.',
      'Designed the tile animation layer so movement and merges could remain fluid without duplicating game rules in UI code.',
      'Configured the pnpm workspace, Vite build process, and GitHub Actions deployment to GitHub Pages.',
      'Reworked the project in August 2026 to clarify the engine boundaries and improve the overall animation experience.',
    ],
    challenges: [
      {
        title: 'Animating a changing 2D board',
        problem: 'Tiles move and merge inside a matrix, but React animations need stable elements and predictable identity across renders.',
        solution: 'Flattened the board into uniquely identified tile objects and used Framer Motion layout animations to follow position changes without manual transform choreography.',
      },
      {
        title: 'Keeping game rules outside React',
        problem: 'Putting board logic directly inside components or hooks would couple gameplay behavior to rendering and create unnecessary re-renders.',
        solution: 'Built an independent GameStore with an observer-style update flow and connected it to React through useSyncExternalStore and immutable snapshots.',
      },
      {
        title: 'Making desktop and mobile input consistent',
        problem: 'Keyboard events and touch gestures have different interaction models but must produce the same deterministic move behavior.',
        solution: 'Normalized both input paths into the same store actions so the engine remains unaware of the device or control method.',
      },
    ],
    outcomes: [],
  },
] satisfies Project[];
