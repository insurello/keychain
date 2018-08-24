import * as _jwk from "./jwk";
import * as _keys from "./keys";
import * as _token from "./token";

export type Key = _jwk.Key;
export type PrivateKey = _jwk.PrivateKey;
export type PublicKey = _jwk.PublicKey;

export type ECPublic = _jwk.ECPublic;
export type ECPrivate = _jwk.ECPrivate;
export type RSAPublic = _jwk.RSAPublic;
export type RSAPrivate = _jwk.RSAPrivate;

export type KeySet<T> = _keys.KeySet<T>;
export type KeySetEntry = _keys.KeySetEntry;

export type Token = _token.Token;
export type Payload = _token.Payload;

export const jwk = _jwk;
export const keys = _keys;
export const token = _token;
