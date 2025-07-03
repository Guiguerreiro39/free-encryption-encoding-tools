import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CONFIG } from "@/seo/faq-config";
import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { AdSpace } from "@/components/ad-space";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export const metadata: Metadata = {
  title: FAQ_CONFIG.title,
  description: FAQ_CONFIG.description,
};

export default function EncryptionSecurityFAQ() {
  return (
    <>
      <PageHeader
        title={FAQ_CONFIG.title}
        description={FAQ_CONFIG.description}
      />
      <main className="space-y-8">
        <AdSpace />
        <article className="text-center prose bg-gradient-to-b from-background via-background to-primary/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <Accordion type="multiple" className="space-y-20">
              <section className="space-y-8">
                <div className="space-y-4">
                  <TypographyH2>Encryption</TypographyH2>
                  <TypographyP className="text-lg">
                    Frequently asked questions about encryption.
                  </TypographyP>
                </div>
                <div className="space-y-2 text-start">
                  <AccordionItem value="encryption-vs-encoding">
                    <AccordionTrigger>
                      What&apos;s the difference between encryption and
                      encoding?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      <strong>Encryption</strong> protects data by making it
                      unreadable without a secret key. It ensures
                      confidentiality.
                      <br />
                      <strong>Encoding</strong> is used for compatibility (e.g.,
                      Base64) and is easily reversible — it does not provide
                      security.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="symmetric-vs-asymmetric">
                    <AccordionTrigger>
                      What&apos;s the difference between symmetric and
                      asymmetric encryption?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      <strong>Symmetric encryption</strong> uses one key for
                      encryption and decryption (e.g., AES).
                      <br />
                      <strong>Asymmetric encryption</strong> uses a
                      public/private key pair — one for encryption, one for
                      decryption (e.g., RSA).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="what-is-e2ee">
                    <AccordionTrigger>
                      What is end-to-end encryption (E2EE)?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      E2EE ensures that only the sender and recipient can read
                      the message. Even the server or app provider cannot
                      decrypt the content.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="what-is-iv">
                    <AccordionTrigger>
                      What&apos;s the purpose of an Initialization Vector (IV)?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      An IV adds randomness to encryption so that the same
                      plaintext encrypted multiple times yields different
                      ciphertexts. Crucial in block cipher modes like CBC and
                      GCM.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="key-loss">
                    <AccordionTrigger>
                      What happens if an encryption key is lost?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Without the key, the encrypted data becomes practically
                      unrecoverable. Secure key management and backups are
                      critical.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="reuse-key-iv">
                    <AccordionTrigger>
                      Can I reuse the same key and IV combination?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      No. Reusing both can lead to serious vulnerabilities.
                      Always generate a fresh IV per encryption session.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="is-encryption-bulletproof">
                    <AccordionTrigger>
                      Is encryption bulletproof?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      No system is perfectly secure. Encryption helps, but weak
                      passwords, poor implementation, or bad key management can
                      still lead to breaches.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </section>

              <section className="space-y-8">
                <div className="space-y-4">
                  <TypographyH2>Hashing</TypographyH2>
                  <TypographyP className="text-lg">
                    Frequently asked questions about hashing.
                  </TypographyP>
                </div>
                <div className="space-y-2 text-start">
                  <AccordionItem value="encrypt-passwords">
                    <AccordionTrigger>
                      Can I use encryption as a password protection method?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Passwords should be <strong>hashed</strong> using
                      algorithms like <code>bcrypt</code> or <code>Argon2</code>
                      . Hashing is one-way and safer for password storage.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hash-function">
                    <AccordionTrigger>
                      What is a cryptographic hash function?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      A hash function converts input into a fixed-size output.
                      It is irreversible and used for data integrity, password
                      storage, and digital signatures.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="encryption-vs-hashing">
                    <AccordionTrigger>
                      What is the difference between encryption and hashing?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Encryption is reversible with a key. Hashing is one-way
                      and used for verification and integrity.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </section>

              <section className="space-y-8">
                <div className="space-y-4">
                  <TypographyH2>Encoding</TypographyH2>
                  <TypographyP className="text-lg">
                    Frequently asked questions about encoding.
                  </TypographyP>
                </div>
                <div className="space-y-2 text-start">
                  <AccordionItem value="is-base64-secure">
                    <AccordionTrigger>Is Base64 secure?</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      No. Base64 is an encoding format, not encryption. It is
                      easily reversible and not suitable for secure data.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="is-base64-secure">
                    <AccordionTrigger>
                      Can Base64 increase file size?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Yes. Base64-encoded data is ~33% larger than the original
                      binary because every 3 bytes become 4 encoded characters.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="is-base64-secure">
                    <AccordionTrigger>
                      What&apos;s the difference between ASCII and UTF-8?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      ASCII uses 7 bits and supports basic English characters.
                      UTF-8 is a variable-length encoding that supports all
                      Unicode characters (including emojis and non-Latin
                      scripts).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="is-base64-secure">
                    <AccordionTrigger>
                      What&apos;s the difference between encoding and
                      serialization?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Encoding transforms data for compatibility (e.g., UTF-8,
                      Base64), while serialization converts data into a storable
                      or transmittable format (e.g., JSON, XML).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="is-base64-secure">
                    <AccordionTrigger>
                      Is it safe to store Base64 in a database?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      It&apos;s safe but inefficient. Base64-encoded data is
                      larger, so it&apos;s often better to store raw binary
                      (e.g., in BLOB fields).
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </section>

              <section className="space-y-8">
                <div className="space-y-4">
                  <TypographyH2>General Security</TypographyH2>
                  <TypographyP className="text-lg">
                    Frequently asked questions about general security.
                  </TypographyP>
                </div>
                <div className="space-y-2 text-start">
                  <AccordionItem value="https-vs-http">
                    <AccordionTrigger>
                      What&apos;s the difference between HTTPS and HTTP?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      HTTPS uses TLS to encrypt traffic between browser and
                      server. HTTP is unencrypted and insecure for sensitive
                      data.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="digital-signature">
                    <AccordionTrigger>
                      What is a digital signature?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      A digital signature proves data authenticity and integrity
                      using asymmetric encryption. Common in secure
                      communication and software.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-to-check-site-security">
                    <AccordionTrigger>
                      How can I tell if a website is secure?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Look for “https://” and a padlock icon in the browser.
                      This means traffic is encrypted.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="localstorage-risk">
                    <AccordionTrigger>
                      What&apos;s the risk of storing encrypted data in the
                      browser (localStorage)?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      If attackers access the browser (e.g., via XSS), they can
                      read localStorage. Prefer secure HTTP-only cookies or
                      session encryption.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="vpn">
                    <AccordionTrigger>
                      What is a VPN and how does it protect me?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      A VPN encrypts your internet traffic and routes it through
                      a server, hiding activity from local networks and ISPs.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </section>

              <section className="space-y-8">
                <div className="space-y-4">
                  <TypographyH2>Threats & Attacks</TypographyH2>
                  <TypographyP className="text-lg">
                    Frequently asked questions about threats and attacks.
                  </TypographyP>
                </div>
                <div className="space-y-2 text-start">
                  <AccordionItem value="brute-force">
                    <AccordionTrigger>
                      What is a brute-force attack?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      An attacker tries all possible combinations to find a key
                      or password. Long, random credentials reduce this risk.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mitm">
                    <AccordionTrigger>
                      What is a man-in-the-middle (MITM) attack?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      An attacker intercepts and may alter communication between
                      two parties. TLS/HTTPS defends against MITM.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </section>
            </Accordion>
          </div>
          <AdSpace />
        </article>
      </main>
    </>
  );
}
