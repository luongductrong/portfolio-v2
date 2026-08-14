<script setup lang="ts">
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  ExternalLink,
  Monitor,
  Users,
} from '@lucide/vue';
import type { Project } from '../types';
import { projectStatusLabels } from '../helpers';

const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <section :aria-labelledby="`project-${props.project.slug}-title`" class="pb-20 sm:pb-28">
    <header class="border-b pb-10 sm:pb-14">
      <NuxtLink
        to="/projects"
        class="mb-10 inline-flex md:hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:mb-14"
      >
        <ArrowLeft class="size-4" aria-hidden="true" />
        All projects
      </NuxtLink>

      <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div class="max-w-4xl">
          <div class="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <UiBadge variant="secondary">{{ props.project.category }}</UiBadge>
            <span class="text-muted-foreground">{{ props.project.year }}</span>
            <span class="text-border" aria-hidden="true">/</span>
            <span class="inline-flex items-center gap-2 font-medium text-primary">
              <span class="size-2 rounded-full bg-primary" aria-hidden="true" />
              {{ projectStatusLabels[props.project.metadata.status] }}
            </span>
          </div>

          <h1
            :id="`project-${props.project.slug}-title`"
            class="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            {{ props.project.title }}
          </h1>
          <p class="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {{ props.project.summary }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3 lg:justify-end">
          <UiButton v-if="props.project.links.demo" as-child size="lg">
            <a :href="props.project.links.demo" target="_blank" rel="noopener noreferrer">
              Live demo
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </UiButton>
          <UiButton v-if="props.project.links.source" as-child size="lg" variant="outline">
            <a :href="props.project.links.source" target="_blank" rel="noopener noreferrer">
              <Code2 data-icon="inline-start" />
              Source code
            </a>
          </UiButton>
        </div>
      </div>
    </header>

    <div class="mt-10 sm:mt-14">
      <ProjectMediaGallery :images="props.project.media.images" :live-url="props.project.links.demo" />
    </div>

    <section v-if="props.project.outcomes.length" aria-labelledby="project-outcomes" class="mt-14 sm:mt-18">
      <div class="mb-5 flex items-end justify-between gap-4 border-b pb-4">
        <h2 id="project-outcomes" class="mt-1 text-xl font-bold text-primary uppercase">Quick Highlights</h2>
      </div>

      <dl class="grid gap-px overflow-hidden border bg-border sm:grid-cols-3">
        <div v-for="outcome in props.project.outcomes" :key="outcome.label" class="bg-card p-6 sm:p-7">
          <dt class="text-sm font-medium text-muted-foreground">{{ outcome.label }}</dt>
          <dd class="mt-2 text-3xl font-extrabold text-primary">{{ outcome.value }}</dd>
          <p v-if="outcome.description" class="mt-3 text-sm leading-6 text-muted-foreground">
            {{ outcome.description }}
          </p>
        </div>
      </dl>
    </section>

    <div class="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
      <div class="flex min-w-0 flex-col gap-16">
        <article aria-labelledby="project-overview" class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h2 id="project-overview" class="text-2xl font-bold">Project overview</h2>
          </div>
          <div class="flex max-w-3xl flex-col gap-4 text-base leading-8 text-muted-foreground">
            <p v-for="paragraph in props.project.overview" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </article>

        <section aria-labelledby="project-objectives" class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h2 id="project-objectives" class="text-2xl font-bold">Objectives</h2>
          </div>
          <ol class="grid gap-4 sm:grid-cols-3">
            <li
              v-for="(objective, index) in props.project.objectives"
              :key="objective.title"
              class="border bg-card p-5"
            >
              <span class="text-xs font-semibold text-primary">0{{ index + 1 }}</span>
              <h3 class="mt-4 font-bold">{{ objective.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ objective.description }}</p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="project-features" class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h2 id="project-features" class="text-2xl font-bold">Key features</h2>
          </div>
          <div class="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <article
              v-for="feature in props.project.features"
              :key="feature.title"
              class="border-t pt-5 transition-colors hover:border-primary"
            >
              <h3 class="font-bold">{{ feature.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ feature.description }}</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="project-challenges" class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h2 id="project-challenges" class="text-2xl font-bold">Challenges and decisions</h2>
          </div>
          <div class="flex flex-col divide-y border bg-card">
            <article v-for="challenge in props.project.challenges" :key="challenge.title" class="p-6 sm:p-7">
              <h3 class="font-bold">{{ challenge.title }}</h3>
              <div class="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-8">
                <div>
                  <p class="text-xs font-semibold uppercase text-muted-foreground">Challenge</p>
                  <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ challenge.problem }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase text-primary">Decision</p>
                  <p class="mt-2 text-sm leading-6 text-foreground/80">{{ challenge.solution }}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="project-responsibilities" class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h2 id="project-responsibilities" class="text-2xl font-bold">My contribution</h2>
          </div>
          <ul class="grid gap-3">
            <li
              v-for="responsibility in props.project.responsibilities"
              :key="responsibility"
              class="flex items-start gap-3 border-b pb-3 text-sm leading-6 text-muted-foreground"
            >
              <Check class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              {{ responsibility }}
            </li>
          </ul>
        </section>
      </div>

      <aside class="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start" aria-label="Project information">
        <section class="border bg-card p-6" aria-labelledby="project-facts">
          <h2 id="project-facts" class="font-bold">Project facts</h2>
          <dl class="mt-6 flex flex-col gap-5 text-sm">
            <div class="flex items-start gap-3">
              <BriefcaseBusiness class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt class="text-muted-foreground">Role</dt>
                <dd class="mt-1 font-medium">{{ props.project.metadata.role }}</dd>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <CalendarDays class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt class="text-muted-foreground">Timeline</dt>
                <dd class="mt-1 font-medium">{{ props.project.metadata.timeline }}</dd>
              </div>
            </div>
            <div v-if="props.project.metadata.teamSize" class="flex items-start gap-3">
              <Users class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt class="text-muted-foreground">Team</dt>
                <dd class="mt-1 font-medium">{{ props.project.metadata.teamSize }}</dd>
              </div>
            </div>
            <div v-if="props.project.metadata.platform" class="flex items-start gap-3">
              <Monitor class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt class="text-muted-foreground">Platform</dt>
                <dd class="mt-1 font-medium">{{ props.project.metadata.platform }}</dd>
              </div>
            </div>
          </dl>
        </section>

        <section class="border bg-muted/40 p-6" aria-labelledby="project-stack">
          <div class="flex items-center gap-3">
            <h2 id="project-stack" class="font-bold">Technology stack</h2>
          </div>
          <div class="mt-6 flex flex-col gap-5 text-sm">
            <div v-for="group in props.project.stack" :key="group.label">
              <h3 class="text-muted-foreground">{{ group.label }}</h3>
              <ul class="mt-2 flex flex-wrap gap-2">
                <li v-for="technology in group.items" :key="technology">
                  <UiBadge variant="secondary" class="font-normal">{{ technology }}</UiBadge>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <nav v-if="props.project.links.documentation" aria-label="Project resources">
          <UiButton as-child variant="ghost" class="w-full justify-between">
            <a :href="props.project.links.documentation" target="_blank" rel="noopener noreferrer">
              <ExternalLink data-icon="inline-start" />
              Read documentation
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </UiButton>
        </nav>
      </aside>
    </div>
  </section>
</template>
