"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isElliptic = (key) => key.kty === "EC";
exports.isRSA = (key) => key.kty === "RSA";
