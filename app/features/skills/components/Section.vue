<script setup lang="ts">
import { learningGroups, skillGroups } from '../constants';
</script>

<template>
  <section aria-labelledby="skills-heading">
    <PageHeader
      heading-id="skills-heading"
      eyebrow="Engineering capabilities"
      first-line="Technical"
      second-line="Craft."
      description="A comprehensive overview of my technological stack and the tools I use to turn product ideas into reliable interfaces."
      note="Built through production work, sharpened through continuous learning."
    />

    <section
      class="mt-14 sm:mt-16 animate-in fade-in slide-in-from-bottom-5 duration-550 motion-reduce:slide-in-from-bottom-0 motion-reduce:duration-300"
      aria-labelledby="current-stack-heading"
    >
      <div class="mb-7 flex items-center gap-3">
        <h2 id="current-stack-heading" class="text-2xl font-bold sm:text-3xl">Current Stack</h2>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <SkillCard
          v-for="group in skillGroups"
          :key="group.title"
          :title="group.title"
          :skills="group.skills"
          :featured="group.featured"
        />
      </div>
    </section>

    <section
      class="mt-14 sm:mt-16 animate-in fade-in slide-in-from-bottom-5 duration-550 motion-reduce:slide-in-from-bottom-0 motion-reduce:duration-300"
      aria-labelledby="learning-heading"
    >
      <div class="mb-7 flex items-center gap-3">
        <h2 id="learning-heading" class="text-2xl font-bold sm:text-3xl">Expanding Horizons</h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="group in learningGroups"
          :key="group.title"
          class="border border-primary/25 bg-card p-5 sm:p-6 shadow-brutalism"
        >
          <h3 class="text-sm font-semibold uppercase text-muted-foreground">{{ group.title }}</h3>
          <ul class="mt-4 flex flex-wrap gap-3" :aria-label="`${group.title} technologies currently learning`">
            <li
              v-for="skill in group.skills"
              :key="skill"
              class="border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </section>
  </section>
</template>
