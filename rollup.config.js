import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';
import terser from '@rollup/plugin-terser';

export default {
  input: 'index.html', // Entry file
  output: {
    dir: 'public',
    format: 'es',
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',

  },


  plugins: [

    html({
      minify: true,
    }),

    nodeResolve({
      browser: true,
      exportConditions: ['browser', 'development'],
    }),

    esbuild({
      target: 'es2017',
      minify: true,

    }),

    importMetaAssets(),

    babel({
      babelHelpers: 'bundled',

    }),
    
    terser(),
  ],
};
