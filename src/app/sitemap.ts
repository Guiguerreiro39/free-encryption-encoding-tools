import { MetadataRoute } from "next";
import { TOOL_INFO } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cryptotools.example.com";
  const currentDate = new Date();

  // High-priority static routes with SEO-optimized frequencies
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aes`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rsa`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/caesar`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/base64`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // High-demand encryption/encoding tool routes with optimized priorities
  const popularToolKeywords = [
    "base64-encode",
    "base64-decode",
    "base64-converter",
    "md5-hash",
    "sha256-hash",
    "sha1-hash",
    "aes-encrypt",
    "aes-decrypt",
    "text-encrypt",
    "url-encode",
    "url-decode",
    "html-encode",
    "json-formatter",
    "json-validator",
    "xml-formatter",
    "password-generator",
    "random-password",
    "secure-password",
    "hash-generator",
    "checksum-calculator",
    "crypto-hash",
    "text-to-hex",
    "hex-to-text",
    "binary-converter",
    "jwt-decoder",
    "jwt-encode",
    "token-decoder",
    "rsa-encrypt",
    "public-key-encrypt",
    "pgp-encrypt",
    "caesar-cipher",
    "rot13-cipher",
    "vigenere-cipher",
    "morse-code",
    "ascii-converter",
    "unicode-converter",
  ];

  // Dynamic routes for tools with SEO-optimized priorities
  const toolRoutes = TOOL_INFO.flatMap((category) =>
    category.tools.map((tool) => {
      // Extract tool name from URL to check against popular keywords
      const toolSlug = tool.url.replace("/", "").toLowerCase();
      const isPopularTool = popularToolKeywords.some(
        (keyword) => toolSlug.includes(keyword) || keyword.includes(toolSlug)
      );

      return {
        url: `${baseUrl}${tool.url}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: isPopularTool ? 0.9 : 0.7, // Higher priority for popular tools
      };
    })
  );

  return [...staticRoutes, ...toolRoutes];
}
