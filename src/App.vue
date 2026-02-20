<template>
  <div
    class="vue-lab-application"
  >
    <div class="vue-lab-application__body">
      <Nav
        :path="$route.path"
        :name="title"
        :options="menu"
        @navigate="navigate"
      />
      <div class="vue-lab-application__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Nav } from './vuelab/components/general/index.js'
import { inject } from 'vue'
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const router = instance?.appContext.config.globalProperties.$router

const menu = inject('menu')
const title = inject('kit-title')
const navigate = (path) => {
  router.push({ path })
}

</script>

<style lang="scss">
@use './styles/index.scss' as *;
  .vue-lab-application {
    height: 100%;
    width: 100%;
    background-color: clr($light, bg-primary);

    &__content {
      height: 100%;
      overflow: hidden;
    }

    &__body {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 200px 1fr;
    }
  }
</style>
