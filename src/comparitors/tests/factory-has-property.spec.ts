import type { ArrowFunction } from '../../types/arrow-function'
import { factoryHasProperty } from '../factory-has-property'

describe('factoryHasProperty', () => {
  it('should detect properties regardlass of value', () => {
    const cases = [
      { b: true },
      { a: true, b: false },
      { a: true, b: undefined },
      {},
    ]

    const hasPropB = factoryHasProperty('b')

    expect(cases.some(hasPropB)).toBeTruthy()
    expect(cases.every(hasPropB)).toBeFalsy()
    expect(cases.filter(hasPropB)).toHaveLength(3)
  })

  it('should gracefully handle non-object entities', () => {
    const cases: Array<unknown> = [undefined, NaN, 1, 't', 0xbb]

    // eslint-disable-next-line prettier/prettier
    const hasPropB = factoryHasProperty('b') as ArrowFunction<unknown[],boolean>

    expect(() => cases.some(hasPropB)).not.toThrow()
    expect(cases.some(hasPropB)).toBeFalsy()
  })
})
