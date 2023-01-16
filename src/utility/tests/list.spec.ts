import { List } from '../list'

describe('List', () => {
  it('should exist', () => {
    expect(() => new List<any>()).not.toThrowError()
  })

  it('should create a list with the static from clause (not an array)', () => {
    const list = List.from([1, 2, 3])

    expect(list.length).toBe(3)
    expect(list instanceof List).toBeTruthy()
  })

  it('should return a List from filter', () => {
    const list = List.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const evens = list.filter((x: number) => x % 2 === 0)
    expect(evens instanceof List).toBeTruthy()
  })

  it('should return a List from slice', () => {
    const list = List.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const firstFive = list.slice(0, 5)
    expect(firstFive instanceof List).toBeTruthy()
  })

  it('should have a last property reflecting the last element in the list', () => {
    const list = List.from([1, 2, 3, 4, 5])
    expect(list.last).toBe(5)

    list.pop()
    expect(list.last).toBe(4)
  })

  it('should have a first property reflecting the first element in the list', () => {
    const list = List.from([1, 2, 3, 4, 5])
    expect(list.first).toBe(1)

    list.shift()
    expect(list.first).toBe(2)
  })

  it('should produce n-ary subsets with aperture method', () => {
    let list = List.from([1, 2, 3, 4, 5])
    expect(list.aperture(1)).toEqual([[1], [2], [3], [4], [5]])
    list = List.from([1, 2, 3, 4, 5])
    expect(list.aperture(2)).toEqual([[1, 2], [3, 4], [5]])
    list = List.from([1, 2, 3, 4, 5])
    expect(list.aperture(3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
    list = List.from([1, 2, 3, 4, 5])
    expect(list.aperture(4)).toEqual([[1, 2, 3, 4], [5]])
    list = List.from([1, 2, 3, 4, 5])
    expect(list.aperture(5)).toEqual([[1, 2, 3, 4, 5]])
    list = List.from([1, 2, 3, 4, 5])
    expect(list.aperture(6)).toEqual([[1, 2, 3, 4, 5]])
  })

  it('should calculate the sum of a list or concatenate a list of strings', () => {
    const numbers = List.from([1, 2, 3, 4, 5])
    expect(numbers.sum()).toBe(15)

    const strings = List.from(['a', 'b', 'c', 'd', 'e'])
    expect(strings.sum()).toBe('abcde')
  })

  it('should calculate the mean of numerical lists', () => {
    const list = List.from([1, 2, 3, 4, 5])
    expect(list.mean()).toBe(3)

    const errant = List.from(['a', 'b'])
    expect(errant.mean()).toBe(NaN)
  })

  it('should calculate the median of a numerical list', () => {
    let numbers = List.from([1, 2, 3, 4, 5])
    expect(numbers.median()).toBe(3)

    let strings = List.from(['a', 'b', 'c'])
    expect(strings.median()).toBe('b')

    numbers = List.from([1, 2, 3, 4])
    expect(numbers.median()).toBe(2.5)

    strings = List.from(['a', 'b', 'c', 'd'])
    expect(strings.median()).toEqual(['b', 'c'])
  })

  it('should return null when asked for the median of an empty list', () => {
    const list = List.from([])
    expect(list.median()).toBeNull()
  })

  it('should return the mode of a list', () => {
    let numbers = List.from([0, 1, 1, 2, 2, 3, 3, 3, 4, 4])
    expect(numbers.mode()).toEqual(3)

    numbers = List.from([1, 1, 2, 2, 3, 3, 3, 4, 4])
    expect(numbers.mode()).toEqual(3)

    numbers = List.from([2])
    expect(numbers.mode()).toEqual(2)

    numbers = List.from([2, 2])
    expect(numbers.mode()).toEqual(2)

    numbers = List.from([2, 3])
    expect(numbers.mode()).toEqual(2)

    numbers = List.from([2, 2, 4, 4])
    expect(numbers.mode()).toEqual(2)

    numbers = List.from([2, 3, 4])
    expect(numbers.mode(true)).toEqual([2, 3, 4])

    let strings = List.from(['a', 'b', 'c'])
    expect(strings.mode()).toBe('a')

    strings = List.from(['a'])
    expect(strings.mode()).toBe('a')

    strings = List.from(['a', 'a'])
    expect(strings.mode()).toBe('a')

    strings = List.from(['a', 'a', 'b', 'b'])
    expect(strings.mode()).toBe('a')

    strings = List.from(['a', 'a', 'b', 'b', 'c', 'c', 'c', 'd', 'd'])
    expect(strings.mode()).toEqual('c')
  })

  it('should have a mode that supports multimodal', () => {
    let numbers = List.from([2, 3])
    expect(numbers.mode(true)).toEqual([2, 3])

    numbers = List.from([2, 2, 4, 4])
    expect(numbers.mode(true)).toEqual([2, 4])

    const strings = List.from(['a', 'a', 'b', 'b'])
    expect(strings.mode(true)).toEqual(['a', 'b'])
  })

  it('should return null when asked for the mode of an empty list', () => {
    const list = List.from([])
    expect(list.mode()).toBeNull()
  })

  it('should produce a map of contents to count', () => {
    let numbers = List.from([0, 1, 1, 2, 2, 3, 3, 3, 4, 4])
    const count = numbers.count()
    expect(count instanceof Map).toBeTruthy()

    expect(Object.fromEntries(count.entries())).toEqual({
      0: 1,
      1: 2,
      2: 2,
      3: 3,
      4: 2,
    })

    numbers = List.from([1, 1, 2, 2, 3, 3, 3, 4, 4])
    expect(Object.fromEntries(numbers.count().entries())).toEqual({
      1: 2,
      2: 2,
      3: 3,
      4: 2,
    })

    numbers = List.from([2])
    expect(Object.fromEntries(numbers.count().entries())).toEqual({ 2: 1 })

    numbers = List.from([2, 2])
    expect(Object.fromEntries(numbers.count().entries())).toEqual({ 2: 2 })

    numbers = List.from([2, 3])
    expect(Object.fromEntries(numbers.count().entries())).toEqual({ 2: 1, 3: 1 })

    numbers = List.from([2, 2, 4, 4])
    expect(Object.fromEntries(numbers.count().entries())).toEqual({ 2: 2, 4: 2 })

    numbers = List.from([2, 3, 4])
    expect(Object.fromEntries(numbers.count().entries())).toEqual({
      2: 1,
      3: 1,
      4: 1,
    })

    let strings = List.from(['a', 'b', 'c'])
    expect(Object.fromEntries(strings.count().entries())).toEqual({
      a: 1,
      b: 1,
      c: 1,
    })

    strings = List.from(['a'])
    expect(Object.fromEntries(strings.count().entries())).toEqual({ a: 1 })

    strings = List.from(['a', 'a'])
    expect(Object.fromEntries(strings.count().entries())).toEqual({ a: 2 })

    strings = List.from(['a', 'a', 'b', 'b'])
    expect(Object.fromEntries(strings.count().entries())).toEqual({ a: 2, b: 2 })

    strings = List.from(['a', 'a', 'b', 'b', 'c', 'c', 'c', 'd', 'd'])
    expect(Object.fromEntries(strings.count().entries())).toEqual({
      a: 2,
      b: 2,
      c: 3,
      d: 2,
    })
  })

  it('should produce all elements between x and y values (based on comparability)', () => {
    const numbers = List.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(numbers.between(1, 3)).toEqual([1, 2, 3])

    const strings = List.from(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
    expect(strings.between('b', 'f')).toEqual(['b', 'c', 'd', 'e', 'f'])
  })

  it('should return all elements until a sample element', () => {
    const numbers = List.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(numbers.until(3)).toEqual([0, 1, 2])
  })

  it('should shuffle its elements', () => {
    const numbers = List.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const received = List.from(numbers)
    received.shuffle()
    expect(received).not.toEqual(numbers)
    expect(received.length).toEqual(numbers.length)
    expect(received.sort()).toEqual(numbers.sort())
  })

  it('should return oneOf its elements at random', () => {
    const list = List.from([1, 2, 3, 4, 5])
    expect(list).toContain(list.oneOf())
  })

  it('should remove an element from the list, returning that element', () => {
    const list = List.from([1, 2, 3, 4, 5])
    let i = 1
    let received
    while (i < 6) {
      received = list.remove(i)
      expect(list.length).toEqual(5 - i)
      expect(received).toEqual(i)
      i += 1
    }
  })
})
