<script setup lang="ts">
import { SunMoon } from '@lucide/vue';

const colorMode = useColorMode();
const { t } = useI18n();
const isDark = computed(() => colorMode.value === 'dark');
const toggleLabel = computed(() => t(isDark.value ? 'theme.switchToLight' : 'theme.switchToDark'));

function toggleTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark';
}
</script>

<template>
  <UiButton
    type="button"
    variant="ghost"
    size="icon-sm"
    :aria-label="toggleLabel"
    :title="toggleLabel"
    class="rounded-full transition-[background-color,border-color,box-shadow,transform]"
    @click="toggleTheme"
  >
    <ClientOnly>
      <SolarSwitch :is-dark="isDark" />
      <template #fallback>
        <SunMoon aria-hidden="true" />
      </template>
    </ClientOnly>
  </UiButton>
</template>
