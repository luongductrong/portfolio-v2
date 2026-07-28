<script setup lang="ts">
import { InBlack } from "@/assets/images";
import { GitHubIcon, GitLabIcon, FacebookIcon } from "vue3-simple-icons";

const socialActivities = readonly([
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
  {
    platform: "LinkedIn",
    username: "@luongductrong2004",
    url: "https://linkedin.com/in/luongductrong2004/",
    icon: null,
    imgIcon: InBlack,
  },
  {
    platform: "Facebook",
    username: "@ltr.dtrly",
    url: "https://facebook.com/ltr.dtrly/",
    icon: FacebookIcon,
  },
]);
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
          v-if="activity.icon"
          :is="activity.icon"
          class="w-6 h-6 fill-gray-800 dark:fill-gray-50"
        />
        <img v-else :src="activity.imgIcon" class="w-6 h-6" />
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
