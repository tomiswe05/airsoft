import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Test patterns for images to optimize
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,

      // JPEG optimization
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },

      // PNG optimization
      png: {
        quality: 80,
        compressionLevel: 9,
      },

      // WebP optimization (if you convert to webp)
      webp: {
        quality: 80,
        lossless: false,
      },

      // SVG optimization
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                removeEmptyAttrs: false,
              },
            },
          },
        ],
      },
    }),
  ],
})
