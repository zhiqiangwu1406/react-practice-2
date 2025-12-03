import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    server: {
            port: 3000, // Or any other available port
          },
  plugins: [react(), tailwindcss()],
})
