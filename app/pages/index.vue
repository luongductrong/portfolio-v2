<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogTitle: () => t('home.seo.title'),
  ogDescription: () => t('home.seo.description'),
  twitterTitle: () => t('home.seo.title'),
  twitterDescription: () => t('home.seo.description'),
});
</script>

<template>
  <div>
    <PortfolioHeroSection />
    <PortfolioMilestoneSection />
  </div>
</template>
