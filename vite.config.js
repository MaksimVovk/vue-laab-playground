import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
    },
    plugins: [
      vue(),
      cssInjectedByJsPlugin(),
      {
        name: 'strip-absolute-paths',
        generateBundle(options, bundle) {
          for (const fileName in bundle) {
            const chunk = bundle[fileName];
            if (chunk.type === 'chunk' && chunk.code) {
              const pattern = /\/Users\/[^\s"']+/g;
              chunk.code = chunk.code.replace(pattern, (match) => {
                return './' + match.split('/').pop();
              });
            }
          }
        }
      }
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'VueStoryBook',
        fileName: (format) => `index.${format}.js`,
      },
      cssCodeSplit: false,
      relativeExternalFiles: true,
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
        {
          find: /^highlight\.js\/lib\/common$/,
          replacement: 'highlight.js'
        }
      ]
    },
    optimizeDeps: {
      include: ['highlight.js', '@highlightjs/vue-plugin']
    },
  }
})
