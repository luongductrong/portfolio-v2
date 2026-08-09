<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive } from 'reka-ui';

interface Props {
  asChild?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  asChild: false,
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    as="div"
    :class="cn('mx-auto max-w-7xl px-4 py-5 sm:px-6 md:px-8 lg:px-10 duration-500', $attrs.class)"
  >
    <slot />
  </Primitive>
</template>
