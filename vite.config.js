import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Uncomment this line when bulding for production -- needs to match browserRouter 'basename' path in 'main.jsx'
  base: '/',
  plugins: [
    react(),
    // Custom plugin to generate sitemap during build
    {
      name: 'sitemap-generator',
      buildStart() {
        // Only generate during build, not dev
        try {
          import('./scripts/generateSitemap.js');
        } catch (error) {
          console.log('Sitemap generation will run via npm script');
        }
      },
    },
  ],
  publicDir: 'public',
  build: {
    sourcemap: true, // Enable production source maps
  },
  css: {
    devSourcemap: true, // Still useful for development
  },
});
