//


export type Kind<K extends string> = {kind: K};

export function mapObject<K extends string, T, U>(object: Record<K, T>, callback: (key: K, value: T) => U): Record<K, U> {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, callback(key as K, value as T)])) as Record<K, U>;
}

export function isTruthy<T>(arg: T): arg is NonNullable<T> {
  return !!arg;
}