// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/lq', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false }
  ]
})
