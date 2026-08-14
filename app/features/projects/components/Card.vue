<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import { Motion } from 'motion-v';
import type { Project } from '../types';

type Props = Pick<Project, 'slug' | 'title' | 'summary' | 'category' | 'year'> & {
  coverImage: string;
  imageAlt: string;
  technologies: string[];
  index?: number;
};

const props = withDefaults(defineProps<Props>(), {
  index: 0,
});
</script>

<template>
  <Motion
    as="article"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.5, delay: props.index * 0.08 }"
    class="group h-full overflow-hidden border bg-card text-card-foreground transition-[border-color,box-shadow] duration-300 hover:border-primary/40 shadow-brutalism hover:shadow-none"
  >
    <NuxtLink
      :to="`/projects/${props.slug}`"
      class="flex h-full flex-col focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      :aria-label="`View ${props.title} case study`"
    >
      <div class="relative aspect-16/10 overflow-hidden border-b bg-muted">
        <img
          :src="props.coverImage"
          :alt="props.imageAlt"
          class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
          <UiBadge class="border-background/15 bg-background/85 text-foreground backdrop-blur-sm" variant="outline">
            {{ props.category }}
          </UiBadge>
          <UiBadge class="border-background/15 bg-background/85 text-foreground backdrop-blur-sm" variant="outline">
            {{ props.year }}
          </UiBadge>
        </div>
      </div>

      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <h2 class="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
          {{ props.title }}
        </h2>
        <p class="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {{ props.summary }}
        </p>

        <ul class="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          <li v-for="technology in props.technologies.slice(0, 3)" :key="technology">
            <UiBadge variant="secondary" class="font-normal">
              {{ technology }}
            </UiBadge>
          </li>
        </ul>

        <span class="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase text-primary">
          View case study
          <ArrowRight class="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </NuxtLink>
  </Motion>
</template>
