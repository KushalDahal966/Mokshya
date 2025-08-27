import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  appType: 'mpa',   // 👈 this disables SPA fallback
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'src/pages/menu.html'),
        booking: resolve(__dirname, 'src/pages/booking.html'),
        directions: resolve(__dirname, 'src/pages/directions.html'),
        ktaHaru: resolve(__dirname, 'src/pages/ktaHaru.html'),
      },
    },
  },
})
