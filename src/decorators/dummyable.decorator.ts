/**
 * decorator that can replace and reuse a method
 * @param conf DummyableConfig
 */
export function Dummyable(conf: DummyableConfig) {
  // tslint:disable-next-line: only-arrow-functions
  return function (_targetClass: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const config = factoryDummyableConfig(conf);

    if (config.override) {
      descriptor.value = function (...args) {
        // tslint:disable-next-line: no-console
        console.info(`%c [Dummyable] at ${String(propertyKey)}`, 'color: goldenrod');

        const res = config.factoryResponse.bind(this);
        res.__proto__.originalMethod = originalMethod.bind(this);
        return res(...args);
      };
    }
    return descriptor;
  };
}

/**
 * (internal) function to generate a compliant conf body from a partial one
 * @param conf Partial<DummyableConfig>
 * @returns compliant Dummyable conf parameter
 */
export function factoryDummyableConfig(conf: Partial<DummyableConfig>): DummyableConfig {
  if (!conf.hasOwnProperty('override')) {
    conf.override = true;
  }
  if (!conf.hasOwnProperty('factoryResponse')) {
    conf.factoryResponse = () => ({});
  }

  return conf as DummyableConfig;
}

/**
 * the config interface
 */
export interface DummyableConfig {
  /**
   * conpile-time property to determine execution of dummyable vs the underlying method
   */
  override?: boolean;

  /**
   * compile-time function that can replace the underlying method
   */
  // tslint:disable-next-line: ban-types
  factoryResponse: DummyableFactoryResponse;
}

export type DummyableFactoryResponse = Function & { originalMethod?: Function }
