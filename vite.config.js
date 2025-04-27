import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vuetify from "vite-plugin-vuetify";
import { VitePWA } from "vite-plugin-pwa";
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",  
  plugins: [
    vue(),
   vueDevTools(),
    vuetify(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
       // Consider adding build optimizations:
       build: {
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
        sourcemap: true,
        // Chunk splitting for better caching:
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor': ['vue', 'vue-router', 'pinia', 'vuetify'],
            },
          },
        },
      },
      
      // Faster development server:
      server: {
        hmr: { overlay: false }, // Disable error overlay for cleaner dev experience
        host: true, // Expose to network
      },
    });

