import * as jwk2pem from "jwk-to-pem";
export declare type PrivateKey = jwk2pem.JwkECPrivate | jwk2pem.JwkRSAPrivate;
export declare type PublicKey = jwk2pem.JwkECPublic | jwk2pem.JwkRSAPublic;
export interface KeySet<T extends KeySetEntry> {
    keys: T[];
}
export interface KeySetEntry {
    kid?: string;
}
export declare const selectKey: (kid: string) => <T extends KeySetEntry>(keyOrSet: T | KeySet<T>) => T;
export declare const key2pem: typeof jwk2pem;
export declare const private2public: (privKey: PrivateKey) => PublicKey;
