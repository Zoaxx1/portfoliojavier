import react from '@vitejs/plugin-react'
// vite.config.js (o vite.config.ts)
import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwind
      ]
    }
  },
  plugins: [react()],
})