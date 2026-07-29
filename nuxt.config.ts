// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/eslint",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  components: [
    "@/components",
    {
      path: "@/components/icons",
      prefix: "Icon",
    },
    {
      path: "@/features/portfolio/components",
      prefix: "Portfolio",
    },
    {
      path: "@/layouts/components",
      prefix: "Layout",
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "vi",
      },
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
});
