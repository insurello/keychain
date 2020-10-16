/// <reference types="node" />
import * as jwt from "jsonwebtoken";
import * as jwk from "./jwk";
import * as keys from "./keys";
export declare type Token = string;
export declare type Payload = string | object | Buffer;
export declare const ttl: number;
export declare const verify: (token: Token) => (publicKeys: jwk.PublicKey | keys.KeySet<jwk.PublicKey>) => Promise<Payload>;
export declare const issue: (payload: Payload, options?: jwt.SignOptions | undefined) => (privateKey: jwk.PrivateKey) => Promise<Token>;
