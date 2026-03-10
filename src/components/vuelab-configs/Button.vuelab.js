import EditIcon from '../icons/FormIcon/EditIcon.vue'
import { iconComponents } from '../icons/index'
import { useLists } from '../../vuelab/lists'

const list = useLists('countries')

export const group = 'Buttons'

export const propsConfig = {
  palette: {
    type: 'tags',
    variants: ['success', 'primary', 'warning', 'error', 'info'],
    value: 'primary',
    ctrlTitle: 'Palette',
    default: 'primary',
    description: 'Defines the button color scheme',
    ctrl: true,
  },
  animation: {
    type: 'tags',
    ctrlTitle: 'Animation',
    variants: ['clicked', 'flash', null],
    value: 'clicked',
    default: 'null',
    description: 'Defines the button animation on click or hover',
    ctrl: true,
    optional: true,
  },
  icon: {
    type: 'list',
    ctrlTitle: 'Icon',
    value: 'ArrowBlockLeftIcon',
    variants: iconComponents.map(it => ({ id: it.name, name: it.name })),
    default: null,
    description: 'Defines the button icon',
    ctrl: true,
    optional: true,
  },
  disabled: {
    type: 'boolean',
    variants: [false, true],
    value: false,
    ctrlTitle: 'Disabled',
    default: false,
    description: 'Disables the button if set to true',
    ctrl: true,
  },
  size: {
    type: 'size',
    variants: ['sm', 'md', 'lg'],
    value: 'md',
    default: 'md',
    description: 'Controls the button size',
    ctrl: true,
  },
  countries: {
    type: 'list',
    ctrlTitle: 'Countries',
    value: null,
    variants: list.list,
    default: null,
    description: 'Select a country from the list',
    ctrl: true,
  }
}

export const slots = [
  {
    type: 'text',
    value: 'Test button',
    name: null,
  },
  {
    type: 'component',
    value: EditIcon,
    name: 'icon',
    props: {
      size: 16,
      palette: 'success',
    },
    // props: [
    //   { name: 'size', value: 16, type: 'variable' },
    //   { name: 'palette', value: 'success', type: 'text' },
    //   { name: 'disabled', value: true, type: 'boolean' },
    // ],
  },
  {
    type: 'html',
    name: null,
    value: '<span style="color: red">Raw HTML Slot</span>',
  }
]

// import { h } from 'vue'
// import BarChart1Icon from '../Icons/Charts/BarChart1Icon.vue'
// import Button from '../Buttons/Button/index.vue'
// const renderStructure = () => {
//   return h(
//     Button,
//     {},
//     {
//       default: () => h(BarChart1Icon, {
//         size: 16,
//         palette: 'muted',
//         focused: true
//       }),
//     }
//   )
// }

// export const slots = [
//   {
//     type: 'component',
//     value: renderStructure,
// ]

export const events = {
  click: {
    func: () => alert('Button clicked!'),
    description: 'Emitted when the button is clicked. This event can be used to trigger actions or functions in response to user interactions.',
  },
  contextmenu: {
    func: (e) => {
      e.preventDefault()
      alert('Button open context menu!')
    },
    description: 'Emitted when the button is right-clicked. This event can be used to trigger actions or functions in response to user interactions.',
  },
}

export const description = `The Button component is a reusable UI element used to trigger actions or events.
It supports different sizes (sm, md, lg) and color palettes (primary, success, error, warning, info) to adapt to various use cases.
The component also emits a click event when pressed, making it suitable for form submissions, navigation, and general interactions.`
