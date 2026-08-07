<script setup lang="ts">
import { Moon, Sun, SunMoon } from '@lucide/vue';

const colorMode = useColorMode();

const themes = [
  {
    value: 'system',
    label: 'System',
  },
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
] as const;

const themeIcon = computed(() => (colorMode.value === 'dark' ? Moon : Sun));
// TODO: Use motion icons
</script>

<template>
  <UiDropdownMenu :modal="false">
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="ghost" size="icon-sm" aria-label="Change theme" class="bg-muted rounded-full">
        <ClientOnly>
          <component :is="themeIcon" aria-hidden="true" />
          <template #fallback>
            <SunMoon aria-hidden="true" />
          </template>
        </ClientOnly>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end">
      <UiDropdownMenuLabel>Theme</UiDropdownMenuLabel>
      <UiDropdownMenuGroup>
        <UiDropdownMenuRadioGroup v-model="colorMode.preference">
          <UiDropdownMenuRadioItem v-for="theme in themes" :key="theme.value" :value="theme.value">
            {{ theme.label }}
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
