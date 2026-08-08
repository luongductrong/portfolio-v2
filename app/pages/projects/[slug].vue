<script setup lang="ts">
import { getProjectBySlug } from '@/features/projects/helpers';

const route = useRoute();

definePageMeta({
  validate(route) {
    const project = getProjectBySlug(String(route.params.slug));
    return project ? true : { status: 404, statusText: 'Project not found' };
  },
});

const project = computed(() => {
  return getProjectBySlug(String(route.params.slug))!;
});

useSeoMeta({
  title: () => `${project.value.title} - Duc Trong Luong`,
  description: () => project.value.summary,
  ogTitle: () => project.value.title,
  ogDescription: () => project.value.summary,
  ogImage: () => project.value.heroImage ?? project.value.coverImage,
});
</script>

<template>
  <main class="min-h-dvh">
    <ProjectDetail :project="project" />
  </main>
</template>
