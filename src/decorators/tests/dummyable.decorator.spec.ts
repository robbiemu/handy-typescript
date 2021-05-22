import {DummyableFactoryResponse} from '../../decorators/dummyable.decorator'
import {Dummyable} from '../../decorators/dummyable.decorator'

describe('Dummyable', () => {
  it('should replace a method', () => {
    let methodCalled: boolean

    class Replace {
      @Dummyable({factoryResponse() {}})
      method() {
        methodCalled = true
      }
    }

    const r = new Replace()
    r.method()

    expect(methodCalled).toBeFalsy()
  })

  it('should conditionally replace a method', () => {
    let methodCalled: boolean
    const compileTimeCondition = true

    class ConditionalReplace {
      @Dummyable({override: compileTimeCondition, factoryResponse() {}})
      method() {
        methodCalled = true
      }
    }

    const r = new ConditionalReplace()
    r.method()

    expect(methodCalled).toBeFalsy()
  })

  it('should log an info message to console when replacing a method', () => {
    const compileTimeCondition = true

    const console = global.console

    global.console = {info: jest.fn()} as any

    class Log {
      @Dummyable({override: compileTimeCondition, factoryResponse() {}})
      method() {}
    }

    const r = new Log()
    r.method()

    expect(global.console.info).toHaveBeenCalledWith(
      '%c [Dummyable] at method',
      'color: goldenrod',
    )

    global.console = console
  })

  it('should conditionally opt not to replace a method', () => {
    let methodCalled: boolean
    const compileTimeCondition = false

    class ConditionalNotReplace {
      @Dummyable({override: compileTimeCondition, factoryResponse() {}})
      method() {
        methodCalled = true
      }
    }

    const r = new ConditionalNotReplace()
    r.method()

    expect(methodCalled).toBeTruthy()
  })

  it('should preserve the original method context', () => {
    let received: boolean

    class Context {
      readonly contextual = true
      @Dummyable({
        factoryResponse() {
          received = this.contextual
        },
      })
      method() {}
    }

    const r = new Context()
    r.method()

    expect(received).toBeTruthy()
  })

  it('should preserve the original method for crosscutting', () => {
    let received: boolean

    const factoryResponse: DummyableFactoryResponse = function () {
      received = this.contextual
      return factoryResponse.originalMethod()
    }

    class CrossCut {
      private _contextual = true

      get contextual() {
        return this._contextual
      }

      @Dummyable({factoryResponse})
      method() {
        this._contextual = false
      }
    }

    const r = new CrossCut()
    r.method()

    expect(received).toBeTruthy()
    expect(r.contextual).not.toEqual(received)
  })
})
