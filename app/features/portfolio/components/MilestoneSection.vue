<script setup lang="ts">
import { Motion } from 'motion-v';
import type { Component } from 'vue';
import { BriefcaseBusiness, CalendarDays, Code2, GraduationCap, MapPin, Trophy } from '@lucide/vue';

interface Milestone {
  period: string;
  title: string;
  organization: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
  accent: string;
  icon: Component;
}

const milestones: Milestone[] = [
  {
    period: 'Oct 2022 - Jun 2026',
    title: 'Bachelor of Information Technology',
    organization: 'FPT University',
    location: 'Ho Chi Minh City, Viet Nam',
    status: 'Graduated',
    description:
      'Focused on Software Engineering fundamentals, product thinking, and building reliable application workflows from idea to delivery.',
    highlights: ['Software Engineering', 'Very Good Degree Classification', 'GPA 8.11/10'],
    accent: 'from-primary/25 via-primary/10 to-transparent',
    icon: GraduationCap,
  },
  {
    period: 'Jan 2025 - Apr 2025',
    title: 'SAP Intern',
    organization: 'FPT Software',
    location: 'Ho Chi Minh City, Viet Nam',
    status: 'Internship',
    description:
      'Joined enterprise delivery work, learned SAP project practices, and sharpened collaboration habits inside a production-focused team.',
    highlights: ['ABAP', 'SAP ecosystem', 'Enterprise workflow'],
    accent: 'from-sky-400/25 via-sky-400/10 to-transparent',
    icon: BriefcaseBusiness,
  },
  {
    period: 'Apr 2025 - Present',
    title: 'Front-end Developer',
    organization: 'FTES',
    location: 'Remote / Ho Chi Minh City, Viet Nam',
    status: 'Current',
    description: 'Building responsive interfaces, reusable UI pieces, and polished user flows for modern web products.',
    highlights: ['React & Next.js', 'Design systems', 'Frontend architecture'],
    accent: 'from-indigo-400/25 via-indigo-400/10 to-transparent',
    icon: Code2,
  },
];
</script>

<template>
  <section class="relative overflow-hidden border-y bg-background py-20 sm:py-24">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
    />

    <LayoutContainer class="relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <Motion
        as="div"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        class="flex flex-col justify-center gap-5"
      >
        <UiBadge variant="outline" class="w-fit rounded border-primary/30 bg-primary/5 text-primary">
          Career Timeline
        </UiBadge>
        <div class="space-y-4">
          <h2 class="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Milestones that shaped the way I build.
          </h2>
          <p class="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            A focused timeline of my academic foundation, enterprise internship experience, and ongoing front-end
            development work.
          </p>
        </div>
      </Motion>

      <div class="relative">
        <div class="absolute left-4 top-6 h-[calc(100%-3rem)] w-px bg-border sm:left-6" />
        <div
          class="absolute left-4 top-6 h-[calc(100%-3rem)] w-px bg-linear-to-b from-primary via-sky-400 to-indigo-400 sm:left-6"
        />

        <ol class="space-y-6">
          <Motion
            v-for="(milestone, index) in milestones"
            :key="milestone.title"
            as="li"
            :initial="{ opacity: 0, x: 28 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.55, delay: index * 0.12 }"
            class="relative pl-12 sm:pl-16"
          >
            <div
              class="absolute left-0 top-5 z-10 flex size-8 items-center justify-center rounded border border-primary/40 bg-background shadow-[0_0_24px_rgba(16,185,129,0.18)] sm:size-12"
            >
              <component :is="milestone.icon" class="size-4 text-primary sm:size-5" />
            </div>

            <article
              class="group relative overflow-hidden rounded-lg border bg-card/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_60px_rgba(16,185,129,0.12)] sm:p-6"
            >
              <div class="absolute inset-0 bg-linear-to-br opacity-80" :class="milestone.accent" />
              <div class="relative space-y-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div class="space-y-2">
                    <UiBadge variant="outline" class="rounded border-border/80 bg-background/60 text-xs">
                      <CalendarDays class="size-3.5" />
                      {{ milestone.period }}
                    </UiBadge>
                    <div>
                      <h3 class="font-headline text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {{ milestone.title }}
                      </h3>
                      <p class="mt-1 font-medium text-primary">{{ milestone.organization }}</p>
                    </div>
                  </div>
                  <UiBadge class="w-fit rounded bg-primary/10 text-primary hover:bg-primary/10">
                    {{ milestone.status }}
                  </UiBadge>
                </div>

                <p class="text-sm leading-7 text-muted-foreground sm:text-base">
                  {{ milestone.description }}
                </p>

                <div class="flex flex-wrap gap-2">
                  <UiBadge
                    v-for="item in milestone.highlights"
                    :key="item"
                    variant="secondary"
                    class="rounded border border-border/70 bg-background/60 text-xs font-medium text-muted-foreground"
                  >
                    <Trophy class="size-3" />
                    {{ item }}
                  </UiBadge>
                </div>

                <div class="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin class="size-4 text-primary" />
                  <span>{{ milestone.location }}</span>
                </div>
              </div>
            </article>
          </Motion>
        </ol>
      </div>
    </LayoutContainer>
  </section>
</template>
