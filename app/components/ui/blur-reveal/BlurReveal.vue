<script setup lang="ts">
import { useSlots } from 'vue';
import { Motion, useReducedMotion } from 'motion-v';

interface Props {
  duration?: number;
  delay?: number;
  blur?: string;
  yOffset?: number;
  class?: string;
  once?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1,
  delay: 2,
  blur: '20px',
  yOffset: 20,
  once: false,
});

const slots = useSlots();
const reducedMotion = useReducedMotion();

const children = computed(() => {
  return slots.default ? slots.default() : [];
});
</script>

<template>
  <div ref="container" :class="props.class">
    <Motion
      v-for="(child, index) in children"
      :key="index"
      ref="childElements"
      as="div"
      :initial="{
        opacity: 0,
        filter: `blur(${props.blur})`,
        y: props.yOffset,
      }"
      :while-in-view="{
        opacity: 1,
        filter: `blur(0px)`,
        y: 0,
      }"
      :in-view-options="{ once: props.once }"
      :transition="{
        duration: props.duration,
        ease: 'easeInOut',
        delay: reducedMotion ? 0 : props.delay * index,
      }"
    >
      <component :is="child" />
    </Motion>
  </div>
</template>
