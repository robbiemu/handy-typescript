import { Mixin } from "../../decorators/mixin.decorator"

describe('Mixin', () => {
  it('should add behaviors to a class', () => {
    abstract class Behavior {
      echo(value: boolean) { return value }
    }

    interface Specimen extends Behavior { }

    @Mixin(Behavior)
    class Specimen { }

    const s = new Specimen()
    expect(s.echo(true)).toBeTruthy()
  })
})