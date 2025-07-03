import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography-h4";

export const RSALearning = () => {
  return (
    <article className="space-y-8 text-center">
      <div className="prose py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section className="space-y-4">
            <TypographyH3>What is RSA Encryption?</TypographyH3>
            <TypographyP>
              RSA (Rivest–Shamir–Adleman) is a widely used asymmetric encryption
              algorithm. Unlike symmetric encryption, RSA uses a pair of keys: a
              public key for encryption and a private key for decryption.
              It&apos;s a foundational technology for securing digital
              communications, especially over the internet.
            </TypographyP>
          </section>

          <section className="space-y-8">
            <TypographyH3>Key Features of RSA</TypographyH3>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Asymmetric Encryption
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Uses two keys — public and private.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Based on Number Theory
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Relies on the difficulty of factoring large prime numbers.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Key Lengths
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Commonly 2048 or 4096 bits.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">Slower</TypographyH4>
                  <TypographyP className="text-sm">
                    Not ideal for bulk data encryption.
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
                    Secure Key Exchange
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Exchanging symmetric keys securely.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Digital Signatures
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Verifying authenticity and integrity of data.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    SSL/TLS (HTTPS)
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Securing web communications.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center md:max-w-2xs sm:max-w-3xs w-full sm:w-auto">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Email Encryption
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Securing email content (e.g., PGP, S/MIME).
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <TypographyH3>How RSA Works</TypographyH3>
            <TypographyP>
              RSA uses a pair of mathematically linked keys. Here’s a simplified
              view of the process:
            </TypographyP>
            <ol className="list-decimal list-inside text-lg text-muted-foreground space-y-2 grid grid-cols-1 justify-self-center">
              <li className="w-fit">
                Generate two large prime numbers (p and q).
              </li>
              <li className="w-fit">
                Compute <code>n = p × q</code> and{" "}
                <code>ϕ(n) = (p - 1)(q - 1)</code>.
              </li>
              <li className="w-fit">
                Choose public exponent <code>e</code> such that 1 &lt; e &lt;
                ϕ(n).
              </li>
              <li className="w-fit">
                Calculate private exponent <code>d</code> such that{" "}
                <code>d × e ≡ 1 (mod ϕ(n))</code>.
              </li>
              <li className="w-fit">
                Publish <code>{`{e, n}`}</code> as the public key and keep{" "}
                <code>{`{d, n}`}</code> private.
              </li>
            </ol>
            <TypographyP>
              To encrypt, the sender uses the recipient’s public key. To
              decrypt, the recipient uses their private key.
            </TypographyP>
          </section>

          <section className="space-y-8">
            <TypographyH3>Encryption vs. Signing</TypographyH3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 justify-self-center grid grid-cols-1">
                    <li className="w-fit">
                      Encrypt with the recipient&apos;s{" "}
                      <strong>public key</strong>
                    </li>
                    <li className="w-fit">
                      Decrypt with the recipient&apos;s{" "}
                      <strong>private key</strong>
                    </li>
                    <li className="w-fit">Used for confidentiality.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Digital Signatures</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 justify-self-center grid grid-cols-1">
                    <li className="w-fit">
                      Sign with your <strong>private key</strong>
                    </li>
                    <li className="w-fit">
                      Verify with your <strong>public key</strong>
                    </li>
                    <li className="w-fit">
                      Used for authenticity and integrity.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <TypographyH3>Limitations of RSA</TypographyH3>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 justify-self-center grid grid-cols-1">
              <li className="w-fit">
                Slower than symmetric algorithms like AES.
              </li>
              <li className="w-fit">
                Not suitable for encrypting large files directly.
              </li>
              <li className="w-fit">
                Quantum computers could eventually break RSA.
              </li>
            </ul>
          </section>

          <section className="space-y-8">
            <TypographyH3>RSA vs Symmetric Encryption</TypographyH3>
            <div className="overflow-auto rounded-lg border text-sm bg-background text-foreground">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="p-2 border-b font-semibold">Feature</th>
                    <th className="p-2 border-b font-semibold">RSA</th>
                    <th className="p-2 border-b font-semibold">AES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">Type</td>
                    <td className="p-2 border-b">Asymmetric</td>
                    <td className="p-2 border-b">Symmetric</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Keys Used</td>
                    <td className="p-2 border-b">Public & Private</td>
                    <td className="p-2 border-b">Single Shared Key</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Speed</td>
                    <td className="p-2 border-b">🐢 Slow</td>
                    <td className="p-2 border-b">⚡ Fast</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Best For</td>
                    <td className="p-2 border-b">Key exchange, signatures</td>
                    <td className="p-2 border-b">Bulk data encryption</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Security Basis</td>
                    <td className="p-2 border-b">Prime factorization</td>
                    <td className="p-2 border-b">Substitution & permutation</td>
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
