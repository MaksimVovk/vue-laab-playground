<template>
  <div class="vue-lab__code-preview">
    <div class="vue-lab__code-preview__title">Usage</div>
    <div class="vue-lab__code-preview__content">
      <CopyIcon
        class="vue-lab__code-preview__content__copy-ctrl"
        @click="copyToClipboard"
      />
      <hl-vue
        :code="formattedCode"
        :autodetect="false"
        language="xml"
        class="vue-lab__code-preview__pre"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { html as beautifyHtml } from 'js-beautify'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/monokai-sublime.css'

import { CopyIcon } from '../../Icons'

const hlVue = hljsVuePlugin.component;


const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const formattedCode = computed(() => {
  return beautifyHtml(props.code, {
    indent_size: 2,
    indent_inner_html: true,
    wrap_attributes: 'force-expand-multiline',
    wrap_attributes_indent_size: 2,
    inline_custom_elements: true
  })
})

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(formattedCode.value)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
.vue-lab__code-preview {
  &__pre {
    font-family: monospace;
    font-size: 14px;
    line-height: 1.5;
  }

  &__content {
    position: relative;
    border-radius: 12px;
    overflow: hidden;

    &__copy-ctrl {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      fill: clr($light, gray-50);
      transition: fill 0.2s;

      &:hover {
        fill: clr($light, gray-400);
      }

      &:active {
        fill: clr($light, gray-600);
      }
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
}
</style>
