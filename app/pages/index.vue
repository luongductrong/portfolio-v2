<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('portfolio.seo.title'),
  description: () => t('portfolio.seo.description'),
  ogTitle: () => t('portfolio.seo.title'),
  ogDescription: () => t('portfolio.seo.description'),
  twitterTitle: () => t('portfolio.seo.title'),
  twitterDescription: () => t('portfolio.seo.description'),
});
</script>

<template>
  <div>
    <PortfolioHeroSection />
    <PortfolioMilestoneSection />
  </div>
</template>
