<template>
  <Page
    v-if="isLoading"
    :is-controls="!!controls.length"
    class="vue-lab"
  >
    <div class="vue-lab__component">
      <div class="vue-lab__component__header">
        <div class="vue-lab__component__header-title">{{ name }}</div>
      </div>
      <div class="vue-lab__component__content custom-scroll--simple">
        <Description
          v-if="description"
          :description="description"
        />
        <Divider v-if="isComponent" />
        <div
          v-if="isComponent"
          class="vue-lab__component__body"
        >
          <component :is="comp" v-bind="config" />
        </div>
        <Divider v-if="exampleCode" />
        <CodePreview
          v-if="isComponent && exampleCode"
          :code="exampleCode"
          :preview-code="exampleCode"
        />
        <Divider v-if="propsData" />
        <PropsDescription
          v-if="isComponent && propsData"
          :data="propsData"
        />
        <Divider v-if="eventsData" />
        <EventsDescription
          v-if="isComponent && eventsData"
          :data="eventsData"
        />
      </div>
    </div>
    <div
      v-if="controls.length"
      class="vue-lab__controls"
    >
      <ControlBlock
        :options="controls"
        :values="config"
        @input="handleCTRLInput"
        @reset="resetConfig"
      />
    </div>
  </Page>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { loadConfig } from '../../utils/load-config.js'
import { ControlBlock, Page, CodePreview, Divider } from '../../components/layout/index.js'
import { Button, Description, PropsDescription, EventsDescription } from '../../components/general/index.js'

const props = defineProps({
  name: String,
  components: {
    type: Object,
    default: () => ({})
  },
  configuration: {
    type: Object,
    default: () => ({})
  }
})

const comp = computed(() => props.components[props.name])
let config = ref({})

const description = ref(null)
const propsData = ref(null)
const eventsData = ref(null)
const isLoading = ref(true)

const defaultConfig = ref({
  vueLabloading: true
})
const types = ref({})

let controls = reactive([])

onMounted(async () => {
  await loadData()
})

const loadData = async () => {
  isLoading.value = false
  config.value = { vueLabloading: false }
  const source = props.configuration?.[props.name?.toLocaleLowerCase()]
  // const source = await loadConfig(props.name, '/src/components/vuelab-configs')
  const keys = Object.keys(source.propsConfig)

  const ctrls = keys.map(it => ({
    ctrl: source.propsConfig[it].type,
    value: source.propsConfig[it].value,
    title: source.propsConfig[it].ctrlTitle,
    variants: source.propsConfig[it].variants,
    isCtrl: source.propsConfig[it].ctrl,
    field: it
  }))
  controls = ctrls.filter(f => f.isCtrl)

  const newConfig = getBinds(keys, source.propsConfig)
  types.value = keys.reduce((prev, next) => ({
    ...prev,
    [next]: source.propsConfig[next].type
  }), {})

  config.value = { ...config.value, ...newConfig }
  defaultConfig.value = { ...config.value }
  description.value = source?.description
  propsData.value = getPropsData(keys, source.propsConfig)
  eventsData.value = getEventsData(source.events)
  isLoading.value = true
}

const getBinds = (keys, vals) => {
  return keys.reduce((prev, next) => ({
    ...prev,
    [next]: getBindValue(next, vals)
  }), { vueLabloading: true })
}

const getPropsData = (keys, vals) => {
  return keys.map(it => ({
    name: it,
    type: vals[it].type,
    values: getValues(vals[it].variants),
    default: vals[it].default,
    description: vals[it].description
  }))
}

const getEventsData = (rows) => {
  if (!rows) {
    return null
  }
  return Object.keys(rows).map(it => ({
    name: it,
    description: rows[it].description
  }))
}

const exampleCode = computed(() => {
  const events = eventsData.value ? eventsData.value.map(it => `@${it.name}="${it.name}Handler"`).join(' ') : ''
  const attrs = Object.entries(config.value)
    .filter(f => f[0] != 'vueLabloading')
    .map(([key, value]) => {
      if (types.value[key] === 'variable') {
        const keyValue = `${key}Val`
        return `:${key}="${keyValue}"`
      } else {
        if (typeof value === 'boolean') {
          return `:${key}="${Boolean(value)}"`
        } else if (typeof value === 'object' || typeof value == 'number') {
          return `:${key}="${value}"`
        }
        return `${key}="${value}"`
      }
    })
    .sort()
    .filter(Boolean)
    .join(' ')

  return `<${props.name} ${attrs} ${events} />`
})

const getValues = (val) => {
  if (Array.isArray(val)) {
    return val.join(' | ')
  }

  if (typeof val === 'boolean') {
    return val
  }

  return null
}

const getBindValue = (key, values) => {
  const currentConfig = values[key]
  const currentValue = currentConfig.value

  // if (typeof currentValue == 'string' || typeof currentValue == 'number' || typeof currentValue == 'boolean') {
  //   return currentValue
  // }

  return currentValue
}

const handleCTRLInput = ({ ctrl, value }) => {
  config.value[ctrl] = value
}

const resetConfig = () => {
  config.value = { ...defaultConfig.value }
}

const isComponent = computed(() => comp.value && config.value.vueLabloading)

watch(() => props.name, async () => {
  await loadData()
})
</script>

<style lang="scss" scoped>
@use '../../../styles/index.scss' as *;
  .vue-lab {
    height: 100%;
    width: 100%;

    &__component {
      height: 100%;
      background-color: clr($light, bg-secondary);
      padding: 16px 8px 24px 8px;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 32px;
        margin-bottom: 8px;
        padding: 0 16px;
        box-sizing: border-box;
        font-family: var(--font-family);

        &-title {
          font-size: 18px;
          font-weight: 600;
          font-family: var(--font-family);
        }
      }

      &__content {
        height: 100%;
        overflow: auto;
        padding: 0 16px;
        box-sizing: border-box;
      }

      &__body {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        background-color: clr($light, bg-tertiary);
        border-radius: 12px;
        border: 1px solid clr($light, border-primary);
      }
    }

    &__controls {
      height: 100%;
      overflow: hidden;
      background-color: clr($light, bg-secondary);
      padding: 16px 16px 24px 16px;
      box-sizing: border-box;
      border-left: 1px solid clr($light, gray-300);
    }
  }
</style>