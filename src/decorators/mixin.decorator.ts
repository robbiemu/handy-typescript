/**
 * decorator to mixin behaviors
 * example:
 * ```typescript
 *   abstract class Behavior {
 *     method() {}
 *   }
 * 
 *   interface Specimen extends Behavior {}
 * 
 *   @Mixin(Behavior)
 *   class Specimen {}
 * 
 *   //..
 * 
 *   const specimen = new Specimen()
 *   specimen.method()
 * ```
 * @param classes classes to mix in to the decorated class
 */
export function Mixin(...classes: Function[]): ClassDecorator {
  return function (target) {
    classes.forEach((constructor) => {
      Object.getOwnPropertyNames(constructor.prototype).forEach((name) => {
        Object.defineProperty(
          target.prototype,
          name,
          Object.getOwnPropertyDescriptor(constructor.prototype, name) as any
        )
      })
    })

    return target
  }
}