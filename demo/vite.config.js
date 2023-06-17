import { defineConfig } from "vite";
import { basePlugin } from "../scripts/vite.base.config";
import { modifyVars } from 'tdesign-custom/es/modifyVars'

export default () => {
  return defineConfig({
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: modifyVars,
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 16001,
      open: "/",
      https: false,
      fs: {
        strict: false,
      },
    },
    plugins: [...basePlugin],
  });
};
