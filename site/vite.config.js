import { defineConfig } from "vite";
import tdocPlugin from "./plugin-tdoc";
import { aliasConfig, basePlugin } from "../scripts/vite.base.config";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: mode === 'development' ? '' : 'tdesign-custom',
    resolve: {
      alias: aliasConfig,
    },
    build: {
      outDir: "../_site",
    },
    server: {
      host: "0.0.0.0",
      port: 16000,
      open: "/",
      https: false,
      fs: {
        strict: false,
      },
    },
    plugins: [...basePlugin, tdocPlugin()],
  });
};
