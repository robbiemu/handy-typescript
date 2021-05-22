/**
 * simple static implementation type checking for typescript
 */
export function staticImplements<T>() {
  return <U extends T>(ctor: U) => ctor
}
