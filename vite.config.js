import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for GitHub Pages deployment (repo name)
  base: '/portfolio-sindu/',
  plugins: [react()],
  // Treat uppercase JPG files as static assets (some OS/tools save uppercase extensions)
  assetsInclude: ['**/*.JPG'],
  server: {
    port: 3000
  }
})
