"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key2pem = exports.private2public = exports.isRSA = exports.isElliptic = exports.isPublic = exports.isPrivate = exports.isKey = exports.decode = void 0;
const E = require("fp-ts/lib/Either");
const t = require("io-ts");
const PathReporter_1 = require("io-ts/lib/PathReporter");
const jwk2pem = require("jwk-to-pem");
const JwkBase = t.partial({
    use: t.union([t.literal("sig"), t.literal("enc")]),
    key_ops: t.array(t.string),
    kid: t.string,
    x5u: t.string,
    x5t: t.string,
    x5c: t.array(t.string),
    "x5t#S256": t.string,
});
const JwkECPublic = t.intersection([
    JwkBase,
    t.intersection([
        t.type({
            kty: t.literal("EC"),
            crv: t.union([
                t.literal("P-256"),
                t.literal("P-384"),
                t.literal("P-521"),
            ]),
        }),
        t.partial({
            alg: t.union([
                t.literal("ES256"),
                t.literal("ES384"),
                t.literal("ES512"),
            ]),
            x: t.string,
            y: t.string,
        }),
    ]),
]);
const JwkECPrivate = t.intersection([
    JwkECPublic,
    t.type({
        d: t.string,
    }),
]);
const JwkRSAPublic = t.intersection([
    JwkBase,
    t.intersection([
        t.type({
            kty: t.literal("RSA"),
            e: t.string,
            n: t.string,
        }),
        t.partial({
            alg: t.union([
                t.literal("RS256"),
                t.literal("RS384"),
                t.literal("RS512"),
            ]),
        }),
    ]),
]);
const JwkRSAPrivate = t.intersection([
    JwkRSAPublic,
    t.type({
        d: t.string,
        p: t.string,
        q: t.string,
        dp: t.string,
        dq: t.string,
        qi: t.string,
    }),
]);
const JwkECKey = t.union([JwkECPublic, JwkECPrivate]);
const JwkRSAKey = t.union([JwkRSAPublic, JwkRSAPrivate]);
const JwkKey = t.union([JwkECKey, JwkRSAKey]);
exports.decode = (data) => {
    const result = JwkKey.decode(data);
    if (E.isRight(result)) {
        return result.right;
    }
    else {
        throw new Error(PathReporter_1.PathReporter.report(result).join(", "));
    }
};
exports.isKey = (key) => JwkKey.is(key);
exports.isPrivate = (key) => JwkECPrivate.is(key) || JwkRSAPrivate.is(key);
exports.isPublic = (key) => !exports.isPrivate(key) && (JwkECPublic.is(key) || JwkRSAPublic.is(key));
exports.isElliptic = (key) => key.kty === "EC";
exports.isRSA = (key) => key.kty === "RSA";
exports.private2public = (privKey) => {
    if (exports.isElliptic(privKey)) {
        const { d, ...publicKey } = privKey;
        return publicKey;
    }
    else if (exports.isRSA(privKey)) {
        const { d, p, q, dp, dq, qi, ...publicKey } = privKey;
        return publicKey;
    }
    else {
        return assertNever(privKey);
    }
};
const assertNever = (x) => {
    throw new Error("Unexpected object: " + x);
};
exports.key2pem = (payload, options) => jwk2pem(payload, options);
