import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Config de Vite: React + Tailwind v4 vía plugin oficial (sin postcss.config)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
