<script setup lang="ts">
import Mail from "@/components/icons/Mail.vue";
import GitHub from "@/components/icons/GitHub.vue";
import GitLab from "@/components/icons/GitLab.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";

const gmail = {
  url: "mailto:luongductrong2004@gmail.com",
  value: "luongductrong2004@gmail.com",
};

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
    url: gmail.url,
    icon: Mail,
  },
];
</script>

<template>
  <LayoutContainer
    class="flex flex-col items-center justify-center gap-6"
    as-child
  >
    <footer>
      <IconSignature class="w-37.5" />
      <ul class="flex items-center justify-between gap-3">
        <li
          v-for="social in socials"
          :key="social.platform"
          class="size-10 rounded-full bg-main-50 inline-flex items-center justify-center"
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
      <p class="text-base">
        {{ gmail.value }}
      </p>
      <p class="text-sm text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} Made with ❤️ by Duc Trong Luong
      </p>
    </footer>
  </LayoutContainer>
</template>
