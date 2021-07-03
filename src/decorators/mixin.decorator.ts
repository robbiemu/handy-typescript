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
export interface Mixin {
  postConstructor?: Array<Function>
}

export function Mixin(...classes: Function[]): ClassDecorator {
  return function (target) {
    const postConstructors: Array<Function> = []
    classes.forEach(constructor => {
      if (Object.getOwnPropertyNames(constructor).includes('postConstructor')) {
        postConstructors.push(constructor['postConstructor'])
      }
      Object.getOwnPropertyNames(constructor.prototype).forEach(name => {
        Object.defineProperty(
          target.prototype,
          name,
          Object.getOwnPropertyDescriptor(constructor.prototype, name) as any,
        )
      })
    })

    Object.defineProperty(target.prototype, 'postConstructors', postConstructors)

    return target
  }
}

export abstract class MixinTarget {
  postConstruction?: Array<Function>

  constructor() {
    ;(this.postConstruction ?? []).forEach((unboundMethod: Function) =>
      unboundMethod.bind(this)(),
    )
  }
}
