// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // …
  build: {
    rollupOptions: {
      external: ['/nagishli_beta.js'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example of splitting vendor files
        },
      },
    },
    chunkSizeWarningLimit: 600, // Adjust the limit as per your needs
  },
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
  ],
});


