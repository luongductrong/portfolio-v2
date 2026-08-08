import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'e-commerce-storefront-react',
    title: 'React E-Commerce Storefront',
    summary:
      'A high-performance modern e-commerce storefront featuring a beautiful UI, smooth animations, and a seamless shopping experience.',
    category: 'Web Application',
    year: '2026',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsxMEPx0KXIB87e2XRdUaO41vZxii6v_DVDf_1gh2w3OtJWrifFZpRPRBb4BpsPVTl5v5OzbM_XudXQGSIt7Hv6DX8kC7i7ZxsX0QSbk6MZO-GAhTSKcU1RJmyHJn0FQXc6Smenr93IpXuZ7GpYqQEO7FdsRhKkCNKB55Ik6FWpALDXm7cAsS_rmEjEyEjksBTokzPDAAEVs-dY8XRUMAEwK2YHO00rYil7bZx9xp_UXDTPvA5EAg',
    imageAlt: 'Abstract digital architecture illuminated by emerald data streams',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    demoUrl: 'https://demo.example.com',
    sourceUrl: 'https://github.com/luongductrong/mock-ecommerce',
    overview: [
      'This project was built to explore the latest Next.js App Router features while providing a blazing fast shopping experience. It is a purely frontend focused application using mock data to populate the UI.',
      'It includes a fully functional (but fake) shopping cart, dynamic product listings, and a simulated checkout process, all designed with a mobile-first approach.',
    ],
    goals: [
      {
        title: 'Lighthouse Score 100',
        description: 'Achieve perfect performance scores through aggressive caching and image optimization.',
        icon: 'performance',
      },
      {
        title: 'Responsive Design',
        description: 'Ensure a flawless layout across all device sizes, from mobile phones to ultrawide monitors.',
        icon: 'scalability',
      },
      {
        title: 'Accessible Components',
        description: 'Implement ARIA attributes and keyboard navigation for a fully accessible UI.',
        icon: 'reliability',
      },
    ],
    challenge: {
      title: 'Complex state management for the shopping cart',
      problem:
        'Handling the shopping cart state across different routes and deeply nested components without resorting to heavy prop drilling or complex context providers.',
      solution:
        'Implemented Zustand for a lightweight, fast, and scalable global state management solution, keeping the components clean and performant.',
    },
    role: 'Frontend Developer',
    timeline: 'Q1 2026',
    status: 'Completed',
  },
  {
    slug: 'admin-dashboard-vue',
    title: 'Vue Admin Dashboard Pro',
    summary:
      'A comprehensive admin dashboard template with dark mode, interactive charts, and drag-and-drop Kanban boards.',
    category: 'Web Application',
    year: '2025',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHkr3EaS8fRzr7w8sJ-tZ_vEz_79_2guLDVZwoD9W4VJrEqyYq10IP-tJN2ZLemylFGJxsjXzAW2W1BTAQJLVyDPa1I4202GzgyR4OGhIeblgJRNejrh1MJAHYCw88bs9MhSIDZS_bj-D6ytHnSsyysug4xE6JpIYpvLcDsIjL62KRp-hLng3L61k0NFIzzXOa1FWfIOGABn2guUVKyNKgaEwcXh0WkSMJBeasMiurpYLl3G0JREC',
    imageAlt: 'Cloud infrastructure connected by glowing network lines',
    technologies: ['Vue 3', 'Nuxt', 'Pinia', 'Chart.js', 'Tailwind CSS'],
    demoUrl: 'https://demo.example.com',
    sourceUrl: 'https://github.com/luongductrong/mock-dashboard',
    overview: [
      'Designed as a highly reusable UI template for SaaS applications, this dashboard features complex data visualization and a modular component architecture.',
      'All data displayed in the charts, tables, and boards is mock-generated on the client side purely to demonstrate the UI capabilities and layout structures.',
    ],
    goals: [
      {
        title: 'Modular Architecture',
        description: 'Build highly decoupled components that can be easily reused or replaced in future projects.',
        icon: 'performance',
      },
      {
        title: 'Dark/Light Theme',
        description: 'Implement a seamless theme switching mechanism with beautifully curated color palettes.',
        icon: 'scalability',
      },
      {
        title: 'Rich Interactions',
        description: 'Provide intuitive drag-and-drop interfaces and interactive data visualizations.',
        icon: 'reliability',
      },
    ],
    challenge: {
      title: 'Rendering large datasets efficiently',
      problem:
        'Displaying thousands of mock records in tables and rendering complex charts was causing noticeable lag and frame drops during scrolling.',
      solution:
        'Integrated virtual scrolling for the data tables and implemented aggressive data memoization for the charts to maintain a smooth 60fps experience.',
    },
    role: 'UI/UX Engineer',
    timeline: 'Q3 2025 - Q4 2025',
    status: 'In development',
  },
  {
    slug: 'portfolio-website-svelte',
    title: 'Minimalist Svelte Portfolio',
    summary:
      'A sleek, heavily animated personal portfolio website demonstrating the power and simplicity of SvelteKit.',
    category: 'Web Website',
    year: '2025',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4RSoedUNj27oehUmLrUJ9lfQcsSwzF_8fNldfCgRzYMr9YMzNxSBS5fAyynjNzpWEnRlPI7miwOt6AllkHe6uwHPBp5RLhLA9MAdzPJ3lyeQi0suTCQYqtRGv0mB2_gu8tXJF1_uQoJRy2JSXdz37iC_zXh7k2O6rczDWqIsPuYJVmkQQfoG2uJF7PFkNOLawBKyyLE7rr9iMd8QC5CDExJweMmvf03D2ahR092n_YVyJcXVuBfJG',
    imageAlt: 'Dark mobile finance interface displayed on a black surface',
    technologies: ['Svelte', 'SvelteKit', 'CSS Modules', 'GSAP', 'Lenis'],
    demoUrl: 'https://demo.example.com',
    sourceUrl: 'https://github.com/luongductrong/mock-portfolio',
    overview: [
      'A purely frontend creative coding project focused entirely on micro-animations, typography, and smooth scrolling experiences.',
      'It leverages GSAP for complex scroll-triggered animations and serves static content for instant load times. The text is placeholder content tailored for design showcase.',
    ],
    goals: [
      {
        title: 'Pixel-perfect Design',
        description: 'Translate a high-fidelity Figma mockup into code with absolute precision.',
        icon: 'performance',
      },
      {
        title: 'Smooth Animations',
        description: 'Create engaging micro-interactions and scroll animations that feel natural and fluid.',
        icon: 'scalability',
      },
      {
        title: 'Zero Runtime Overhead',
        description: 'Ship minimal JavaScript to the client by maximizing compile-time optimizations.',
        icon: 'reliability',
      },
    ],
    challenge: {
      title: 'Jank-free scroll animations on mobile',
      problem:
        'Complex parallax and scroll-triggered animations were causing layout trashing and jank on lower-end mobile devices.',
      solution:
        'Refactored the animations to rely exclusively on hardware-accelerated CSS transforms (translate3d, scale, opacity) orchestrated by GSAP.',
    },
    role: 'Creative Developer',
    timeline: 'Q2 2025',
    status: 'Completed',
  },
];
