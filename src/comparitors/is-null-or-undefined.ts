/**
 * comparitor to find not defined values
 * @param value expected to be null or undefined
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined
}
