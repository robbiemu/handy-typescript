/**
 * compose an ordered list of execution
 * @param fns functions to execute
 * @returns a function taht will call each fn in turn
 */
export function compose(...fns: Array<Function>) {
  return function (): void {
    fns.forEach(fn => fn.bind(this)())
  }
}
