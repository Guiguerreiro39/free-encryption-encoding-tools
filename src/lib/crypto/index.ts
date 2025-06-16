import * as aes from "@/lib/crypto/aes";
import * as base64 from "@/lib/crypto/base64";
import * as caesar from "@/lib/crypto/caesar";
import * as rsa from "@/lib/crypto/rsa";

export const cryptoRouter = {
  aes: {
    encrypt: aes.encrypt,
    decrypt: aes.decrypt,
  },
  base64: {
    encode: base64.encode,
    decode: base64.decode,
  },
  caesar: {
    encrypt: caesar.encrypt,
    decrypt: caesar.decrypt,
    bruteForce: caesar.bruteForce,
  },
  rsa: {
    generateKeyPair: rsa.generateKeyPair,
    encrypt: rsa.encrypt,
    decrypt: rsa.decrypt,
  },
};
