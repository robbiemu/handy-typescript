import md5 from 'md5'

export type Andable<T> = T & { [key: string]: any }

export type AndableFunction = Function & { after: Function }

export function andable(...keys: string[]): AndableFunction {
  const fn = function () {
    const address = md5(this)
    keys.forEach((key, i) => {
      if (!AndableUniverse.andables[address]) {
        AndableUniverse.andables[address] = {}
      }
      // eslint-disable-next-line prefer-rest-params
      AndableUniverse.andables[address][key] = arguments[i]
    })
    return { flag: true }
  }
  fn.after = function () {
    return function () {
      const address = md5(this)
      return {
        flag: true,
        // eslint-disable-next-line prefer-rest-params
        payload: [...arguments].concat(
          Object.values(AndableUniverse.andables[address]),
        ),
      }
    }
  }

  return fn
}

export class AndableUniverse {
  static andables = new Proxy(<any>{}, {
    get: (target, key) => {
      if (!target[key]) {
        target[key] = {}
      }
      return target[key]
    },
  })
}
