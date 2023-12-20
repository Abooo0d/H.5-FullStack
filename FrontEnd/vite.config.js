import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/H.5-FullStack/",
  server: { host: "192.168.43.5", port: "3000" },
});
