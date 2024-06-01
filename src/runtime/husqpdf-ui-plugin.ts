import { defineNuxtPlugin } from '#app'
import components from "@husqpdf/ui"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(components)
})
