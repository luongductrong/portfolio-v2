import type { Project } from './types';

const mockImages = {
  analytics:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsxMEPx0KXIB87e2XRdUaO41vZxii6v_DVDf_1gh2w3OtJWrifFZpRPRBb4BpsPVTl5v5OzbM_XudXQGSIt7Hv6DX8kC7i7ZxsX0QSbk6MZO-GAhTSKcU1RJmyHJn0FQXc6Smenr93IpXuZ7GpYqQEO7FdsRhKkCNKB55Ik6FWpALDXm7cAsS_rmEjEyEjksBTokzPDAAEVs-dY8XRUMAEwK2YHO00rYil7bZx9xp_UXDTPvA5EAg',
  infrastructure:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHkr3EaS8fRzr7w8sJ-tZ_vEz_79_2guLDVZwoD9W4VJrEqyYq10IP-tJN2ZLemylFGJxsjXzAW2W1BTAQJLVyDPa1I4202GzgyR4OGhIeblgJRNejrh1MJAHYCw88bs9MhSIDZS_bj-D6ytHnSsyysug4xE6JpIYpvLcDsIjL62KRp-hLng3L61k0NFIzzXOa1FWfIOGABn2guUVKyNKgaEwcXh0WkSMJBeasMiurpYLl3G0JREC',
  mobile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC4RSoedUNj27oehUmLrUJ9lfQcsSwzF_8fNldfCgRzYMr9YMzNxSBS5fAyynjNzpWEnRlPI7miwOt6AllkHe6uwHPBp5RLhLA9MAdzPJ3lyeQi0suTCQYqtRGv0mB2_gu8tXJF1_uQoJRy2JSXdz37iC_zXh7k2O6rczDWqIsPuYJVmkQQfoG2uJF7PFkNOLawBKyyLE7rr9iMd8QC5CDExJweMmvf03D2ahR092n_YVyJcXVuBfJG',
  architecture:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsxMEPx0KXIB87e2XRdUaO41vZxii6v_DVDf_1gh2w3OtJWrifFZpRPRBb4BpsPVTl5v5OzbM_XudXQGSIt7Hv6DX8kC7i7ZxsX0QSbk6MZO-GAhTSKcU1RJmyHJn0FQXc6Smenr93IpXuZ7GpYqQEO7FdsRhKkCNKB55Ik6FWpALDXm7cAsS_rmEjEyEjksBTokzPDAAEVs-dY8XRUMAEwK2YHO00rYil7bZx9xp_UXDTPvA5EAg',
};

