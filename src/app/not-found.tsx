import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typography-p";
import { ALL_TOOLS } from "@/constants";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-300px)] text-center p-4">
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            404
          </h1>
          <TypographyH1>Page Not Found</TypographyH1>
          <TypographyP>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </TypographyP>
        </div>

        <div className="space-y-4">
          <TypographyP>Here are some helpful links instead:</TypographyP>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">Home</Link>
            </Button>
            {ALL_TOOLS.map((tool) => (
              <Button key={tool.name} asChild variant="outline">
                <Link href={tool.defaultUrl}>{tool.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
