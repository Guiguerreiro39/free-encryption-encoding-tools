"use server";

import { RSACalculator } from "./_components/rsa/rsa-calculator";
import { AESCalculator } from "./_components/aes/aes-calculator";
import { Base64Calculator } from "./_components/base64/base64-calculator";
import { CaesarCalculator } from "./_components/caesar/caesar-calculator";
import { notFound } from "next/navigation";
import { AVAILABLE_TOOLS } from "@/constants";
import { AESLearning } from "./_components/aes/aes-learning";
import { AdSpace } from "@/components/ad-space";
import { RSALearning } from "./_components/rsa/rsa-learning";
import { CaesarLearning } from "./_components/caesar/caesar-learning";
import { Base64Learning } from "./_components/base64/base64-learning";
import { Metadata } from "next";

// Generate metadata for each tool page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;

  const toolMetadata = {
    aes: {
      title:
        "Free AES Encryption Tool Online - Encrypt & Decrypt Text Securely",
      description:
        "Free online AES encryption and decryption tool. Secure text encryption with advanced encryption standard. Military-grade security, instant results, no registration required.",
      keywords: [
        "AES encryption online",
        "AES encryption tool",
        "AES encrypt decrypt text",
        "advanced encryption standard",
        "symmetric encryption online",
        "AES cipher tool",
        "secure text encryption AES",
        "online AES calculator",
        "AES encryption free",
        "AES online tool",
      ],
    },
    rsa: {
      title:
        "Free RSA Encryption Tool & Key Generator Online - Public Key Cryptography",
      description:
        "Free online RSA encryption, decryption and key generation tool. Generate RSA key pairs, encrypt and decrypt text with public key cryptography. Secure, fast, browser-based.",
      keywords: [
        "RSA encryption online",
        "RSA key generator",
        "RSA encrypt decrypt",
        "public key encryption",
        "RSA cipher tool",
        "asymmetric encryption",
        "RSA key pair generator",
        "online RSA calculator",
        "RSA cryptography tool",
        "free RSA encryption",
      ],
    },
    base64: {
      title: "Free Base64 Encoder & Decoder Online - Convert Text to Base64",
      description:
        "Free online Base64 encoder and decoder tool. Convert text to Base64 encoding and decode Base64 to text instantly. Perfect for developers and data encoding needs.",
      keywords: [
        "Base64 encode decode",
        "Base64 encoder online",
        "Base64 decoder tool",
        "text to Base64 converter",
        "Base64 encoding tool",
        "decode Base64 online",
        "Base64 converter free",
        "online Base64 tool",
        "Base64 encoding decoder",
        "Base64 text converter",
      ],
    },
    caesar: {
      title: "Free Caesar Cipher Solver & Encoder Online - Shift Cipher Tool",
      description:
        "Free online Caesar cipher solver, encoder and decoder. Solve Caesar cipher puzzles, encrypt text with shift cipher, brute force Caesar ciphers. Educational cryptography tool.",
      keywords: [
        "Caesar cipher solver",
        "Caesar cipher decoder",
        "shift cipher tool",
        "Caesar cipher encoder",
        "classical cipher solver",
        "ROT13 cipher",
        "cipher decoder online",
        "Caesar cipher brute force",
        "shift cipher calculator",
        "classical cryptography",
      ],
    },
  };

  const meta = toolMetadata[tool as keyof typeof toolMetadata];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `https://cryptotools.example.com/${tool}`,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;

  if (!AVAILABLE_TOOLS.includes(tool as (typeof AVAILABLE_TOOLS)[number])) {
    notFound();
  }

  // Add structured data for each tool
  const toolStructuredData = {
    aes: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "AES Encryption Tool",
      description:
        "Free online AES encryption and decryption tool for secure text encryption",
      url: "https://cryptotools.example.com/aes",
      applicationCategory: "SecurityApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    rsa: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "RSA Encryption & Key Generator",
      description:
        "Free online RSA encryption, decryption and key generation tool",
      url: "https://cryptotools.example.com/rsa",
      applicationCategory: "SecurityApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    base64: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Base64 Encoder Decoder",
      description: "Free online Base64 encoding and decoding tool",
      url: "https://cryptotools.example.com/base64",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    caesar: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Caesar Cipher Solver",
      description: "Free online Caesar cipher solver and shift cipher tool",
      url: "https://cryptotools.example.com/caesar",
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  };

  const structuredData =
    toolStructuredData[tool as keyof typeof toolStructuredData];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {(() => {
        switch (tool) {
          case "aes":
            return (
              <>
                <AESCalculator />
                <AdSpace />
                <AESLearning />
              </>
            );
          case "rsa":
            return (
              <>
                <RSACalculator />
                <AdSpace />
                <RSALearning />
              </>
            );
          case "base64":
            return (
              <>
                <Base64Calculator />
                <AdSpace />
                <Base64Learning />
              </>
            );
          case "caesar":
            return (
              <>
                <CaesarCalculator />
                <AdSpace />
                <CaesarLearning />
              </>
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
