import { AESEncryption } from "./aes-encryption";
import { AESDecryption } from "./aes-decryption";
import { AES_TOOL } from "@/constants";
import { CalculatorLayout } from "@/components/calculator-layout";
import { AESLearning } from "@/app/[tool]/_components/aes/aes-learning";

type Props = {
  tool: (typeof AES_TOOL.urls)[number];
};

export const AESCalculator = ({ tool }: Props) => {
  return (
    <CalculatorLayout
      title={AES_TOOL.title}
      description={AES_TOOL.description}
      tool={tool}
      tabs={[
        {
          value: "aes-encryption",
          label: "Encryption",
          content: <AESEncryption />,
          href: "/aes-encryption",
        },
        {
          value: "aes-decryption",
          label: "Decryption",
          content: <AESDecryption />,
          href: "/aes-decryption",
        },
      ]}
      learning={<AESLearning />}
    />
  );
};
