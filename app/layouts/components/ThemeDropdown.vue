<script setup lang="ts">
import { Moon, Sun, SunMoon, Monitor } from '@lucide/vue';

const colorMode = useColorMode();

const themes = [
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
  {
    value: 'system',
    label: 'System',
  },
] as const;

const themeIcon = computed(() => (colorMode.value === 'dark' ? Moon : Sun));
// TODO: Use motion icons
</script>

<template>
  <UiDropdownMenu :modal="false">
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="ghost" size="icon-sm" aria-label="Change theme" class="rounded-full">
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
            <UiDropdownMenuShortcut>
              <Sun v-if="theme.value === 'light'" aria-hidden="true" />
              <Moon v-else-if="theme.value === 'dark'" aria-hidden="true" />
              <Monitor v-else-if="theme.value === 'system'" aria-hidden="true" />
            </UiDropdownMenuShortcut>
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
