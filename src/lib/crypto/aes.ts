"use server";
import { detectEncoding } from "@/lib/utils";
import crypto from "crypto";

type AESEncryptionParams = {
  key: string;
  iv: string; // Required for CBC, GCM, CTR; not used for ECB
  keySize: 128 | 192 | 256;
  mode: "cbc" | "ecb" | "gcm" | "ctr";
  outputEncoding: "hex" | "base64";
};

type AESDecryptionParams = {
  key: string;
  iv: string; // Required for CBC, GCM, CTR; not used for ECB
  keySize: 128 | 192 | 256;
  mode: "cbc" | "ecb" | "gcm" | "ctr";
  outputEncoding: "utf8" | "base64";
  authTag: string;
};

const retrieveIv = (
  mode: "cbc" | "ecb" | "gcm" | "ctr",
  encoding: "hex" | "base64",
  iv?: string
) => {
  if (mode === "ecb") return "";

  return iv ? Buffer.from(iv, encoding) : crypto.randomBytes(16);
};

export const encrypt = async (
  plaintext: string,
  params: AESEncryptionParams
): Promise<{ encrypted: string; iv: string; authTag?: string }> => {
  const { key, iv, keySize, mode, outputEncoding } = params;

  const ivBuffer = retrieveIv(mode, outputEncoding, iv);

  const algo = `aes-${keySize}-${mode}`;
  const cipher = crypto.createCipheriv(algo, key, ivBuffer);

  let encrypted = cipher.update(plaintext, "utf8", outputEncoding);
  encrypted += cipher.final(outputEncoding);

  if (mode === "gcm") {
    const authTag = (cipher as crypto.CipherGCM).getAuthTag();
    const tagEncoded = authTag.toString(outputEncoding);

    return {
      encrypted,
      iv: ivBuffer ? ivBuffer.toString(outputEncoding) : "",
      authTag: tagEncoded,
    };
  }

  return { encrypted, iv: ivBuffer ? ivBuffer.toString(outputEncoding) : "" };
};

export const decrypt = async (
  ciphertext: string,
  params: AESDecryptionParams
): Promise<string> => {
  const { key, iv, keySize, mode, outputEncoding, authTag } = params;

  const inputEncoding = detectEncoding(ciphertext);

  const ivBuffer = retrieveIv(mode, inputEncoding, iv);

  const algo = `aes-${keySize}-${mode}`;

  const decipher = crypto.createDecipheriv(algo, key, ivBuffer);

  console.log(inputEncoding);

  if (mode === "gcm" && authTag) {
    (decipher as crypto.DecipherGCM).setAuthTag(Buffer.from(authTag));
  }

  let decrypted = decipher.update(ciphertext, inputEncoding, outputEncoding);
  decrypted += decipher.final(outputEncoding);

  return decrypted;
};
