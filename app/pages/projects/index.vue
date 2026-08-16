<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('projects.seo.title'),
  description: () => t('projects.seo.description'),
  ogTitle: () => t('projects.seo.title'),
  ogDescription: () => t('projects.seo.description'),
  twitterTitle: () => t('projects.seo.title'),
  twitterDescription: () => t('projects.seo.description'),
});
</script>

<template>
  <ProjectGallerySection />
</template>
