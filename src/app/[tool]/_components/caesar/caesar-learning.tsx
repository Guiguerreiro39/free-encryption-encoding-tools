"use static";

import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography-h4";

export const CaesarLearning = () => {
  return (
    <article className="space-y-8 text-center">
      <div className="prose py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section className="space-y-4">
            <TypographyH3>What is the Caesar Cipher?</TypographyH3>
            <TypographyP>
              The Caesar cipher is one of the simplest and oldest known
              encryption techniques. Named after Julius Caesar, who used it to
              send secret messages, it works by shifting each letter in the
              plaintext by a fixed number of positions down the alphabet.
            </TypographyP>
          </section>

          <section className="space-y-8">
            <TypographyH3>Key Features</TypographyH3>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Substitution Cipher
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Replaces each letter with another based on a fixed shift.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Symmetric
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Same key (shift value) used for both encryption and
                    decryption.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Alphabet-Based
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Works only on letters; does not change numbers or symbols.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Historical Importance
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Often taught as a basic example of classical encryption.
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <TypographyH3>Common Uses</TypographyH3>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Teaching Cryptography
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Teaching basic cryptography concepts.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Simple Puzzles
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Simple puzzles and games.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Basic Encoding
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Basic encoding in non-critical applications.
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <TypographyH3>How the Caesar Cipher Works</TypographyH3>
            <TypographyP>
              To encrypt a message, each letter in the plaintext is shifted a
              certain number of places down the alphabet. For example, with a
              shift of 3:
            </TypographyP>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 justify-self-center grid grid-cols-1">
              <li className="w-fit">A → D</li>
              <li className="w-fit">B → E</li>
              <li className="w-fit">HELLO → KHOOR</li>
            </ul>
            <TypographyP>
              To decrypt, the process is reversed by shifting in the opposite
              direction.
            </TypographyP>
            <TypographyP>
              The Caesar cipher is a special case of the shift cipher, where the
              alphabet is rotated. It is not secure by modern standards, but
              useful for learning.
            </TypographyP>
          </section>

          <section className="space-y-8">
            <TypographyH3>Security Analysis</TypographyH3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Pros</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 justify-self-center grid grid-cols-1">
                    <li className="w-fit">Simple and easy to understand</li>
                    <li className="w-fit">Good for educational purposes</li>
                    <li className="w-fit">Quick to implement</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-start max-w-sm list-disc list-inside text-lg text-muted-foreground space-y-2 justify-self-center grid grid-cols-1">
                    <li className="w-fit">
                      Very insecure (only 25 possible shifts)
                    </li>
                    <li className="w-fit">
                      Vulnerable to brute-force and frequency analysis attacks
                    </li>
                    <li className="w-fit">
                      Only suitable for very simple contexts
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <TypographyH3>Example Shifts</TypographyH3>
            <div className="overflow-auto rounded-lg border text-sm bg-background text-foreground">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="p-2 border-b font-semibold">Shift</th>
                    <th className="p-2 border-b font-semibold">Plaintext</th>
                    <th className="p-2 border-b font-semibold">Ciphertext</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">+1</td>
                    <td className="p-2 border-b">HELLO</td>
                    <td className="p-2 border-b">IFMMP</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">+3</td>
                    <td className="p-2 border-b">HELLO</td>
                    <td className="p-2 border-b">KHOOR</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">+13</td>
                    <td className="p-2 border-b">HELLO</td>
                    <td className="p-2 border-b">URYYB</td>
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
