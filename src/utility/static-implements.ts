/**
 * simple static implementation type checking for typescript
 */
export function staticImplements<T>(): Function {
  return <U extends T>(ctor: U) => ctor
}
