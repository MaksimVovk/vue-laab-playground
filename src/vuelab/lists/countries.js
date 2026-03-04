import countries from './countries.json'

const fetchCountries = (event) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(countries.filter(f => f.name.toLowerCase().includes(event?.search?.toLowerCase()) || f.id.toString().includes(event?.value?.toString())))
    }, 1000)
  })
}

export default {
  list: countries,
  fetch: fetchCountries,
}