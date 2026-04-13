import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    // Target modern browsers for smaller output
    target: 'es2020',

    // Raise chunk warning limit (large tools are intentional)
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Manual chunk splitting — separates vendor from app code for better caching
        manualChunks: {
          // React core (changes rarely → long cache TTL)
          'vendor-react': ['react', 'react-dom'],

          // Routing
          'vendor-router': ['react-router-dom'],

          // UI utilities
          'vendor-ui': [
            'react-helmet-async',
            'react-toastify',
            'react-tooltip',
          ],

          // Media / image tools
          'vendor-media': [
            'react-dropzone',
            'react-lazy-load-image-component',
          ],

          // Markdown / content rendering
          'vendor-markdown': ['marked', 'react-markdown', '@uiw/react-md-editor'],

          // Carousel / slider
          'vendor-carousel': ['swiper'],
        },
      },
    },
  },

  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
    ],
  },
})
