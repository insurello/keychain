import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

const jwk2pem = require("jwk-to-pem");

const JwkBase = t.partial({
  use: t.union([
    t.literal("sig"),
    t.literal("enc")
  ]),
  key_ops: t.array(t.string),
  kid: t.string,
  x5u: t.string,
  x5t: t.string,
  x5c: t.array(t.string),
  "x5t#S256": t.string
});

const JwkECPublic = t.intersection([
  JwkBase,
  t.intersection([
    t.type({
      kty: t.literal("EC"),
      crv: t.union([
        t.literal("P-256"),
        t.literal("P-384"),
        t.literal("P-521")
      ])
    }),
    t.partial({
      alg: t.union([
        t.literal("ES256"),
        t.literal("ES384"),
        t.literal("ES512")
      ]),
      x: t.string,
      y: t.string
    })
  ])
]);

const JwkECPrivate = t.intersection([
  JwkECPublic,
  t.type({
    d: t.string
  })
]);

const JwkRSAPublic = t.intersection([
  JwkBase,
  t.intersection([
    t.type({
      kty: t.literal("RSA"),
      e: t.string,
      n: t.string
    }),
    t.partial({
      alg: t.union([
        t.literal("RS256"),
        t.literal("RS384"),
        t.literal("RS512")
      ])
    })
  ])
]);

const JwkRSAPrivate = t.intersection([
  JwkRSAPublic,
  t.type({
    d: t.string,
    p: t.string,
    q: t.string,
    dp: t.string,
    dq: t.string,
    qi: t.string
  })
]);

const JwkECKey = t.union([
  JwkECPublic,
  JwkECPrivate
]);

const JwkRSAKey = t.union([
  JwkRSAPublic,
  JwkRSAPrivate
]);

const JwkKey = t.taggedUnion("kty", [
  JwkECKey,
  JwkRSAKey
]);

export interface ECPublic extends t.TypeOf<typeof JwkECPublic> {}
export interface ECPrivate extends t.TypeOf<typeof JwkECPrivate> {}
export interface RSAPublic extends t.TypeOf<typeof JwkRSAPublic> {}
export interface RSAPrivate extends t.TypeOf<typeof JwkRSAPrivate> {}

export type PrivateKey = ECPrivate | RSAPrivate;
export type PublicKey = ECPublic | RSAPublic;
export type Key = PrivateKey | PublicKey;

export const decode = (data: t.mixed): Key => {
  const result = JwkKey.decode(data);
  if (result.isRight()) {
    return result.value;
  } else {
    throw new Error(PathReporter.report(result).join(", "));
  }
};

export const isKey = (key: t.mixed): key is Key =>
  JwkKey.is(key);

export const isPrivate = (key: Key): key is PrivateKey =>
  JwkECPrivate.is(key) || JwkRSAPrivate.is(key);

export const isPublic = (key: Key): key is PublicKey =>
  t.exact(JwkECPublic).is(key) || t.exact(JwkECPublic).is(key);

export const isElliptic = (key: PrivateKey): key is ECPrivate =>
  key.kty === "EC";

export const isRSA = (key: PrivateKey): key is RSAPrivate =>
  key.kty === "RSA";

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

const assertNever = (x: never): never => {
  throw new Error("Unexpected object: " + x);
};

export const key2pem = (
  payload: PrivateKey | PublicKey,
  options?: { private: boolean }
): string =>
  jwk2pem(payload, options);
