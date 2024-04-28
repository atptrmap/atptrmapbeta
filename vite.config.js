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
        attributions_en: resolve(__dirname, "en/attributions.html"),
        attributions_es: resolve(__dirname, "es/attributions.html"),
        attributions_uk: resolve(__dirname, "uk/attributions.html"),
        arizona_forest: resolve(__dirname, "data/maps/arizona-forest.html"),
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [vitePluginFaviconsInject("./favicon.ico")],
});
