<script setup lang="ts">
import { Motion } from 'motion-v';
import { ArrowDownRight } from '@lucide/vue';
import { projects } from '../constants';
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
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.slug"
          :slug="project.slug"
          :title="project.title"
          :summary="project.summary"
          :cover-image="project.coverImage"
          :image-alt="project.imageAlt"
          :category="project.category"
          :year="project.year"
          :technologies="project.technologies"
          :index="index"
        />
      </div>
    </LayoutContainer>
  </section>
</template>
