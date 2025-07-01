import { TypographyH1 } from "@/components/ui/typography-h1";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { TypographyP } from "@/components/ui/typography-p";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { ABOUT_CONFIG } from "@/seo/about-config";

export const metadata: Metadata = {
  title: ABOUT_CONFIG.title,
  description: ABOUT_CONFIG.description,
};

export default function AboutPage() {
  return (
    <article className="container mx-auto px-4 py-12 space-y-12">
      <div className="space-y-8">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <TypographyH1>About Our Cryptographic Tools</TypographyH1>
          <TypographyP>
            We are dedicated to providing secure, reliable, and easy-to-use
            cryptographic tools for developers, security professionals, and
            privacy-conscious individuals.
          </TypographyP>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Our mission is to make cryptographic operations accessible to
                everyone. We believe that strong encryption and security should
                be available to all, regardless of technical expertise.
              </TypographyP>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                We offer a comprehensive suite of cryptographic tools including
                hashing, encryption, encoding, and more—all running securely in
                your browser without sending sensitive data to our servers.
              </TypographyP>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Security First</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <TypographyP>
                  We take security seriously. All cryptographic operations are
                  performed client-side, meaning your data never leaves your
                  browser. We don&apos;t store, log, or transmit any of the data
                  you process through our tools.
                </TypographyP>
                <TypographyP>
                  Our tools are open-source, allowing security experts to verify
                  their integrity and security.
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <TypographyH2>Get Started</TypographyH2>
        <TypographyP>
          Ready to explore our tools? Head back to the{" "}
          <Link href="/" className="text-primary hover:underline">
            homepage
          </Link>{" "}
          to start using our cryptographic calculators.
        </TypographyP>
      </section>
    </article>
  );
}
