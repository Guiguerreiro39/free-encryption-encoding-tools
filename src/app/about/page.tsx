import { Metadata } from "next";
import { TypographyP } from "@/components/ui/typography-p";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { ABOUT_CONFIG } from "@/seo/about-config";
import { PageHeader } from "@/components/page-header";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { Star, Wrench, Shield } from "lucide-react";
import Image from "next/image";

const ABOUT_INFO = [
  {
    title: "Mission",
    description:
      "Our mission is to make cryptographic operations accessible to everyone. We believe that strong encryption and security should be available to all, regardless of technical expertise.",
    icon: <Star />,
  },
  {
    title: "Our Tools",
    description:
      "We offer a comprehensive suite of cryptographic tools including hashing, encryption and encoding - Fast, secure and easy to use.",
    icon: <Wrench />,
  },
  {
    title: "Security First",
    description:
      "We take security seriously. Your data will always be deleted after the operation is completed. Our tools are open-source, allowing security experts to verify their integrity and security.",
    icon: <Shield />,
  },
];

export const metadata: Metadata = {
  title: ABOUT_CONFIG.title,
  description: ABOUT_CONFIG.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Cipher Toolbox"
        description="We are dedicated to providing secure, reliable, and
                  easy-to-use cryptographic tools for developers, security
                  professionals, and privacy-conscious individuals."
      />
      <main className="space-y-8">
        <article className="text-center">
          <section className="prose bg-background py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ABOUT_INFO.map((item) => (
                  <div key={item.title} className="space-y-10">
                    <div className="space-y-4">
                      <div className="flex justify-center items-center gap-4">
                        <div className="rounded-md p-3 bg-primary text-primary-foreground">
                          {item.icon}
                        </div>
                        <TypographyH3>{item.title}</TypographyH3>
                      </div>
                      <TypographyP>{item.description}</TypographyP>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="prose bg-gradient-to-b from-background to-primary/20 py-20">
            <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <TypographyH2>Meet our Founder</TypographyH2>
                <Image
                  src="/guilherme.webp"
                  alt="Guilherme Guerreiro"
                  width={200}
                  height={200}
                  className="rounded-full border-2 border-primary shadow-lg justify-self-center"
                />
                <TypographyP className="text-lg">
                  Meet our founder,{" "}
                  <Link
                    href="https://guilhermegr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Guilherme Guerreiro
                  </Link>
                  , a passionate developer and security enthusiast. He created
                  Cipher Toolbox to make cryptographic operations accessible to
                  everyone.
                </TypographyP>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
