import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/uploads": {
        target: "https://apjec-server-appi.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uploads/, "/uploads"),
      },
      "/current-affairs": {
        target: "https://apjec-server-appi.vercel.app",
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["react-pdf"], // Ensure Vite recognizes react-pdf
    },
  },
});
