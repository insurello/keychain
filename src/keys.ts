import * as jwk from "./jwk";

export interface KeySet<T extends KeySetEntry> { keys: T[] }
export interface KeySetEntry { kid?: string }

export const decode = (data: any): KeySet<jwk.Key> => {
  if (data && data instanceof Object &&
      data.keys && data.keys instanceof Array) {
    const keys: Set<jwk.Key> = data.keys
      .filter(jwk.isKey)
      .map(jwk.decode)
      .reduce((set: Set<jwk.Key>, key: jwk.Key) =>
        set.add(key), new Set());
    return { keys: Array.from(keys) };
  } else {
    throw new Error("is not a valid JWK key set");
  }
};

export const selectKey = (kid: string) =>
  <T extends KeySetEntry>(keyOrSet: T | KeySet<T>): T => {
    if (isKeySet(keyOrSet)) {
      const keys = keyOrSet.keys.filter((key) => key.kid === kid);
      if (keys.length === 0) {
        throw new Error(`unknown key ${kid}`);
      } else {
        return keys[0];
      }
    } else {
      if (keyOrSet.kid === kid) {
        return keyOrSet;
      } else {
        throw new Error(`unknown key ${kid}`);
      }
    }
};

const isKeySet = <T extends KeySetEntry>(
  key: T | KeySet<T>
): key is KeySet<T> =>
    (key as KeySet<T>).keys !== undefined;
