import * as jwk from "../src/jwk";
import * as keys from "../src/keys";

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

describe("Keys", () => {
  describe("decode()", () => {
    describe("a valid key set", () => {
      it("should return the validated key", () => {
        expect(keys.decode({ keys: [key] })).toEqual({ keys: [key] });
      });
    });

    describe("an invalid key set", () => {
      it("should throw an error", () => {
        expect(() => {
          keys.decode({});
        }).toThrowError();
      });
    });

    describe("a valid key set with invalid keys", () => {
      it("should ignore the invalid keys", () => {
        expect(keys.decode({ keys: [key, {}] })).toEqual({ keys: [key] });
      });
    });

    describe("a valid key set with duplicate keys", () => {
      it("should return only unique keys", () => {
        expect(keys.decode({ keys: [key, key] })).toEqual({ keys: [key] });
      });
    });
  });

  describe("selectKey()", () => {
    describe("with a key set", () => {
      it("should return the key with the specified key id", () => {
        expect(keys.selectKey("test-1")({ keys: [key, rsaKey] })).toEqual(key);
      });

      it("should throw error if the specified key id is not found", () => {
        expect(() => {
          keys.selectKey("wrong")({ keys: [key] });
        }).toThrowError();
      });
    });

    describe("with a key", () => {
      it("should return the key if it has the specified id", () => {
        expect(keys.selectKey("test-1")(key)).toEqual(key);
      });

      it("should throw error if the specified key id does not match", () => {
        expect(() => {
          keys.selectKey("wrong")(key);
        }).toThrowError();
      });
    });
  });
});
