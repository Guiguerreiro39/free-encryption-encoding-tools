export const ENCRYPTION_TOOLS = ["aes", "rsa", "caesar"] as const;

export const ENCODING_TOOLS = ["base64"] as const;

export const AVAILABLE_TOOLS = [
  ...ENCODING_TOOLS,
  ...ENCRYPTION_TOOLS,
] as const;

export const AVAILABLE_CATEGORIES = ["encryption", "encoding"] as const;

export const AES_TOOL = {
  name: "AES",
  title: "AES Encryption and Decryption",
  description: "Advanced Encryption Standard with variable key size and modes",
  url: "/aes",
};

export const RSA_TOOL = {
  name: "RSA",
  title: "RSA Encryption and Decryption",
  description:
    "Encrypt and decrypt text using RSA. Generate public and private keys or supply your own.",
  url: "/rsa",
};

export const CAESAR_TOOL = {
  name: "Caesar Cipher",
  title: "Caesar Cipher",
  description:
    "Encrypt and decrypt text using Caesar cipher with shift operations. You can also brute force in order to receive all possible decrypted texts.",
  url: "/caesar",
};

export const BASE64_TOOL = {
  name: "Base64",
  title: "Base64 Encode and Decode",
  description: "Encode or decode text using Base64",
  url: "/base64",
};

export const TOOL_INFO = [
  {
    title: "Encryption Algorithms",
    description:
      "Secure information using modern cryptographic algorithms. They convert readable text into coded formats using cryptographic methods, helping protect sensitive information from unauthorized access.",
    tools: [AES_TOOL, RSA_TOOL, CAESAR_TOOL],
  },
  {
    title: "Encoding Algorithms",
    description:
      "Convert text into different formats with ease using our encoding tools. Encoding makes your text compatible for sharing, storage, or web use, without changing its original meaning.",
    tools: [BASE64_TOOL],
  },
];
