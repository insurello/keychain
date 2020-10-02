import * as jwk from "../src/jwk";

const key: jwk.PrivateKey = {
  kty: "EC",
  d: "1IAwte8KIwBY3Re5aRmv6y5HvExaWgar786sPDrDI4M",
  use: "sig",
  crv: "P-256",
  kid: "test-1",
  x: "DPZRwPVoaxa5DkaH8He6YMKShjmZSJU2Q1cD6cxSVUA",
  y: "MVPseGR36U1twTbbC1NjyauRQHSJLnUYLtO6MmPcpck",
  alg: "ES256",
};

const rsaKey: jwk.PrivateKey = {
  kty: "RSA",
  d:
    "Dz3oyaVnoM8TbJGrAkq87ldmg62gHVOV79NApMmOZpM1wswqUXwx77RrdNjPA31" +
    "EsEiO5DS5RCTvlMDjuT_m7LNa7vR-XS5GG0hUIAKBZN2NVtfvW_b-CldugqRIkH" +
    "1wAafo_zvxb4QrvcTBefhv8mWCAwZbKNll5l3rjgTpyh5ZGX7HEk6TzTArm0Gdo" +
    "xX1lBgC76FX6m_0TVBsC0pxkvGq4byEnTR_DLyiLvpZrWo3EunzTtWXDFP5qHGP" +
    "AjHbKn3cM0CZDU5-_fjB01KDZFUMXsTBErSRKA8T5_5NWXoNF9qqQALOWkvhE0l" +
    "hd3VT-dvr-QbsZ1FPeAOGSUmCMQ",
  e: "AQAB",
  use: "enc",
  kid: "test-2",
  alg: "RS384",
  n:
    "qm6uyDsb64B4A14FgHKUHhC4-2t73sqMiCeBgjbpguM7ApLlYm4hzYXs7JMacEQ" +
    "ldOUDqKBG-M1G9s3r6fg7mpcy_IY89gaFSZ4L-5KD-BeCDF99e-5xAtDodeEg1h" +
    "zDHb3P1DATXqJdS3Re0G4nWNyukBFkYd1DvDP5W7OkO5cKJACE1oIHpBO6CRja_" +
    "6WDIY68k9GZ1Hy_-BWo56yPivNDMlC1Nm9rsczupfomW95Ne1LxVAiXFK0lGldz" +
    "SsMRYo2cTtaTCoJVd9Z1R9YLwymCUIaVq-U7oRJYFPWQgX5k4bWSQNSi48OoX_x" +
    "5QwLt7PdTchJjXd3SoSew7HKy6w",
  p: "test",
  q: "test",
  dp: "test",
  dq: "test",
  qi: "test",
};

describe("JWK", () => {
  describe("decode()", () => {
    describe("a valid JWK key", () => {
      it("should return the validated key", () => {
        expect(jwk.decode(key)).toBe(key);
      });
    });

    describe("an invalid JWK key", () => {
      it("should throw an error", () => {
        expect(() => {
          jwk.decode({});
        }).toThrowError();
      });
    });
  });

  describe("isPrivate()", () => {
    describe("with a private key", () => {
      it("should return true", () => expect(jwk.isPrivate(key)).toBe(true));
    });
    describe("with a public key", () => {
      it("should return false", () =>
        expect(jwk.isPrivate(jwk.private2public(key))).toBe(false));
    });
    describe("with an invalid key", () => {
      it("should return false", () =>
        expect(jwk.isPrivate(({} as unknown) as jwk.Key)).toBe(false));
    });
  });

  describe("isPublic()", () => {
    describe("with a private key", () => {
      it("should return false", () => expect(jwk.isPublic(key)).toBe(false));
    });
    describe("with a public key", () => {
      it("should return true", () =>
        expect(jwk.isPublic(jwk.private2public(key))).toBe(true));
    });
    describe("with an invalid key", () => {
      it("should return false", () =>
        expect(jwk.isPublic(({} as unknown) as jwk.Key)).toBe(false));
    });
  });

  describe("private2public()", () => {
    describe("with an elliptic key", () => {
      it("should remove the 'd' property", () => {
        expect(jwk.private2public(key)).toEqual({
          kty: "EC",
          use: "sig",
          crv: "P-256",
          kid: "test-1",
          x: "DPZRwPVoaxa5DkaH8He6YMKShjmZSJU2Q1cD6cxSVUA",
          y: "MVPseGR36U1twTbbC1NjyauRQHSJLnUYLtO6MmPcpck",
          alg: "ES256",
        });
      });
    });

    describe("with an RSA key", () => {
      it("should remove the 'd', 'p', 'q', 'dp', 'dq', 'qi' properties", () => {
        expect(jwk.private2public(rsaKey)).toEqual({
          kty: "RSA",
          e: "AQAB",
          use: "enc",
          kid: "test-2",
          alg: "RS384",
          n:
            "qm6uyDsb64B4A14FgHKUHhC4-2t73sqMiCeBgjbpguM7ApLlYm4hzYXs7JMacEQ" +
            "ldOUDqKBG-M1G9s3r6fg7mpcy_IY89gaFSZ4L-5KD-BeCDF99e-5xAtDodeEg1h" +
            "zDHb3P1DATXqJdS3Re0G4nWNyukBFkYd1DvDP5W7OkO5cKJACE1oIHpBO6CRja_" +
            "6WDIY68k9GZ1Hy_-BWo56yPivNDMlC1Nm9rsczupfomW95Ne1LxVAiXFK0lGldz" +
            "SsMRYo2cTtaTCoJVd9Z1R9YLwymCUIaVq-U7oRJYFPWQgX5k4bWSQNSi48OoX_x" +
            "5QwLt7PdTchJjXd3SoSew7HKy6w",
        });
      });
    });
  });

  describe("key2pem()", () => {
    it("should convert the JWK key to PEM format", () => {
      expect(typeof jwk.key2pem(key)).toBe("string");
    });

    it("should convert a public key", () => {
      expect(jwk.key2pem(key)).toMatch(/PUBLIC KEY/);
    });

    it("should convert a private key", () => {
      expect(jwk.key2pem(key, { private: true })).toMatch(/PRIVATE KEY/);
    });
  });
});
