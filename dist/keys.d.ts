import * as jwk from "./jwk";
export interface KeySet<T extends KeySetEntry> {
    keys: T[];
}
export interface KeySetEntry {
    kid?: string;
}
export declare const decode: (data: any) => KeySet<jwk.Key>;
export declare const selectKey: (kid: string) => <T extends KeySetEntry>(keyOrSet: T | KeySet<T>) => T;
