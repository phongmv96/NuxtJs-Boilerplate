// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/lq', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/chapter.ts', pathPrefix: false }
  ],
  imports: {
    dirs: ['~/composables/**', 'stores']
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  pinia: {
    storesDirs: ['./stores/**']
  }
})
