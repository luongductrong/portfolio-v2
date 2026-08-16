<script setup lang="ts">
import { hasProjectSlug, useProjects } from '@/features/projects/helpers';

const { t } = useI18n();
const route = useRoute();
const publicAsset = usePublicAsset();
const { getProjectBySlug } = useProjects();

definePageMeta({
  validate(route) {
    return hasProjectSlug(String(route.params.slug)) || { status: 404 };
  },
});

const project = computed(() => {
  return getProjectBySlug(String(route.params.slug))!;
});

useSeoMeta({
  title: () => t('projects.seo.detailTitle', { project: project.value.title }),
  description: () => project.value.summary,
  ogTitle: () => project.value.title,
  ogDescription: () => project.value.summary,
  ogImage: () => publicAsset(project.value.media.cover.src),
  twitterTitle: () => project.value.title,
  twitterDescription: () => project.value.summary,
  twitterImage: () => publicAsset(project.value.media.cover.src),
});
</script>

<template>
  <ProjectDetailSection :project="project" />
</template>
