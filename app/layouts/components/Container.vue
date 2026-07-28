<script setup lang="ts">
import { Primitive } from "reka-ui";

interface Props {
  asChild?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    as="div"
    :class="[
      'mx-auto max-w-7xl px-4 py-5 sm:px-6 md:px-8 lg:px-10',
      props.class,
    ]"
  >
    <slot />
  </Primitive>
</template>
