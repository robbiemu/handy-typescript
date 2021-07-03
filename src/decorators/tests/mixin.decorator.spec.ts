import { Mixin, MixinTarget } from '../../decorators/mixin.decorator'

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
      static postConstructor(this: Property) {
        this.bar = true
      }
    }
    Object.entries(Prop).forEach(([key, value]) => {
      Property.prototype[key] = value
    })

    interface Specimen extends Property {}

    @Mixin(Property)
    class Specimen extends MixinTarget {
      constructor() {
        super()
      }
    }

    const s = new Specimen()
    expect(s.myProperty).toEqual('dummy-data')
    expect(s).toHaveProperty('bar')
  })
})
