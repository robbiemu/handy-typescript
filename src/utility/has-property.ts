export function hasProperty(prop: any | string | number | symbol): boolean {
  return prop in this
}
