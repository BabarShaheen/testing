import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';
import imagemin from 'unplugin-imagemin/vite';

// Dev-only API shim for /api/contact so the contact form works without Vercel dev
const devApiContact = (): Plugin => ({
  name: 'dev-api-contact',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res, next) => {
      if ((req.method || '').toUpperCase() === 'POST') {
        try {
          const mod = await import('./api/contact.js');
          const handler = mod.default;
          // Adapt Node's ServerResponse to a minimal Express-like response used by our handler
          const resAdapter = (() => {
            const nodeRes = res as any;
            return {
              status(code: number) {
                nodeRes.statusCode = code;
                return this;
              },
              json(payload: unknown) {
                nodeRes.setHeader('Content-Type', 'application/json');
                nodeRes.end(JSON.stringify(payload));
              },
              setHeader(name: string, value: string) {
                nodeRes.setHeader(name, value);
              },
              end(chunk?: any) {
                nodeRes.end(chunk);
              },
            };
          })();
          await handler(req as any, resAdapter as any);
        } catch (err) {
          console.error('Dev /api/contact error:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Dev API error' }));
        }
        return;
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    devApiContact(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 80 }
    })
  ],
  server: {
    port: 9000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom']
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
});
