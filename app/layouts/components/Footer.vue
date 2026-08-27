<script setup lang="ts">
import { socials } from '@/features/contact/constants';

const { t } = useI18n();
</script>

<template>
  <LayoutContainer class="flex flex-col items-center justify-center gap-6 border-t" as-child>
    <footer>
      <ul class="flex items-center justify-between gap-3">
        <li v-for="social in socials" :key="social.platform" :title="social.platform">
          <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.platform"
            class="size-10 border border-r-3 rounded-full bg-muted inline-flex items-center justify-center"
          >
            <component :is="social.icon" class="size-5" />
          </a>
        </li>
      </ul>
      <p class="text-2xl font-bold" :title="t('footer.vietnameseNameTitle')">Lượng Đức Trọng</p>
      <p class="text-sm text-muted-foreground">
        {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
      </p>
    </footer>
  </LayoutContainer>
</template>
