<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('skills.seo.title'),
  description: () => t('skills.seo.description'),
  ogTitle: () => t('skills.seo.title'),
  ogDescription: () => t('skills.seo.description'),
  twitterTitle: () => t('skills.seo.title'),
  twitterDescription: () => t('skills.seo.description'),
});
</script>

<template>
  <SkillSection />
</template>
