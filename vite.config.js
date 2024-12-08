// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


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
});
