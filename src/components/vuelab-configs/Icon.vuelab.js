const propsConfig = {
  palette: {
    type: 'tags',
    variants: ['success', 'error', 'warning', 'info', 'primary', 'accent', 'neutral'],
    value: 'primary',
    ctrlTitle: 'Palette',
    default: 'primary',
    description: 'Defines the icon color palette',
    ctrl: true,
  },
  size: {
    type: 'text',
    value: '16',
    ctrlTitle: 'Size',
    default: '24',
    description: 'Sets the icon size (width and height)',
    ctrl: true,
  },
  color: {
    type: 'color',
    value: null,
    default: null,
    description: 'Sets the icon color',
    ctrl: true,
    optional: true,
  },
  name: {
    type: 'string',
    value: null,
    default: null,
    description: 'Specifies the name of the icon to display',
    ctrl: false,
    optional: true,
  },
}

const events = {
  click: {
    description: 'Icon click event. Emitted when the icon is clicked, allowing you to handle user interactions and trigger actions in response to clicks on the icon.',
  },
}

const description = `The Icon component is a reusable UI element used to display icons.
It supports different color palettes (primary, success, error, warning, info, accent, neutral) to adapt to various use cases.
The component also emits a click event when pressed, making it suitable for form submissions, navigation, and general interactions.`

export default {
  propsConfig,
  events,
  description,
}