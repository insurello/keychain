import * as jwk from "./jwk";
export interface KeySet<T extends KeySetEntry> {
    keys: T[];
}
export interface KeySetEntry {
    kid?: string;
}
export declare const selectKey: (kid: string) => <T extends KeySetEntry>(keyOrSet: T | KeySet<T>) => T;
export declare const key2pem: (payload: jwk.JwkECPublic | jwk.JwkECPrivate | jwk.JwkRSAPublic | jwk.JwkRSAPrivate, options?: {
    private: boolean;
} | undefined) => string;
export declare const private2public: (privKey: jwk.PrivateKey) => jwk.PublicKey;
