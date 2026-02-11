import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import VueLabHome from './vuelab/views/VueLabHome/index.vue'
import VueLabComponent from './vuelab/views/VueLabComponent/index.vue'
import VueLabColors from './vuelab/views/VueLabColors/index.vue'

import appDirectives from './vuelab/composables/directives'

import './styles/index.scss'

export const createLab = ({
  components = {},
  menu,
  menuGroupsDescription,
  mountSelector,
  configuration,
  homePageDescription,
  extra,
}) => {
  const keys = Object.keys(configuration || {})
  const serializedConfig = keys.reduce((prev, next) => ({ ...prev, [next.toLocaleLowerCase()]: configuration[next] }), {})

  const appMenu = components ? Object.keys(components).map(key => ({
    name: key,
    path: `/${key}`
  })) : []

  let currentMenu = extra ? [...(menu || appMenu), ...extra] : (menu || appMenu)
  const maxIndex = currentMenu.reduce((max, item) => item.index > max ? item.index : max, 0)
  currentMenu = currentMenu.map((item, index) => ({ ...item, index: item.index || maxIndex + index + 1 }))
  currentMenu.sort((a, b) => a.index - b.index)

  const extraRouters = (extra || []).map(it => {
    if (it.type == 'colors') {
      return {
        path: it.path,
        name: it.name,
        component: VueLabColors,
        props: it.props
      }
    } else {
      return it
    }
  })

  const routes = [
    {
      path: '/',
      name: 'home',
      component: VueLabHome,
      props: {
        components,
        description: homePageDescription || '',
        menu: currentMenu,
        menuGroupsDescription
      }
    },
    ...extraRouters,
    {
      path: '/:name',
      name: 'component',
      component: VueLabComponent,
      props: route => ({ name: route.params.name, components, configuration: serializedConfig })
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  const app = createApp(App)

  app.use(router)
  app.use(appDirectives)

  app.provide('menu', currentMenu)

  if (mountSelector) {
    app.mount(mountSelector)
  }

  return app
}