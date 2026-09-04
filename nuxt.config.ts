// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

declare const process: {
  readonly env: Record<string, string | undefined>;
};

const imageCdnUrl = process.env.NUXT_PUBLIC_IMAGE_CDN_URL?.replace(/\/+$/, '');
const isNetlify = process.env.NUXT_PUBLIC_IS_NETLIFY === 'true';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  features: {
    inlineStyles: false,
  },
  runtimeConfig: {
    public: {
      siteUrl: 'http://localhost:3000/',
      imageCdnUrl: '',
      isNetlify,
    },
  },
  css: ['@/assets/css/tailwind.css', 'vue-sonner/style.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/turnstile',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],
  image: imageCdnUrl
    ? {
        provider: 'netlifyImageCdn',
        netlifyImageCdn: {
          baseURL: imageCdnUrl,
        },
      }
    : {
        provider: 'ipx',
      },
  fonts: {
    families: [
      {
        name: 'JetBrains Mono',
        provider: 'google',
        weights: ['400', '500', '600'],
        styles: ['normal'],
      },
      {
        name: 'Space Grotesk',
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
      path: '@/features/skills/components',
      prefix: 'Skill',
    },
    {
      path: '@/layouts/components',
      prefix: 'Layout',
    },
  ],
  app: {
    // baseURL: Defaults to `/`; Nuxt overrides it with NUXT_APP_BASE_URL when provided.
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.ts',
      },
      {
        code: 'vi',
        name: 'Tiếng Việt',
        language: 'vi-VN',
        file: 'vi.ts',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'portfolio_locale',
      fallbackLocale: 'en',
    },
  },
});
