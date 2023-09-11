// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["@/assets/default.scss"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxtjs/tailwindcss"],
});
