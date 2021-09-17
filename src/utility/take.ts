export function* take<T>(
  num: number,
  iter: IterableIterator<T>,
): IterableIterator<T> {
  let item = iter.next()
  for (let index = 0; index < num && !item.done; index++) {
    yield item.value
    item = iter.next()
  }
}
