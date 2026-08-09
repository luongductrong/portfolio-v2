<script setup lang="ts">
import { Motion } from 'motion-v';
import type { Component } from 'vue';
import { AlignLeft, ArrowUpRight, BrainCircuit, Code2, Gauge, Network, ShieldCheck, Target, Wrench } from '@lucide/vue';
import type { Project, ProjectGoalIcon } from '../types';

const props = defineProps<{
  project: Project;
}>();

const goalIcons: Record<ProjectGoalIcon, Component> = {
  performance: Gauge,
  scalability: Network,
  reliability: ShieldCheck,
};
</script>

<template>
  <section :aria-labelledby="`project-${props.project.slug}-title`">
    <Motion as="div" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6 }">
      <div class="relative aspect-4/3 overflow-hidden rounded-lg border bg-muted sm:aspect-16/7">
        <img
          :src="props.project.heroImage ?? props.project.coverImage"
          :alt="props.project.imageAlt"
          class="size-full object-cover"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <header class="relative z-10 mx-3 -mt-12 rounded-lg border bg-card p-6 shadow-xl sm:mx-8 sm:p-8 lg:mx-14 lg:p-10">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <p class="mb-3 text-sm font-semibold uppercase text-primary">{{ props.project.category }}</p>
            <h1
              :id="`project-${props.project.slug}-title`"
              class="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            >
              {{ props.project.title }}
            </h1>
            <p class="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              {{ props.project.summary }}
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <UiButton as-child size="lg" class="uppercase">
              <a :href="props.project.demoUrl" target="_blank" rel="noopener noreferrer">
                Live demo
                <ArrowUpRight />
              </a>
            </UiButton>
            <UiButton as-child size="lg" variant="outline" class="uppercase">
              <a :href="props.project.sourceUrl" target="_blank" rel="noopener noreferrer">
                <Code2 />
                GitHub repo
              </a>
            </UiButton>
          </div>
        </div>
      </header>
    </Motion>

    <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(17rem,1fr)] lg:gap-14">
      <div class="space-y-14">
        <Motion
          as="article"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5 }"
        >
          <h2 class="mb-6 flex items-center gap-3 text-2xl font-bold">
            <AlignLeft class="text-primary" aria-hidden="true" />
            Project overview
          </h2>
          <div class="space-y-4 leading-7 text-muted-foreground">
            <p v-for="paragraph in props.project.overview" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </Motion>

        <Motion
          as="article"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5 }"
        >
          <h2 class="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Target class="text-primary" aria-hidden="true" />
            Project goals
          </h2>
          <ul class="grid gap-4">
            <li
              v-for="goal in props.project.goals"
              :key="goal.title"
              class="flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <component :is="goalIcons[goal.icon]" class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 class="font-semibold">{{ goal.title }}</h3>
                <p class="mt-1 text-sm leading-6 text-muted-foreground">{{ goal.description }}</p>
              </div>
            </li>
          </ul>
        </Motion>

        <Motion
          as="article"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5 }"
        >
          <h2 class="mb-6 flex items-center gap-3 text-2xl font-bold">
            <BrainCircuit class="text-primary" aria-hidden="true" />
            Challenge overcome
          </h2>
          <div class="rounded-r-lg border-y border-r border-l-2 border-l-primary bg-muted/60 p-6 sm:p-7">
            <h3 class="font-semibold">{{ props.project.challenge.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">
              {{ props.project.challenge.problem }}
            </p>
            <h3 class="mt-6 font-semibold">The solution</h3>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">
              {{ props.project.challenge.solution }}
            </p>
          </div>
        </Motion>
      </div>

      <aside class="space-y-6 lg:sticky lg:top-24 lg:self-start" aria-label="Project information">
        <div class="rounded-lg border bg-card p-6 sm:p-7">
          <h2 class="flex items-center gap-3 text-xl font-bold">
            <Wrench class="text-primary" aria-hidden="true" />
            Tech stack
          </h2>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li v-for="technology in props.project.technologies" :key="technology">
              <UiBadge variant="secondary" class="px-3 py-1.5 font-normal">
                {{ technology }}
              </UiBadge>
            </li>
          </ul>
        </div>

        <dl class="rounded-lg border bg-muted/50 p-6 sm:p-7">
          <div class="border-b pb-5">
            <dt class="text-xs font-semibold uppercase text-muted-foreground">Role</dt>
            <dd class="mt-2 font-medium">{{ props.project.role }}</dd>
          </div>
          <div class="border-b py-5">
            <dt class="text-xs font-semibold uppercase text-muted-foreground">Timeline</dt>
            <dd class="mt-2 font-medium">{{ props.project.timeline }}</dd>
          </div>
          <div class="pt-5">
            <dt class="text-xs font-semibold uppercase text-muted-foreground">Status</dt>
            <dd class="mt-2 inline-flex items-center gap-2 font-medium text-primary">
              <span class="size-2 rounded-full bg-primary motion-safe:animate-pulse" aria-hidden="true" />
              {{ props.project.status }}
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>
