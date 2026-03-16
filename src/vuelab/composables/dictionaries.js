export const countryList = [
  { id: 'at', name: 'Austria', isoCode: 'at', region: 'Central Europe' },
  { id: 'be', name: 'Belgium', isoCode: 'be', region: 'Western Europe' },
  { id: 'bg', name: 'Bulgaria', isoCode: 'bg', region: 'Eastern Europe' },
  { id: 'hr', name: 'Croatia', isoCode: 'hr', region: 'Southern Europe' },
  { id: 'cy', name: 'Cyprus', isoCode: 'cy', region: 'Southern Europe' },
  { id: 'cz', name: 'Czech Republic', isoCode: 'cz', region: 'Central Europe' },
  { id: 'dk', name: 'Denmark', isoCode: 'dk', region: 'Northern Europe' },
  { id: 'ee', name: 'Estonia', isoCode: 'ee', region: 'Northern Europe' },
  { id: 'fi', name: 'Finland', isoCode: 'fi', region: 'Northern Europe' },
  { id: 'fr', name: 'France', isoCode: 'fr', region: 'Western Europe' },
  { id: 'de', name: 'Germany', isoCode: 'de', region: 'Central Europe' },
  { id: 'gr', name: 'Greece', isoCode: 'gr', region: 'Southern Europe' },
  { id: 'hu', name: 'Hungary', isoCode: 'hu', region: 'Central Europe' },
  { id: 'ie', name: 'Ireland', isoCode: 'ie', region: 'Northern Europe' },
  { id: 'it', name: 'Italy', isoCode: 'it', region: 'Southern Europe' },
  { id: 'lv', name: 'Latvia', isoCode: 'lv', region: 'Northern Europe' },
  { id: 'lt', name: 'Lithuania', isoCode: 'lt', region: 'Northern Europe' },
  { id: 'lu', name: 'Luxembourg', isoCode: 'lu', region: 'Western Europe' },
  { id: 'mt', name: 'Malta', isoCode: 'mt', region: 'Southern Europe' },
  { id: 'nl', name: 'Netherlands', isoCode: 'nl', region: 'Western Europe' },
  { id: 'pl', name: 'Poland', isoCode: 'pl', region: 'Central Europe' },
  { id: 'pt', name: 'Portugal', isoCode: 'pt', region: 'Southern Europe' },
  { id: 'ro', name: 'Romania', isoCode: 'ro', region: 'Eastern Europe' },
  { id: 'sk', name: 'Slovakia', isoCode: 'sk', region: 'Central Europe' },
  { id: 'si', name: 'Slovenia', isoCode: 'si', region: 'Southern Europe' },
  { id: 'es', name: 'Spain', isoCode: 'es', region: 'Southern Europe' },
  { id: 'se', name: 'Sweden', isoCode: 'se', region: 'Northern Europe' },
  { id: 'gb', name: 'United Kingdom', isoCode: 'gb', region: 'Northern Europe' },
  { id: 'us', name: 'United States', isoCode: 'us', region: 'Northern America' },
  { id: 'ua', name: 'Ukraine', isoCode: 'ua', region: 'Eastern Europe' },
]

export const asyncCountries = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(countryList)
    }, 1000)
  })
}

export const countries = () => {
  return countryList
}
