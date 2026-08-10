<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { ToasterProps } from 'vue-sonner';
import { Toaster as Sonner } from 'vue-sonner';
import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon, XIcon } from '@lucide/vue';

const props = defineProps<ToasterProps>();
const delegatedProps = reactiveOmit(props, 'class', 'theme');

const colorMode = useColorMode();
const theme = computed(() => colorMode.value as ToasterProps['theme']);
</script>

<template>
  <Sonner :class="cn('toaster group', props.class)" :theme="theme" v-bind="delegatedProps">
    <template #success-icon>
      <CircleCheckIcon class="size-4" />
    </template>
    <template #info-icon>
      <InfoIcon class="size-4" />
    </template>
    <template #warning-icon>
      <TriangleAlertIcon class="size-4" />
    </template>
    <template #error-icon>
      <OctagonXIcon class="size-4" />
    </template>
    <template #loading-icon>
      <div>
        <Loader2Icon class="size-4 animate-spin" />
      </div>
    </template>
    <template #close-icon>
      <XIcon class="size-4" />
    </template>
  </Sonner>
</template>
