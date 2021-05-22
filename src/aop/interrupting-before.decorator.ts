import type { AopDecoratorPayload } from './aop-decorator-payload.interface'

/**
 * decorator that executes arbitrary code before the underlying method. the function executed can
 * optionally trigger the original method after, or interrupt its execution. it may opt to replace
 * the parameters with an {@link AopDecoratorPayload}
 * @param before method to optionally interrup t and execute before the method
 */
export function InterruptingBefore(before: Function) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any) {
      const result: AopDecoratorPayload | undefined = before.call(this, ...args)
      if (result) {
        if (result.flag) {
          if (result.hasOwnProperty('payload')) {
            const payload = Array.isArray(result.payload) ? result.payload : [result.payload]
            return originalMethod.bind(this)(...payload)
          } else {
            return originalMethod.bind(this)(...args)
          }
        } else {
          console.info(`[InterruptingBefore@${target.constructor.name}::${propertyKey}] interupting execution`)
          return result?.payload
        }
      }
    }
  }
}