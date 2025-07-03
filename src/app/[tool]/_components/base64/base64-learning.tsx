"use static";

import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography-h4";

export const Base64Learning = () => {
  return (
    <article className="space-y-8 text-center">
      <div className="prose py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section className="space-y-4">
            <TypographyH3>What is Base64 Encoding?</TypographyH3>
            <TypographyP>
              Base64 is a binary-to-text encoding scheme that converts binary
              data into an ASCII string format. It&apos;s commonly used to
              transmit data over media that are designed to deal with textual
              data, such as embedding images in HTML or sending binary files via
              email.
            </TypographyP>
          </section>
          <section className="space-y-8">
            <TypographyH3>Key Features of Base64</TypographyH3>

            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Not Encryption
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Base64 does not provide confidentiality — it just encodes
                    data.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">Alphabet</TypographyH4>
                  <TypographyP className="text-sm">
                    Uses A–Z, a–z, 0–9, +, and /.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">Padding</TypographyH4>
                  <TypographyP className="text-sm">
                    Output is padded with <code>=</code> to make it a multiple
                    of 4 characters.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">Readable</TypographyH4>
                  <TypographyP className="text-sm">
                    Encoded result is plain text and safe for most text-based
                    systems.
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="space-y-8">
            <TypographyH3>Common Use Cases</TypographyH3>

            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Embedding Binary Files
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Embedding binary files in XML or JSON.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    HTML/CSS Data
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Sending image or font data in HTML/CSS.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Email Attachments
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Email attachments (MIME).
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Simple Obfuscation
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Simple obfuscation of data in URLs or tokens.
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="space-y-8">
            <div className="space-y-4">
              <TypographyH3>How Base64 Works</TypographyH3>
              <TypographyP>
                Base64 breaks input data into 3-byte chunks (24 bits) and splits
                each chunk into four 6-bit groups. Each 6-bit group maps to one
                character in the Base64 alphabet.
              </TypographyP>
            </div>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 grid grid-cols-1 justify-self-center">
              <li className="w-fit">3 bytes (24 bits) → 4 Base64 characters</li>
              <li className="w-fit">
                1 byte → 2 padding <code>=</code>
              </li>
              <li className="w-fit">
                2 bytes → 1 padding <code>=</code>
              </li>
            </ul>
            <TypographyP>
              This ensures the encoded output is always a multiple of 4
              characters. Padding helps decode correctly when original data
              isn&apos;t divisible by 3.
            </TypographyP>
          </section>
          <section className="space-y-8">
            <TypographyH3>Example Encodings</TypographyH3>
            <div className="overflow-auto rounded-lg border text-sm bg-background text-foreground">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="p-2 border-b font-semibold">Input</th>
                    <th className="p-2 border-b font-semibold">
                      Base64 Output
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">Hello</td>
                    <td className="p-2 border-b">SGVsbG8=</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Hi!</td>
                    <td className="p-2 border-b">SGkh</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">✓</td>
                    <td className="p-2 border-b">4pyT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
