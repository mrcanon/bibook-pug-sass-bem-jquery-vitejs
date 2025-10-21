import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteConvertPugInHtml } from '@mish.dev/vite-convert-pug-in-html';
import inject from '@rollup/plugin-inject';
const isProd = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const basePath = isProd === 'production' ? '/bibook-pug-sass-bem-jquery-vitejs/' : '/';
const injectConfig = isProd === 'production' ? {
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  include: '**/*.js'
} : {
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
};


export default defineConfig({
  base: basePath,
  plugins: [viteConvertPugInHtml(),
  inject(injectConfig)
  ],
  root: 'src',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '$': 'jQuery', // This alias allows importing 'jQuery' as '$'
    },
  },
  build: {
    minify: false,
    outDir: '../docs',
    emptyOutDir: true,
    cssCodeSplit: true,
    assetsDir: 'assets',
    cssTarget: 'chrome61',
    rollupOptions: {
      input: {
        // Specify only the JavaScript files as the entry points for Rollup.
        // The Pug templates will be imported within these JS files.
        main: resolve(__dirname, "src/main.js"),
        about: resolve(__dirname, "src/about.js"),
      },
      output: {
        globals: {
          $: 'jquery',
          jquery: '$',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  server: {
    port: 3000,
    open: true,
    host: '127.0.0.1'
  },
});
