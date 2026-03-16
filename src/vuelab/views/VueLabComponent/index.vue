<template>
  <!-- eslint-disable vue/v-slot-style -->
  <Page v-if="isLoading" :is-controls="!!controls.length" class="vue-lab">
    <div class="vue-lab__component">
      <div class="vue-lab__component__header">
        <div class="vue-lab__component__header-title">{{ name }}</div>
      </div>
      <div class="vue-lab__component__content custom-scroll--simple">
        <Description v-if="description" :description="description" />
        <Divider v-if="isComponent" />
        <div v-if="isComponent" class="vue-lab__component__body">
          <component :is="comp" v-bind="config" v-on="eventHandlers">
            <template
              v-for="(slot, index) in namedSlotsData"
              :key="`named-component-slot-${slot.name}-${index}`"
              v-slot:[slot.name]
            >
              <ComponentSlot v-if="namedSlotsData?.length" :slot-config="slot" />
            </template>
            <template
              v-for="(slot, index) in unnamedSlotsData"
              :key="`unnamed-component-slot-${slot.name}-${index}`"
            >
              <ComponentSlot v-if="unnamedSlotsData?.length" :slot-config="slot" />
            </template>
          </component>
        </div>
        <Divider v-if="exampleCode" />
        <CodePreview
          v-if="isComponent && exampleCode"
          :code="exampleCode"
          :preview-code="exampleCode"
        />
        <Divider v-if="propsData" />
        <PropsDescription v-if="isComponent && propsData" :data="propsData" />
        <Divider v-if="eventsData" />
        <EventsDescription v-if="isComponent && eventsData" :data="eventsData" />
      </div>
    </div>
    <div v-if="controls.length" class="vue-lab__controls">
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
import { computed, onMounted, reactive, ref, watch, markRaw } from 'vue'
// import { loadConfig } from '../../utils/load-config.js'
import { ControlBlock, Page, Divider } from '../../components/layout/index.js'
import CodePreview from '../../components/layout/CodePreview/index.vue'
import {
  Description,
  PropsDescription,
  EventsDescription,
  ComponentSlot,
} from '../../components/general/index.js'

const props = defineProps({
  name: { type: String, default: 'Component' },
  components: {
    type: Object,
    default: () => ({}),
  },
  configuration: {
    type: Object,
    default: () => ({}),
  },
})

const comp = computed(() => props.components[props.name])
let config = ref({})

const description = ref(null)
const propsData = ref(null)
const propsMap = ref(new Map())
const eventsData = ref(null)
const slotsData = ref(null)
const namedSlotsData = ref(null)
const unnamedSlotsData = ref(null)
const isLoading = ref(true)

