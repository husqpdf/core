export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  vite: {
    build: {
      target: ['es2022'],
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2022',
      },
    },
  },
})
