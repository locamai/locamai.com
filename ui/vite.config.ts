import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    assetsDir: './assets',
    emptyOutDir: true,
    outDir: './docs',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/include.scss" as *;`,
      },
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
