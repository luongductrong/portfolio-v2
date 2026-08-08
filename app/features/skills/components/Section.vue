<script setup lang="ts">
import { Compass, Layers3 } from '@lucide/vue';
import { learningGroups, skillGroups } from '../constants';
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-24" aria-labelledby="skills-heading">
    <LayoutContainer class="py-0">
      <PageHeader
        heading-id="skills-heading"
        eyebrow="Engineering capabilities"
        first-line="Technical"
        second-line="Craft."
        description="A comprehensive overview of my technological stack and the tools I use to turn product ideas into reliable interfaces."
        note="Built through production work, sharpened through continuous learning."
      />

      <section class="mt-14 sm:mt-16" aria-labelledby="current-stack-heading">
        <div class="mb-7 flex items-center gap-3">
          <Layers3 class="size-7 text-primary" aria-hidden="true" />
          <h2 id="current-stack-heading" class="text-2xl font-bold sm:text-3xl">Current Stack</h2>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <SkillCard
            v-for="group in skillGroups"
            :key="group.title"
            :title="group.title"
            :icon="group.icon"
            :skills="group.skills"
            :featured="group.featured"
          />
        </div>
      </section>

      <section class="mt-14 sm:mt-16" aria-labelledby="learning-heading">
        <div class="mb-7 flex items-center gap-3">
          <Compass class="size-7 text-primary" aria-hidden="true" />
          <h2 id="learning-heading" class="text-2xl font-bold sm:text-3xl">Expanding Horizons</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="group in learningGroups"
            :key="group.title"
            class="rounded-lg border border-primary/25 bg-card p-5 sm:p-6"
          >
            <h3 class="text-sm font-semibold uppercase text-muted-foreground">{{ group.title }}</h3>
            <ul class="mt-4 flex flex-wrap gap-3" :aria-label="`${group.title} technologies currently learning`">
              <li
                v-for="skill in group.skills"
                :key="skill"
                class="rounded border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {{ skill }}
              </li>
            </ul>
          </article>
        </div>
      </section>
    </LayoutContainer>
  </section>
</template>
