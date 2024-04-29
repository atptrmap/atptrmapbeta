import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

export default defineConfig({
  base: "/atptrmapbeta/",
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        attributions: resolve(__dirname, "attributions/*.html"),
        maps: resolve(__dirname, "maps/*.html"),
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [vitePluginFaviconsInject("./favicon.ico")],
});