export const projects = [
  {
    slug: 'e-commerce-storefront-react',
    title: 'React E-Commerce Storefront',
    summary:
      'A high-performance storefront with fluid product discovery, resilient cart state, and a focused mobile checkout experience.',
    category: 'Web Application',
    year: '2026',
    media: {
      images: [
        {
          id: 'storefront-overview',
          src: mockImages.analytics,
          alt: 'Storefront analytics and product management overview',
          caption: 'Commerce overview with catalog, inventory, and conversion signals.',
        },
        {
          id: 'storefront-architecture',
          src: mockImages.architecture,
          alt: 'Visual representation of the storefront application architecture',
          caption: 'Modular application architecture and data flow.',
        },
        {
          id: 'storefront-checkout',
          src: mockImages.mobile,
          alt: 'Mobile checkout and order confirmation interface',
          caption: 'Mobile-first checkout flow with clear progress and validation.',
        },
        {
          id: 'storefront-platform',
          src: mockImages.infrastructure,
          alt: 'Storefront deployment and edge delivery visualization',
          caption: 'Edge delivery strategy for fast regional storefront performance.',
        },
      ],
    },
    links: {
      demo: 'https://demo.example.com',
      source: 'https://github.com/luongductrong/mock-ecommerce',
      documentation: 'https://example.com/docs/storefront',
    },
    metadata: {
      role: 'Frontend Developer',
      timeline: 'Q1 2026',
      status: 'completed',
      teamSize: 'Solo project',
      platform: 'Responsive web',
    },
    stack: [
      { label: 'Interface', items: ['React', 'Next.js', 'Tailwind CSS'] },
      { label: 'State & Motion', items: ['Zustand', 'Framer Motion'] },
      { label: 'Quality', items: ['TypeScript', 'Playwright', 'Lighthouse'] },
    ],
    overview: [
      'This project explores a complete storefront journey, from browsing and product comparison through cart management and checkout. The interface prioritizes clear product information and predictable interactions on every viewport.',
      'The application is frontend-focused and backed by structured mock data. Its architecture mirrors a production commerce system so a real catalog, customer identity, and payment service can be integrated later without redesigning the UI layer.',
    ],
    objectives: [
      {
        title: 'Fast by default',
        description: 'Keep product discovery responsive through route-level caching, optimized media, and lean client state.',
      },
      {
        title: 'Checkout confidence',
        description: 'Reduce ambiguity with visible progress, inline validation, and recoverable cart state.',
      },
      {
        title: 'Accessible commerce',
        description: 'Support keyboard navigation, semantic product content, and clear focus management.',
      },
    ],
    features: [
      {
        title: 'Product discovery',
        description: 'Search, category filters, sorting, and product comparison built for rapid scanning.',
      },
      {
        title: 'Persistent cart',
        description: 'Cart state survives route changes and browser sessions without blocking the interface.',
      },
      {
        title: 'Adaptive checkout',
        description: 'A mobile-first checkout flow with clear validation and order review states.',
      },
      {
        title: 'Theme-aware UI',
        description: 'A token-driven interface that remains readable and consistent across color modes.',
      },
    ],
    responsibilities: [
      'Defined the frontend architecture and reusable commerce component boundaries.',
      'Implemented responsive catalog, product detail, cart, and checkout experiences.',
      'Designed the mock data contracts to resemble future commerce API responses.',
      'Audited loading behavior, keyboard workflows, and Core Web Vitals.',
    ],
    challenges: [
      {
        title: 'Cart state across deeply nested routes',
        problem:
          'Product options and quantities needed to remain consistent across listing, detail, cart, and checkout routes without prop drilling.',
        solution:
          'A small normalized Zustand store separated product identity from presentation state and persisted only the fields required to restore a cart.',
      },
      {
        title: 'Rich imagery without slow page transitions',
        problem: 'Large product media created layout shifts and delayed meaningful content on mobile connections.',
        solution:
          'Responsive image sizing, stable aspect ratios, and prioritized above-the-fold media kept pages visually stable while loading progressively.',
      },
    ],
    outcomes: [
      { value: '100', label: 'Lighthouse accessibility', description: 'Target score across primary customer routes.' },
      { value: '< 2.0s', label: 'Largest contentful paint', description: 'Measured on the production preview profile.' },
      { value: '4', label: 'Responsive breakpoints', description: 'Validated from compact mobile to wide desktop.' },
    ],
  },
  {
    slug: 'admin-dashboard-vue',
    title: 'Vue Admin Dashboard Pro',
    summary:
      'A modular operations dashboard with dense data views, interactive reporting, and flexible team workflows.',
    category: 'Web Application',
    year: '2025',
    media: {
      images: [
        {
          id: 'dashboard-overview',
          src: mockImages.infrastructure,
          alt: 'Admin dashboard with connected service and analytics modules',
          caption: 'Operations overview combining service health and business signals.',
        },
        {
          id: 'dashboard-analytics',
          src: mockImages.analytics,
          alt: 'Detailed analytics dashboard with charts and data tables',
          caption: 'Configurable reporting workspace for operational metrics.',
        },
        {
          id: 'dashboard-mobile',
          src: mockImages.mobile,
          alt: 'Compact dashboard interface adapted for mobile screens',
          caption: 'Priority workflows remain available on compact screens.',
        },
        {
          id: 'dashboard-system-map',
          src: mockImages.architecture,
          alt: 'Architecture map for the dashboard modules and services',
          caption: 'Feature modules connected through typed service boundaries.',
        },
      ],
    },
    links: {
      demo: 'https://demo.example.com',
      source: 'https://github.com/luongductrong/mock-dashboard',
    },
    metadata: {
      role: 'UI/UX Engineer',
      timeline: 'Q3 2025 - Q4 2025',
      status: 'in-development',
      teamSize: '3 contributors',
      platform: 'SaaS dashboard',
    },
    stack: [
      { label: 'Application', items: ['Vue 3', 'Nuxt', 'TypeScript'] },
      { label: 'State & Data', items: ['Pinia', 'TanStack Table', 'Chart.js'] },
      { label: 'Interaction', items: ['VueUse', 'Vue Draggable', 'Tailwind CSS'] },
    ],
    overview: [
      'The dashboard is a reusable foundation for operational SaaS products. It balances information density with predictable navigation so recurring workflows stay fast for experienced users.',
      'Each feature is organized around typed domain modules. Mock datasets model realistic loading, empty, error, and high-volume states before backend contracts are finalized.',
    ],
    objectives: [
      {
        title: 'Dense but readable',
        description: 'Present large datasets without sacrificing hierarchy, focus, or responsive behavior.',
      },
      {
        title: 'Composable modules',
        description: 'Allow charts, tables, and workflow panels to evolve independently.',
      },
      {
        title: 'Operational speed',
        description: 'Minimize clicks for frequent filtering, bulk actions, and status review.',
      },
    ],
    features: [
      {
        title: 'Custom dashboards',
        description: 'Rearrangeable widgets with persisted layout preferences for each workspace.',
      },
      {
        title: 'Advanced data tables',
        description: 'Column controls, compound filters, row selection, and virtualized rendering.',
      },
      {
        title: 'Kanban workflows',
        description: 'Accessible drag-and-drop task movement with clear status feedback.',
      },
      {
        title: 'Interactive reporting',
        description: 'Linked charts and filters that preserve context while drilling into a metric.',
      },
    ],
    responsibilities: [
      'Established information architecture and navigation patterns for repeated workflows.',
      'Built reusable chart, table, filter, and workspace primitives.',
      'Defined loading, empty, partial, and error states for every data surface.',
      'Profiled high-volume views and introduced virtualization where it materially improved responsiveness.',
    ],
    challenges: [
      {
        title: 'Rendering large datasets efficiently',
        problem: 'Thousands of rows and multiple reactive charts caused frame drops during filtering and scrolling.',
        solution:
          'Virtualized table rows, memoized chart transformations, and scoped reactive state kept interactions responsive under load.',
      },
      {
        title: 'Keeping dense screens understandable',
        problem: 'Adding more operational controls made hierarchy and primary actions harder to scan.',
        solution:
          'Progressive disclosure, consistent tool placement, and saved user preferences reduced visible complexity without removing capability.',
      },
    ],
    outcomes: [
      { value: '10k+', label: 'Virtualized records', description: 'Smooth filtering and scrolling in benchmark datasets.' },
      { value: '60fps', label: 'Interaction target', description: 'Maintained during board movement and chart updates.' },
      { value: '12', label: 'Reusable modules', description: 'Shared across analytics and operations views.' },
    ],
  },
  {
    slug: 'portfolio-website-svelte',
    title: 'Minimalist Svelte Portfolio',
    summary:
      'A focused portfolio experience combining expressive motion, strong typography, and lightweight content delivery.',
    category: 'Portfolio Website',
    year: '2025',
    media: {
      images: [
        {
          id: 'portfolio-cover',
          src: mockImages.mobile,
          alt: 'Portfolio interface presented across responsive device sizes',
          caption: 'Responsive portfolio composition with focused project storytelling.',
        },
        {
          id: 'portfolio-motion',
          src: mockImages.analytics,
          alt: 'Portfolio motion study and interaction timeline',
          caption: 'Motion studies used to tune pacing and visual continuity.',
        },
        {
          id: 'portfolio-delivery',
          src: mockImages.infrastructure,
          alt: 'Portfolio content delivery and deployment visualization',
          caption: 'Static delivery pipeline optimized for fast global access.',
        },
        {
          id: 'portfolio-architecture',
          src: mockImages.architecture,
          alt: 'Component architecture of the portfolio website',
          caption: 'Small, focused component boundaries keep the experience maintainable.',
        },
      ],
    },
    links: {
      demo: 'https://demo.example.com',
      source: 'https://github.com/luongductrong/mock-portfolio',
    },
    metadata: {
      role: 'Creative Developer',
      timeline: 'Q2 2025',
      status: 'maintained',
      teamSize: 'Solo project',
      platform: 'Static website',
    },
    stack: [
      { label: 'Framework', items: ['Svelte', 'SvelteKit', 'TypeScript'] },
      { label: 'Motion', items: ['GSAP', 'Lenis', 'CSS Transforms'] },
      { label: 'Delivery', items: ['Static Generation', 'Vercel', 'Playwright'] },
    ],
    overview: [
      'This portfolio focuses on project storytelling through deliberate typography, pacing, and motion. Content remains the primary signal while interactions add context rather than compete for attention.',
      'The site is statically generated and keeps its runtime footprint small. Structured project data drives both listing and detail views, making future case studies straightforward to add.',
    ],
    objectives: [
      {
        title: 'Content first',
        description: 'Keep work, process, and outcomes readable before introducing decorative motion.',
      },
      {
        title: 'Natural movement',
        description: 'Use motion to reinforce spatial relationships and navigation context.',
      },
      {
        title: 'Minimal runtime',
        description: 'Prefer static output and progressive enhancement for fast delivery.',
      },
    ],
    features: [
      {
        title: 'Project storytelling',
        description: 'Structured case studies with galleries, decisions, challenges, and measurable outcomes.',
      },
      {
        title: 'Motion system',
        description: 'Shared duration and easing rules keep transitions coherent across the site.',
      },
      {
        title: 'Responsive typography',
        description: 'Carefully constrained line lengths and hierarchy across compact and wide screens.',
      },
      {
        title: 'Static content model',
        description: 'Typed content makes publishing a project predictable and low risk.',
      },
    ],
    responsibilities: [
      'Defined visual direction, typography hierarchy, and interaction principles.',
      'Implemented the component system and structured project content model.',
      'Created motion prototypes and reduced effects for compact or constrained devices.',
      'Verified responsive composition and core navigation workflows.',
    ],
    challenges: [
      {
        title: 'Jank-free scroll animation on mobile',
        problem: 'Layered parallax effects caused layout work and dropped frames on lower-end devices.',
        solution:
          'Animations were reduced to transform and opacity, expensive effects were removed on compact screens, and reduced-motion preferences were respected.',
      },
      {
        title: 'Balancing expression with readability',
        problem: 'Large motion sequences initially delayed access to project content.',
        solution:
          'Content appears immediately while motion is limited to short transitions that clarify hierarchy and navigation.',
      },
    ],
    outcomes: [
      { value: '95+', label: 'Performance target', description: 'Lighthouse goal across mobile portfolio routes.' },
      { value: '< 100kb', label: 'Initial JavaScript', description: 'Target budget for the primary landing experience.' },
      { value: 'AA', label: 'Accessibility baseline', description: 'Contrast, keyboard flow, and reduced-motion support.' },
    ],
  },
] satisfies Project[];
