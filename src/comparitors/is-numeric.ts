/**
 * comparitor to find numeric values
 * @param value expected to be numeric
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isNumeric = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Number]'
}
