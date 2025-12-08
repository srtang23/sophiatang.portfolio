import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // Ensure proper MIME types for GitHub Pages
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
})

