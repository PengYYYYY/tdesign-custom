import * as path from 'path';
import { createVuePlugin } from 'vite-plugin-vue2';
import ScriptSetup from 'unplugin-vue2-script-setup/vite';

export const aliasConfig = {
  '@': path.resolve(__dirname, '../'),
  '@common': path.resolve(__dirname, '../_tdesign-vue/src/_common'),
  'tdesign-site': path.resolve(__dirname, '../_tdesign-vue/src/'),
  'tdesign-custom': path.resolve(__dirname, '../src'),
};

export const basePlugin = [
  [
    createVuePlugin({
      include: /(\.md|\.vue)$/,
      jsx: true,
    }),
    ScriptSetup({}),
  ],
];