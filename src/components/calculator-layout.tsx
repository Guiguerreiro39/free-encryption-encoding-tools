import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type Props<T> = {
  title: string;
  description: string;
  tool: T;
  tabs: {
    value: T;
    label: string;
    content: React.ReactNode;
    href: string;
  }[];
};

export const CalculatorLayout = <T extends string>({
  title,
  description,
  tool,
  tabs,
}: Props<T>) => {
  return (
    <Card>
      <Tabs defaultValue={tool}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <TabsList className="w-full max-w-sm mb-4">
            {tabs.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.value} asChild>
                <Link href={tab.href}>{tab.label}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent value={tab.value} key={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  );
};
