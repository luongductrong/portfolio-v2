<script setup lang="ts">
import { ArrowDownRight } from '@lucide/vue';

interface PageHeaderProps {
  headingId: string;
  eyebrow: string;
  firstLine: string;
  secondLine: string;
  note: string;
}

defineProps<PageHeaderProps>();
</script>

<template>
  <header
    class="max-w-3xl animate-in fade-in slide-in-from-bottom-5 duration-550 motion-reduce:slide-in-from-bottom-0 motion-reduce:duration-300"
  >
    <p class="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-primary">
      <span class="h-px w-8 bg-primary" aria-hidden="true" />
      {{ eyebrow }}
    </p>
    <h1 :id="headingId" class="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
      {{ firstLine }}<br />
      <span class="text-primary">{{ secondLine }}</span>
    </h1>
    <p class="mt-5 flex items-start gap-2 text-sm leading-6 text-primary/80">
      <ArrowDownRight class="mt-1 size-4 shrink-0" aria-hidden="true" />
      {{ note }}
    </p>
  </header>
</template>
