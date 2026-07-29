<script setup lang="ts">
import { clsx } from "clsx";
import GitHub from "@/components/icons/GitHub.vue";
import GitLab from "@/components/icons/GitLab.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Facebook from "@/components/icons/Facebook.vue";

const socials = [
  {
    platform: "GitHub",
    username: "@luongductrong",
    url: "https://github.com/luongductrong",
    icon: GitHub,
  },
  {
    platform: "GitLab",
    username: "@luongductrong",
    url: "https://gitlab.com/luongductrong",
    icon: GitLab,
  },
  {
    platform: "LinkedIn",
    username: "@luongductrong2004",
    url: "https://linkedin.com/in/luongductrong2004/",
    icon: LinkedIn,
  },
  {
    platform: "Facebook",
    username: "@ltr.dtrly",
    url: "https://facebook.com/ltr.dtrly/",
    icon: Facebook,
  },
];
</script>

<template>
  <header class="w-full absolute top-0 inset-x-0 px-4 z-20">
    <LayoutContainer
      :class="clsx('flex justify-between items-center gap-8 py-2 h-20')"
    >
      <IconSignature title="Duc Trong Luong" class="h-12" />
      <div class="flex items-center justify-between gap-3">
        <a
          v-for="social in socials"
          :key="social.platform"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="size-8 rounded-full bg-main-50 inline-flex items-center justify-center"
        >
          <component :is="social.icon" class="size-5" />
        </a>
      </div>
    </LayoutContainer>
  </header>
</template>
