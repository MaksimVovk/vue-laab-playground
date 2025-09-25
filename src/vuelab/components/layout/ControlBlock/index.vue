<template>
  <div class="control-block">
    <div class="control-block__header">
      <div class="control-block__header-title">Controls</div>
      <div class="control-block__header-ctrl">
        <Button @click="resetSettings">Reset</Button>
      </div>
    </div>
    <div class="control-block__body custom-scroll">
      <component
        v-for="o in options"
        :key="generateKey(o)"
        :is="getComponent(o.ctrl)"
        :options="o.value"
        :value="getValue(o.field)"
        @input="handleInput({ ctrl: o.field, value: $event })"
      />
    </div>
  </div>
</template>

<script setup>
  import { generateKey } from '../../../composables';
  import { Palette, Size, BooleanSwitcher } from '../../controls';
  import { Button } from '../../general'

  const props = defineProps({
    options: { type: Array, default: () => [] },
    values: { type: Object, default: () => ({}) },
  })

  const emit = defineEmits(['input', 'reset'])

  const getComponent = (comp) => {
    switch (comp) {
      case 'palette':
        return Palette
      case 'size':
        return Size
      case 'boolean':
        return BooleanSwitcher
      default:
        break;
    }
  }
  const getValue = (comp) => {
    const val = props.values?.[comp]
    return val
  }

  const handleInput = ({ ctrl, value }) => emit('input', { ctrl, value })

  const resetSettings = () => emit('reset')
</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;

  .control-block {
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: 40px 1fr;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;

      &-title {
        font-size: 16px;
        font-weight: 600;
      }
    }

    &__body {
      overflow: auto;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
      background-color: clr($light, bg-tertiary);
      border-radius: 12px;
      border: 1px solid clr($light, border-primary);
    }
  }
</style>