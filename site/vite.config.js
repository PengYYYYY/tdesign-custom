import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import tdocPlugin from './plugin-tdoc';

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../'),
        '@common': path.resolve(__dirname, '../_tdesign-vue/src/_common'),
        'tdesign-site': path.resolve(__dirname, '../_tdesign-vue/src/'),
        '@tencent/codesign-uikit': path.resolve(__dirname, '../src'),
        vue: 'vue/dist/vue.esm.js',
      },
    },
    build: {
      outDir: '../_site',
    },
    server: {
      host: '0.0.0.0',
      port: 16000,
      open: '/',
      https: false,
      fs: {
        strict: false,
      },
    },
    plugins: [
      createVuePlugin({
        include: /(\.md|\.vue)$/,
        jsx: true,
      }),
      tdocPlugin(),
    ],
  });
