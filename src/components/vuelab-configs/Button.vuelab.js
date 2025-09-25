export const propsConfig = {
  palette: {
    type: 'palette',
    value: ['success', 'primary', 'warning', 'error', 'info'],
    default: 'primary',
    description: 'Defines the button color scheme',
    ctrl: true,
  },
  title: {
    type: 'text',
    value: 'Test button',
    description: 'Sets the button label text',
  },
  disabled: {
    type: 'boolean',
    value: false,
    default: false,
    description: 'Disables the button if set to true',
    ctrl: true,
  },
  size: {
    type: 'size',
    value: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Controls the button size',
    ctrl: true,
  },
}

export const events = {
  click: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Emitted when the button is clicked. This event can be used to trigger actions or functions in response to user interactions.',
  },
  dbclick: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Emitted when the button is double-clicked. This event can be used to trigger actions or functions in response to user interactions.',
  },
}

export const description = `The Button component is a reusable UI element used to trigger actions or events.
It supports different sizes (sm, md, lg) and color palettes (primary, success, error, warning, info) to adapt to various use cases.
The component also emits a click event when pressed, making it suitable for form submissions, navigation, and general interactions.`
