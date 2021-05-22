import {factoryHasValue} from '../factory-has-value'

describe('factoryHasValue', () => {
  it('should detect properties with the proper value', () => {
    const cases = [{foo: true}, {a: true, foo: 'bar'}, {}]

    const sentinel = 'bar'
    const hasBarForFoo = factoryHasValue('foo', value => value === sentinel)

    expect(cases.some(hasBarForFoo)).toBeTruthy()
    expect(cases.every(hasBarForFoo)).toBeFalsy()
    expect(cases.filter(hasBarForFoo)).toHaveLength(1)
  })

  it('should gracefully handle non-object entities', () => {
    const cases: Array<unknown> = [undefined, NaN, 1, 't', 0xbb]

    const sentinel = 'bar'
    const hasBarForFoo = factoryHasValue('foo', value => value === sentinel)

    expect(() => cases.some(hasBarForFoo)).not.toThrow()
    expect(cases.some(hasBarForFoo)).toBeFalsy()
  })
})
