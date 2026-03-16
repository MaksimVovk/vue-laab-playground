export default {
  mounted(el) {
    el.remove()
    document.body.appendChild(el)
  },
  unmounted(el) {
    el.remove()
  },
}
