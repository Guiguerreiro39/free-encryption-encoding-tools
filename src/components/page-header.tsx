"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  badges?: string[];
  action?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
};

export const PageHeader = ({ title, description, action, badges }: Props) => {
  return (
    <header className="bg-gradient-to-b from-accent to-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-18"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          {action && (
            <Link href={action?.href}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg [&_svg:not([class*='size-'])]:size-5"
              >
                {action.icon}
                {action.label}
              </Button>
            </Link>
          )}
          {badges && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {badges.map((badge) => (
                <Badge key={badge} variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
};
