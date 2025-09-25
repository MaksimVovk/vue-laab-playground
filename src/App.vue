<template>
  <div
    class="vue-lab-application"
  >
    <div class="vue-lab-application__body">
      <Nav
        :path="$route.path"
        :options="menu"
      />
      <div class="vue-lab-application__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Nav } from './vuelab/components/general/index.js'

const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="scss">
@use './styles/index.scss' as *;

  * {
    color: clr($light, black-800);
  }
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
