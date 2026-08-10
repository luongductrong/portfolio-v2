<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import { Motion, useReducedMotion } from 'motion-v';

interface Props {
  words: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  once?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  duration: 0.7,
  delay: 0,
  filter: true,
  once: false,
});

defineOptions({
  inheritAttrs: false,
});

const reducedMotion = useReducedMotion();
const wordsArray = computed(() => props.words.split(' '));

function getTransition(index: number) {
  return {
    duration: props.duration,
    delay: reducedMotion.value ? 0 : props.delay / 1000 + index * 0.2,
    ease: [0.25, 0.1, 0.25, 1] as const,
  };
}
</script>

<template>
  <div :class="cn(`leading-snug tracking-wide`, props.class)">
    <Motion
      v-for="(word, idx) in wordsArray"
      :key="word + idx"
      as="span"
      class="inline-block"
      :initial="{
        opacity: 0,
        filter: props.filter ? 'blur(10px)' : 'none',
      }"
      :while-in-view="{
        opacity: 1,
        filter: props.filter ? 'blur(0px)' : 'none',
      }"
      :in-view-options="{ once: props.once }"
      :transition="getTransition(idx)"
    >
      {{ word }}&nbsp;
    </Motion>
  </div>
</template>
