// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
  .override("nuxt/import/rules", {
    rules: {
      "import/no-duplicates": "off",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/html-self-closing": "off",
      "vue/require-default-prop": "off",
      "vue/first-attribute-linebreak": "off",
      "vue/multi-word-component-names": "off",
    },
  });
