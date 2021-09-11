import { andable, Andable } from './andable'
import { Before } from '@src/aop/before.decorator'
import { mean, sum } from './math-lambdas'
import { randomInt } from './random-int'
import { assert } from './assert'
import { InterruptingBefore } from '@src/aop/interrupting-before.decorator'

/** helper methods on Arrays, without polluting the Array object */

export class List<T> extends Array {
  static from<T>(iter: ArrayLike<T>): List<T> {
    return super.from(iter) as List<T>
  }

  filter<T>(lambda: Comparator<T>): List<T> {
    return List.from(super.filter(lambda))
  }

  slice<T>(start?: number, end?: number): List<T> {
    return super.slice(start, end) as List<T>
  }

  get last(): T {
    return this[this.length - 1]
  }

  get first(): T {
    return this[0]
  }

  aperture(n: number): List<List<T>> {
    const result = []
    for (let i = 0; i < this.length; i += n) {
      result.push(this.slice(i, i + n))
    }
    return List.from(result)
  }

  sum(): number {
    return sum.call(this)
  }

  mean(): number {
    return mean.call(this)
  }

  @Before(andable('startIndex'))
  between(start: T, end?: T): List<T> {
    if (arguments.length === 2) {
      return this.filter(x => x > start && x < end)
    }
    return this
  }

  @InterruptingBefore(andable('startIndex').after())
  and(this: Andable<List<T>>, end: T, start?: T): List<T> {
    assert(start)
    return this.filter(x => x > start && x < end) as List<T>
  }

  until(value: T): List<T> {
    const i = this.indexOf(value)
    return i > -1 ? this.slice(0, i) : List.from([])
  }

  shuffle(): void {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this[i]
      this[i] = this[j]
      this[j] = temp
    }
  }

  oneOf(): T | undefined {
    return this[randomInt(0, this.length - 1)]
  }

  remove(n: T): T | null {
    const i = this.findIndex(el => el === n)
    if (i == -1) return null
    return this.splice(i, 1)[0]
  }
}
