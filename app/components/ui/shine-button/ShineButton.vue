<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import type { PrimitiveProps } from 'reka-ui';
import type { ButtonVariants } from '@/components/ui/button';

defineOptions({
  inheritAttrs: false,
});

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'lg',
});
</script>

<template>
  <UiButton
    v-bind="$attrs"
    :as="as"
    :as-child="asChild"
    :variant="variant"
    :size="size"
    :class="cn('shine-button', props.class)"
  >
    <slot />
  </UiButton>
</template>

<style scoped>
.shine-button {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.shine-button::after {
  content: '';
  position: absolute;
  width: 28%;
  inset-block: -65%;
  left: -45%;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, color-mix(in oklab, var(--foreground) 10%, white 85%), transparent);
  filter: blur(0.5px);
  opacity: 0;
  transform: translateX(-120%) skewX(-18deg);
  animation: shine-button-sweep 3.8s ease-in-out infinite;
}

@keyframes shine-button-sweep {
  0%,
  48% {
    opacity: 0;
    transform: translateX(-120%) skewX(-18deg);
  }

  58% {
    opacity: 0.7;
  }

  74% {
    opacity: 0;
    transform: translateX(620%) skewX(-18deg);
  }

  100% {
    opacity: 0;
    transform: translateX(620%) skewX(-18deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shine-button::after {
    animation: none;
  }
}
</style>
