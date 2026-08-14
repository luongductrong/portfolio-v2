<script setup lang="ts">
import { socials } from '@/features/contact/constants';
</script>

<template>
  <LayoutContainer class="flex flex-col items-center justify-center gap-6 border-t" as-child>
    <footer>
      <ul class="flex items-center justify-between gap-3">
        <li
          v-for="social in socials"
          :key="social.platform"
          class="size-10 rounded-full bg-muted inline-flex items-center justify-center"
        >
          <a :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.platform">
            <component :is="social.icon" class="size-5" />
          </a>
        </li>
      </ul>
      <p class="text-2xl font-bold" title="Duc Trong Luong's Vietnamese name">Lượng Đức Trọng</p>
      <p class="text-sm text-muted-foreground">&copy; {{ new Date().getFullYear() }} Made with ❤️ by Duc Trong Luong</p>
    </footer>
  </LayoutContainer>
</template>
