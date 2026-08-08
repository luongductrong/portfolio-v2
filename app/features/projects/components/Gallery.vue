<script setup lang="ts">
import { projects } from '../constants';
</script>

<template>
  <section class="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="projects-heading">
    <LayoutContainer class="py-0">
      <PageHeader
        heading-id="projects-heading"
        eyebrow="Selected work"
        first-line="Web"
        second-line="Engineering."
        description="Selected web projects built with a focus on clean interfaces, scalable architecture, and reliable user experiences."
        note="From interface to implementation."
      />

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
