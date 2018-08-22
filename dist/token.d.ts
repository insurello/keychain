/// <reference types="node" />
import * as jwt from "jsonwebtoken";
import * as jwk from "./jwk";
import * as keys from "./keys";
export declare type Token = string;
export declare type Payload = string | object | Buffer;
export declare const ttl: number;
export declare const verify: (token: string) => (publicKeys: jwk.JwkECPublic | jwk.JwkRSAPublic | keys.KeySet<jwk.PublicKey>) => Promise<string | object | Buffer>;
export declare const issue: (payload: string | object | Buffer, options?: jwt.SignOptions | undefined) => (privateKey: jwk.PrivateKey) => Promise<string>;
