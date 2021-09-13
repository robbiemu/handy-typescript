/**
 * @function hasProperty
 * @description Checks if the current context has a property
 * @param prop
 * @returns boolean
 */
export function hasProperty(prop: any | string | number | symbol): Function {
  return function (o) {
    return prop in o
  }
}
