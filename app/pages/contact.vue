<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('contact.seo.title'),
  description: () => t('contact.seo.description'),
  ogTitle: () => t('contact.seo.title'),
  ogDescription: () => t('contact.seo.description'),
  twitterTitle: () => t('contact.seo.title'),
  twitterDescription: () => t('contact.seo.description'),
});
</script>

<template>
  <ContactSection />
</template>
