import { Key } from "../../jwk";

export = jwkToBuffer;

declare function jwkToBuffer(jwk: Key, opts?: jwkToBuffer.Options): string;

declare namespace jwkToBuffer {
  interface Options {
    private: boolean;
  }
}
