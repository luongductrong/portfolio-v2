<script setup lang="ts">
import { Motion } from 'motion-v';
import { ArrowDownRight } from '@lucide/vue';

interface PageHeaderProps {
  headingId: string;
  eyebrow: string;
  firstLine: string;
  secondLine: string;
  description: string;
  note: string;
}

defineProps<PageHeaderProps>();
</script>

<template>
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
      {{ eyebrow }}
    </p>
    <h1 :id="headingId" class="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
      {{ firstLine }}<br />
      <span class="text-primary">{{ secondLine }}</span>
    </h1>
    <p class="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
      {{ description }}
    </p>
    <p class="mt-3 flex items-start gap-2 text-sm leading-6 text-primary/80">
      <ArrowDownRight class="mt-1 size-4 shrink-0" aria-hidden="true" />
      {{ note }}
    </p>
  </Motion>
</template>
