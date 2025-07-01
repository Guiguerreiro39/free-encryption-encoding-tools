import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AdSpace } from "@/components/ad-space";
import { Badge } from "@/components/ui/badge";
import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_CONFIG } from "@/seo/site-config";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title.default,
    template: SITE_CONFIG.title.template,
  },
  description: SITE_CONFIG.description.default,
  authors: SITE_CONFIG.authors,
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.publisher,
  category: SITE_CONFIG.category,
  manifest: SITE_CONFIG.manifest,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9131623089140541"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="antialiased">
        <GoogleAnalytics gaId="G-N8EBZH5YE6" />
        <SidebarProvider>
          <AppSidebar />
          <main className="min-h-screen space-y-8 w-full">
            <header className="py-16 px-4 space-y-8 text-center bg-accent/20">
              <SidebarTrigger className="md:hidden size-10 absolute top-2 left-4" />
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                  Free Online Encryption & Encoding Tools
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Professional-grade online encryption, encoding and hashing
                  tools. No download or registration required - Secure, simple
                  and fast.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Badge variant="outline">AES</Badge>
                <Badge variant="outline">RSA</Badge>
                <Badge variant="outline">Base64</Badge>
                <Badge variant="outline">Caesar Cipher</Badge>
              </div>
            </header>
            <div className="px-8 space-y-8">
              <AdSpace />
              {children}
              <AdSpace />
            </div>
          </main>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
