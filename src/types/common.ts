export type Common<T, U> = Record<
  Extract<keyof T, keyof U>,
  U[Extract<keyof T, keyof U>]
>
