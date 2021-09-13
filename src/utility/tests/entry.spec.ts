import { FixedSizeArray } from '../fixed-array-size'
import { Entry } from '../entry'

describe('entry', () => {
  const entry: FixedSizeArray<2, string> = ['key', 'value']

  it('should provide the key for an entry', () => {
    expect(Entry.keyOf(entry)).toEqual('key')
  })

  it('should provide the value of an entry', () => {
    expect(Entry.valueOf(entry)).toEqual('value')
  })

  it('should provide helper args to the reduce function to get the maximum key of entries', () => {
    const map = { 0: 3, 1: 4, 2: 1, 3: -1 }
    expect(Object.entries(map).reduce(...Entry.maxKey())).toEqual('3')
  })

  it('should provide helper args to the reduce function to get the maximum key of entries', () => {
    const map = { 0: 3, 1: 3, 2: 1, 3: -1 }
    expect(Object.entries(map).reduce(...Entry.maxKeys(Entry.valueOf))).toEqual([
      '0',
      '1',
    ])
  })
})
