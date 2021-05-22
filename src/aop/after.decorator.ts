/**
 * decorator execute code _after_ method completes
 * @param afterFunction method to decorate
 */
export function After(afterFunction: Function) {
  // tslint:disable-next-line: only-arrow-functions
  return function (_targetClass: Object, _propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      function res() {
        const result = originalMethod.bind(this)(...args);
        afterFunction.bind(this)(...args);

        return result;
      }

      return res.bind(this)();
    };

    return descriptor;
  };
}
