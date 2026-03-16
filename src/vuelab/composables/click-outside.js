export default {
  beforeMount(el, { value }) {
    if (!value) {
      return
    }
    el._handler = (e) => {
      if (!el.contains(e.target)) {
        setTimeout(() => value(e), 1)
      }
    }
    document.addEventListener('click', el._handler, { capture: true })
  },

  beforeUnmount(el) {
    document.removeEventListener('click', el._handler, { capture: true })
  },
}
