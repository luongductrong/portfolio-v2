<script setup lang="ts">
import { getProjectTechnologies, useProjects } from '../helpers';

const { t } = useI18n();
const { projects } = useProjects();
</script>

<template>
  <section aria-labelledby="projects-heading">
    <PageHeader
      heading-id="projects-heading"
      :eyebrow="t('projects.gallery.eyebrow')"
      :first-line="t('projects.gallery.firstLine')"
      :second-line="t('projects.gallery.secondLine')"
      :note="t('projects.gallery.note')"
    />

    <div
      class="mb-6 mt-14 flex items-end justify-between gap-6 border-b pb-4 sm:mt-18 animate-in fade-in slide-in-from-top-15 duration-550 motion-reduce:slide-in-from-top-0 motion-reduce:duration-300"
    >
      <p class="text-xs font-semibold uppercase text-muted-foreground">{{ t('projects.gallery.archive') }}</p>
      <span class="text-sm text-muted-foreground">
        {{ t('projects.gallery.count', { count: projects.length.toString().padStart(2, '0') }) }}
      </span>
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
