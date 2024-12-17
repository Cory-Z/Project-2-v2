import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.html',
  output: {
    dir: 'public',
    format: 'es',
    entryFileNames: '[name]-[hash].js',
    chunkFileNames: '[name]-[hash].js',
    assetFileNames: '[name]-[hash][extname]',
  },
  plugins: [
    html({
      minify: true,
    }),
    nodeResolve({
      browser: true,
    }),
    importMetaAssets(),
    esbuild({
      minify: true,
      target: 'es2017',
    }),
    terser(),
    copy({
      targets: [
        { src: 'node_modules/@haxtheweb/rpg-character/lib/**/*', dest: 'public/lib' },
      ],
    }),
  ],
};