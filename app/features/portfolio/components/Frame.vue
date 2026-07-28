<script setup lang="ts">
interface Props {
  id: string;
  title: string;
}
defineProps<Props>();
</script>

<template>
  <section :id="id" class="mb-12">
    <h2
      class="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4"
    >
      // {{ title }}
    </h2>
    <slot />
  </section>
</template>
