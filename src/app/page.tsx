import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ALL_TOOLS, TOOL_INFO } from "@/constants";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import { PageHeader } from "@/components/page-header";
import { TextScramble } from "@/components/ui/text-scramble";
import {
  Book,
  Code,
  GlobeLock,
  LaptopMinimal,
  MessageCircleMore,
  Shield,
  UserCheck,
  UserLock,
  Wrench,
  Zap,
} from "lucide-react";
import { AdSpace } from "@/components/ad-space";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Free Online
            <TextScramble className="block text-primary" as="span" duration={1}>
              Encryption & Encoding
            </TextScramble>
            <span className="block">Tools</span>
          </>
        }
        description={
          <>
            Professional-grade online encryption, encoding and hashing tools.
            <span className="block mt-2 font-medium">
              No download or registration required • Secure, simple and fast
            </span>
          </>
        }
        action={{
          label: "View Tools",
          href: "/tools",
          icon: <Wrench />,
        }}
        badges={ALL_TOOLS.map((tool) => tool.name)}
      />
      <main className="space-y-8">
        <AdSpace />
        <article className="text-center">
          <section className="prose bg-gradient-to-b from-background via-background to-accent py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
              <div className="space-y-4">
                <TypographyH2>
                  Free Online Text Encryption & Decoding Tools
                </TypographyH2>
                <TypographyP className="text-lg">
                  Welcome to Cipher Toolbox, your comprehensive suite of free
                  online text encryption, decryption, hashing, encoding and
                  decoding tools. Our browser-based tools provide instant,
                  secure results.
                  <span className="block mt-6 font-semibold">
                    No registration, no downloads, no data collection.
                  </span>
                </TypographyP>
              </div>
              {TOOL_INFO.map((category) => (
                <div key={category.title} className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-center items-center gap-4">
                      <div className="rounded-md p-3 bg-primary text-primary-foreground">
                        {category.icon}
                      </div>
                      <TypographyH3>{category.title}</TypographyH3>
                    </div>
                    <TypographyP>{category.description}</TypographyP>
                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto place-items-center">
                    {category.tools.map((tool) => (
                      <Card
                        key={tool.name}
                        className="group hover:scale-105 transition-all duration-300 text-start w-full"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-bold">
                            {tool.name}
                          </CardTitle>
                          <CardDescription className="text-foreground">
                            {tool.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {tool.description}
                          </p>
                        </CardContent>
                        <CardFooter className="flex-1 flex items-end">
                          <Button className="w-full" variant="default">
                            <Link href={tool.defaultUrl}>
                              {tool.actionLabel}
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="prose space-y-12 bg-gradient-to-b from-accent to-background py-20">
            <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <TypographyH2>
                Why Choose Our Online Encryption and Encoding Tools?
              </TypographyH2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <TypographyH3 className="text-xl mb-3">
                    Military-Grade Security
                  </TypographyH3>
                  <TypographyP>
                    Our AES encryption uses the same standard trusted by
                    governments and military organizations worldwide.
                  </TypographyP>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <GlobeLock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <TypographyH3 className="text-xl mb-3">
                    Data Privacy
                  </TypographyH3>
                  <TypographyP>
                    We never store your data. All information used in our tools
                    will be deleted after the operation is completed.
                  </TypographyP>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <TypographyH3 className="text-xl mb-3">
                    Instant Results
                  </TypographyH3>
                  <TypographyP>
                    No waiting, no processing delays. Get instant results for
                    all your cryptographic operations
                  </TypographyP>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <TypographyH3 className="text-xl mb-3">
                    Completely Free
                  </TypographyH3>
                  <TypographyP>
                    No registration required, no hidden fees, no usage limits.
                    Professional-grade tools available 24/7.
                  </TypographyP>
                </div>
              </div>
            </div>
          </section>

          <section className="prose space-y-12 bg-background py-20">
            <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4">
                <TypographyH2>
                  Popular Use Cases for Online Encryption
                </TypographyH2>
                <TypographyP className="text-lg">
                  Our online encryption and encoding tools serve a wide range of
                  security and development needs
                </TypographyP>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                {[
                  {
                    title: "Secure Message Encryption",
                    desc: "Protect sensitive communications with AES or RSA encryption",
                    icon: <MessageCircleMore className="size-8" />,
                  },
                  {
                    title: "Password Protection",
                    desc: "Encrypt passwords and sensitive credentials before storage",
                    icon: <UserLock className="size-8" />,
                  },
                  {
                    title: "Data Encoding",
                    desc: "Encode text for safe transmission and storage",
                    icon: <Code className="size-8" />,
                  },
                  {
                    title: "Developer Tools",
                    desc: "Quick encoding and decoding for web development and API testing",
                    icon: <LaptopMinimal className="size-8" />,
                  },
                  {
                    title: "Educational Cryptography",
                    desc: "Learn encryption concepts with hands-on tools",
                    icon: <Book className="size-8" />,
                  },
                ].map((useCase, index) => (
                  <Card
                    key={index}
                    className="text-center hover:scale-105 transition-all justify-self-center duration-300 lg:col-span-2 col-span-1 md:[&:nth-last-child(1)]:col-span-2 md:[&:nth-last-child(1)]:justify-self-center lg:[&:nth-last-child(-n+2)]:col-span-3 lg:[&:nth-last-child(2)]:justify-self-end lg:[&:nth-last-child(1)]:justify-self-start md:max-w-sm md:w-auto"
                  >
                    <CardContent className="py-6">
                      <div className="mb-4 flex justify-center">
                        {useCase.icon}
                      </div>
                      <TypographyH3 className="text-lg mb-2">
                        {useCase.title}
                      </TypographyH3>
                      <TypographyP className="text-sm">
                        {useCase.desc}
                      </TypographyP>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </article>
        <AdSpace />
      </main>
    </>
  );
}
