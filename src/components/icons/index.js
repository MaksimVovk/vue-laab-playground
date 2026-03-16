const source = import.meta.glob(['./*.vue', './*/*.vue'], { eager: true })

export const iconComponents = Object.entries(source).reduce((prev, next) => {
  const excludeList = ['index.vue', 'BaseIcon.vue', '.', '..']
  const filter = (it) => !excludeList.includes(it)
  const pathParts = next[0].split('/').filter(filter)

  if (pathParts.length === 0) return prev

  const group = pathParts.length > 1 ? pathParts[0] : null
  const hasSubgroup = pathParts.length > 2
  const subgroup = hasSubgroup ? pathParts[1] : null
  const name = pathParts[pathParts.length - 1].replace('.vue', '')
  return [...prev, { name, subgroup, group, component: next[1].default }]
}, [])
