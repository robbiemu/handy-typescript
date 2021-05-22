/**
 * error of type assertion
 */
export class AssertionError extends Error {}

/**
 * assert a condition or throw
 * @param condition boolean to assert
 * @param msg optional message to throw on error
 */
export function assert(condition: Boolean | any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg)
  }
}
