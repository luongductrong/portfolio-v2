<script setup lang="ts">
interface Props {
  size?: number | string;
}

withDefaults(defineProps<Props>(), {
  size: 32,
});

const attrs = useAttrs();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    v-bind="attrs"
  >
    <title>GitLab</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      d="M17.057 2.544a.2.2 0 0 1 .378-.008l3.114 8.31l1.398 3.73a.2.2 0 0 1-.07.232l-9.76 7.106a.2.2 0 0 1-.235 0l-9.76-7.106a.2.2 0 0 1-.069-.231l1.398-3.73l.167-.45l2.944-7.861a.2.2 0 0 1 .378.008l2.47 7.6a.2.2 0 0 0 .19.137h4.8a.2.2 0 0 0 .19-.138z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<!-- iconoir:gitlab-full - https://allsvgicons.com/ -->
