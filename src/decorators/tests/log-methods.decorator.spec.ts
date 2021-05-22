/* eslint-disable @typescript-eslint/no-empty-function */

import { LogMethods } from '../log-methods.decorator'

describe('LogMethods', () => {
  it('should log methods of a class', () => {
    const console = global.console

    global.console = { debug: jest.fn() } as any

    const now = true

    @LogMethods({ when: now })
    class Log {
      methodA() {}
      methodB() {}
    }

    const l = new Log()
    l.methodA()
    l.methodB()

    expect(global.console.debug).toHaveBeenCalledTimes(2)

    global.console = console
  })

  it('should respect logging condition `when`', () => {
    const console = global.console

    global.console = { debug: jest.fn() } as any

    const now = false

    @LogMethods({ when: now })
    class Log {
      methodA() {}
      methodB() {}
    }

    const l = new Log()
    l.methodA()
    l.methodB()

    expect(global.console.debug).toHaveBeenCalledTimes(0)

    global.console = console
  })
})
