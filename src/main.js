import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import VueLabHome from './vuelab/views/VueLabHome/index.vue'
import VueLabComponent from './vuelab/views/VueLabComponent/index.vue'
import * as components from './components'
import { CopyIcon } from './vuelab/components/Icons'

import directives from './vuelab/composables/directives'

const routes = [
  {
    path: '/',
    name: 'home',
    component: VueLabHome,
    props: { components }
  },
  {
    path: '/:name',
    name: 'component',
    component: VueLabComponent,
    props: route => ({ name: route.params.name, components })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const menu = components ? Object.keys(components).map(key => ({
  name: key,
  path: `/${key}`
})) : []

const app = createApp({
  render: () => h(App, { menu })
})

app.use(router)
app.use(directives)
app.mount('#app')
