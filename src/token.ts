import * as jwt from "jsonwebtoken";
import * as jwk from "./jwk";
import * as keys from "./keys";

export type Token =
  string;

export type Payload =
  string | object | Buffer;

export const ttl =
  process.env.TOKEN_TTL ?
    parseInt(process.env.TOKEN_TTL, 10) :
    60 * 60 * 24 * 365;

export const verify = (token: Token) =>
  (publicKeys: jwk.PublicKey | keys.KeySet<jwk.PublicKey>):
    Promise<Payload> => {
  const data: any = jwt.decode(token, { complete: true });
  if (data && data.header && data.header.kid) {
    return new Promise<Payload>((resolve, reject) => {
      const key = keys.selectKey(data.header.kid)(publicKeys);
      jwt.verify(token, jwk.key2pem(key),
        (err: Error, payload: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(payload);
          }
        });
    });
  } else {
    return Promise.reject(new Error("missing key id in payload"));
  }
};

export const issue = (
  payload: Payload,
  options?: jwt.SignOptions
) => (privateKey: jwk.PrivateKey): Promise<Token> => {
  const opt = options || {};
  if ((payload as any).exp === undefined && opt.expiresIn === undefined) {
    opt.expiresIn = ttl;
  }
  opt.keyid = privateKey.kid;
  opt.algorithm = privateKey.alg;
  return new Promise<Token>((resolve, reject) => {
    jwt.sign(payload, jwk.key2pem(privateKey, { private: true }), opt,
      (err: Error, encoded: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(encoded);
        }
      });
  });
};
