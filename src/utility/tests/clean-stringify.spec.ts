import { cleanStringify } from '@src/utility/clean-stringify';

describe('cleanStringify', () => {
  it('should cleanly stringify around circular references', () => {
    const a: Dictionary<any> = {}
    const b = { a }
    a.b = b

    const expected = '{"b":{"a":"###_Circular_###"}}'
    const received = cleanStringify(a)

    expect(received).toEqual(expected)
  })
})