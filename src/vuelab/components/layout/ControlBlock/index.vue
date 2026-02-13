<template>
  <div class="vue-lab__control-block">
    <div class="vue-lab__control-block__header">
      <div class="vue-lab__control-block__header-title">Controls</div>
      <div class="vue-lab__control-block__header-ctrl">
        <Button @click="resetSettings">Reset</Button>
      </div>
    </div>
    <div class="vue-lab__control-block__body custom-scroll">
      <component
        v-for="(o, i) in options"
        :key="`ctrl-${o.ctrl}-${i}`"
        :is="getComponent(o.ctrl)"
        :options="o.variants"
        :title="o.title"
        :value="getValue(o.field)"
        @input="handleInput({ ctrl: o.field, value: $event })"
      />
    </div>
  </div>
</template>

<script setup>
  import { Tags, Size, BooleanSwitcher, Text } from '../../controls';
  import { Button } from '../../general'

  const props = defineProps({
    options: { type: Array, default: () => [] },
    values: { type: Object, default: () => ({}) },
  })

  const emit = defineEmits(['input', 'reset'])

  const getComponent = (comp) => {
    switch (comp) {
      case 'tags':
        return Tags
      case 'size':
        return Size
      case 'boolean':
        return BooleanSwitcher
      case 'text':
        return Text
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

  .vue-lab__control-block {
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: 40px 1fr;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      font-family: var(--font-family);

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