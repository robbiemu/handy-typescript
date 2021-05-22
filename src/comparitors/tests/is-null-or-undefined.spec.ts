import { isNullOrUndefined } from "../is-null-or-undefined"

describe('isNullOrUndefined', () => {
  it('should detect indefinite values (undefined and null)', () => {
    const cases = [
      undefined,
      NaN,
      -Infinity,
      Infinity,
      0,
      1,
      'dummy-data',
      0xbb,
      null
    ]

    expect(cases.every(isNullOrUndefined)).toBeFalsy()
    expect(cases.filter(isNullOrUndefined)).toHaveLength(2)
  })
})