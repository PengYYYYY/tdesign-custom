import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import vuePlugin from "rollup-plugin-vue";
import esbuild from "rollup-plugin-esbuild";
import styles from 'rollup-plugin-styles';
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import multiInput from "rollup-plugin-multi-input";
import nodeResolve from "@rollup/plugin-node-resolve";
import staticImport from "rollup-plugin-static-import";
import ignoreImport from "rollup-plugin-ignore-import";
import pkg from "../package.json";

const name = "codesign-ui";

const inputList = [
  "src/**/*.ts",
  "src/**/*.tsx",
  "!src/**/demos",
  "!src/**/*.d.ts",
  "!src/**/__tests__",
];
const banner = `/**
 * ${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 */
`;

const externalDeps = ["shared", "vue", "@vue/composition-api", "tdesign-vue/esm"]

const basePlugins = [
  multiInput(),
  nodeResolve(),
  commonjs(),
  vuePlugin(),
  esbuild({
    target: "esnext",
    minify: false,
    jsx: "preserve",
    tsconfig: "tsconfig.build.json",
  }),
  babel({
    babelHelpers: "runtime",
    extensions: [...DEFAULT_EXTENSIONS, ".vue", ".ts", ".tsx"],
  }),
  json(),
  url(),
  replace({
    preventAssignment: true,
    values: {
      __VERSION__: JSON.stringify(pkg.version),
    },
  }),
  terser({
    output: {
      ascii_only: true,
    },
  }),
];


const cssConfig = {
  input: ['src/**/style/index.js'],
  plugins: [multiInput(), styles({ mode: 'extract' })],
  output: {
    banner,
    dir: 'es/',
    sourcemap: true,
    assetFileNames: '[name].css',
  },
};

const esmConfig = {
  input: inputList,
  treeshake: false,
  external: externalDeps,
  plugins: [
    ...basePlugins,
    staticImport({
      include: ["src/**/style/index.js", "src/**/style/*.less"],
    }),
    ignoreImport({
      include: ["src/*/style/*"],
      body: 'import "./style/index.js";',
    }),
  ],
  output: {
    banner,
    dir: "esm/",
    format: "esm",
    sourcemap: true,
    chunkFileNames: "_chunks/dep-[hash].js",
  },
};

const esConfig = {
  input: inputList,
  treeshake: false,
  external: externalDeps,
  plugins: [
    ...basePlugins,
    staticImport({
      include: ['src/**/style/css.js'],
    }),
    ignoreImport({
      include: ['src/*/style/*'],
      body: 'import "./style/css.js";',
    }),
  ],
  output: {
    banner,
    dir: 'es/',
    format: 'esm',
    sourcemap: true,
    chunkFileNames: '_chunks/dep-[hash].js',
  },
}
export default [cssConfig, esmConfig, esConfig];
