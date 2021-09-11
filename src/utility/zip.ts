/** zip
 * usage:
 * const zipped = zip(['a', 'b', 'c'], ['d', 'e', 'f', 'g']);
 * for (const x of zipped) {
 *     console.log(x);
 * }
 * // Output:
 * // ['a', 'd']
 * // ['b', 'e']
 * // ['c', 'f']
 *
 * TODO -- WHAT return type is this?
 **/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function zip(...iterables: any[]) {
  const iterators = iterables.map(i => i[Symbol.iterator]())
  let done = false

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (!done) {
        const items = iterators.map(i => i.next())
        done = items.some(item => item.done)
        if (!done) {
          return { value: items.map(i => i.value) }
        }
        // Done for the first time: close all iterators
        for (const iterator of iterators) {
          if (typeof iterator.return === 'function') {
            iterator.return()
          }
        }
      }
      // We are done
      return { done: true }
    },
  }
}
