import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  return {
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      'process.env.NODE_ENV': JSON.stringify(
        isProduction ? 'production' : 'development'
      )
    },
    plugins: [
      vue({
        isProduction: isProduction,
        script: {
          defineModel: true,
          propsDestructure: true
        },
        template: {
          compilerOptions: {
            hoistStatic: true
          }
        }
      }),
      cssInjectedByJsPlugin(),
      {
        name: 'strip-absolute-paths',
        generateBundle(options, bundle) {
          for (const fileName in bundle) {
            const chunk = bundle[fileName];
            if (chunk.type === 'chunk' && chunk.code) {
              const pattern = /\/*\/[^\s"']+/g;
              chunk.code = chunk.code.replace(pattern, (match) => {
                return './' + match.split('/').pop();
              });
            }
          }
        }
      }
    ],
    build: {
      minify: isProduction ? 'esbuild' : false,
      sourcemap: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'VueStoryBook',
        fileName: (format) => `index.${format}.js`,
        formats: ['es', 'umd'],
      },
      cssCodeSplit: false,
      rollupOptions: {
        external: ['vue', 'vue-router', 'highlight.js', '@highlightjs/vue-plugin'],
        output: {
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            'highlight.js': 'hljs',
            '@highlightjs/vue-plugin': 'highlightjsVue'
          },
        },
      },
    },
    server: {
      port: 4445,
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
      ]
    },
  }
})
