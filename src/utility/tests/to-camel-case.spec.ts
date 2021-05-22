import {toCamelCase} from '../to-camel-case'

describe('toCamelCase', () => {
  it('should convert space-separated strings to camel case (and not class case)', () => {
    const expected = 'camelCase'
    const value = 'camel case'
    const received = toCamelCase(value)

    expect(received).toEqual(expected)
  })
})
