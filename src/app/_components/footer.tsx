import Image from "next/image";
import { TypographyP } from "@/components/ui/typography-p";
import { TypographyH4 } from "@/components/ui/typography-h4";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 shadow-md shadow-t-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
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

          <div>
            <TypographyH4 className="text-lg mb-3">Encryption</TypographyH4>
            <ul className="space-y-2 text-sm text-secondary-foreground">
              <li>
                <a href="#">AES Encryption</a>
              </li>
              <li>
                <a href="#">RSA Encryption</a>
              </li>
              <li>
                <a href="#">Caesar Cipher</a>
              </li>
            </ul>
          </div>

          <div>
            <TypographyH4 className="text-lg mb-3">Encoding</TypographyH4>
            <ul className="space-y-2 text-sm text-secondary-foreground">
              <li>
                <a href="#">Base64 Encoding</a>
              </li>
            </ul>
          </div>

          <div>
            <TypographyH4 className="text-lg mb-3">Resources</TypographyH4>
            <ul className="space-y-2 text-sm text-secondary-foreground">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground mt-12 pt-8 text-center">
          <TypographyP className="text-sm text-secondary-foreground">
            &copy; 2025 Cipher Toolbox. All rights reserved. Professional-grade
            encryption tools for secure communications.
          </TypographyP>
        </div>
      </div>
    </footer>
  );
};
