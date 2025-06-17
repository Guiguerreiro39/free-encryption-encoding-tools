import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TOOL_INFO } from "@/constants";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export const metadata = {
  title: "Cryptographic Tools - Free Online Encryption & Encoding Tools",
  description:
    "Free online tools for text encryption, decryption, encoding, and decoding. Secure your data with our easy-to-use cryptographic tools.",
};

export default function HomePage() {
  return (
    <article className="space-y-12">
      {TOOL_INFO.map((category) => (
        <section key={category.title} className="space-y-6">
          <div className="space-y-2 prose prose-slate dark:prose-invert max-w-none">
            <TypographyH2>{category.title}</TypographyH2>
            <TypographyP>{category.description}</TypographyP>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.tools.map((tool) => (
              <Link
                href={tool.url}
                key={tool.name}
                className="transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                aria-label={`Go to ${tool.name} tool: ${tool.description}`}
              >
                <Card className="h-full text-left hover:bg-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {tool.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="prose prose-slate dark:prose-invert max-w-none space-y-2">
        <TypographyH2>About Our Tools</TypographyH2>
        <TypographyP>
          Our cryptographic tools are designed with security and privacy in
          mind. All processing happens directly in your browser, meaning your
          data never leaves your device. Whether you need to encrypt sensitive
          information, encode data for transmission, or learn about different
          cryptographic techniques, we&apos;ve got you covered.
        </TypographyP>
      </section>
    </article>
  );
}
