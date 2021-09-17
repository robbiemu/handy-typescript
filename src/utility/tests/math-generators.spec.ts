import { combinations, range } from '../math-generators'
import { add, multiply } from '../math-lambdas'

describe('combinations', () => {
  it('should create an iterable that spans an array of combinations of k elements from an n length source', () => {
    const test = (n, k) =>
      combinations(
        [...Array(n)].map((_, i) => i + 1),
        k,
      )
    const c = test(2, 1)
    let step = c.next()
    expect(step.value).toEqual([1])
    step = c.next()
    expect(step.value).toEqual([2])
    step = c.next()
    expect(step.value).toBeUndefined()
    expect(step.done).toBeTruthy()

    expect([...test(100, 3)].length).toEqual(161700)
  })
})

describe('range', () => {
  it('should fulfill a loop over a count of steps', () => {
    const set = []
    for (const i of range(4)) {
      set.push(i)
    }
    expect(set).toEqual([0, 1, 2, 3])
  })

  it('should fulfill a loop over a count of steps starting at a given value', () => {
    const set = []
    for (const i of range(1, 5)) {
      set.push(i)
    }
    expect(set).toEqual([1, 2, 3, 4])
  })

  it('should gracefully terminate if asked to operate over an empty set of elements', () => {
    const set = []
    for (const i of range(0)) {
      set.push(i)
    }
    expect(set).toHaveLength(0)

    for (const i of range(2, 2)) {
      set.push(i)
    }
    expect(set).toHaveLength(0)
  })

  it('should fulfill a loop over a count of steps by a given function and starting at a given value', () => {
    let set = []
    for (const i of range(1, 10, add)) {
      set.push(i)
    }
    expect(set).toEqual([1, 2, 4, 7])

    set = []
    for (const i of range(1, 25, multiply)) {
      set.push(i)
    }
    expect(set).toEqual([1, 1, 2, 6, 24])

    set = []
    function fib(b) {
      return b + (set.length > 1 ? set.slice(-2)[0] : 0)
    }
    for (const i of range(1, 25, fib)) {
      set.push(i)
    }
    expect(set).toEqual([1, 1, 2, 3, 5, 8, 13, 21])
  })
})
