<script setup>
import { MotionConfig } from 'motion-v';

const route = useRoute();
const config = useRuntimeConfig();
const baseURL = config.app.baseURL;
const publicAsset = (path) => `${baseURL}${path.replace(/^\/+/, '')}`;

const siteName = 'Duc Trong Luong';
const siteTitle = 'Duc Trong Luong - Front-end Developer';
const siteURL = new URL(config.public.siteUrl.endsWith('/') ? config.public.siteUrl : `${config.public.siteUrl}/`);
const description =
  'Duc Trong Luong is a Front-end Developer specializing in modern web applications, cross-platform experiences, and thoughtful user interfaces.';
const ogImage = new URL('og-image.png', siteURL).toString();
const canonicalURL = computed(() => new URL(route.path.replace(/^\/+/, ''), siteURL).toString());

useSeoMeta({
  title: siteTitle,
  description,
  author: siteName,
  keywords: 'Duc Trong Luong, Front-end Developer, Web Developer, Vue, Nuxt, React, TypeScript',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#0d1f17',
  ogTitle: siteTitle,
  ogDescription: description,
  ogType: 'website',
  ogUrl: () => canonicalURL.value,
  ogSiteName: siteName,
  ogLocale: 'en_US',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${siteName} - Front-end Developer`,
  twitterCard: 'summary_large_image',
  twitterTitle: siteTitle,
  twitterDescription: description,
  twitterImage: ogImage,
  twitterImageAlt: `${siteName} - Front-end Developer`,
});

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: canonicalURL.value,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: publicAsset('apple-touch-icon.png'),
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: publicAsset('favicon-32x32.png'),
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: publicAsset('favicon-16x16.png'),
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: publicAsset('favicon-dark-32x32.png'),
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: publicAsset('favicon-dark-16x16.png'),
      media: '(prefers-color-scheme: dark)',
    },
  ],
}));
</script>

<template>
  <NuxtRouteAnnouncer />
  <MotionConfig reduced-motion="user">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </MotionConfig>
</template>
