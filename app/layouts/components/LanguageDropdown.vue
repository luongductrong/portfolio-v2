<script setup lang="ts">
import { toast } from '@/lib/toast';
import { Languages } from '@lucide/vue';

const onClick = function () {
  toast.info('The feature is not implemented yet');
};
</script>

<template>
  <UiButton variant="ghost" size="icon-sm" aria-label="Change language" class="rounded-full" @click="onClick">
    <Languages aria-hidden="true" />
  </UiButton>
</template>
