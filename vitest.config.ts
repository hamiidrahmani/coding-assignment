import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: {
          width: "{props.width || 24}",
          height: "{props.height || 24}",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "node_modules",
        "dist",
        "build",
        "public",
        "**/index.ts",
        "**/*.index.ts",
        "vitest.config.ts",
        "**/types.ts",
        "src/styles",
        "src/api",
        "src/icons",
        "**/*.stories.tsx",
        "**/*.css.ts",
      ],
    },
  },
});
