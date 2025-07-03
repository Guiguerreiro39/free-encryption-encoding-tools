import { Code, Lock } from "lucide-react";

export const AES_TOOL = {
  name: "AES" as const,
  title: "AES Encryption and Decryption",
  description:
    "Advanced Encryption Standard with variable key sizes and modes.",
  shortDescription: "Advanced Encryption Standard",
  defaultUrl: "/aes-encryption",
  actionLabel: "Encrypt with AES",
  urls: ["aes-encryption", "aes-decryption"] as const,
};

export const RSA_TOOL = {
  name: "RSA" as const,
  title: "RSA Encryption and Decryption",
  shortDescription: "Public Key Cryptography",
  description:
    "RSA encryption and decryption with public and private keys generation.",
  defaultUrl: "/rsa-encryption",
  actionLabel: "Encrypt with RSA",
  urls: ["rsa-encryption", "rsa-decryption"] as const,
};

export const CAESAR_TOOL = {
  name: "Caesar Cipher" as const,
  title: "Caesar Cipher",
  description: "Caesar cipher encryption and decryption with shift operations.",
  shortDescription: "Classical Shift Cipher",
  defaultUrl: "/caesar-encryption",
  actionLabel: "Encrypt with Caesar Cipher",
  urls: [
    "caesar-encryption",
    "caesar-decryption",
    "caesar-brute-force",
  ] as const,
};

export const BASE64_TOOL = {
  name: "Base64" as const,
  title: "Base64 Encode and Decode",
  description:
    "Encode or decode text using Base64 for safe transmission and storage.",
  shortDescription: "Text to Base64 Encoding",
  defaultUrl: "/base64-encoding",
  actionLabel: "Encode with Base64",
  urls: ["base64-encoding", "base64-decoding"] as const,
};

export const TOOL_INFO = [
  {
    title: "Encryption",
    icon: <Lock />,
    description:
      "Secure information using modern cryptographic algorithms. They convert readable text into coded formats using cryptographic methods, helping protect sensitive information from unauthorized access.",
    tools: [AES_TOOL, RSA_TOOL, CAESAR_TOOL],
  },
  {
    title: "Encoding",
    icon: <Code />,
    description:
      "Convert text into different formats with ease using our encoding tools. Encoding makes your text compatible for sharing, storage, or web use, without changing its original meaning.",
    tools: [BASE64_TOOL],
  },
];

export const ALL_TOOLS = [AES_TOOL, RSA_TOOL, CAESAR_TOOL, BASE64_TOOL];

export type ToolUrl = (typeof ALL_TOOLS)[number]["urls"][number];

export const VALID_TOOL_URLS = new Set<ToolUrl>(
  ALL_TOOLS.flatMap((t) => [...t.urls])
);
