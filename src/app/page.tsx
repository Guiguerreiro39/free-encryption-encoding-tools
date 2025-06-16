import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TOOL_INFO } from "@/constants";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {TOOL_INFO.map((category) => (
        <div key={category.title} className="space-y-4 ">
          <div>
            <TypographyH2>{category.title}</TypographyH2>
            <TypographyP>{category.description}</TypographyP>
          </div>

          <div className="flex items-stretch justify-start flex-wrap gap-4">
            {category.tools.map((tool) => (
              <Link href={tool.url} key={tool.name} className="">
                <Card className="w-[250px] h-full">
                  <CardHeader>
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
