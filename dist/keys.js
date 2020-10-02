"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectKey = exports.decode = void 0;
const jwk = require("./jwk");
exports.decode = (data) => {
    if (data &&
        data instanceof Object &&
        data.keys &&
        data.keys instanceof Array) {
        const keys = data.keys
            .filter(jwk.isKey)
            .map(jwk.decode)
            .reduce((set, key) => set.add(key), new Set());
        return { keys: Array.from(keys) };
    }
    else {
        throw new Error("is not a valid JWK key set");
    }
};
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
const isKeySet = (key) => key.keys !== undefined;
