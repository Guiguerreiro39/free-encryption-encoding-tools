import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_CONFIG } from "@/seo/site-config";
import Head from "next/head";
import { Inter } from "next/font/google";
import { AppNavbar } from "./_components/app-navbar";
import { Footer } from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`antialiased max-w-screen ${inter.className}`}>
        <GoogleAnalytics gaId="G-N8EBZH5YE6" />
        <AppNavbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
