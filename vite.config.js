import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "vitest-mock-assets",
      load(id) {
        if (
          process.env.VITEST &&
          /\.(svg|png|jpg|jpeg|gif|webp)(\?.*)?$/.test(id)
        ) {
          return 'export default "mocked-asset"';
        }
      },
      resolveId(source) {
        if (
          process.env.VITEST &&
          source.startsWith("/") &&
          /\.(svg|png|jpg|jpeg|gif|webp)$/.test(source)
        ) {
          return source;
        }
      },
    },
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
});
