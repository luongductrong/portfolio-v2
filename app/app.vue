<script setup>
import { MotionConfig } from 'motion-v';

const config = useRuntimeConfig();
const baseURL = config.app.baseURL;
const publicAsset = (path) => `${baseURL}${path.replace(/^\/+/, '')}`;

useHead({
  title: 'Duc Trong Luong',
  link: [
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
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <MotionConfig reduced-motion="user">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </MotionConfig>
</template>
