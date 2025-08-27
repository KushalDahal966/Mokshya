import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    // prevent Vite from always serving index.html
    fs: {
      allow: ['.'],
    }
  },
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
