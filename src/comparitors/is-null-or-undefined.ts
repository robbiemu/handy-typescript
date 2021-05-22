/**
 * comparitor to find not defined values
 * @param value expected to be null or undefined
 */
export function isNullOrUndefined(value: any) {
  return value === null || value === undefined
}
