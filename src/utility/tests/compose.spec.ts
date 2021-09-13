import { Before } from '@src/aop/before.decorator'
import { compose } from '../compose'

describe('compose', () => {
  it('should compose a list of functions to execute', () => {
    function a(this: Composer) {
      console.log(this)
      this.received.a = true
    }
    function b(this: Composer) {
      this.received.b = true
    }

    class Composer {
      received: { [k: string]: boolean } = {}

      executor() {
        compose(a, b).bind(this)()
      }
    }

    const c = new Composer()
    c.executor()
    expect(c.received.a).toBeTruthy()
    expect(c.received.b).toBeTruthy()
  })

  it('should support use within decorators', () => {
    function a(this: Composer) {
      console.log(this)
      this.received.a = true
    }
    function b(this: Composer) {
      this.received.b = true
    }

    class Composer {
      received: { [k: string]: boolean } = {}

      @Before(compose(a, b))
      executor() {
        //
      }
    }

    const c = new Composer()
    c.executor()
    expect(c.received.a).toBeTruthy()
    expect(c.received.b).toBeTruthy()
  })
})
