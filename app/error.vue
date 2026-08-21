<script setup lang="ts">
import { Home } from '@lucide/vue';
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();

const statusCode = computed(() => props.error.status ?? 500);
const isNotFound = computed(() => statusCode.value === 404);
const title = computed(() => (isNotFound.value ? 'Page not found.' : 'Something went wrong.'));
const description = computed(() =>
  isNotFound.value
    ? 'The page may have moved, been renamed, or never existed. You can return home or continue browsing my work.'
    : 'The application ran into an unexpected problem. Please return to a safe page and try again.',
);

function redirectTo(path: string) {
  clearError({ redirect: path });
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
          Go back home
        </UiButton>
        <UiButton
          variant="outline"
          class="uppercase shadow-brutalism hover:translate-1 hover:shadow-none"
          @click="redirectTo('/projects')"
        >
          View projects
        </UiButton>
      </div>
    </section>
  </NuxtLayout>
</template>
