<script setup lang="ts">
import { ArrowUp } from "@lucide/vue";

const { y } = useWindowScroll({
  behavior: "smooth",
});

const isVisible = computed(() => y.value > 200);
</script>

<template>
  <button
    v-if="isVisible"
    class="fixed bottom-5 right-5 bg-green-500 text-white px-2 py-2 rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition"
    aria-label="Back to top"
    @click="y = 0"
  >
    <ArrowUp />
  </button>
</template>
