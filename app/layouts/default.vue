<script setup lang="ts">
useHead({
  title: "Duc Trong Luong",
  meta: [{ name: "description", content: "Duc Trong Luong's portfolio." }],
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
