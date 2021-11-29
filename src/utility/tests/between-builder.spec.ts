import { BetweenBuilder } from '../between-builder'

describe('BetweenBuilder', () => {
  it('should have a static build factory method', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const x = BetweenBuilder.build(() => {}, 2)

    expect(x).toBeInstanceOf(BetweenBuilder)
  })

  it('should build a list of two arguments by default', () => {
    const x = BetweenBuilder.build(function () {
      // eslint-disable-next-line prefer-rest-params
      return () => Array.from(arguments)
    })

    const fn = x.between('left').and('right')

    expect(fn()).toEqual(['left', 'right'])
  })

  it('should accept an optional argument specifying the number of arguments in the boulds', () => {
    const x = BetweenBuilder.build(function () {
      // eslint-disable-next-line prefer-rest-params
      return () => Array.from(arguments)
    }, 3)

    const interim = x.between('left').and('right')

    expect(interim).toBeInstanceOf(BetweenBuilder)
    expect(interim).toHaveProperty('arity', 3)

    const fn = interim.and('middle')

    expect(fn()).toHaveLength(3)
  })
})
