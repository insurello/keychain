export interface JwkBase {
  use?: "sig" | "enc";
  key_ops?: string[];
  kid?: string;
  x5u?: string;
  x5t?: string;
  x5c?: string[];
  "x5t#S256"?: string;
}

export interface JwkECPublic extends JwkBase {
  kty: "EC";
  alg?: "ES256" | "ES384" | "ES512";
  crv: "P-256" | "P-384" | "P-521";
  x?: string;
  y?: string;
}

export interface JwkECPrivate extends JwkECPublic {
  d: string;
}

export interface JwkRSAPublic extends JwkBase {
  kty: "RSA";
  alg?: "RS256" | "RS384" | "RS512";
  e: string;
  n: string;
}

export interface JwkRSAPrivate extends JwkRSAPublic {
  d: string;
  p: string;
  q: string;
  dp: string;
  dq: string;
  qi: string;
}

export type PrivateKey = JwkECPrivate | JwkRSAPrivate;
export type PublicKey = JwkECPublic | JwkRSAPublic;

export const isElliptic = (key: PrivateKey): key is JwkECPrivate =>
  key.kty === "EC";

export const isRSA = (key: PrivateKey): key is JwkRSAPrivate =>
  key.kty === "RSA";
