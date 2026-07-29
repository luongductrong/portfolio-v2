<script setup lang="ts">
import { clsx } from "clsx";
import { GitHubIcon, GitLabIcon, FacebookIcon } from "vue3-simple-icons";
const socials = [
  {
    platform: "GitHub",
    username: "@luongductrong",
    url: "https://github.com/luongductrong",
    icon: GitHubIcon,
  },
  {
    platform: "GitLab",
    username: "@luongductrong",
    url: "https://gitlab.com/luongductrong",
    icon: GitLabIcon,
  },
  // {
  //   platform: "LinkedIn",
  //   username: "@luongductrong2004",
  //   url: "https://linkedin.com/in/luongductrong2004/",
  //   icon: null,
  // },
  {
    platform: "Facebook",
    username: "@ltr.dtrly",
    url: "https://facebook.com/ltr.dtrly/",
    icon: FacebookIcon,
  },
];
</script>

<template>
  <LayoutContainer
    as-child
    :class="
      clsx(
        'flex justify-between items-center gap-8 py-2 h-20',
        'sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60',
      )
    "
  >
    <header>
      <IconSignature title="Duc Trong Luong" class="h-12" />
      <div class="flex items-center justify-between gap-3">
        <a
          v-for="social in socials"
          :key="social.platform"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="social.icon" class="size-6 fill-foreground/80" />
        </a>
      </div>
    </header>
  </LayoutContainer>
</template>
