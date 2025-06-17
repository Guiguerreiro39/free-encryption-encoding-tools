"use static";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";

export const AESLearning = () => {
  return (
    <article className="space-y-4">
      <section>
        <h4 className="font-semibold mb-2">What is AES Encryption?</h4>
        <p className="text-muted-foreground text-sm">
          AES (Advanced Encryption Standard) is one of the most widely used
          symmetric encryption algorithms in the world. It encrypts data using
          the same secret key for both encryption and decryption. Originally
          established by the U.S. National Institute of Standards and Technology
          (NIST), AES has become a global standard for securing sensitive data.
        </p>
      </section>
      <section className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold mb-2">Key Features of AES:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="font-semibold">Symmetric Encryption:</strong>{" "}
              Same key for encryption and decryption.
            </li>
            <li>
              <strong className="font-semibold">Block Cipher:</strong> Encrypts
              data in fixed-size blocks of 128 bits.
            </li>
            <li>
              <strong className="font-semibold">Key Sizes:</strong> Supports
              128, 192, or 256-bit keys.
            </li>
            <li>
              <strong className="font-semibold">Fast & Secure:</strong>{" "}
              Efficient for both software and hardware implementations.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Common Uses:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>File encryption</li>
            <li>WiFi security (WPA2/WPA3)</li>
            <li>VPN connections</li>
            <li>Secure messaging</li>
          </ul>
        </div>
      </section>
      <section>
        <h5 className="font-semibold mb-2">How AES Works</h5>
        <p className="text-sm text-muted-foreground">
          AES takes plaintext and transforms it into ciphertext using several
          rounds of substitution, permutation, and mixing. The number of rounds
          depends on the key size:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
          <li>128-bit key → 10 rounds</li>
          <li>192-bit key → 12 rounds</li>
          <li>256-bit key → 14 rounds</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          The security of AES doesn&apos;t just rely on the algorithm — it also
          depends on how it&apos;s used. That&apos;s where modes of operation
          come in.
        </p>
      </section>
      <section>
        <h5 className="font-semibold mb-2">AES Modes of Operation</h5>
        <p className="text-sm text-muted-foreground mb-4">
          AES alone can only encrypt a single 128-bit block. To encrypt longer
          messages, we use modes of operation. Each mode handles data
          differently and is suited for different use cases.
        </p>
        <Accordion collapsible type="single">
          <ol className="list-decimal list-inside text-sm">
            <AccordionItem value="ecb">
              <AccordionTrigger>
                <li className="font-semibold">ECB (Electronic Codebook)</li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-2.5">
                  <strong className="font-medium">How it works:</strong> Each
                  block of plaintext is encrypted independently using the same
                  key.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Pros:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>Simple and fast.</li>
                      <li>Parallelizable.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Cons:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>
                        Not secure for most uses — identical plaintext blocks
                        produce identical ciphertext blocks.
                      </li>
                      <li>
                        Leaks patterns (e.g., images remain recognizable when
                        encrypted).
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="font-medium">Best for:</strong> Rarely
                  recommended—only for encrypting short, random data.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cbc">
              <AccordionTrigger>
                <li className="font-semibold">CBC (Cipher Block Chaining)</li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-2.5">
                  <strong className="font-medium">How it works:</strong> Each
                  plaintext block is XORed with the previous ciphertext block
                  before encryption. Uses an Initialization Vector (IV) for the
                  first block.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Pros:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>Hides patterns in data.</li>
                      <li>More secure than ECB.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Cons:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>Slower: blocks must be processed sequentially.</li>
                      <li>If one block is corrupted, it affects the next.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="font-medium">Best for:</strong> File
                  encryption, secure data storage.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ctr">
              <AccordionTrigger>
                <li className="font-semibold">CTR (Counter Mode)</li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-2.5">
                  <strong className="font-medium">How it works:</strong> Turns
                  AES into a stream cipher. Encrypts a counter value and XORs it
                  with the plaintext.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Pros:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>Fast and parallelizable.</li>
                      <li>Allows random access to encrypted data.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Cons:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>
                        Requires unique counter values; reuse breaks security.
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="font-medium">Best for:</strong>{" "}
                  High-performance applications, disk encryption.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gcm">
              <AccordionTrigger>
                <li className="font-semibold">GCM (Galois/Counter Mode)</li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-2.5">
                  <strong className="font-medium">How it works:</strong>{" "}
                  Combines CTR mode with authentication (provides data
                  integrity). Encrypts using counters and adds a tag to ensure
                  the message wasn&apos;t tampered with.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Pros:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>Fast and secure.</li>
                      <li>
                        Authenticated encryption (confidentiality + integrity).
                      </li>
                      <li>Widely used in TLS, HTTPS, and VPNs.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="font-medium">Cons:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 my-2.5">
                      <li>More complex than ECB or CBC.</li>
                      <li>Must use a unique IV for every message.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="font-medium">Best for:</strong> Secure
                  communications (websites, APIs, messaging).
                </p>
              </AccordionContent>
            </AccordionItem>
          </ol>
        </Accordion>
      </section>
      <section>
        <h5 className="font-semibold mb-4">AES Mode Comparison Table</h5>
        <div className="overflow-auto rounded-lg border text-sm text-muted-foreground">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-2 border-b font-semibold">Mode</th>
                <th className="p-2 border-b font-semibold">Pattern Security</th>
                <th className="p-2 border-b font-semibold">Speed</th>
                <th className="p-2 border-b font-semibold">Authenticated?</th>
                <th className="p-2 border-b font-semibold">Best Use Case</th>
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
    </article>
  );
};
