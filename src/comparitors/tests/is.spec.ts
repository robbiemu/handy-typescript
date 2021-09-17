import { is } from '../is'

describe('is', () => {
  it('should return true when a comparison is to the initial value provided', () => {
    const isTrue = is(true)
    expect(isTrue(true)).toBe(true)
    expect(isTrue(false)).toBe(false)
  })
})
