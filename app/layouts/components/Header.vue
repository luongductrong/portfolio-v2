<script setup lang="ts">
import Mail from "@/components/icons/Mail.vue";
import GitHub from "@/components/icons/GitHub.vue";
import GitLab from "@/components/icons/GitLab.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";

const socials = [
  {
    platform: "GitHub",
    url: "https://github.com/luongductrong",
    icon: GitHub,
  },
  {
    platform: "GitLab",
    url: "https://gitlab.com/luongductrong",
    icon: GitLab,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/luongductrong2004/",
    icon: LinkedIn,
  },
  {
    platform: "Gmail",
    url: "mailto:luongductrong2004@gmail.com",
    icon: Mail,
  },
];
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
  >
    <LayoutContainer
      class="flex justify-between items-center gap-8 py-2 h-15 animate-in fade-in slide-in-from-bottom-15 duration-1000"
    >
      <div>
        <IconSignature class="w-22 absolute inset-y-0 z-41" aria-label="Logo" />
      </div>
      <div class="flex items-center justify-between gap-3 h-full py-1">
        <ul class="flex items-center justify-between gap-3">
          <li
            v-for="social in socials"
            :key="social.platform"
            class="size-8 rounded-full bg-muted inline-flex items-center justify-center"
          >
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.platform"
            >
              <component :is="social.icon" class="size-5" />
            </a>
          </li>
        </ul>
        <LayoutThemeDropdown />
      </div>
    </LayoutContainer>
  </header>
</template>
