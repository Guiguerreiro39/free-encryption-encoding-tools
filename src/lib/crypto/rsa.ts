"use server";
import { detectEncoding } from "@/lib/utils";
import crypto from "crypto";

type RSAKeyPair = {
  publicKey: string;
  privateKey: string;
};

type RSAEncryptParams = {
  publicKey: string;
  outputEncoding?: "base64" | "hex";
};

type RSADecryptParams = {
  privateKey: string;
  outputEncoding?: "base64" | "utf8";
};

export const generateKeyPair = async (keySize = 2048): Promise<RSAKeyPair> => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: keySize,
    publicKeyEncoding: {
      type: "pkcs1", // can also be 'spki'
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1", // can also be 'pkcs8'
      format: "pem",
    },
  });

  return { publicKey, privateKey };
};

export const encrypt = async (
  input: string,
  data: RSAEncryptParams
): Promise<string> => {
  const buffer = Buffer.from(input, "utf8");
  const encrypted = crypto.publicEncrypt(data.publicKey, buffer);
  return encrypted.toString(data.outputEncoding);
};

export const decrypt = async (
  input: string,
  data: RSADecryptParams
): Promise<string> => {
  const inputEncoding = detectEncoding(input);

  const buffer = Buffer.from(input, inputEncoding);
  const decrypted = crypto.privateDecrypt(data.privateKey, buffer);
  return decrypted.toString(data.outputEncoding);
};
