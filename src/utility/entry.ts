import type { Reducer } from '@src/types/arrow-function'
import { FixedSizeArray } from './fixed-array-size'

/**
 * @class Entry
 * @description helper methods for working with entries
 */
export class Entry {
  /**
   * @static
   * @method keyOf the key of an entry
   * @param entry
   * @returns the key
   */
  static keyOf<K, V>(entry: FixedSizeArray<2, K & V>): K {
    return entry[0]
  }

  /**
   * @static
   * @method valueOf the value of an entry
   * @param entry
   * @returns the value
   */
  static valueOf<K, V>(entry: FixedSizeArray<2, K & V>): V {
    return entry[1]
  }

  /**
   * @static
   * @method maxKey
   * @param transformer a helper function to traverse entries to comparing which is max, by default by comparing the keys
   * @returns helper args to the reduce function which produces the max key according to the greater-than operator on the transformed entry
   */
  static maxKey<K, V>(transformer?: Function): [Reducer<K>, null] {
    if (!transformer) {
      transformer = Entry.keyOf
    }
    let last = null
    return [
      (previousValue: any, currentValue: FixedSizeArray<2, K & V>) => {
        const c = transformer(currentValue)
        if (c > last) {
          last = c
          previousValue = Entry.keyOf(currentValue)
        }
        return previousValue
      },
      last,
    ]
  }

  /**
   * @static
   * @method maxKeys
   * @param transformer a helper function to traverse entries to comparing which is max, by default by comparing the keys
   * @returns helper args to the reduce function which produces all maximal keys according to the greater-than operator on the transformed entry
   */
  static maxKeys<K, V>(transformer?: Function): [Reducer<K>, null] {
    if (!transformer) {
      transformer = Entry.keyOf
    }
    let last = null
    return [
      (previousValue: any, currentValue: FixedSizeArray<2, K & V>) => {
        const c = transformer(currentValue)
        if (c > last) {
          last = c
          previousValue = [Entry.keyOf(currentValue)]
        } else if (c === last) {
          previousValue.push(Entry.keyOf(currentValue))
        }
        return previousValue
      },
      last,
    ]
  }
}
