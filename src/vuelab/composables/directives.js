import clickOutside from './click-outside'
import hoist from './hoist'

export default {
  install(Vue) {
    Vue.directive('click-outside', clickOutside)
    Vue.directive('hoisted', hoist)
  }
}