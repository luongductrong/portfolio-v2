<script setup lang="ts">
import { getProjectBySlug } from '@/features/projects/helpers';

const route = useRoute();
const project = computed(() => {
  const match = getProjectBySlug(String(route.params.slug));

  if (!match) {
    throw createError({
      status: 404,
      statusText: 'Project not found',
    });
  }

  return match;
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
