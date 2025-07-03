import { AdSpace } from "@/components/ad-space";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  learning: React.ReactNode;
};

export const CalculatorLayout = <T extends string>({
  title,
  description,
  tool,
  tabs,
  learning,
}: Props<T>) => {
  return (
    <>
      <PageHeader title={title} description={description} />
      <main className="bg-gradient-to-b from-background via-background via-80% to-primary/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <AdSpace />
          <Card>
            <Tabs defaultValue={tool}>
              <CardHeader>
                <TabsList className="w-full max-w-sm mb-4">
                  {tabs.map((tab) => (
                    <TabsTrigger value={tab.value} key={tab.value} asChild>
                      <Link href={tab.href}>{tab.label}</Link>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </CardHeader>
              <CardContent className="mt-4">
                {tabs.map((tab) => (
                  <TabsContent value={tab.value} key={tab.value}>
                    {tab.content}
                  </TabsContent>
                ))}
              </CardContent>
            </Tabs>
          </Card>
          <AdSpace />
          {learning}
          <AdSpace />
        </div>
      </main>
    </>
  );
};
