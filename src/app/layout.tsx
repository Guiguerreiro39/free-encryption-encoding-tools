import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AdSpace } from "@/components/ad-space";
import { Badge } from "@/components/ui/badge";
import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  ANALYTICS_CONFIG,
  generateStructuredData,
  ICONS,
  OPEN_GRAPH,
  ROBOTS_CONFIG,
  SITE_CONFIG,
  TWITTER_CONFIG,
} from "@/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#b98771",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title.default,
    template: SITE_CONFIG.title.template,
  },
  description: SITE_CONFIG.description.default,
  keywords: [
    "online text encryption",
    "encrypt text online free",
    "AES encryption online",
    "RSA encryption tool",
    "Base64 encoder decoder",
    "Caesar cipher solver",
    "free encryption tools",
    "secure text encryption",
    "military grade encryption",
    "zero knowledge encryption",
  ],
  authors: [{ name: SITE_CONFIG.creator }],
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.publisher,
  category: "Security",
  classification: "Cryptography Tools",
  robots: ROBOTS_CONFIG,
  openGraph: {
    type: OPEN_GRAPH.type,
    locale: OPEN_GRAPH.locale,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title.default,
    description: SITE_CONFIG.description.openGraph,
    siteName: OPEN_GRAPH.siteName,
    images: [
      {
        url: OPEN_GRAPH.image.url,
        width: OPEN_GRAPH.image.width,
        height: OPEN_GRAPH.image.height,
        alt: OPEN_GRAPH.image.alt,
      },
    ],
  },
  twitter: {
    card: TWITTER_CONFIG.card,
    creator: TWITTER_CONFIG.creator,
    title: SITE_CONFIG.title.default,
    description: SITE_CONFIG.description.twitter,
    images: [OPEN_GRAPH.image.url],
  },
  icons: ICONS,
  manifest: "/site.webmanifest",
  verification: {
    google: ANALYTICS_CONFIG.searchConsole.siteVerification,
    other: {
      "msvalidate.01": ANALYTICS_CONFIG.bingWebmaster.siteVerification,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      en: "/",
      "en-US": "/en-us",
      "en-GB": "/en-gb",
      "en-CA": "/en-ca",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
          key="structured-data"
        />

        <meta name="theme-color" content="#b98771" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CipherToolbox" />
        <meta name="msapplication-TileColor" content="#b98771" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Additional SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Performance Hints */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Security Headers via Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="canonical" href="https://ciphertoolbox.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="min-h-screen space-y-8 w-full">
            <div>
              <SidebarTrigger className="md:hidden size-10 absolute top-2 left-4" />
              <header className="py-16 px-4 space-y-8 text-center bg-accent/20">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-primary bg-clip-text text-transparent">
                    Free Online Encryption & Encoding Tools
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Professional-grade online encryption, decryption, encoding
                    and decoding tools. Secure your text with AES encryption,
                    RSA cipher, Base64 converter, Caesar cipher solver, and
                    more. No download or registration required - all processing
                    happens in your browser.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Badge variant="outline">AES</Badge>
                  <Badge variant="outline">RSA</Badge>
                  <Badge variant="outline">Base64</Badge>
                  <Badge variant="outline">Caesar Cipher</Badge>
                </div>
              </header>
            </div>
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
