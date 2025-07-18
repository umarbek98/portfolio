import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Plugin to remove type="module" from script tags
function removeModuleType() {
  return {
    name: "remove-module-type",
    transformIndexHtml(html) {
      return html.replace(/<script type="module"/g, "<script");
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), removeModuleType()],
  base: "/", // Use absolute paths for deployment
  build: {
    outDir: "dist", // Build to dist first, then copy to root
    assetsDir: "assets",
    sourcemap: false,
    target: "es2015", // Build for older browsers to avoid module issues
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: "iife", // Use IIFE instead of ES modules to avoid MIME issues
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Add global variable name for IIFE
        name: "Portfolio",
      },
    },
  },
  esbuild: {
    target: "es2015",
  },
});
