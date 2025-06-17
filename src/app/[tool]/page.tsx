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

export default async function ToolPage({
  params,
}: {
  params: { tool: string };
}) {
  const { tool } = await params;

  if (!AVAILABLE_TOOLS.includes(tool as (typeof AVAILABLE_TOOLS)[number])) {
    notFound();
  }

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
}
