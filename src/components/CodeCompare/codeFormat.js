export const FORMAT_ERROR = Symbol('format_error')
export default {
  json(str) {
    if (str === '') {
      return str
    } else {
      try {
        return JSON.stringify(JSON.parse(str), null, 4)
      } catch (err) {
        return FORMAT_ERROR
      }
    }
  }
}