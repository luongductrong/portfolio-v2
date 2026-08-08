// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['shadcn-nuxt', '@nuxt/fonts', '@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxt/eslint'],
  fonts: {
    families: [
      {
        name: 'JetBrains Mono',
        provider: 'google',
        weights: ['400', '500', '600', '700', '800'],
        styles: ['normal'],
      },
    ],
    defaults: {
      subsets: ['latin', 'vietnamese'],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },
  components: [
    '@/components',
    {
      path: '@/components/icons',
      prefix: 'Icon',
    },
    {
      path: '@/features/portfolio/components',
      prefix: 'Portfolio',
    },
    {
      path: '@/features/projects/components',
      prefix: 'Project',
    },
    {
      path: '@/features/contact/components',
      prefix: 'Contact',
    },
    {
      path: '@/layouts/components',
      prefix: 'Layout',
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'vi',
      },
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
});
