/**
 * comparitor to find numeric values
 * @param value expected to be numeric
 */
export const isNumeric = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Number]'
};
