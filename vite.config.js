import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


const repoName = 'vue-api-integration-project'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    base: `/${repoName}/`,
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
