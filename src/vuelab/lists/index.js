import countries from './countries.js'

const lists = new Map([
  ['countries', countries]
])

export const useLists = (type) => {
  const keys = Array.from(lists.keys())

  if (!keys.includes(type)) {
    throw new Error(`List type "${type}" is not defined. Available types: ${keys.join(', ')}`)
  }

  return lists.get(type)
}
