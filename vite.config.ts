import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import the plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // 2. Add it here (usually best to keep it early in the array)
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})