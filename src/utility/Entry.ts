import { FixedSizeArray } from './fixed-array-size'

export class Entry {
  static keyOf<K, V>(entry: FixedSizeArray<2, K & V>): K {
    return entry[0]
  }

  static valueOf<K, V>(entry: FixedSizeArray<2, K & V>): V {
    return entry[1]
  }

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
