import { defineConfig } from 'vite'
import inject from '@rollup/plugin-inject';
import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/avion/',
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    htmlPurge(),
  ],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "animate.css";`,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productsListing: resolve(__dirname, 'product-listing.html'),
        aboutUs: resolve(__dirname, 'about-us.html'),
        cart: resolve(__dirname, 'cart.html'),
        contact: resolve(__dirname, 'contact.html'),
        blog: resolve(__dirname, 'blog.html'),
        profile: resolve(__dirname, 'profile.html')
      },
      external: ['@popperjs/core'],
    }
  }
})
