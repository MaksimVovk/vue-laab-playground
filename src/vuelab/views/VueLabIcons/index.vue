<template>
  <Page
    v-if="isLoading"
    :is-controls="!!controls.length"
    class="vue-lab-icons"
  >
    <div class="vue-lab-icons__body">
      <div class="vue-lab-icons__header">
        <div class="vue-lab-icons__header-title">Icons</div>
      </div>
      <div class="vue-lab-icons__body-components custom-scroll--simple">
        <Description
          v-if="description"
          :description="description"
          class="vue-lab-icons__body-description"
        />
        <div class="vue-lab-icons__body-search">
          <Search @input="handleSearch"/>
        </div>
        <div class="vue-lab-icons__body-components-list">
          <EmptyScreen
            v-if="!groups.length"
            size="lg"
          >
            No icons found
          </EmptyScreen>
          <IconGroup
            v-else
            v-for="option in groups"
            :key="option.name"
            :group="option"
            :config="config"
          />
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
      class="vue-lab-icons__controls"
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
  import { ref, computed, reactive, onMounted } from 'vue'
  import { Search, Description, PropsDescription, EventsDescription, EmptyScreen } from '../../components/general'
  import IconGroup from './IconGroup.vue'
  import { Page } from '../../components/layout'
  import { Divider, ControlBlock, CodePreview } from '../../components/layout'
  import { toPascalCase } from '../../composables'


	const props = defineProps({
    options: {
      type: Array,
      default: () => []
    },
    configuration: {
      type: Object,
      default: () => ({})
    }
	})

  let config = ref({})

  const description = ref(null)
  const propsData = ref(null)
  const propsMap = ref(new Map())
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

	// Emits
	const emit = defineEmits([])

	// Variables

  const searchTerm = ref('')

	// Computed

  const filteredOptions = computed(() => {
    if (!searchTerm.value) {
      return props.options
    }
    return props.options.filter(option =>
      option.name?.toLowerCase().includes(searchTerm?.value.toLowerCase())
    )
  })

  const optionMap = computed(() => {
    const names = [...new Set(filteredOptions.value.map(it => it.group ))]
    return new Map(names.map(it => {
      return [it, filteredOptions.value.filter(f => f.group == it)]
    }))
  })

  const groups = computed(() => {
    const names = [...new Set(filteredOptions.value.map(it => it.group ))]
    return names.map(it => ({ name: it, components: optionMap.value.get(it) }))
  })

	// Methods
  const handleSearch = (value) => {
    searchTerm.value = value
  }

   const loadData = async () => {
    isLoading.value = false
    config.value = { vueLabloading: false }
    const source = props.configuration
    const keys = Object.keys(source.propsConfig)

    const ctrls = keys.map(it => ({
      ctrl: source.propsConfig[it].type,
      value: source.propsConfig[it].value,
      title: source.propsConfig[it].ctrlTitle,
      variants: source.propsConfig[it].variants,
      isCtrl: source.propsConfig[it].ctrl,
      field: it
    }))

    controls = [...ctrls.filter(f => f.isCtrl),
      {
        ctrl: 'list',
        value: null,
        title: 'Icons',
        variants: props.options.map(it => ({ name: it.name, id: it.name })),
        isCtrl: true,
        isCodeHiden: true,
        field: 'icon',
      }
    ]

    const newConfig = getBinds(keys, source.propsConfig)
    types.value = keys.reduce((prev, next) => ({
      ...prev,
      [next]: source.propsConfig[next].type
    }), {})

    config.value = { ...config.value, ...newConfig }

    defaultConfig.value = { ...config.value }
    description.value = source?.description
    propsData.value = getPropsData(keys, source.propsConfig)
    propsMap.value = getPropsMap(keys, source.propsConfig)
    eventsData.value = getEventsData(source.events)
    isLoading.value = true
  }

  const getBinds = (keys, vals) => {
    return keys.reduce((prev, next) => ({
      ...prev,
      [next]: getBindValue(next, vals)
    }), { vueLabloading: true })
  }


  const getBindValue = (key, values) => {
    const currentConfig = values[key]
    const currentValue = currentConfig.value

    return currentValue
  }

  const isComponent = computed(() => config.value.vueLabloading)


  const getValues = (val) => {
    if (Array.isArray(val)) {
      return val?.filter(f => f != null && f !== undefined && f !== '').join(' | ')
    }

    if (typeof val === 'boolean') {
      return val
    }

    return null
  }

  const getPropsData = (keys, vals) => {
    return keys.map(it => ({
      name: it,
      type: vals[it].type,
      values: getValues(vals[it].variants),
      optional: vals[it].optional || false,
      default: vals[it].default,
      description: vals[it].description
    }))
  }

  const getPropsMap = (keys, vals) => {
    return new Map(keys.map(it => ([it, vals[it]])))
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
    const controlSettings = new Map(controls.map(it => ([it.field, it.isCodeHiden])))
    const attrs = Object.entries(config.value)
      .filter(f => f[0] != 'vueLabloading')
      .map(([key, value]) => {
        if (controlSettings.get(key)) {
          return null
        }

        const keyOptions = propsMap.value.get(key)
        if ((value === undefined || value === null ) && keyOptions?.optional) {
          return null
        }
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
    const componentName = selectedIcon.value ? toPascalCase(selectedIcon.value.name) : 'Component'
    return `<${componentName} ${attrs} ${events} />`
  })

  const selectedIcon = computed(() => {
    if (!config.value?.icon) {
      return props.options?.[0]
    }
    return props.options?.find(f => f.name === config.value.icon)
  })


  const handleCTRLInput = ({ ctrl, value }) => {
    config.value[ctrl] = value
  }

  const resetConfig = () => {
    config.value = { ...defaultConfig.value }
  }

</script>

<style lang="scss" scoped>
  @use '../../../styles/index.scss' as *;
  .vue-lab-icons {
    font-family: var(--vue-lab-font-family);
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-color: clr($light, white-100);

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 32px;
      margin-bottom: 8px;
      padding: 0 16px;
      box-sizing: border-box;

      &-title {
        font-size: 18px;
        font-weight: 600;
      }
    }

    &__body {
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      padding: 16px 8px 24px 8px;
      box-sizing: border-box;

      &-description {
        margin-bottom: 20px;
      }

      &-search {
        width: 100%;
        margin-bottom: 25px;
      }

      &-components {
        height: 100%;
        overflow: auto;
        padding: 0 16px;
        box-sizing: border-box;

        &-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
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

