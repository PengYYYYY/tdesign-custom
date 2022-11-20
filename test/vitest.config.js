import { defineConfig } from 'vite';
import * as path from 'path';
import { aliasConfig, basePlugin } from '../scripts/vite.base.config'

const testConfig = {
  exclude: ['src/**/__tests__/demo.test.js'],
  include:
    process.env.NODE_ENV === 'test-snap'
      ? ['test/snap/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
      : ['src/**/__tests__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  globals: true,
  environment: 'jsdom',
  testTimeout: 5000,
  setupFiles: process.env.NODE_ENV === 'test-snap' ? path.resolve(__dirname, './test-setup.js') : '',
  transformMode: {
    web: [/\.[jt]sx$/],
  },
  coverage: {
    include: ['src'],
    reporter: ['text', 'json', 'html'],
    reportsDirectory: 'test/unit/coverage',
  },
};

export default defineConfig({
  resolve: {
    alias: aliasConfig
  },
  plugins: basePlugin,
  test: testConfig,
})