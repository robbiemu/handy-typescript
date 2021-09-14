import {
  add,
  count,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  sum,
  mean,
} from '../math-lambdas'

describe('count', () => {
  it('should count', () => {
    const c = ['a', 'b', 'b', 'c'].reduce(count, new Map())
    expect(c.get('a')).toBe(1)
    expect(c.get('b')).toBe(2)
    expect(c.get('c')).toBe(1)
  })
})

describe('add', () => {
  it('should add', () => {
    const strings = (['a', 'b', 'b', 'c'] as any).reduce(add)
    expect(strings).toEqual('abbc')

    const numbers = [1, 2, 2, 3].reduce(add)
    expect(numbers).toEqual(8)

    expect(add(37, 5)).toEqual(42)
  })
})

describe('subtract', () => {
  it('should subtract', () => {
    const numbers = [1, 2, 2, 3].reduce(subtract, 50)
    expect(numbers).toEqual(42)

    expect(subtract(47, 5)).toEqual(42)
  })
})

describe('multiply', () => {
  it('should multiply', () => {
    let numbers = [1, 2, 3].reduce(multiply)
    expect(numbers).toEqual(6)

    numbers = [1, 2, 3, 7].reduce(multiply, 1)
    expect(numbers).toEqual(42)

    expect(multiply(7, 6)).toEqual(42)
  })
})

describe('divide', () => {
  it('should divide', () => {
    let numbers = [1, 2, 3].reduce(divide, 24)
    expect(numbers).toEqual(4)

    numbers = [42, 2, 3, 7].reduce(divide)
    expect(numbers).toEqual(1)

    expect(divide(252, 6)).toEqual(42)
  })
})

describe('modulo', () => {
  it('should find the modulo remainder', () => {
    expect(modulo(47, 7)).toEqual(5)
  })
})

describe('power', () => {
  it('should apply an exponent', () => {
    expect(power(2, 3)).toEqual(8)
    expect(power(9, 1 / 2)).toEqual(3)
  })
})

describe('sum', () => {
  it('should sum a sequence', () => {
    expect(sum([1, 2, 3])).toEqual(6)
  })
})

describe('mean', () => {
  it('should find the mean', () => {
    expect(mean([4, 2, 3])).toEqual(3)
  })
})
