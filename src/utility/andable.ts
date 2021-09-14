import md5 from 'md5'

export class Andable {
  static andables = new Proxy(<any>{}, {
    get: (target, key) => {
      if (!target[key]) {
        target[key] = {}
      }
      return target[key]
    },
  })

  static before(...keys: string[]): Function {
    const fn = function () {
      const address = md5(this)
      keys.forEach((key, i) => {
        if (!Andable.andables[address]) {
          Andable.andables[address] = {}
        }
        // eslint-disable-next-line prefer-rest-params
        Andable.andables[address][key] = arguments[i]
      })
      return { flag: true }
    }
    return fn
  }

  static after(...keys: string[]): Function {
    return function () {
      const address = md5(this)
      return {
        flag: true,
        // eslint-disable-next-line prefer-rest-params
        payload: [...arguments].concat(
          keys.map(key => Andable.andables[address][key]),
        ),
      }
    }
  }
}
