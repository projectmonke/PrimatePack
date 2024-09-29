import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import zipPack from "vite-plugin-zip-pack";
import { resolve } from "path";
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: "../",
        },
      ],
    }),
    zipPack({
      outFileName: "plugin.zip",
    }),
    react()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "plugin-template",
      fileName: (format) => "script.js",
      formats: ["es"],
    },
    outDir: "dist/frontend",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.NODE_ENV" : "''"
  }
});
