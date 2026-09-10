<script setup lang="ts">
import { Home } from '@lucide/vue';
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();
const { t } = useI18n();

const statusCode = computed(() => props.error.status ?? 500);
const isNotFound = computed(() => statusCode.value === 404);
const title = computed(() => t(isNotFound.value ? 'error.notFound.title' : 'error.unexpected.title'));
const description = computed(() =>
  isNotFound.value ? t('error.notFound.description') : t('error.unexpected.description'),
);

function redirectTo(path: '/' | '/projects') {
  return clearError({ redirect: path });
}
</script>

<template>
  <NuxtLayout>
    <section
      aria-labelledby="error-title"
      class="flex flex-col min-h-[calc(100dvh-8.75rem)] items-center justify-center gap-6"
    >
      <p class="flex items-center gap-2 text-2xl font-bold uppercase text-primary">
        {{ statusCode }}
      </p>
      <h1 id="error-title" class="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
        {{ title }}
      </h1>
      <p class="max-w-xl text-base leading-7 text-muted-foreground text-center">
        {{ description }}
      </p>
      <div class="flex flex-col gap-3 sm:flex-row">
        <UiButton class="uppercase shadow-brutalism hover:translate-1 hover:shadow-none" @click="redirectTo('/')">
          <Home aria-hidden="true" />
          {{ t('error.actions.home') }}
        </UiButton>
        <UiButton
          variant="outline"
          class="uppercase shadow-brutalism hover:translate-1 hover:shadow-none"
          @click="redirectTo('/projects')"
        >
          {{ t('error.actions.projects') }}
        </UiButton>
      </div>
    </section>
  </NuxtLayout>
</template>
