"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { TOOL_INFO } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AppNavbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  const isMobile = useIsMobile();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  if (isMobile) {
    return (
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        animate={hidden ? "hidden" : "visible"}
        className="bg-background border-b border-border z-50 top-0 sticky"
      >
        <div className="bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 container flex items-center justify-between gap-8">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/icon.svg"
              width={35}
              height={35}
              alt="ciphertoolbox logo"
            />
            <h4 className="font-semibold text-primary/90">
              <span className="text-xl font-bold">Cipher</span> Toolbox
            </h4>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="h-full w-3/4">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/icon.svg"
                      width={35}
                      height={35}
                      alt="ciphertoolbox logo"
                    />
                    <h4 className="font-semibold text-primary/90">
                      <span className="text-xl font-bold">Cipher</span> Toolbox
                    </h4>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 px-4 mt-4">
                <Accordion type="multiple">
                  {TOOL_INFO.map((category) => (
                    <AccordionItem
                      key={category.title}
                      value={category.title.toLowerCase()}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="font-medium text-base">
                        {category.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 m-2">
                        {category.tools.map((tool) => (
                          <Link
                            key={tool.name}
                            href={tool.defaultUrl}
                            className="text-muted-foreground rounded-full px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {tool.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <SheetFooter className="flex-1 flex flex-col gap-2 justify-end mb-4">
                <Link
                  href="/faq"
                  className="font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/about"
                  className="font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className="bg-background border-b border-border z-50 top-0 sticky"
    >
      <div className="bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 container flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            width={35}
            height={35}
            alt="ciphertoolbox logo"
          />
          <h4 className="font-semibold text-primary/90">
            <span className="text-xl font-bold">Cipher</span> Toolbox
          </h4>
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {TOOL_INFO.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {category.tools.map((tool) => (
                      <ListItem
                        key={tool.name}
                        href={tool.defaultUrl}
                        title={tool.name}
                      >
                        {tool.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/faq">FAQs</Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.nav>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="p-3">
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
