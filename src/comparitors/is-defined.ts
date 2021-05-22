/**
 * comparitor to find defined values
 * @param value expected to be not null or undefined
 */
export function isDefined(value: any) {
  return !(value === null || value === undefined)
}
