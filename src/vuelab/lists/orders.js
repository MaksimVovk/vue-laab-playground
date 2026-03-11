const categories = ['Electronics', 'Home Appliances', 'Apparel', 'Books', 'Beauty', 'Sporting Goods', 'Automotive', 'Health', 'Toys', 'Grocery']
const statuses = ['Delivered', 'Shipped', 'Pending', 'Cancelled', 'Returned', 'Created', 'Processing']
const payments = ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay', 'Bank Transfer']
const countries = [
  { name: 'Canada', iso_code: 'ca' }, { name: 'Finland', iso_code: 'fi' }, { name: 'France', iso_code: 'fr' },
  { name: 'Georgia', iso_code: 'ge' }, { name: 'Germany', iso_code: 'de' }, { name: 'India', iso_code: 'in' },
  { name: 'Indonesia', iso_code: 'id' }, { name: 'Ireland', iso_code: 'ie' }, { name: 'Mexico', iso_code: 'mx' },
  { name: 'Monaco', iso_code: 'mc' }, { name: 'Morocco', iso_code: 'ma' }, { name: 'Nepal', iso_code: 'np' },
  { name: 'New Zealand', iso_code: 'nz' }, { name: 'Paraguay', iso_code: 'py' }, { name: 'Peru', iso_code: 'pe' },
  { name: 'Poland', iso_code: 'pl' }, { name: 'Portugal', iso_code: 'pt' }, { name: 'Sweden', iso_code: 'se' },
  { name: 'Switzerland', iso_code: 'ch' }, { name: 'Ukraine', iso_code: 'ua' }
]
const firstNames = [
  'Alexander', 'Elena', 'Michael', 'Sarah', 'Dmytro',
  'Linda', 'James', 'Yuki', 'Anna', 'Robert',
  'Ivan', 'Sophia', 'Liam', 'Olena', 'Hans', 'Maria',
  'David', 'Emily', 'Andriy', 'Olga', 'Max', 'Sofia',
  'John', 'Emma', 'Oleh', 'Nina', 'Peter', 'Isabella',
  'Serhii', 'Mia', 'Chris', 'Ava', 'Oleksii', 'Amelia',
]

const lastNames = [
  'Wilson', 'Petrova', 'Chen', 'Jenkins', 'Kovalenko',
  'Thompson', 'Rodriguez', 'Tanaka', 'Smith', 'Brown',
  'Mazepa', 'Muller', 'Connor', 'Voloshko', 'Schmidt',
  'Garcia', 'Davis', 'Shevchenko', 'Saito', 'Johnson', 'Miller',
  'Anderson', 'Taylor', 'Bondarenko', 'Kobayashi', 'Martinez', 'Lee',
]

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)]
const getRandomDate = () => {
  const d = new Date()

  d.setDate(d.getDate() - 7)

  const start = d.getTime()
  const end = new Date().getTime()
  return new Date(start + Math.random() * (end - start)).toISOString()
}

const getFullName = () => `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`

const getData = (limit) => {
  const data = Array.from({ length: limit }, (_, i) => {
    const country = getRandomItem(countries)
    return {
      id: i + 100000,
      name: getFullName() || 'John Doe',
      category: getRandomItem(categories) || 'Electronics',
      status: getRandomItem(statuses) || 'Pending',
      payment: getRandomItem(payments) || 'Credit Card',
      country: country?.name || 'Ukraine',
      country_code: country?.iso_code || 'ua',
      created_at: getRandomDate(),
    }
  })
  return data
}

export default {
  rows: getData,
}
