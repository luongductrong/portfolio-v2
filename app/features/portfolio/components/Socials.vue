<script setup lang="ts">
import GitHub from "@/components/icons/GitHub.vue";
import GitLab from "@/components/icons/GitLab.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Facebook from "@/components/icons/Facebook.vue";

const socialActivities = [
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
  <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
    <a
      v-for="activity in socialActivities"
      :key="activity.platform"
      :href="activity.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        class="flex items-center space-x-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ark:hover:bg-gray-700 transition duration-300"
      >
        <component
          :is="activity.icon"
          class="w-6 h-6 fill-gray-800 dark:fill-gray-50"
        />
        <div>
          <h3 class="font-semibold">{{ activity.platform }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ activity.username }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>
