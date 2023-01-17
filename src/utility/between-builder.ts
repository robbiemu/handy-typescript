/* eslint-disable @typescript-eslint/no-unused-vars */
import { After } from '@src/aop/after.decorator'
import { Before } from '@src/aop/before.decorator'
import { assert } from './assert'
import { List } from './list'

/**
 * @class BetweenBuilder
 * @description general factory helper to populate a generator with a collection of values
 */
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

  /**
   * @static
   * @method assertBeforeWithInitialValue
   * @description static psuedo-private method used in decorator to assert that the method is called after setting an initial value
   */
  static assertBeforeWithInitialValue(this: BetweenBuilder): void {
    assert(!this.bounds.isEmpty, 'bounds must have initial value')
  }

  /**
   * @static
   * @method completeBefore
   * @description static psuedo-private method used in decorator to detect completion of setting the first value, deleting the between method
   */
  @Before(BetweenBuilder.assertBeforeWithInitialValue)
  static completeBefore(this: BetweenBuilder): void {
    delete (this as any).between
  }

  /**
   * @method and
   * @param value
   * @returns either this BetweenBuilder or the result of the generator function if all bounds have been collected
   * @description add a bound to the collection of bounds, optionally completing the factory setup by executing the generator function
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Before(BetweenBuilder.assertBeforeWithInitialValue)
  and(this: BetweenBuilder, value: unknown) {
    this.bounds.push(value)

    return this.bounds.length === this.arity ? this.generator(...this.bounds) : this
  }

  /**
   * @method between
   * @param value
   * @returns either this BetweenBuilder or the result of the generator function if all bounds have been collected
   * @description add a bound to the collection of bounds, optionally completing the factory setup by executing the generator function
   */
  @After(BetweenBuilder.completeBefore)
  between(value: unknown): BetweenBuilder {
    this.bounds.push(value)

    return this.bounds.length === this.arity ? this.generator(...this.bounds) : this
  }

  /**
   * @method bounds
   * @param bounds
   * @returns either this BetweenBuilder or the result of the generator function if all bounds have been collected
   * @description add bounds to the collection of bounds, optionally completing the factory setup by executing the generator function
   */
  setBounds(bounds: unknown[]): BetweenBuilder {
    this.bounds.concat(...bounds)

    return this.bounds.length === this.arity ? this.generator(...this.bounds) : this
  }
}
