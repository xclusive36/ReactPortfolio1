import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactPortfolio/",
  plugins: [react()],
  build: {
    cssCodeSplit: false,
  }
});
