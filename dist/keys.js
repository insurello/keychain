"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwk = require("./jwk");
const jwk2pem = require("jwk-to-pem");
const isKeySet = (key) => key.keys !== undefined;
exports.selectKey = (kid) => (keyOrSet) => {
    if (isKeySet(keyOrSet)) {
        const keys = keyOrSet.keys.filter((key) => key.kid === kid);
        if (keys.length === 0) {
            throw new Error(`unknown key ${kid}`);
        }
        else {
            return keys[0];
        }
    }
    else {
        if (keyOrSet.kid === kid) {
            return keyOrSet;
        }
        else {
            throw new Error(`unknown key ${kid}`);
        }
    }
};
exports.key2pem = (payload, options) => jwk2pem(payload, options);
exports.private2public = (privKey) => {
    if (jwk.isElliptic(privKey)) {
        const { d } = privKey, publicKey = __rest(privKey, ["d"]);
        return publicKey;
    }
    else if (jwk.isRSA(privKey)) {
        const { d, p, q, dp, dq, qi } = privKey, publicKey = __rest(privKey, ["d", "p", "q", "dp", "dq", "qi"]);
        return publicKey;
    }
    else {
        return assertNever(privKey);
    }
};
const assertNever = (x) => {
    throw new Error("Unexpected object: " + x);
};
