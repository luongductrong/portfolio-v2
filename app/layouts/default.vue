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
  <div class="text-foreground font-mono bg-background overflow-x-clip">
    <LayoutHeader />
    <LayoutContainer as-child>
      <main class="min-h-[calc(100dvh-3.75rem)]">
        <slot />
      </main>
    </LayoutContainer>
    <LayoutFooter />
    <UiToaster position="bottom-right" close-button :duration="5000" />
  </div>
</template>
<!-- 3.75rem === header height -->
