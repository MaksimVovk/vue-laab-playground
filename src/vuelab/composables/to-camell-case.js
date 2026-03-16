const hasSpace = /\s/
const hasSeparator = /(_|-|\.|:)/
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

const separatorSplitter = /[\W_]+(.|$)/g
const camelSplitter = /(.)([A-Z]+)/g

const unseparate = (str) => {
  return str.replace(separatorSplitter, function (_, next) {
    return next ? ' ' + next : ''
  })
}

const uncamelize = (str) => {
  return str.replace(camelSplitter, function (_, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

const toNoCase = (str) => {
  if (hasSpace.test(str)) return str.toLowerCase()
  if (hasSeparator.test(str)) return (unseparate(str) || str).toLowerCase()
  if (hasCamel.test(str)) return uncamelize(str).toLowerCase()
  return str.toLowerCase()
}

const toSpaceCase = (str) => {
  return toNoCase(str)
    .replace(/[\W_]+(.|$)/g, (_, match) => (match ? ' ' + match : ''))
    .trim()
}

export const toCamellCase = (str) => {
  return toSpaceCase(str).replace(/ (.)/g, (_, match) => match.toUpperCase())
}

export const toPascalCase = (str) => {
  const resultStrl = toSpaceCase(str).replace(/ (.)/g, (_, match) => match.toUpperCase())
  return resultStrl.charAt(0).toUpperCase() + resultStrl.slice(1)
}
