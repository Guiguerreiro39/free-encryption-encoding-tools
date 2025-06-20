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
import {
  generatePageMetadata,
  generateStructuredData,
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  SEO_KEYWORDS,
  SITE_CONFIG,
} from "@/seo";

// Generate metadata for each tool page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;

  if (!SEO_KEYWORDS[tool as keyof typeof SEO_KEYWORDS]) return {};

  const keywords = SEO_KEYWORDS[tool as keyof typeof SEO_KEYWORDS];

  return generatePageMetadata(
    PAGE_TITLES[tool as keyof typeof PAGE_TITLES],
    PAGE_DESCRIPTIONS[tool as keyof typeof PAGE_DESCRIPTIONS],
    [...keywords],
    `/${tool}`
  );
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
    ...generateStructuredData(
      PAGE_TITLES[tool as keyof typeof PAGE_TITLES],
      PAGE_DESCRIPTIONS[tool as keyof typeof PAGE_DESCRIPTIONS],
      `${SITE_CONFIG.url}/${tool}`
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolStructuredData),
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
