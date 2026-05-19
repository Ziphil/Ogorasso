//


export type Kind<K extends string> = {kind: K};

export function isTruthy<T>(arg: T): arg is NonNullable<T> {
  return !!arg;
}