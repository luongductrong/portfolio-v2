<script setup lang="ts">
import { EllipsisVertical } from "@lucide/vue";

const colorMode = useColorMode();

const themes = [
  {
    value: "system",
    label: "System",
  },
  {
    value: "light",
    label: "Light",
  },
  {
    value: "dark",
    label: "Dark",
  },
] as const;
</script>

<template>
  <UiDropdownMenu :modal="false">
    <UiDropdownMenuTrigger as-child>
      <UiButton
        variant="ghost"
        size="sm"
        aria-label="Change theme"
        class="bg-muted rounded-full has-[>svg]:px-1"
      >
        <EllipsisVertical aria-hidden="true" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end">
      <UiDropdownMenuLabel>Theme</UiDropdownMenuLabel>
      <UiDropdownMenuGroup>
        <UiDropdownMenuRadioGroup v-model="colorMode.preference">
          <UiDropdownMenuRadioItem
            v-for="theme in themes"
            :key="theme.value"
            :value="theme.value"
          >
            {{ theme.label }}
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
