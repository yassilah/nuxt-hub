export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxthub/core', "@nuxt/eslint"],
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  }
})
