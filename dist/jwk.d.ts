import * as t from "io-ts";
declare const JwkECPublic: t.IntersectionType<[t.PartialType<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}, t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.mixed>, t.IntersectionType<[t.InterfaceType<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}, t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}>, t.mixed>, t.PartialType<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}, t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.mixed>], t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.mixed>], t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.mixed>;
declare const JwkECPrivate: t.IntersectionType<[t.IntersectionType<[t.PartialType<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}, t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.mixed>, t.IntersectionType<[t.InterfaceType<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}, t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}>, t.mixed>, t.PartialType<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}, t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.mixed>], t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.mixed>], t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}>, t.mixed>, t.InterfaceType<{
    d: t.StringType;
}, t.TypeOfProps<{
    d: t.StringType;
}>, t.OutputOfProps<{
    d: t.StringType;
}>, t.mixed>], t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.TypeOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}> & t.TypeOfProps<{
    d: t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.OutputOfProps<{
    kty: t.LiteralType<"EC">;
    crv: t.UnionType<(t.LiteralType<"P-256"> | t.LiteralType<"P-384"> | t.LiteralType<"P-521">)[], "P-256" | "P-384" | "P-521", "P-256" | "P-384" | "P-521", t.mixed>;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"ES256"> | t.LiteralType<"ES384"> | t.LiteralType<"ES512">)[], "ES256" | "ES384" | "ES512", "ES256" | "ES384" | "ES512", t.mixed>;
    x: t.StringType;
    y: t.StringType;
}> & t.OutputOfProps<{
    d: t.StringType;
}>, t.mixed>;
declare const JwkRSAPublic: t.IntersectionType<[t.PartialType<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}, t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.mixed>, t.IntersectionType<[t.InterfaceType<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}, t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}>, t.mixed>, t.PartialType<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}, t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.mixed>], t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.mixed>;
declare const JwkRSAPrivate: t.IntersectionType<[t.IntersectionType<[t.PartialType<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}, t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}>, t.mixed>, t.IntersectionType<[t.InterfaceType<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}, t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}>, t.mixed>, t.PartialType<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}, t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.mixed>], t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}>, t.mixed>, t.InterfaceType<{
    d: t.StringType;
    p: t.StringType;
    q: t.StringType;
    dp: t.StringType;
    dq: t.StringType;
    qi: t.StringType;
}, t.TypeOfProps<{
    d: t.StringType;
    p: t.StringType;
    q: t.StringType;
    dp: t.StringType;
    dq: t.StringType;
    qi: t.StringType;
}>, t.OutputOfProps<{
    d: t.StringType;
    p: t.StringType;
    q: t.StringType;
    dp: t.StringType;
    dq: t.StringType;
    qi: t.StringType;
}>, t.mixed>], t.TypeOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.TypeOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.TypeOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}> & t.TypeOfProps<{
    d: t.StringType;
    p: t.StringType;
    q: t.StringType;
    dp: t.StringType;
    dq: t.StringType;
    qi: t.StringType;
}>, t.OutputOfPartialProps<{
    use: t.UnionType<(t.LiteralType<"sig"> | t.LiteralType<"enc">)[], "sig" | "enc", "sig" | "enc", t.mixed>;
    key_ops: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    kid: t.StringType;
    x5u: t.StringType;
    x5t: t.StringType;
    x5c: t.ArrayType<t.StringType, string[], string[], t.mixed>;
    "x5t#S256": t.StringType;
}> & t.OutputOfProps<{
    kty: t.LiteralType<"RSA">;
    e: t.StringType;
    n: t.StringType;
}> & t.OutputOfPartialProps<{
    alg: t.UnionType<(t.LiteralType<"RS256"> | t.LiteralType<"RS384"> | t.LiteralType<"RS512">)[], "RS256" | "RS384" | "RS512", "RS256" | "RS384" | "RS512", t.mixed>;
}> & t.OutputOfProps<{
    d: t.StringType;
    p: t.StringType;
    q: t.StringType;
    dp: t.StringType;
    dq: t.StringType;
    qi: t.StringType;
}>, t.mixed>;
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
export declare const decode: (data: t.mixed) => Key;
export declare const isKey: (key: t.mixed) => key is Key;
export declare const isPrivate: (key: Key) => key is PrivateKey;
export declare const isPublic: (key: Key) => key is PublicKey;
export declare const isElliptic: (key: PrivateKey) => key is ECPrivate;
export declare const isRSA: (key: PrivateKey) => key is RSAPrivate;
export declare const private2public: (privKey: PrivateKey) => PublicKey;
export declare const key2pem: (payload: Key, options?: {
    private: boolean;
} | undefined) => string;
export {};
