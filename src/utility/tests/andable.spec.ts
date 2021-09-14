import { InterruptingBefore } from '@src/aop/interrupting-before.decorator'
import { Before } from '@src/aop/before.decorator'
import { Andable } from '../andable'
import { assert } from '../assert'

describe('andable', () => {
  it('should support anded-together properties under a key', () => {
    class Ander {
      state = { this: undefined, that: undefined }

      @Before(Andable.before('this-and-that'))
      dothis(value: any): Ander {
        this.state.this = value
        return this
      }

      @InterruptingBefore(Andable.after('this-and-that'))
      andThat(value?: any) {
        assert(value)
        this.state.that = value
      }
    }

    const ander = new Ander()
    ander.dothis(true).andThat()
    expect(ander.state.this).toBeTruthy()
    expect(ander.state.that).toBeTruthy()
  })

  it('should support multiple anded-together properties each under a key', () => {
    class AnderTwo {
      state = { first: undefined, second: undefined, fourth: undefined }

      @Before(Andable.before('first', 'second'))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      dothis(first: any, _second: any): AnderTwo {
        this.state.first = first
        return this
      }

      @InterruptingBefore(Andable.after('first', 'second'))
      andThat(third?: any, first?: any, second?: any) {
        // eslint-disable-next-line prefer-rest-params
        console.log(arguments)
        assert(second)
        this.state.second = second
        this.state.fourth = first + third
      }
    }

    const ander = new AnderTwo()
    ander.dothis(1, 2).andThat(3)
    expect(ander.state.first).toEqual(1)
    expect(ander.state.second).toEqual(2)
    expect(ander.state.fourth).toEqual(4)
  })
})
