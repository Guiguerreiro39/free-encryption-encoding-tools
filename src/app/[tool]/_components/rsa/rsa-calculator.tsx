import { RSA_TOOL } from "@/constants";
import { CalculatorLayout } from "@/components/calculator-layout";
import { RSAEncryption } from "./rsa-encryption";
import { RSADecryption } from "./rsa-decryption";
import { RSALearning } from "./rsa-learning";

type Props = {
  tool: (typeof RSA_TOOL.urls)[number];
};

export const RSACalculator = ({ tool }: Props) => {
  return (
    <CalculatorLayout
      title={RSA_TOOL.title}
      description={RSA_TOOL.description}
      tool={tool}
      tabs={[
        {
          value: "rsa-encryption",
          label: "Encryption",
          content: <RSAEncryption />,
          href: "/rsa-encryption",
        },
        {
          value: "rsa-decryption",
          label: "Decryption",
          content: <RSADecryption />,
          href: "/rsa-decryption",
        },
      ]}
      learning={<RSALearning />}
    />
  );
};
