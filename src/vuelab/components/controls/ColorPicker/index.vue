<template>
  <CtrlLayout :name="title">
    <div class="vue-lab-color-picker">
      <label class="vue-lab-color-picker__color-preview" :style="{ background: bgColor }">
        <input
          type="color"
          :value="value || '#000000'"
          class="vue-lab-color-picker__hidden-input"
          @input="handleColorInput"
        />
      </label>
    </div>
  </CtrlLayout>
</template>

<script setup>
  import { computed } from 'vue';
  import CtrlLayout from '../CtrlLayout.vue';

  const props = defineProps({
    title: {
      type: String,
      default: 'Color Picker'
    },
    value: {
      type: String,
      default: () => null
    }
  })

  const emit = defineEmits(['input'])

  const bgColor = computed(() => props.value || 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)')

  const handleColorInput = (e) => {
    emit('input', e?.target.value)
  }
</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;
  .vue-lab-color-picker {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: flex-start;
    font-family: var(--vue-lab-font-family);
    position: relative;

    &__color-preview {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px 15px;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.2s;

      width: 100%;
      height: 28px;
      border: clr($light, gray-300) 1px solid;

      &:hover {
        opacity: 0.8;
        transition: .2s all ease-in-out;
      }
    }

    &__hidden-input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>