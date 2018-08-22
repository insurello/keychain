/// <reference path="../src/jwk-to-pem.d.ts" />
/// <reference types="node" />
import * as jwt from "jsonwebtoken";
import * as keys from "./keys";
export declare type Token = string;
export declare type Payload = string | object | Buffer;
export declare const ttl: number;
export declare const verify: (token: string) => (publicKeys: import("jwk-to-pem").JwkECPublic | import("jwk-to-pem").JwkRSAPublic | keys.KeySet<keys.PublicKey>) => Promise<string | object | Buffer>;
export declare const issue: (payload: string | object | Buffer, options?: jwt.SignOptions | undefined) => (privateKey: keys.PrivateKey) => Promise<string>;
