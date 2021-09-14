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
