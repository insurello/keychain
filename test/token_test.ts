import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import * as jwt from "jsonwebtoken";
import * as jwk from "../src/jwk";
import * as token from "../src/token";

chai.should();
chai.use(chaiAsPromised);

const privateKey: jwk.PrivateKey = {
  kty: "EC",
  d: "1IAwte8KIwBY3Re5aRmv6y5HvExaWgar786sPDrDI4M",
  use: "sig",
  crv: "P-256",
  kid: "test",
  x: "DPZRwPVoaxa5DkaH8He6YMKShjmZSJU2Q1cD6cxSVUA",
  y: "MVPseGR36U1twTbbC1NjyauRQHSJLnUYLtO6MmPcpck",
  alg: "ES256"
};

const publicKey: jwk.PublicKey = {
  kty: "EC",
  use: "sig",
  crv: "P-256",
  kid: "test",
  x: "DPZRwPVoaxa5DkaH8He6YMKShjmZSJU2Q1cD6cxSVUA",
  y: "MVPseGR36U1twTbbC1NjyauRQHSJLnUYLtO6MmPcpck",
  alg: "ES256"
};

describe("Token", () => {

  describe("issue()", () => {
    const accessToken = token.issue(
      { test: "test" },
      { issuer: "test", subject: "42" }
    );

    describe("with a private key", () => {
      it("should create a new token", () => {
        accessToken(privateKey).should.eventually.be.a("string");
      });
    });

    describe("with a public key", () => {
      it("should be rejected with an error", () => {
        accessToken(publicKey as jwk.PrivateKey).should.be.rejectedWith(Error);
      });
    });

    describe("with an invalid private key", () => {
      it("should be rejected with an error", () => {
        accessToken({} as jwk.PrivateKey).should.be.rejectedWith(Error);
      });
    });

    describe("payload", () => {
      let payload: any;

      beforeEach(() =>
        accessToken(privateKey).then((str) => jwt.decode(str))
          .then((data) => payload = data)
      );

      it("should be an object", () => {
        payload.should.be.a("object");
      });

      it("should include a subject", () => {
        payload.sub.should.equal("42");
      });

      it("should include an issuer", () => {
        payload.iss.should.equal("test");
      });

      it("should include an expiration time", () => {
        payload.exp.should.be.a("number");
      });

      it("should include custom payload items", () => {
        payload.test.should.equal("test");
      });

    });

  });

  describe("verify()", () => {

    describe("the token is valid and we have the key used to sign it", () => {
      const accessToken = token.issue({ hello: "world" }, {
        issuer: "test",
        subject: "42"
      })(privateKey);

      it("should eventually resolve with an object", () =>
        accessToken.then((t) =>
          token.verify(t)(publicKey).should.eventually.be.a("object")));

      it("should eventually resolve with expiration date", () =>
        accessToken.then((t) =>
          token.verify(t)(publicKey).should.eventually.have.property("exp")));

      it("should eventually resolve with issued date", () =>
        accessToken.then((t) =>
          token.verify(t)(publicKey).should.eventually.have.property("iat")));

      it("should eventually resolve with the token payload", () =>
        accessToken.then((t) =>
          token.verify(t)(publicKey).should.eventually.include({
            hello: "world"
          })));

      it("should eventually resolve with the token options", () =>
        accessToken.then((t) =>
          token.verify(t)(publicKey).should.eventually.include({
            iss: "test",
            sub: "42"
          })));
    });

    describe("the token signature is invalid", () => {
      it("should be rejected with an error", () => {
        return token.verify("wrong")(publicKey).should.be.rejectedWith(Error);
      });
    });

    describe("the token has expired", () => {
      it("should be rejected with an error", () => {
        return token.issue({}, { expiresIn: "-1 day" })(privateKey)
          .then((accessToken) => {
            return token.verify(accessToken)(publicKey)
              .should.be.rejectedWith(Error);
          });
      });
    });

    describe("the token is not yet valid", () => {
      it("should be rejected with an error", () => {
        return token.issue({}, { notBefore: "1 day" })(privateKey)
          .then((accessToken) => {
            return token.verify(accessToken)(publicKey)
              .should.be.rejectedWith(Error);
          });
      });
    });

    describe("there is no matching public key", () => {
      it("should be rejected with an error", () => {
        return token.issue({})(privateKey)
          .then((accessToken) => {
            return token.verify(accessToken)({ keys: [] })
              .should.be.rejectedWith(Error, /unknown key/i);
          });
      });
    });

  });

});
