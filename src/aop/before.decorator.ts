/**
 * decorator to execute code before method execution
 * @param beforeFunction method to decorate
 */
export function Before(beforeFunction: Function) {
  // tslint:disable-next-line: only-arrow-functions
  return function (
    _targetClass: any,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      function res() {
        beforeFunction.bind(this)(...args)
        const result = originalMethod.bind(this)(...args)

        return result
      }

      return res.bind(this)()
    }

    return descriptor
  }
}
