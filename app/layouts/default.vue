<script setup lang="ts">
import 'vue-sonner/style.css';

useHead({
  title: 'Duc Trong Luong',
  meta: [{ name: 'description', content: "Duc Trong Luong's portfolio." }],
  htmlAttrs: {
    class: 'scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary/60',
  },
});
</script>

<template>
  <div class="text-foreground font-mono bg-background">
    <LayoutHeader />
    <slot />
    <LayoutFooter />
    <UiToaster position="bottom-right" close-button :duration="5000" />
  </div>
</template>
