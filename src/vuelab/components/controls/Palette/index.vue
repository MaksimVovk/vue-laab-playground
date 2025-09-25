<template>
  <CtrlLayout name="Palette">
    <div class="vue-lab__palette">
      <Tag
        v-for="o in options"
        :key="generateKey(o)"
        :value="o"
        :isActive="o == value"
        :title="o"
        class="vue-lab__palette__item"
        @input="setValue"
      ></Tag>
    </div>
  </CtrlLayout>
</template>

<script setup>
  import CtrlLayout from '../CtrlLayout.vue';
  import { Tag } from '../../general';
  import { generateKey } from '../../../composables';
  import { onMounted } from 'vue';

  const props = defineProps({
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => null
    }
  })

  const emit = defineEmits(['input'])

  const setValue = val => {
    emit('input', val)
  }
</script>

<style lang="scss">
  @use '../../../../styles/index.scss' as *;
  .vue-lab__palette {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: flex-start;
  }
</style>