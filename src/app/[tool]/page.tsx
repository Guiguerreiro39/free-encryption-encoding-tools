"use server";

import { RSACalculator } from "./_components/rsa/rsa-calculator";
import { AESCalculator } from "./_components/aes/aes-calculator";
import { Base64Calculator } from "./_components/base64/base64-calculator";
import { CaesarCalculator } from "./_components/caesar/caesar-calculator";
import { notFound } from "next/navigation";
import { AESLearning } from "./_components/aes/aes-learning";
import { AdSpace } from "@/components/ad-space";
import { RSALearning } from "./_components/rsa/rsa-learning";
import { CaesarLearning } from "./_components/caesar/caesar-learning";
import { Base64Learning } from "./_components/base64/base64-learning";
import { Metadata } from "next";
import { TOOLS_CONFIG } from "@/seo/tools-config";
import { ALL_TOOLS } from "@/constants";

// Generate metadata for each tool page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;

  if (!TOOLS_CONFIG[tool as keyof typeof TOOLS_CONFIG]) {
    return {};
  }

  return {
    title: TOOLS_CONFIG[tool as keyof typeof TOOLS_CONFIG].title,
    description: TOOLS_CONFIG[tool as keyof typeof TOOLS_CONFIG].description,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;

  const parsedTool = ALL_TOOLS.find((t) => isToolUrl(tool, t.urls));

  if (!parsedTool) {
    return notFound();
  }

  return (
    <div className="container mx-auto space-y-8">
      {(() => {
        switch (parsedTool.name) {
          case "AES":
            return (
              <>
                <AESCalculator
                  tool={tool as (typeof parsedTool.urls)[number]}
                />
                <AdSpace />
                <AESLearning />
              </>
            );
          case "RSA":
            return (
              <>
                <RSACalculator
                  tool={tool as (typeof parsedTool.urls)[number]}
                />
                <AdSpace />
                <RSALearning />
              </>
            );
          case "Base64":
            return (
              <>
                <Base64Calculator
                  tool={tool as (typeof parsedTool.urls)[number]}
                />
                <AdSpace />
                <Base64Learning />
              </>
            );
          case "Caesar Cipher":
            return (
              <>
                <CaesarCalculator
                  tool={tool as (typeof parsedTool.urls)[number]}
                />
                <AdSpace />
                <CaesarLearning />
              </>
            );
          default:
            return notFound();
        }
      })()}
    </div>
  );
}

function isToolUrl<T extends string>(
  value: string,
  urls: readonly T[]
): value is T {
  return urls.includes(value as T);
}
