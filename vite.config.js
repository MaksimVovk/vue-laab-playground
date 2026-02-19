import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  console.log(`Building for ${isProd ? 'production' : 'development'}...`)
  return {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
    },
    plugins: [
      vue(),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'VueStoryBook',
        fileName: (format) => `index.${format}.js`,
      },
      cssCodeSplit: false,
      rollupOptions: {
        external: ['vue', 'vue-router', 'highlight.js', '@highlightjs/vue-plugin', /\.css$/],
        output: {
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            'highlight.js': 'hljs',
            '@highlightjs/vue-plugin': 'highlightjsVue'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'style.css';
            return assetInfo.name;
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
