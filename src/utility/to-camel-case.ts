/**
 * convert a string of whole words to camel case
 * @param str whole words to camel case
 * @returns camel cased string
 */
export function toCamelCase(str = ''): string {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase()
    })
    .replace(/[^A-Za-z0-9_-]/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase()
    })
}
