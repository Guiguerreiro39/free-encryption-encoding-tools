"use server";
import crypto from "crypto";

type AESParams = {
  key: string;
  iv: string; // Required for CBC, GCM, CTR; not used for ECB
  keySize: 128 | 192 | 256;
  mode: "cbc" | "ecb" | "gcm" | "ctr";
  outputEncoding: "hex" | "base64";
  authTag: string; // Only for GCM
};

export const encrypt = async (
  plaintext: string,
  params: AESParams
): Promise<{ encrypted: string; iv: string; authTag?: string }> => {
  const { key, iv, keySize, mode, outputEncoding } = params;

  let ivBuffer: Buffer | undefined;
  switch (mode) {
    case "cbc":
    case "gcm":
    case "ctr":
      ivBuffer = iv ? Buffer.from(iv, outputEncoding) : crypto.randomBytes(16);
      break;
    case "ecb":
      break;
    default:
      throw new Error("Invalid mode");
  }

  const algo = `aes-${keySize}-${mode}`;
  const cipher = crypto.createCipheriv(algo, key, ivBuffer || "");

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
  params: AESParams
): Promise<string> => {
  const { key, iv, keySize, mode, outputEncoding, authTag } = params;

  const algo = `aes-${keySize}-${mode}`;

  let ivBuffer: Buffer | undefined;
  switch (mode) {
    case "cbc":
    case "gcm":
    case "ctr":
      ivBuffer = Buffer.from(iv, outputEncoding);
      break;
    case "ecb":
      break;
    default:
      throw new Error("Invalid mode");
  }

  const decipher = crypto.createDecipheriv(algo, key, ivBuffer || "");

  if (mode === "gcm" && authTag) {
    (decipher as crypto.DecipherGCM).setAuthTag(
      Buffer.from(authTag, outputEncoding)
    );
  }

  let decrypted = decipher.update(ciphertext, outputEncoding, "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
