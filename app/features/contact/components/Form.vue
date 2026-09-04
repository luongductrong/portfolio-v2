<script setup lang="ts">
const config = useRuntimeConfig();
const isNetlify = computed(() => String(config.public.isNetlify).toLowerCase() === 'true');
</script>

<template>
  <ContactFormNetlify v-if="isNetlify" />
  <ContactFormspree v-else />
</template>
