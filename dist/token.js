"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const keys = require("./keys");
exports.ttl = process.env.TOKEN_TTL ?
    parseInt(process.env.TOKEN_TTL, 10) :
    60 * 60 * 24 * 365;
exports.verify = (token) => (publicKeys) => {
    const data = jwt.decode(token, { complete: true });
    if (data && data.header && data.header.kid) {
        const key = keys.selectKey(data.header.kid)(publicKeys);
        return new Promise((resolve, reject) => {
            jwt.verify(token, keys.key2pem(key), (err, payload) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(payload);
                }
            });
        });
    }
    else {
        return Promise.reject(new Error("missing key id in payload"));
    }
};
exports.issue = (payload, options) => (privateKey) => {
    const opt = options || {};
    if (payload.exp === undefined && opt.expiresIn === undefined) {
        opt.expiresIn = exports.ttl;
    }
    opt.keyid = privateKey.kid;
    opt.algorithm = privateKey.alg;
    return new Promise((resolve, reject) => {
        jwt.sign(payload, keys.key2pem(privateKey, { private: true }), opt, (err, encoded) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(encoded);
            }
        });
    });
};
