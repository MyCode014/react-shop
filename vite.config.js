import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-shop/',
  plugins: [react()],
  build: {
    outDir: 'dist',  // Postavite izlazni direktorij na 'dist'
  },
})
