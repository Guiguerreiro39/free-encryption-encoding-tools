import { BASE64_TOOL } from "@/constants";
import { CalculatorLayout } from "@/components/calculator-layout";
import { Base64Encoding } from "./base64-encoding";
import { Base64Decoding } from "./base64-decoding";

type Props = {
  tool: (typeof BASE64_TOOL.urls)[number];
};

export const Base64Calculator = ({ tool }: Props) => {
  return (
    <CalculatorLayout
      title={BASE64_TOOL.title}
      description={BASE64_TOOL.description}
      tool={tool}
      tabs={[
        {
          value: "base64-encoding",
          label: "Encoding",
          content: <Base64Encoding />,
          href: "/base64-encoding",
        },
        {
          value: "base64-decoding",
          label: "Decoding",
          content: <Base64Decoding />,
          href: "/base64-decoding",
        },
      ]}
    />
  );
};
