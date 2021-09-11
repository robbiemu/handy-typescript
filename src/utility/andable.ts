import md5 from 'md5'

export type Andable<T> = T & { [key: string]: any }

export type AndableFunction = Function & { after: Function }

export function andable(...keys: string[]): AndableFunction {
  const fn = function (...args) {
    const address = md5(this)
    keys.forEach((key, i) => {
      if (!AndableUniverse.andables[address]) {
        AndableUniverse.andables[address] = {}
      }
      // eslint-disable-next-line prefer-rest-params
      AndableUniverse.andables[address][key] = arguments[i]
    })
    AndableUniverse.afters[address] = args
  }
  fn.after = function () {
    const address = md5(this)
    this.originaMethod(
      ...AndableUniverse.andables[address].concat(
        Object.values(AndableUniverse.afters[address]),
      ),
    )
  }

  return fn
}

export class AndableUniverse {
  static andables = <any>{}
  static afters = <any>{}
}
