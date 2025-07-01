import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function detectEncoding(input: string): "base64" | "hex" {
  const isHex = /^[0-9a-fA-F]+$/.test(input) && input.length % 2 === 0;
  const isBase64 =
    /^[A-Za-z0-9+/]+={0,2}$/.test(input) && input.length % 4 === 0;

  if (isHex) return "hex";
  if (isBase64) return "base64";

  throw new Error("Unsupported input encoding. Expected base64 or hex.");
}
