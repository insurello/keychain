import * as t from "io-ts";
declare const JwkECPublic: t.IntersectionC<[t.PartialC<{
    use: t.UnionC<[t.LiteralC<"sig">, t.LiteralC<"enc">]>;
    key_ops: t.ArrayC<t.StringC>;
    kid: t.StringC;
    x5u: t.StringC;
    x5t: t.StringC;
    x5c: t.ArrayC<t.StringC>;
    "x5t#S256": t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    kty: t.LiteralC<"EC">;
    crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">, t.LiteralC<"P-521">]>;
}>, t.PartialC<{
    alg: t.UnionC<[t.LiteralC<"ES256">, t.LiteralC<"ES384">, t.LiteralC<"ES512">]>;
    x: t.StringC;
    y: t.StringC;
}>]>]>;
declare const JwkECPrivate: t.IntersectionC<[t.IntersectionC<[t.PartialC<{
    use: t.UnionC<[t.LiteralC<"sig">, t.LiteralC<"enc">]>;
    key_ops: t.ArrayC<t.StringC>;
    kid: t.StringC;
    x5u: t.StringC;
    x5t: t.StringC;
    x5c: t.ArrayC<t.StringC>;
    "x5t#S256": t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    kty: t.LiteralC<"EC">;
    crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">, t.LiteralC<"P-521">]>;
}>, t.PartialC<{
    alg: t.UnionC<[t.LiteralC<"ES256">, t.LiteralC<"ES384">, t.LiteralC<"ES512">]>;
    x: t.StringC;
    y: t.StringC;
}>]>]>, t.TypeC<{
    d: t.StringC;
}>]>;
declare const JwkRSAPublic: t.IntersectionC<[t.PartialC<{
    use: t.UnionC<[t.LiteralC<"sig">, t.LiteralC<"enc">]>;
    key_ops: t.ArrayC<t.StringC>;
    kid: t.StringC;
    x5u: t.StringC;
    x5t: t.StringC;
    x5c: t.ArrayC<t.StringC>;
    "x5t#S256": t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    kty: t.LiteralC<"RSA">;
    e: t.StringC;
    n: t.StringC;
}>, t.PartialC<{
    alg: t.UnionC<[t.LiteralC<"RS256">, t.LiteralC<"RS384">, t.LiteralC<"RS512">]>;
}>]>]>;
declare const JwkRSAPrivate: t.IntersectionC<[t.IntersectionC<[t.PartialC<{
    use: t.UnionC<[t.LiteralC<"sig">, t.LiteralC<"enc">]>;
    key_ops: t.ArrayC<t.StringC>;
    kid: t.StringC;
    x5u: t.StringC;
    x5t: t.StringC;
    x5c: t.ArrayC<t.StringC>;
    "x5t#S256": t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    kty: t.LiteralC<"RSA">;
    e: t.StringC;
    n: t.StringC;
}>, t.PartialC<{
    alg: t.UnionC<[t.LiteralC<"RS256">, t.LiteralC<"RS384">, t.LiteralC<"RS512">]>;
}>]>]>, t.TypeC<{
    d: t.StringC;
    p: t.StringC;
    q: t.StringC;
    dp: t.StringC;
    dq: t.StringC;
    qi: t.StringC;
}>]>;
export interface ECPublic extends t.TypeOf<typeof JwkECPublic> {
}
export interface ECPrivate extends t.TypeOf<typeof JwkECPrivate> {
}
export interface RSAPublic extends t.TypeOf<typeof JwkRSAPublic> {
}
export interface RSAPrivate extends t.TypeOf<typeof JwkRSAPrivate> {
}
export declare type PrivateKey = ECPrivate | RSAPrivate;
export declare type PublicKey = ECPublic | RSAPublic;
export declare type Key = PrivateKey | PublicKey;
export declare const decode: (data: unknown) => Key;
export declare const isKey: (key: unknown) => key is Key;
export declare const isPrivate: (key: Key) => key is PrivateKey;
export declare const isPublic: (key: Key) => key is PublicKey;
export declare const isElliptic: (key: PrivateKey) => key is ECPrivate;
export declare const isRSA: (key: PrivateKey) => key is RSAPrivate;
export declare const private2public: (privKey: PrivateKey) => PublicKey;
export declare const key2pem: (payload: Key, options?: {
    private: boolean;
} | undefined) => string;
export {};
