import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TOOL_INFO } from "@/constants";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export const runtime = "edge";

export const metadata = {
  title: "Cryptographic Tools - Free Online Encryption & Encoding Tools",
  description:
    "Free online tools for text encryption, decryption, encoding, and decoding. Secure your data with our easy-to-use cryptographic tools.",
};

export default function HomePage() {
  return (
    <article className="space-y-12 container mx-auto text-center">
      <section className="prose prose-slate dark:prose-invert max-w-none space-y-4">
        <TypographyH2>
          Professional Online Text Encryption & Decoding Tools
        </TypographyH2>
        <TypographyP>
          Welcome to CryptoTools, your comprehensive suite of free online text
          encryption, decryption, encoding and decoding tools. Whether you need
          to encrypt sensitive messages with military-grade AES encryption,
          generate RSA key pairs for secure communication, convert text to
          Base64 encoding, or solve classical Caesar ciphers, our browser-based
          tools provide instant, secure results.
        </TypographyP>
        <TypographyP>
          All encryption and decoding operations are performed locally in your
          browser, ensuring your data never leaves your device. No registration,
          no downloads, no data collection - just professional-grade
          cryptographic tools at your fingertips.
        </TypographyP>
      </section>
      {TOOL_INFO.map((category) => (
        <section key={category.title} className="space-y-6">
          <div className="space-y-2 prose prose-slate dark:prose-invert max-w-none">
            <TypographyH2>{category.title}</TypographyH2>
            <TypographyP>{category.description}</TypographyP>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {category.tools.map((tool) => (
              <Link
                href={tool.url}
                key={tool.name}
                className="w-[20rem] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                aria-label={`Go to ${tool.name} tool: ${tool.description}`}
              >
                <Card className="h-full text-left hover:bg-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {tool.name}
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <div className="space-y-4">
          <TypographyH2>Why Choose Our Online Encryption Tools?</TypographyH2>

          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Card>
              <CardHeader>
                <CardTitle>Military-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP>
                  Our AES encryption tool uses the same encryption standard
                  trusted by governments and military organizations worldwide.
                  RSA encryption provides secure public-key cryptography for
                  sensitive communications.
                </TypographyP>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Browser-Based Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP>
                  All encryption, decryption, encoding and decoding happens
                  locally in your browser. Your sensitive data never touches our
                  servers, ensuring complete privacy and security.
                </TypographyP>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP>
                  No waiting, no processing delays. Encrypt text, decode Base64,
                  solve Caesar ciphers and generate RSA keys instantly. Perfect
                  for developers, security professionals, and anyone needing
                  quick cryptographic operations.
                </TypographyP>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Completely Free</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP>
                  No registration required, no hidden fees, no usage limits.
                  Professional-grade encryption and encoding tools available
                  24/7 at no cost.
                </TypographyP>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <TypographyH2>
              Popular Use Cases for Online Text Encryption
            </TypographyH2>
            <TypographyP>
              Our online encryption and encoding tools serve a wide range of
              security and development needs:
            </TypographyP>
          </div>

          <Card className="not-prose text-start max-w-3xl mx-auto">
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Secure Message Encryption:</strong> Protect sensitive
                  communications with AES or RSA encryption
                </li>
                <li>
                  <strong>Password Protection:</strong> Encrypt passwords and
                  sensitive credentials before storage
                </li>
                <li>
                  <strong>Data Encoding:</strong> Convert text to Base64 for
                  safe transmission and storage
                </li>
                <li>
                  <strong>Caesar Cipher Solving:</strong> Decode classical
                  ciphers for educational and puzzle-solving purposes
                </li>
                <li>
                  <strong>Developer Tools:</strong> Quick encoding/decoding for
                  web development and API testing
                </li>
                <li>
                  <strong>Educational Cryptography:</strong> Learn encryption
                  concepts with hands-on tools
                </li>
                <li>
                  <strong>Secure File Preparation:</strong> Encrypt text before
                  uploading to cloud services
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <TypographyH2>
              Supported Encryption Algorithms & Encoding Methods
            </TypographyH2>
            <TypographyP>
              CryptoTools supports the most popular and secure encryption
              algorithms and encoding methods used in modern cryptography:
            </TypographyP>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-start">
            <Card className="w-[20rem]">
              <CardHeader>
                <CardTitle>🔐 Encryption Algorithms</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  <li>• AES (Advanced Encryption Standard)</li>
                  <li>• RSA (Rivest-Shamir-Adleman)</li>
                  <li>• Caesar Cipher (Shift Cipher)</li>
                  <li>• Symmetric & Asymmetric Encryption</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="w-[20rem]">
              <CardHeader>
                <CardTitle>📝 Encoding Methods</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  <li>• Base64 Encoding/Decoding</li>
                  <li>• URL Encoding</li>
                  <li>• Hexadecimal Conversion</li>
                  <li>• UTF-8 Text Processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-2">
          <TypographyH2>
            How to Use Our Free Online Encryption Tools
          </TypographyH2>
          <TypographyP>
            Getting started with text encryption and decoding is simple. Each
            tool is designed for ease of use while maintaining
            professional-grade security standards. Simply select your desired
            encryption method, enter your text, and get instant results. For
            advanced users, custom keys and initialization vectors are supported
            for maximum security control.
          </TypographyP>
        </div>
      </section>
    </article>
  );
}
