<script setup lang="ts">
import { Languages } from '@lucide/vue';

const { locale, locales, setLocale, t } = useI18n();

const languageOptions = computed(() =>
  locales.value.map((item) => ({ code: item.code, name: item.name ?? item.code.toUpperCase() })),
);

async function changeLanguage(value: unknown) {
  // TODO
  if ((value === 'en' || value === 'vi') && value !== locale.value) await setLocale(value);
}
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon-sm"
        :aria-label="t('language.change')"
        :title="t('language.change')"
        class="rounded-full transition-[background-color,border-color,box-shadow,transform]"
      >
        <Languages data-icon="inline-start" aria-hidden="true" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="min-w-40 shadow-brutalism">
      <UiDropdownMenuLabel>{{ t('language.label') }}</UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuRadioGroup :model-value="locale" @update:model-value="changeLanguage">
        <UiDropdownMenuRadioItem v-for="item in languageOptions" :key="item.code" :value="item.code">
          {{ item.name }}
        </UiDropdownMenuRadioItem>
      </UiDropdownMenuRadioGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
