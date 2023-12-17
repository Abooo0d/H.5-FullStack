import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/dashboard",
  plugins: [react()],
  server: {
    host: "192.168.105.159",
    port: 3000,
  },
});
