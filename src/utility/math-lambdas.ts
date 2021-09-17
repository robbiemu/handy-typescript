export const count = <T>(p: Map<T, number>, c: T): Map<T, number> => {
  const n = p.get(c) ?? 0
  p.set(c, n + 1)
  return p
}

export const add = (a: number, b: number): number => a + b
export const subtract = (a: number, b: number): number => a - b
export const multiply = (a: number, b: number): number => a * b
export const divide = (a: number, b: number): number => a / b
export const modulo = (a: number, b: number): number => a % b
export const power = (a: number, b: number): number => Math.pow(a, b)

export function sum(o: number[]): number {
  return o.reduce(add)
}

export function mean(o: number[]): number {
  return o.reduce(add) / o.length
}

/**
 * @function combinations
 * @description derrive combinations of length k from a set
 * @param set elements to derrive combinations of
 * @param k number of combinations
 * @returns an array of k-lemngth choices from the set
 */
export const combinations = <T>(set: Array<T>, k: number): Array<Array<T>> => {
  // src: https://gist.github.com/axelpale/3118596
  if (k > set.length || k <= 0) return []
  if (k === set.length) return [set]
  if (k === 1) return set.map(x => [x])

  return set.reduce((p, c, i) => {
    combinations(set.slice(i + 1), k - 1).forEach(tailArray =>
      p.push([c].concat(tailArray)),
    )

    return p
  }, [])
}
