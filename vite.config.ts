import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages serves project sites from /<repository-name>/, so the
// production base must match the repository name (case-sensitive). The deploy
// workflow passes BASE_PATH from the actual repository name; local dev uses '/'.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
