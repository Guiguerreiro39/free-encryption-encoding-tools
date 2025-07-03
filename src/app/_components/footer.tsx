"use client";

import Image from "next/image";
import { TypographyP } from "@/components/ui/typography-p";
import { TypographyH4 } from "@/components/ui/typography-h4";
import Link from "next/link";
import { TOOL_INFO } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Image
                  src="/icon-reverse.svg"
                  width={35}
                  height={35}
                  alt="ciphertoolbox logo"
                />
                <h4 className="font-semibold">
                  <span className="text-xl font-bold">Cipher</span> Toolbox
                </h4>
              </div>
              <TypographyP className="text-sm text-secondary-foreground">
                Professional-grade encryption and encoding tools for everyone.
              </TypographyP>
            </div>

            <div className="w-full">
              <Accordion type="multiple" className="flex gap-12">
                {TOOL_INFO.map((category) => (
                  <AccordionItem
                    key={category.title}
                    value={category.title.toLowerCase()}
                    className="border-b-0"
                  >
                    <AccordionTrigger className="font-medium text-base [&_svg]:text-secondary-foreground">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      {category.tools.map((tool) => (
                        <Link
                          key={tool.name}
                          href={tool.defaultUrl}
                          className="text-secondary-foreground hover:underline"
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8">
                <TypographyH4 className="text-base font-medium mb-3">
                  Resources
                </TypographyH4>
                <ul className="text-sm text-secondary-foreground flex gap-12">
                  <li>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground mt-12 pt-8 text-center">
            <TypographyP className="text-sm text-secondary-foreground">
              &copy; 2025 Cipher Toolbox. All rights reserved.
              Professional-grade encryption tools for secure communications.
            </TypographyP>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col items-start gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Image
                src="/icon-reverse.svg"
                width={35}
                height={35}
                alt="ciphertoolbox logo"
              />
              <h4 className="font-semibold">
                <span className="text-xl font-bold">Cipher</span> Toolbox
              </h4>
            </div>
            <TypographyP className="text-sm text-secondary-foreground">
              Professional-grade encryption and encoding tools for everyone.
            </TypographyP>
          </div>

          <div className="grid grid-cols-3 w-full gap-8 text-center">
            {TOOL_INFO.map((category) => (
              <div className="col-span-1" key={category.title}>
                <TypographyH4 className="text-lg mb-3">
                  {category.title}
                </TypographyH4>
                <ul className="space-y-2 text-sm text-secondary-foreground">
                  {category.tools.map((tool) => (
                    <li key={tool.name}>
                      <Link href={tool.defaultUrl} className="hover:underline">
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-1">
              <TypographyH4 className="text-lg mb-3">Resources</TypographyH4>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground mt-12 pt-8 text-center">
          <TypographyP className="text-sm text-secondary-foreground">
            &copy; 2025 Cipher Toolbox. All rights reserved. Professional-grade
            encryption tools for secure communications.
          </TypographyP>
        </div>
      </div>
    </footer>
  );
};