const defaultConfig = ref({
  vueLabloading: true,
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

  const ctrls = keys.map((it) => ({
    ctrl: source.propsConfig[it].type,
    value: source.propsConfig[it].value,
    title: source.propsConfig[it].ctrlTitle,
    variants: source.propsConfig[it].variants,
    isCtrl: source.propsConfig[it].ctrl,
    field: it,
  }))
  controls = ctrls.filter((f) => f.isCtrl)

  const newConfig = getBinds(keys, source.propsConfig)
  types.value = keys.reduce(
    (prev, next) => ({
      ...prev,
      [next]: source.propsConfig[next].type,
    }),
    {},
  )

  config.value = { ...config.value, ...newConfig }
  defaultConfig.value = { ...config.value }
  description.value = source?.description
  propsData.value = getPropsData(keys, source.propsConfig)
  propsMap.value = getPropsMap(keys, source.propsConfig)
  eventsData.value = getEventsData(source.events)
  slotsData.value = source.slots || []
  namedSlotsData.value = getSlotsData(source.slots, true)
  unnamedSlotsData.value = getSlotsData(source.slots, false)
  isLoading.value = true
}

const getBinds = (keys, vals) => {
  return keys.reduce(
    (prev, next) => ({
      ...prev,
      [next]: getBindValue(next, vals),
    }),
    { vueLabloading: true },
  )
}

const getPropsData = (keys, vals) => {
  return keys.map((it) => ({
    name: it,
    type: vals[it].type,
    values: getValues(vals[it].variants),
    optional: vals[it].optional || false,
    default: vals[it].default,
    description: vals[it].description,
  }))
}

const getPropsMap = (keys, vals) => {
  return new Map(keys.map((it) => [it, vals[it]]))
}

const getEventsData = (rows) => {
  if (!rows) {
    return null
  }
  return Object.keys(rows).map((it) => ({
    name: it,
    func:
      rows[it]?.func ||
      (() => {
        alert(`Event ${it} triggered!`)
      }),
    isExampleCode: !!rows[it]?.isExampleCode,
    description: rows[it]?.description,
  }))
}

const getSlotsData = (rows, isNamed) => {
  if (!rows) {
    return null
  }
  return rows
    .filter((f) => (isNamed ? f.name : !f.name))
    .map((it) => ({
      ...it,
      value: it.type === 'component' ? markRaw(it.value) : it.value,
    }))
}

const isSlots = computed(() => !!slotsData.value?.length)

const exampleCode = computed(() => {
  const variables = []
  const events = eventsData.value
    ? eventsData.value.map((it) => `@${it.name}="${it.name}Handler"`).join(' ')
    : ''
  if (events?.length) {
    eventsData.value.forEach((it) => {
      if (it.isExampleCode) {
        variables.push(`const ${it.name}Handler = ${it.func.toString()}`)
      }
    })
  }
  const attrs = Object.entries(config.value)
    .filter((f) => f[0] != 'vueLabloading')
    .map(([key, value]) => {
      const keyOptions = propsMap.value.get(key)
      const listTypes = new Map([
        ['array', true],
        ['object', true],
        ['dictionary', true],
        ['variable', true],
        ['list', true],
      ])
      if ((value === undefined || value === null) && keyOptions?.optional) {
        return null
      }
      if (listTypes.has(types.value[key])) {
        const keyValue = `${key}Val`
        const val = Array.isArray(value)
          ? JSON.stringify([...value.slice(0, 1), '...'])
          : typeof value === 'function'
            ? value.toString()
            : JSON.stringify(value)
        if (keyOptions.isExampleCode) {
          variables.push(`const ${keyValue} = ${val}`)
        }
        return `:${key}="${keyValue}"`
      } else {
        if (typeof value === 'boolean') {
          return `:${key}="${Boolean(value)}"`
        } else if (typeof value === 'object' || typeof value == 'number') {
          const val = value?.__name || value?.__name || value
          return `:${key}="${val}"`
        }
        return `${key}="${value}"`
      }
    })
    .sort()
    .filter(Boolean)
    .join(' ')

  const vars = variables.length ? `<script setup>${variables.join('\n')}<\/script>\n\n` : '' //eslint-disable-line

  if (isSlots.value) {
    const slots = slotsData.value
      .map((slot) => {
        if (slot.type === 'text' || slot.type === 'html') {
          return slot.value
        } else if (slot.type === 'component') {
          const vSlot = slot.name ? `v-slot:${slot.name}` : ''
          let vNodes = typeof slot.value === 'function' ? slot.value() : null

          if (vNodes) {
            vNodes =
              typeof vNodes == 'function' ? [vNodes()] : Array.isArray(vNodes) ? vNodes : [vNodes]

            const renderedNodes = vNodes
              ?.map((vnode) => {
                const name = vnode.type.__name || vnode.type.name || vnode.type
                const vNodeProps = getSlotAttributes(vnode.props) || ''
                const children = vnode?.children

                if (children) {
                  if (typeof children === 'string') {
                    return `<${name} ${vNodeProps}>${children}</${name}>`
                  } else if (typeof children === 'object') {
                    const childNodes = children.default ? [children.default()] : []

                    const renderedChildNodes = childNodes
                      .map((child) => {
                        const childSlotComponentAttrs = getSlotAttributes(child?.props) || ''
                        const childName = child.type.__name || child.type.name || child.type
                        if (typeof child.children === 'string') {
                          return `<${childName} ${childSlotComponentAttrs}>${child.children}</${childName}>`
                        } else {
                          return `<${childName} ${childSlotComponentAttrs}/>`
                        }
                      })
                      .join('\n    ')
                    return `<${name} ${vNodeProps}>\n    ${renderedChildNodes}\n  </${name}>`
                  }
                }

                return `<${name} ${vNodeProps}/>`
              })
              .join('\n    ')
            return `<template ${vSlot}>\n    ${renderedNodes}\n  </template>`
          }
          const slotComponentName = slot?.value?.__name || slot?.value?.name
          if (!slotComponentName) return null
          const slotComponentAttrs = getSlotAttributes(slot.props) || ''
          return `<template ${vSlot}><${slotComponentName} ${slotComponentAttrs}/></template>`
        }
      })
      .join('\n')
    return `
      ${vars}
      <${props.name} ${attrs} ${events}>
        ${slots}
      </${props.name}>
    `
  }
  return `${vars}<${props.name} ${attrs} ${events} />`
})

const eventHandlers = computed(() => {
  if (!eventsData.value?.length) return {}

  return eventsData.value.reduce(
    (prev, next) => ({
      ...prev,
      [next.name]: next.func,
    }),
    {},
  )
})

const getSlotAttributes = (slotAttrs) => {
  if (!slotAttrs) return ''

  if (Array.isArray(slotAttrs)) {
    return slotAttrs
      .map((attr) => {
        if (attr.type === 'number' || attr.type === 'boolean' || attr.type === 'variable') {
          return `:${attr.name}="${attr.value}"`
        } else if (attr.type === 'text') {
          return `${attr.name}="${attr.value}"`
        } else {
          return null
        }
      })
      .filter(Boolean)
      .sort()
      .join(' ')
  } else {
    return Object.entries(slotAttrs)
      .map(([key, value]) => {
        if (typeof value === 'number' || typeof value === 'boolean') {
          return `:${key}="${value}"`
        } else if (typeof value === 'string') {
          return `${key}="${value}"`
        } else if (typeof value === 'object') {
          const varName = Array.isArray(value) ? 'options' : 'dictionary'
          return `:${key}="${varName}"`
        } else {
          return null
        }
      })
      .filter(Boolean)
      .sort()
      .join(' ')
  }
}

const getValues = (val) => {
  if (Array.isArray(val)) {
    return val?.filter((f) => f != null && f !== undefined && f !== '').join(' | ')
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

watch(
  () => props.name,
  async () => {
    await loadData()
  },
)
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
      font-family: var(--vue-lab-font-family);

      &-title {
        font-size: 18px;
        font-weight: 600;
        font-family: var(--vue-lab-font-family);
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
