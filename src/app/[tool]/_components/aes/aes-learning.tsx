"use static";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography-h4";

export const AESLearning = () => {
  return (
    <article className="space-y-8 text-center">
      <div className="prose py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section className="space-y-4">
            <TypographyH3>What is AES Encryption?</TypographyH3>
            <TypographyP>
              AES (Advanced Encryption Standard) is one of the most widely used
              symmetric encryption algorithms in the world. It encrypts data
              using the same secret key for both encryption and decryption.
              Originally established by the U.S. National Institute of Standards
              and Technology (NIST), AES has become a global standard for
              securing sensitive data.
            </TypographyP>
          </section>
          <section className="space-y-8">
            <TypographyH3>Key Features of AES</TypographyH3>

            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Symmetric Encryption
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Same key for encryption and decryption.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Block Cipher
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Encrypts data in fixed-size blocks of 128 bits.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Key Sizes
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Supports 128, 192, or 256-bit keys.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Fast & Secure
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Efficient for both software and hardware implementations.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Symmetric Encryption
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Same key for encryption and decryption.
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="space-y-8">
            <TypographyH3>Common Use Cases</TypographyH3>

            <div className="flex flex-wrap justify-center gap-8">
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    File Encryption
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Encrypts files for secure storage or transmission.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    WiFi Security (WPA2/WPA3)
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Ensures secure connections for WiFi networks.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    VPN Connections
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Encrypts data transmitted over VPN connections.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Secure Messaging
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Encrypts messages for secure communication.
                  </TypographyP>
                </CardContent>
              </Card>
              <Card className="text-center max-w-2xs">
                <CardContent>
                  <TypographyH4 className="text-lg mb-3">
                    Secure Storage
                  </TypographyH4>
                  <TypographyP className="text-sm">
                    Encrypts data for secure storage.
                  </TypographyP>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="space-y-8">
            <div className="space-y-4">
              <TypographyH3>How AES Works</TypographyH3>
              <TypographyP>
                AES takes plaintext and transforms it into ciphertext using
                several rounds of substitution, permutation, and mixing. The
                number of rounds depends on the key size:
              </TypographyP>
            </div>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li>128-bit key → 10 rounds</li>
              <li>192-bit key → 12 rounds</li>
              <li>256-bit key → 14 rounds</li>
            </ul>
            <TypographyP>
              The security of AES doesn&apos;t just rely on the algorithm — it
              also depends on how it&apos;s used. That&apos;s where modes of
              operation come in.
            </TypographyP>
          </section>
          <section className="space-y-8">
            <div className="space-y-4">
              <TypographyH3>AES Modes of Operation</TypographyH3>
              <TypographyP>
                AES alone can only encrypt a single 128-bit block. To encrypt
                longer messages, we use modes of operation. Each mode handles
                data differently and is suited for different use cases.
              </TypographyP>
            </div>
            <Accordion type="multiple">
              <ol className="list-decimal list-inside text-sm flex flex-col items-center space-y-8">
                <Card className="max-w-2xl w-full">
                  <CardContent>
                    <AccordionItem value="ecb">
                      <AccordionTrigger>
                        <h4 className="text-xl">ECB (Electronic Codebook)</h4>
                      </AccordionTrigger>
                      <AccordionContent className="text-start space-y-4">
                        <p>
                          <strong className="font-medium">How it works:</strong>{" "}
                          Each block of plaintext is encrypted independently
                          using the same key.
                        </p>
                        <div>
                          <p>
                            <strong className="font-medium">Pros:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>Simple and fast.</li>
                            <li>Parallelizable.</li>
                          </ul>
                        </div>
                        <div>
                          <p>
                            <strong className="font-medium">Cons:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>
                              Not secure for most uses — identical plaintext
                              blocks produce identical ciphertext blocks.
                            </li>
                            <li>
                              Leaks patterns (e.g., images remain recognizable
                              when encrypted).
                            </li>
                          </ul>
                        </div>

                        <p>
                          <strong className="font-medium">Best for:</strong>{" "}
                          Rarely recommended—only for encrypting short, random
                          data.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </CardContent>
                </Card>
                <Card className="max-w-2xl w-full">
                  <CardContent>
                    <AccordionItem value="cbc">
                      <AccordionTrigger>
                        <h4 className="text-xl">CBC (Cipher Block Chaining)</h4>
                      </AccordionTrigger>
                      <AccordionContent className="text-start space-y-4">
                        <p>
                          <strong className="font-medium">How it works:</strong>{" "}
                          Each plaintext block is XORed with the previous
                          ciphertext block before encryption. Uses an
                          Initialization Vector (IV) for the first block.
                        </p>
                        <div>
                          <p>
                            <strong className="font-medium">Pros:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>Hides patterns in data.</li>
                            <li>More secure than ECB.</li>
                          </ul>
                        </div>
                        <div>
                          <p>
                            <strong className="font-medium">Cons:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>
                              Slower: blocks must be processed sequentially.
                            </li>
                            <li>
                              If one block is corrupted, it affects the next.
                            </li>
                          </ul>
                        </div>
                        <p>
                          <strong className="font-medium">Best for:</strong>{" "}
                          File encryption, secure data storage.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </CardContent>
                </Card>
                <Card className="max-w-2xl w-full">
                  <CardContent>
                    <AccordionItem value="ctr">
                      <AccordionTrigger>
                        <h4 className="text-xl">CTR (Counter Mode)</h4>
                      </AccordionTrigger>
                      <AccordionContent className="text-start space-y-4">
                        <p>
                          <strong className="font-medium">How it works:</strong>{" "}
                          Turns AES into a stream cipher. Encrypts a counter
                          value and XORs it with the plaintext.
                        </p>

                        <div>
                          <p>
                            <strong className="font-medium">Pros:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>Fast and parallelizable.</li>
                            <li>Allows random access to encrypted data.</li>
                          </ul>
                        </div>
                        <div>
                          <p>
                            <strong className="font-medium">Cons:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>
                              Requires unique counter values; reuse breaks
                              security.
                            </li>
                          </ul>
                        </div>

                        <p>
                          <strong className="font-medium">Best for:</strong>{" "}
                          High-performance applications, disk encryption.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </CardContent>
                </Card>
                <Card className="max-w-2xl w-full">
                  <CardContent>
                    <AccordionItem value="gcm">
                      <AccordionTrigger>
                        <h4 className="text-xl">GCM (Galois/Counter Mode)</h4>
                      </AccordionTrigger>
                      <AccordionContent className="text-start space-y-4">
                        <p>
                          <strong className="font-medium">How it works:</strong>{" "}
                          Combines CTR mode with authentication (provides data
                          integrity). Encrypts using counters and adds a tag to
                          ensure the message wasn&apos;t tampered with.
                        </p>

                        <div>
                          <p>
                            <strong className="font-medium">Pros:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>Fast and secure.</li>
                            <li>
                              Authenticated encryption (confidentiality +
                              integrity).
                            </li>
                            <li>Widely used in TLS, HTTPS, and VPNs.</li>
                          </ul>
                        </div>
                        <div>
                          <p>
                            <strong className="font-medium">Cons:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                            <li>More complex than ECB or CBC.</li>
                            <li>Must use a unique IV for every message.</li>
                          </ul>
                        </div>

                        <p>
                          <strong className="font-medium">Best for:</strong>{" "}
                          Secure communications (websites, APIs, messaging).
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </CardContent>
                </Card>
              </ol>
            </Accordion>
          </section>
          <section className="space-y-8">
            <TypographyH3>AES Mode Comparison Table</TypographyH3>
            <div className="overflow-auto rounded-lg border text-sm bg-background text-foreground">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="p-2 border-b font-semibold">Mode</th>
                    <th className="p-2 border-b font-semibold">
                      Pattern Security
                    </th>
                    <th className="p-2 border-b font-semibold">Speed</th>
                    <th className="p-2 border-b font-semibold">
                      Authenticated?
                    </th>
                    <th className="p-2 border-b font-semibold">
                      Best Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">ECB</td>
                    <td className="p-2 border-b">❌ No</td>
                    <td className="p-2 border-b">⚡ Fast</td>
                    <td className="p-2 border-b">❌ No</td>
                    <td className="p-2 border-b">Rare, short data</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">CBC</td>
                    <td className="p-2 border-b">✅ Yes</td>
                    <td className="p-2 border-b">🐢 Slow</td>
                    <td className="p-2 border-b">❌ No</td>
                    <td className="p-2 border-b">Files, backups</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">CTR</td>
                    <td className="p-2 border-b">✅ Yes</td>
                    <td className="p-2 border-b">⚡⚡ Fast</td>
                    <td className="p-2 border-b">❌ No</td>
                    <td className="p-2 border-b">Streaming, disks</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">GCM</td>
                    <td className="p-2 border-b">✅ Yes</td>
                    <td className="p-2 border-b">⚡⚡ Fast</td>
                    <td className="p-2 border-b">✅ Yes</td>
                    <td className="p-2 border-b">Web & secure apps</td>
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
