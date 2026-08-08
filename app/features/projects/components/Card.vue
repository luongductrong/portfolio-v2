<script setup lang="ts">
import { Motion } from 'motion-v';
import { ArrowUpRight, Code2 } from '@lucide/vue';

interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  year: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
  index?: number;
}

const props = withDefaults(defineProps<Props>(), {
  index: 0,
});
</script>

<template>
  <Motion
    as="article"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, amount: 0.15 }"
    :transition="{ duration: 0.5, delay: props.index * 0.08 }"
    class="group flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5"
  >
    <div class="relative aspect-16/10 overflow-hidden border-b bg-muted">
      <img
        :src="props.image"
        :alt="props.imageAlt"
        class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
        <UiBadge class="border-background/15 bg-background/85 text-foreground backdrop-blur-sm" variant="outline">
          {{ props.category }}
        </UiBadge>
        <span class="rounded bg-background/85 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {{ props.year }}
        </span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <h2 class="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
        {{ props.title }}
      </h2>
      <p class="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
        {{ props.description }}
      </p>

      <ul class="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        <li v-for="technology in props.technologies" :key="technology">
          <UiBadge variant="secondary" class="font-normal">
            {{ technology }}
          </UiBadge>
        </li>
      </ul>

      <div class="mt-7 grid grid-cols-2 gap-3">
        <UiButton as-child class="w-full uppercase">
          <a :href="props.demoUrl" target="_blank" rel="noopener noreferrer">
            View demo
            <ArrowUpRight />
          </a>
        </UiButton>
        <UiButton as-child variant="outline" class="w-full uppercase">
          <a :href="props.sourceUrl" target="_blank" rel="noopener noreferrer">
            <Code2 />
            Code
          </a>
        </UiButton>
      </div>
    </div>
  </Motion>
</template>
