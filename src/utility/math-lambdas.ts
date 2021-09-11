export const add = (a: number, b: number): number => a + b
export const subtract = (a: number, b: number): number => a - b
export const multiply = (a: number, b: number): number => a * b
export const divide = (a: number, b: number): number => a / b
export const modulo = (a: number, b: number): number => a % b
export const power = (a: number, b: number): number => Math.pow(a, b)

export function sum(this: number[]): number {
  return this.reduce(add)
}

export function mean(this: number[]): number {
  return this.reduce(add) / this.length
}
