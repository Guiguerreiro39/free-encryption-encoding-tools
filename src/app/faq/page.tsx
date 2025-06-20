import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  generatePageMetadata,
  PAGE_TITLES,
  PAGE_DESCRIPTIONS,
  SEO_KEYWORDS,
  generateStructuredData,
  SITE_CONFIG,
} from "@/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  PAGE_TITLES.faq,
  PAGE_DESCRIPTIONS.faq,
  SEO_KEYWORDS.all,
  "/faq"
);

export default function EncryptionSecurityFAQ() {
  const structuredData = {
    ...generateStructuredData(
      PAGE_TITLES.faq,
      PAGE_DESCRIPTIONS.faq,
      `${SITE_CONFIG.url}/faq`
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section>
        <Accordion type="multiple" className="space-y-8">
          {/* Encryption FAQs */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl mt-6">Encryption</h3>

            <AccordionItem value="encryption-vs-encoding">
              <AccordionTrigger>
                What&apos;s the difference between encryption and encoding?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <strong>Encryption</strong> protects data by making it
                unreadable without a secret key. It ensures confidentiality.
                <br />
                <strong>Encoding</strong> is used for compatibility (e.g.,
                Base64) and is easily reversible — it does not provide security.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="symmetric-vs-asymmetric">
              <AccordionTrigger>
                What&apos;s the difference between symmetric and asymmetric
                encryption?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <strong>Symmetric encryption</strong> uses one key for
                encryption and decryption (e.g., AES).
                <br />
                <strong>Asymmetric encryption</strong> uses a public/private key
                pair — one for encryption, one for decryption (e.g., RSA).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="what-is-e2ee">
              <AccordionTrigger>
                What is end-to-end encryption (E2EE)?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                E2EE ensures that only the sender and recipient can read the
                message. Even the server or app provider cannot decrypt the
                content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="what-is-iv">
              <AccordionTrigger>
                What&apos;s the purpose of an Initialization Vector (IV)?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                An IV adds randomness to encryption so that the same plaintext
                encrypted multiple times yields different ciphertexts. Crucial
                in block cipher modes like CBC and GCM.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="key-loss">
              <AccordionTrigger>
                What happens if an encryption key is lost?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Without the key, the encrypted data becomes practically
                unrecoverable. Secure key management and backups are critical.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reuse-key-iv">
              <AccordionTrigger>
                Can I reuse the same key and IV combination?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                No. Reusing both can lead to serious vulnerabilities. Always
                generate a fresh IV per encryption session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="is-encryption-bulletproof">
              <AccordionTrigger>Is encryption bulletproof?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                No system is perfectly secure. Encryption helps, but weak
                passwords, poor implementation, or bad key management can still
                lead to breaches.
              </AccordionContent>
            </AccordionItem>
          </div>

          {/* Hashing FAQs */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl mt-6">Hashing</h3>

            <AccordionItem value="encrypt-passwords">
              <AccordionTrigger>
                Can I use encryption as a password protection method?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Passwords should be <strong>hashed</strong> using algorithms
                like <code>bcrypt</code> or <code>Argon2</code>. Hashing is
                one-way and safer for password storage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hash-function">
              <AccordionTrigger>
                What is a cryptographic hash function?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                A hash function converts input into a fixed-size output. It is
                irreversible and used for data integrity, password storage, and
                digital signatures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="encryption-vs-hashing">
              <AccordionTrigger>
                What is the difference between encryption and hashing?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Encryption is reversible with a key. Hashing is one-way and used
                for verification and integrity.
              </AccordionContent>
            </AccordionItem>
          </div>

          {/* Encoding FAQs */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl mt-6">Encoding</h3>

            <AccordionItem value="is-base64-secure">
              <AccordionTrigger>Is Base64 secure?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                No. Base64 is an encoding format, not encryption. It is easily
                reversible and not suitable for secure data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="is-base64-secure">
              <AccordionTrigger>
                Can Base64 increase file size?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes. Base64-encoded data is ~33% larger than the original binary
                because every 3 bytes become 4 encoded characters.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="is-base64-secure">
              <AccordionTrigger>
                What&apos;s the difference between ASCII and UTF-8?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                ASCII uses 7 bits and supports basic English characters. UTF-8
                is a variable-length encoding that supports all Unicode
                characters (including emojis and non-Latin scripts).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="is-base64-secure">
              <AccordionTrigger>
                What&apos;s the difference between encoding and serialization?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Encoding transforms data for compatibility (e.g., UTF-8,
                Base64), while serialization converts data into a storable or
                transmittable format (e.g., JSON, XML).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="is-base64-secure">
              <AccordionTrigger>
                Is it safe to store Base64 in a database?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                It&apos;s safe but inefficient. Base64-encoded data is larger,
                so it&apos;s often better to store raw binary (e.g., in BLOB
                fields).
              </AccordionContent>
            </AccordionItem>
          </div>

          {/* Security FAQs */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl mt-6">General Security</h3>

            <AccordionItem value="https-vs-http">
              <AccordionTrigger>
                What&apos;s the difference between HTTPS and HTTP?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                HTTPS uses TLS to encrypt traffic between browser and server.
                HTTP is unencrypted and insecure for sensitive data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="digital-signature">
              <AccordionTrigger>What is a digital signature?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                A digital signature proves data authenticity and integrity using
                asymmetric encryption. Common in secure communication and
                software.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-to-check-site-security">
              <AccordionTrigger>
                How can I tell if a website is secure?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Look for “https://” and a padlock icon in the browser. This
                means traffic is encrypted.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="localstorage-risk">
              <AccordionTrigger>
                What&apos;s the risk of storing encrypted data in the browser
                (localStorage)?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                If attackers access the browser (e.g., via XSS), they can read
                localStorage. Prefer secure HTTP-only cookies or session
                encryption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vpn">
              <AccordionTrigger>
                What is a VPN and how does it protect me?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                A VPN encrypts your internet traffic and routes it through a
                server, hiding activity from local networks and ISPs.
              </AccordionContent>
            </AccordionItem>
          </div>

          {/* Threats & Attacks FAQs */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl mt-6">Threats & Attacks</h3>

            <AccordionItem value="brute-force">
              <AccordionTrigger>What is a brute-force attack?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                An attacker tries all possible combinations to find a key or
                password. Long, random credentials reduce this risk.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mitm">
              <AccordionTrigger>
                What is a man-in-the-middle (MITM) attack?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                An attacker intercepts and may alter communication between two
                parties. TLS/HTTPS defends against MITM.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </section>
    </>
  );
}
