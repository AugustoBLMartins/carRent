import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //  importa o módulo 'path' do Node

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //  adiciona o alias '@' apontando para 'src/'
    },
  },
})
