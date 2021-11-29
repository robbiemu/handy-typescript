/* eslint-disable prettier/prettier */
export type ArrowFunction<Params extends unknown[], T> = (() => T) | ((...args: Params) => T)

export type Comparator<T> = ((value: T, index?: number, array?: T[]) => boolean) | ((value: T, index?: number, array?: T[]) => value is T)

export type Reducer<T> = (
  previousValue: any,
  currentValue: any,
  currentIndex: number,
  array: any[],
) => T