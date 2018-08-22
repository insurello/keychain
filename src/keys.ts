import * as jwk2pem from "jwk-to-pem";

export type PrivateKey = jwk2pem.JwkECPrivate | jwk2pem.JwkRSAPrivate;
export type PublicKey = jwk2pem.JwkECPublic | jwk2pem.JwkRSAPublic;
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

export const key2pem = jwk2pem;

export const private2public = (privKey: PrivateKey): PublicKey => {
  if (isElliptic(privKey)) {
    const { d, ...publicKey } = privKey;
    return publicKey;
  } else if (isRSA(privKey)) {
    const { d, p, q, dp, dq, qi, ...publicKey } = privKey;
    return publicKey;
  } else {
    return assertNever(privKey);
  }
};

const isElliptic = (key: PrivateKey): key is jwk2pem.JwkECPrivate =>
  key.kty === "EC";

const isRSA = (key: PrivateKey): key is jwk2pem.JwkRSAPrivate =>
  key.kty === "RSA";

const assertNever = (x: never): never => {
  throw new Error("Unexpected object: " + x);
};
