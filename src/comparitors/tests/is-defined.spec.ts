import {isDefined} from '../is-defined'

describe('isDefined', () => {
  it('should detect definite values (excluding undefined and null)', () => {
    const cases = [
      undefined,
      NaN,
      -Infinity,
      Infinity,
      0,
      1,
      'dummy-data',
      0xbb,
      null,
    ]

    expect(cases.every(isDefined)).toBeFalsy()
    expect(cases.filter(isDefined)).toHaveLength(cases.length - 2)
  })
})
