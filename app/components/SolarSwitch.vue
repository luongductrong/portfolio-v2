<script setup lang="ts">
import { Motion, useMotionValue, useTransform } from 'motion-v';

interface Props {
  isDark: boolean;
}

const props = defineProps<Props>();

const duration = 0.7;

const moonVariants = {
  checked: { scale: 1 },
  unchecked: { scale: 0 },
};

const sunVariants = {
  checked: { scale: 0 },
  unchecked: { scale: 1 },
};

const sunPaths = [
  'M12 2v2',
  'M12 20v2',
  'm4.93 4.93 1.41 1.41',
  'm17.66 17.66 1.41 1.41',
  'M2 12h2',
  'M20 12h2',
  'm6.34 17.66-1.41 1.41',
  'm19.07 4.93-1.41 1.41',
] as const;

const moonPath =
  'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401';

const scaleMoon = useMotionValue(props.isDark ? 1 : 0);
const scaleSun = useMotionValue(props.isDark ? 0 : 1);
const pathLengthMoon = useTransform(scaleMoon, [0.6, 1], [0, 1]);
const pathLengthSun = useTransform(scaleSun, [0.6, 1], [0, 1]);
</script>

<template>
  <Motion as="div" :animate="props.isDark ? 'checked' : 'unchecked'" aria-hidden="true" focusable="false">
    <Motion
      as="svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      :xmlns="'http://www.w3.org/2000/svg'"
      aria-hidden="true"
      focusable="false"
    >
      <Motion
        as="circle"
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :variants="sunVariants"
        :transition="{ duration }"
        :style="{ pathLength: pathLengthSun, scale: scaleSun }"
      />
      <Motion
        v-for="path in sunPaths"
        :key="path"
        as="path"
        :d="path"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :variants="sunVariants"
        :transition="{ duration }"
        :style="{ pathLength: pathLengthSun, scale: scaleSun }"
      />
      <Motion
        as="path"
        :d="moonPath"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :variants="moonVariants"
        :transition="{ duration }"
        :style="{ pathLength: pathLengthMoon, scale: scaleMoon }"
      />
    </Motion>
  </Motion>
</template>
