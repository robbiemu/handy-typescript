/**
 * comparitor to find number values
 * @param value expected to be number
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isNumber = (value: any) => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' && !isNaN(value)
  )
}
