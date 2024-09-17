import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { fileURLToPath } from "url";

export default defineConfig({
  base: "/market/",
  plugins: [preact()],
  build: {
    outDir: "C:/laragon/www/market",
  },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    port: 9723,
  },
});
