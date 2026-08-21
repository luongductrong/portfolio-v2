<script setup>
import { MotionConfig } from 'motion-v';
import { publicAssets } from '@/configs/public-assets';

const route = useRoute();
const { locale } = useI18n();
const config = useRuntimeConfig();
const publicAsset = usePublicAsset();

const siteName = 'Duc Trong Luong';
const siteTitle = 'Duc Trong Luong - Front-end Developer';
const siteURL = new URL(config.public.siteUrl.endsWith('/') ? config.public.siteUrl : `${config.public.siteUrl}/`);
const description =
  'Duc Trong Luong is a Front-end Developer specializing in modern web applications, cross-platform experiences, and thoughtful user interfaces.';
const ogImage = new URL(publicAssets.site.ogImage, siteURL).toString();
const canonicalURL = computed(() => new URL(route.path.replace(/^\/+/, ''), siteURL).toString());

useSeoMeta({
  title: siteTitle,
  description,
  author: siteName,
  keywords: 'Duc Trong Luong, Front-end Developer, Web Developer, Vue, Nuxt, React, TypeScript',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#262624',
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
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: 'canonical',
      href: canonicalURL.value,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: publicAsset(publicAssets.site.appleTouchIcon),
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: publicAsset(publicAssets.site.favicon32),
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: publicAsset(publicAssets.site.favicon16),
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: publicAsset(publicAssets.site.faviconDark32),
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: publicAsset(publicAssets.site.faviconDark16),
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
