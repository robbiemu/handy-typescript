/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * stringify possibly circular references
 * @param item value to stringify cleanly
 * @returns json-like string without circular references
 */
export function cleanStringify(item: any): string {
  if (item && typeof item === 'object') {
    item = copyWithoutCircularReferences([item], item)
  }
  return JSON.stringify(item)
}

/**
 * recursive function to build a copy of an object with '###_Circular_###' replacing circular references
 * @param references the list of references so far encountered
 * @param object the object copied
 * @returns copy of an object without circular references
 */
export function copyWithoutCircularReferences(
  references: any[],
  object: any,
): Object {
  const cleanObject = {}
  Object.keys(object).forEach(function (key) {
    const value = object[key]
    if (value && typeof value === 'object') {
      if (references.indexOf(value) < 0) {
        references.push(value)
        cleanObject[key] = copyWithoutCircularReferences(references, value)
        references.pop()
      } else {
        cleanObject[key] = '###_Circular_###'
      }
    } else if (typeof value === 'function') {
      cleanObject[key] = '###_Function:' + value.name + '_###'
    } else {
      cleanObject[key] = value
    }
  })
  return cleanObject
}
