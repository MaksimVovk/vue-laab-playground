<template>
  <div class="vue-lab__props-description">
    <div class="vue-lab__props-description__title vue-lab__block-title">Props</div>
    <div class="vue-lab__block-body">
      <PropsDescriptionItem
        v-for="item in data"
        :key="generateKey(item.name)"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import PropsDescriptionItem from './item.vue'
  import { generateKey } from '../../../composables'

  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    },
  })

</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;

  .vue-lab__props-description {
    font-family: var(--font-family);
  }
</style>
