import {AssertionError, assert} from '../assert'

describe('assert', () => {
  it('should throw on failed assertion', () => {
    expect(() => assert(false)).toThrowError()
  })

  it('should not throw on satisfied assertion', () => {
    expect(() => assert(true)).not.toThrowError()
  })

  it('should throw an AssertionError', () => {
    try {
      assert(false)
    } catch (e) {
      expect(e).toBeInstanceOf(AssertionError)
    }
  })

  it('should accept an assertion message', () => {
    expect(() => assert(false, 'message')).toThrowError('message')
  })
})
