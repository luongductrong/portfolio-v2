<script setup lang="ts">
import type { NuxtError } from '#app';
import { FolderKanban, Home, TriangleAlert } from '@lucide/vue';

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
    <LayoutContainer as-child>
      <main class="flex min-h-[calc(100dvh-20rem)] items-center justify-center py-16 sm:py-20 border-b">
        <section aria-labelledby="error-title" class="max-w-2xl flex flex-col items-center justify-between gap-6">
          <p class="flex items-center gap-2 text-xl font-bold uppercase text-primary">
            <TriangleAlert class="size-4" aria-hidden="true" />
            {{ statusCode }}
          </p>
          <h1 id="error-title" class="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {{ title }}
          </h1>
          <p class="max-w-xl text-base leading-7 text-muted-foreground text-center">
            {{ description }}
          </p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <UiButton class="uppercase" @click="redirectTo('/')">
              <Home aria-hidden="true" />
              Go back home
            </UiButton>
            <UiButton variant="outline" class="uppercase" @click="redirectTo('/projects')">
              <FolderKanban aria-hidden="true" />
              View projects
            </UiButton>
          </div>
        </section>
      </main>
    </LayoutContainer>
  </NuxtLayout>
</template>
