
import { updateAppConfig } from '#app'
import { defuFn } from '/mnt/F8E02105E020CC26/vue-projects/nuxt-movie-app/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
