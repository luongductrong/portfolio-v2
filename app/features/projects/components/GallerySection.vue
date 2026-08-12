<script setup lang="ts">
import { projects } from '../constants';
import { getProjectTechnologies } from '../helpers';
</script>

<template>
  <section aria-labelledby="projects-heading">
    <PageHeader
      heading-id="projects-heading"
      eyebrow="Selected work"
      first-line="Web"
      second-line="Engineering."
      description="Selected web projects built with a focus on clean interfaces, scalable architecture, and reliable user experiences."
      note="From interface to implementation."
    />

    <div
      class="mb-6 mt-14 flex items-end justify-between gap-6 border-b pb-4 sm:mt-18 animate-in fade-in slide-in-from-top-15 duration-550 motion-reduce:slide-in-from-top-0 motion-reduce:duration-300"
    >
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
        :cover-image="project.media.cover.src"
        :image-alt="project.media.cover.alt"
        :category="project.category"
        :year="project.year"
        :technologies="getProjectTechnologies(project)"
        :index="index"
      />
    </div>
  </section>
</template>
