// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  tailwindcss: {
    cssPath: '~/src/assets/css/tailwind.css'
  },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss']
})
