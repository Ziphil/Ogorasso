//


export type Kind<K extends string> = {kind: K};

export function mapObjectValue<K extends string, T, U>(object: Record<K, T>, callback: (key: K, value: T) => U): Record<K, U> {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, callback(key as K, value as T)])) as Record<K, U>;
}

export function mapObjectKey<K extends string, L extends string, T>(object: Record<K, T>, callback: (key: K) => L): Record<L, T> {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [callback(key as K), value as T])) as Record<L, T>;
}

export function isTruthy<T>(arg: T): arg is NonNullable<T> {
  return !!arg;
}