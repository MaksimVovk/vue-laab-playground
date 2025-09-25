export async function loadConfig(name, path) {
  try {
    const config = await import(
      /* @vite-ignore */ `${path}/${name}.vuelab.js`
    )
    return config.default || config
  } catch (e) {
    console.log(e)
    console.warn(`⚠️ Config not found ${name}`)
    return {}
  }
}
