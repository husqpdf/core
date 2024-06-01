import {addComponent, addLayout, addPlugin, addServerHandler, createResolver, defineNuxtModule} from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@husqpdf/core',
    configKey: 'husqpdf',
  },
  defaults: {},
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Configure pages and public dir
    nuxt.options.dir.pages = "documents"
    nuxt.options.dir.public = "schemas"
    nuxt.options.ssr = false

    // configure top level await compatibility in vite
    nuxt.options.vite.optimizeDeps ||= {}
    nuxt.options.vite.optimizeDeps.esbuildOptions ||= {}
    nuxt.options.vite.optimizeDeps.esbuildOptions.target = "esnext"

    // add css from @husqpdf/ui lib
    nuxt.options.css.push("@husqpdf/ui/dist/style.css")

    addLayout(
      resolve("./runtime/layouts/develop.vue"),
      "develop"
    )

    addLayout(
      resolve("./runtime/layouts/preview.vue"),
      "preview"
    )

    addComponent({
      name: "HusqpdfRoot",
      filePath: resolve("./runtime/components/HusqpdfRoot.vue")
    })

    addServerHandler({
      route: '/api/generate/:document',
      handler: resolve('./runtime/server/api/generate/[document].post')
    })

    addPlugin(resolve("./runtime/my-components-plugin"))
  },
})
