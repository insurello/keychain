import * as jwk from "./jwk";

const jwk2pem = require("jwk-to-pem");

export interface KeySet<T extends KeySetEntry> { keys: T[] }
export interface KeySetEntry { kid?: string }

const isKeySet = <T extends KeySetEntry>(
  key: T | KeySet<T>
): key is KeySet<T> =>
    (key as KeySet<T>).keys !== undefined;

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

export const key2pem = (
  payload: jwk.PrivateKey | jwk.PublicKey,
  options?: { private: boolean }
): string =>
  jwk2pem(payload, options);

export const private2public = (privKey: jwk.PrivateKey): jwk.PublicKey => {
  if (jwk.isElliptic(privKey)) {
    const { d, ...publicKey } = privKey;
    return publicKey;
  } else if (jwk.isRSA(privKey)) {
    const { d, p, q, dp, dq, qi, ...publicKey } = privKey;
    return publicKey;
  } else {
    return assertNever(privKey);
  }
};

const assertNever = (x: never): never => {
  throw new Error("Unexpected object: " + x);
};
