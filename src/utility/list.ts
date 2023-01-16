import type { Comparator } from '@src/types/arrow-function'
import { Entry } from './entry'
import { add, count } from './math-lambdas'
import { randomInt } from './random-int'

/**
 * @class List
 * @description helper methods on Arrays, without polluting the Array object
 **/

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

  get isEmpty(): boolean {
    return this.length === 0
  }

  /**
   * @property last Accessor
   * @description last element in the list
   */
  get last(): T {
    return this[this.length - 1]
  }

  /**
   * @property first Accessor
   * @description first element in the list
   */
  get first(): T {
    return this[0]
  }

  /**
   * @method aperture
   * @description Returns a new list, composed of n-tuples of consecutive elements. Note: inspired by, and perhaps copied from Ramda
   * @param n number of elements to group by
   * @returns list of lists of (up to) n elements
   */
  aperture(n: number): List<List<T>> {
    const result = []
    for (let i = 0; i < this.length; i += n) {
      result.push(this.slice(i, i + n))
    }
    return List.from(result)
  }

  /**
   * @method sum
   * @description sums a list
   * @returns the sum of the lest, as per the + operator
   */
  sum(): number {
    return this.reduce(add)
  }

  /**
   * @method mean
   * @description calculates the mean of the list
   * @returns the mean of a (numeric) list
   */
  mean(): number {
    return this.reduce(add) / this.length
  }

  /**
   * @method median
   * @description calculates the median of the list
   * @returns the median of the list
   */
  median(): number | List<T> {
    if (this.length === 0) return null

    const middle = Math.floor((this.length - 1) / 2)
    const sorted = List.from(this).sort()
    if (this.length % 2 === 1) {
      return sorted[middle]
    } else {
      if (typeof this[0] === 'number') {
        return (sorted[middle] + sorted[middle + 1]) / 2
      } else {
        return List.from([sorted[middle], sorted[middle + 1]])
      }
    }
  }

  /**
   * @method mode
   * @description calculates the mode of the list
   * @param multimodal in the case of ties, return them all
   * @returns the most frequently occuring element(s) in the list
   */
  mode(multimodal = false): T {
    if (new Set(this).size === 1) return this[0]

    const byFirst = (a, b) =>
      this.findIndex(x => x === Entry.keyOf(a)) -
      this.findIndex(x => x === Entry.keyOf(b))

    const count = List.from(this.count().entries() as any)
    if (multimodal) {
      return count.reduce(...Entry.maxKeys(Entry.valueOf))
    } else {
      count.sort(byFirst)
      return count.reduce(...Entry.maxKey(Entry.valueOf))
    }
  }

  /**
   * @method count
   * @returns a map of elements to the tally of their occurance
   */
  count(): Map<T, number> {
    return this.reduce(count, new Map<T, number>())
  }

  /**
   * @method between
   * @description return a subset of elements by their sort ordering. Note: can be used in two forms: `list.between(start, end)` and `list.between(start).and(end)`
   * @param start the start of the range
   * @param end the end of the range
   * @returns elements in the list
   */
  between(start: T, end: T): List<T> {
    return this.filter(x => x >= start && x <= end)
  }

  /**
   * @method until
   * @description values from the start until a value
   * @param value the value after the last value in the desired subset
   * @returns a subet of of elements of the list
   */
  until(value: T): List<T> {
    const i = this.indexOf(value)
    return i > -1 ? this.slice(0, i) : List.from([])
  }

  /**
   * @method shuffle
   * @description shuffle the list
   */
  shuffle(): void {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this[i]
      this[i] = this[j]
      this[j] = temp
    }
  }

  /**
   * @method onOf
   * @description get a random element from the list
   * @returns an element of the list
   */
  oneOf(): T | undefined {
    return this[randomInt(0, this.length - 1)]
  }

  /**
   * @method remove
   * @description removes an element from the list
   * @param n element to remove
   * @returns the element
   */
  remove(n: T): T | null {
    const i = this.findIndex(el => el === n)
    if (i == -1) return null
    return this.splice(i, 1)[0]
  }
}
