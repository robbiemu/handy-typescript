import { Mixin } from '../mixin.decorator'

describe('Mixin', () => {
  it('should add behaviors to a class', () => {
    abstract class Behavior {
      echo(value: boolean) {
        return value
      }
    }

    interface Specimen extends Behavior {}

    @Mixin(Behavior)
    class Specimen {}

    const s = new Specimen()
    expect(s.echo(true)).toBeTruthy()
  })

  it('should add properties to a class', () => {
    interface Property {
      myProperty: string
      bar?: boolean
    }

    const Prop = {
      myProperty: 'dummy-data',
    }

    class Property {
      baz? = true // demonstrating that baz will not be set.

      static postConstructor(this: Property) {
        this.bar = true
      }
    }
    Object.entries(Prop).forEach(([key, value]) => {
      Property.prototype[key] = value
    })

    interface Specimen extends Property {}

    @Mixin(Property)
    class Specimen {}

    const s = new Specimen()

    expect(s.baz).toBeUndefined()
    expect(s.constructor).not.toHaveProperty('postConstructor')
    expect(s.myProperty).toEqual('dummy-data')
    expect(s).toHaveProperty('bar')
  })
})
