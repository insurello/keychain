import * as jwt from "jsonwebtoken";
import * as jwk from "../src/jwk";
import * as token from "../src/token";

const privateKey: jwk.PrivateKey = {
  kty: "EC",
  d: "1IAwte8KIwBY3Re5aRmv6y5HvExaWgar786sPDrDI4M",
  use: "sig",
  crv: "P-256",
  kid: "test",
  x: "DPZRwPVoaxa5DkaH8He6YMKShjmZSJU2Q1cD6cxSVUA",
  y: "MVPseGR36U1twTbbC1NjyauRQHSJLnUYLtO6MmPcpck",
  alg: "ES256",
};

const publicKey: jwk.PublicKey = {
  kty: "EC",
  use: "sig",
  crv: "P-256",
  kid: "test",
  x: "DPZRwPVoaxa5DkaH8He6YMKShjmZSJU2Q1cD6cxSVUA",
  y: "MVPseGR36U1twTbbC1NjyauRQHSJLnUYLtO6MmPcpck",
  alg: "ES256",
};

describe("Token", () => {
  describe("issue()", () => {
    const accessToken = token.issue(
      { test: "test" },
      { issuer: "test", subject: "42" }
    );

    describe("with a private key", () => {
      it("should create a new token", () => {
        expect(accessToken(privateKey).then((t) => typeof t)).resolves.toBe(
          "string"
        );
      });
    });

    describe("with a public key", () => {
      it("should be rejected with an error", () => {
        expect(accessToken(publicKey as jwk.PrivateKey)).rejects.toBeInstanceOf(
          Error
        );
      });
    });

    describe("with an invalid private key", () => {
      it("should be rejected with an error", () => {
        expect(
          accessToken(({} as unknown) as jwk.PrivateKey)
        ).rejects.toBeInstanceOf(Error);
      });
    });

    describe("payload", () => {
      let payload: any;

      beforeEach(() =>
        accessToken(privateKey)
          .then((str) => jwt.decode(str))
          .then((data) => (payload = data))
      );

      it("should be an object", () => {
        expect(typeof payload).toBe("object");
      });

      it("should include a subject", () => {
        expect(payload.sub).toBe("42");
      });

      it("should include an issuer", () => {
        expect(payload.iss).toBe("test");
      });

      it("should include an expiration time", () => {
        expect(typeof payload.exp).toBe("number");
      });

      it("should include custom payload items", () => {
        expect(payload.test).toBe("test");
      });
    });
  });

  describe("verify()", () => {
    describe("the token is valid and we have the key used to sign it", () => {
      const accessToken = token.issue(
        { hello: "world" },
        {
          issuer: "test",
          subject: "42",
        }
      )(privateKey);

      it("should eventually resolve with an object", () =>
        accessToken.then((t) =>
          expect(
            token
              .verify(t)(publicKey)
              .then((t2) => typeof t2)
          ).resolves.toBe("object")
        ));

      it("should eventually resolve with expiration date", () =>
        accessToken.then((t) =>
          expect(token.verify(t)(publicKey)).resolves.toHaveProperty("exp")
        ));

      it("should eventually resolve with issued date", () =>
        accessToken.then((t) =>
          expect(token.verify(t)(publicKey)).resolves.toHaveProperty("iat")
        ));

      it("should eventually resolve with the token payload", () =>
        accessToken.then((t) =>
          expect(token.verify(t)(publicKey)).resolves.toMatchObject({
            hello: "world",
          })
        ));

      it("should eventually resolve with the token options", () =>
        accessToken.then((t) =>
          expect(token.verify(t)(publicKey)).resolves.toMatchObject({
            iss: "test",
            sub: "42",
          })
        ));
    });

    describe("the token signature is invalid", () => {
      it("should be rejected with an error", () => {
        return expect(token.verify("wrong")(publicKey)).rejects.toBeInstanceOf(
          Error
        );
      });
    });

    describe("the token has expired", () => {
      it("should be rejected with an error", () => {
        return token
          .issue(
            {},
            { expiresIn: "-1 day" }
          )(privateKey)
          .then((accessToken) => {
            return expect(
              token.verify(accessToken)(publicKey)
            ).rejects.toBeInstanceOf(Error);
          });
      });
    });

    describe("the token is not yet valid", () => {
      it("should be rejected with an error", () => {
        return token
          .issue(
            {},
            { notBefore: "1 day" }
          )(privateKey)
          .then((accessToken) => {
            return expect(
              token.verify(accessToken)(publicKey)
            ).rejects.toBeInstanceOf(Error);
          });
      });
    });

    describe("there is no matching public key", () => {
      it("should be rejected with an error", () => {
        return expect(
          token
            .issue({})(privateKey)
            .then((accessToken) => token.verify(accessToken)({ keys: [] }))
        ).rejects.toHaveProperty("message", "unknown key test");
      });
    });
  });
});
