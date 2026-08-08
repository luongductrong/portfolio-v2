<script setup lang="ts">
import { Motion } from 'motion-v';
import { ArrowDownRight } from '@lucide/vue';

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  year: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

const projects: Project[] = [
  {
    title: 'Web Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dark analytics dashboard with emerald data visualizations and a focus on clean interfaces.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsxMEPx0KXIB87e2XRdUaO41vZxii6v_DVDf_1gh2w3OtJWrifFZpRPRBb4BpsPVTl5v5OzbM_XudXQGSIt7Hv6DX8kC7i7ZxsX0QSbk6MZO-GAhTSKcU1RJmyHJn0FQXc6Smenr93IpXuZ7GpYqQEO7FdsRhKkCNKB55Ik6FWpALDXm7cAsS_rmEjEyEjksBTokzPDAAEVs-dY8XRUMAEwK2YHO00rYil7bZx9xp_UXDTPvA5EAg',
    imageAlt: 'Dark analytics dashboard with emerald data visualizations',
    category: 'Web application',
    year: '2026',
    technologies: ['Vue', 'Nuxt', 'TypeScript'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com/luongductrong',
  },
  {
    title: 'Web Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A cloud platform with a focus on scalable architecture and reliable user experiences.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHkr3EaS8fRzr7w8sJ-tZ_vEz_79_2guLDVZwoD9W4VJrEqyYq10IP-tJN2ZLemylFGJxsjXzAW2W1BTAQJLVyDPa1I4202GzgyR4OGhIeblgJRNejrh1MJAHYCw88bs9MhSIDZS_bj-D6ytHnSsyysug4xE6JpIYpvLcDsIjL62KRp-hLng3L61k0NFIzzXOa1FWfIOGABn2guUVKyNKgaEwcXh0WkSMJBeasMiurpYLl3G0JREC',
    imageAlt: 'Abstract cloud infrastructure connected by glowing network lines',
    category: 'Cloud platform',
    year: '2025',
    technologies: ['Node.js', 'AWS', 'Redis'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com/luongductrong',
  },
  {
    title: 'Web Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A cross-platform finance application with offline-first state management and carefully tuned interface animations.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4RSoedUNj27oehUmLrUJ9lfQcsSwzF_8fNldfCgRzYMr9YMzNxSBS5fAyynjNzpWEnRlPI7miwOt6AllkHe6uwHPBp5RLhLA9MAdzPJ3lyeQi0suTCQYqtRGv0mB2_gu8tXJF1_uQoJRy2JSXdz37iC_zXh7k2O6rczDWqIsPuYJVmkQQfoG2uJF7PFkNOLawBKyyLE7rr9iMd8QC5CDExJweMmvf03D2ahR092n_YVyJcXVuBfJG',
    imageAlt: 'Dark mobile finance interface displayed on a black surface',
    category: 'Mobile application',
    year: '2025',
    technologies: ['React Native', 'TypeScript', 'GraphQL'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com/luongductrong',
  },
];
</script>

<template>
  <section class="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="projects-heading">
    <LayoutContainer class="py-0">
      <Motion
        as="header"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.55 }"
        class="max-w-3xl"
      >
        <p class="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-primary">
          <span class="h-px w-8 bg-primary" aria-hidden="true" />
          Selected work
        </p>
        <h1 id="projects-heading" class="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Web<br />
          <span class="text-primary">Engineering.</span>
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Selected web projects built with a focus on clean interfaces, scalable architecture, and reliable user
          experiences.
        </p>
        <p class="mt-3 flex items-start gap-2 text-sm leading-6 text-primary/80">
          <ArrowDownRight class="mt-1 size-4 shrink-0" aria-hidden="true" />
          From interface to implementation.
        </p>
      </Motion>

      <div class="mb-6 mt-14 flex items-end justify-between gap-6 border-b pb-4 sm:mt-18">
        <div>
          <p class="text-xs font-semibold uppercase text-muted-foreground">Project archive</p>
          <p class="mt-1 text-sm text-foreground">Featured builds and experiments</p>
        </div>
        <span class="text-sm text-muted-foreground">{{ projects.length.toString().padStart(2, '0') }} projects</span>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <ProjectCard v-for="(project, index) in projects" :key="project.title" v-bind="project" :index="index" />
      </div>
    </LayoutContainer>
  </section>
</template>
