import { CalculatorLayout } from "@/components/calculator-layout";
import { CAESAR_TOOL } from "@/constants";
import { CaesarEncryption } from "./caesar-encryption";
import { CaesarDecryption } from "./caesar-decryption";
import { CaesarBruteForce } from "./caesar-brute-force";
import { CaesarLearning } from "./caesar-learning";

type Props = {
  tool: (typeof CAESAR_TOOL.urls)[number];
};

export const CaesarCalculator = ({ tool }: Props) => {
  return (
    <CalculatorLayout
      title={CAESAR_TOOL.title}
      description={CAESAR_TOOL.description}
      tool={tool}
      tabs={[
        {
          value: "caesar-encryption",
          label: "Encryption",
          content: <CaesarEncryption />,
          href: "/caesar-encryption",
        },
        {
          value: "caesar-decryption",
          label: "Decryption",
          content: <CaesarDecryption />,
          href: "/caesar-decryption",
        },
        {
          value: "caesar-brute-force",
          label: "Brute Force",
          content: <CaesarBruteForce />,
          href: "/caesar-brute-force",
        },
      ]}
      learning={<CaesarLearning />}
    />
  );
};
