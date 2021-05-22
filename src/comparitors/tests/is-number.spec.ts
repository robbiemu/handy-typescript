import {isNumber} from '../is-number'

describe('isNumber', () => {
  it('should select numeric values', () => {
    const cases = [
      undefined,
      NaN,
      -Infinity,
      Infinity,
      0,
      1,
      'dummy-data',
      0xbb,
      [],
      {},
      [0],
      null,
    ]

    expect(cases.filter(isNumber)).toHaveLength(5)
  })
})
