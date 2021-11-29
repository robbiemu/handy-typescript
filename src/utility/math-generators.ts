import type { ArrowFunction } from '@src/types/arrow-function'
import { isNumber } from '@src/comparitors/is-number'

function* combinations<T>(
  set: Array<T>,
  k: number,
): Generator<Array<T>, Array<T>, undefined> {
  if (k > set.length || k <= 0) return
  if (k === set.length) {
    yield set
    return
  }
  if (k === 1) {
    yield* set.map(x => [x])
    return
  }

  for (let i = 0, lim = set.length; i < lim; i++) {
    for (const next of combinations(set.slice(i + 1), k - 1)) {
      yield [set[i]].concat(next)
    }
  }
}

function* range(
  first: number,
  last?: number,
  byFn: ArrowFunction<any, number> = (_, i) => i + 1,
): Generator<number> {
  const enumerative = isNumber(last)
  const count = enumerative ? Infinity : first
  let i = enumerative ? first : 0
  let current = enumerative ? first : 0
  while (i < count) {
    if (enumerative && current >= last) return
    yield current
    current = byFn(current, i)
    i += 1
  }
}

export const generators = { combinations, range }
