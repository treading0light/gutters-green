// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    businessEmailPassword: '',
    public: {
      businessEmail: '',
    }
  }
})
