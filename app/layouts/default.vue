<script setup lang="ts">
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
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
