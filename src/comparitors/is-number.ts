/**
 * comparitor to find number values
 * @param value expected to be number
 */
export const isNumber = (value: any) => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' && !isNaN(value)
  )
}
