import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
  },
  // Ensure proper build output
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
