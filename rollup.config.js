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
    
    esbuild({
      minify: true,
      target: 'es2020', // Change target to es2020 to support import.meta
    }),
    terser(),
    importMetaAssets(), // Ensure assets using import.meta are resolved
    copy({
      targets: [
        { src: 'node_modules/@haxtheweb/rpg-character/lib/**/*', dest: 'public/lib' },
      ],
    }),
  ],
};