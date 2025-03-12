import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./app"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@features": path.resolve(__dirname, "./features"),
    },
  },
});
