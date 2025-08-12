import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'bundle-stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    port: 9000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        // Manual chunk example: split vendor dependencies into a separate chunk
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            return 'vendor';
          }
        },
      },
    },
  },
});
