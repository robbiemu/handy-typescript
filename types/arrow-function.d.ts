/* eslint-disable prettier/prettier */
type ArrowFunction<Params extends unknown[], T> = (() => T) | ((...args: Params) => T)

type Comparator<T> = ((value: T, index?: number, array?: T[]) => boolean) | ((value: T, index?: number, array?: T[]) => value is T)
