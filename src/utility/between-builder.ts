import { After } from '@src/aop/after.decorator'
import { Before } from '@src/aop/before.decorator'
import { assert } from './assert'
import { List } from './list'

export class BetweenBuilder {
  bounds: List<unknown> = List.from([])

  constructor(private generator: Function, private arity: number) {}

  /**
   * @static
   * @method build
   * @param generator function accepting bounds
   * @returns
   */
  static build(generator: Function, arity = 2): BetweenBuilder {
    return new BetweenBuilder(generator, arity)
  }

  static assertBeforeWithInitialValue(this: BetweenBuilder): void {
    assert(!this.bounds.isEmpty, 'bounds must have initial value')
  }

  @Before(BetweenBuilder.assertBeforeWithInitialValue)
  static completeBefore(this: BetweenBuilder): void {
    delete (this as any).between
  }

  @Before(BetweenBuilder.assertBeforeWithInitialValue)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  and(this: BetweenBuilder, value: unknown) {
    this.bounds.push(value)

    return this.bounds.length === this.arity ? this.generator(...this.bounds) : this
  }

  @After(BetweenBuilder.completeBefore)
  between(value: unknown): BetweenBuilder {
    this.bounds.push(value)

    return this.bounds.length === this.arity ? this.generator(...this.bounds) : this
  }

  betweenBounds(bounds: unknown[]): BetweenBuilder {
    this.bounds.concat(...bounds)

    return this.bounds.length === this.arity ? this.generator(...this.bounds) : this
  }
}
