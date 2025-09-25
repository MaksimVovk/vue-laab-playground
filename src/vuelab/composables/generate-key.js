export const generateKey = () => {
  let time = new Date().getTime()
  let date2 =
    (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let random = Math.random() * 16
    if (time > 0) {
      random = (time + random) % 16 | 0
      time = Math.floor(time / 16)
    } else {
      random = (date2 + random) % 16 | 0
      date2 = Math.floor(date2 / 16)
    }
    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
}
