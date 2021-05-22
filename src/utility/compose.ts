/**
 * compose an ordered list of execution
 * @param fns functions to execute
 * @returns a function taht will call each fn in turn
 */
export function compose(...fns) {
  return function () {
    fns.forEach(fn => fn.bind(this)());
  };
}