import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AdSpace } from "@/components/ad-space";
import { Badge } from "@/components/ui/badge";
import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptotools.example.com"),
  title: {
    default:
      "Free Online Text Encryption and Encoding Tools – Encode & Decode Instantly",
    template: "%s | CryptoTools",
  },
  description:
    "Use our free online tools to encrypt, decrypt, encode, and decode text instantly. Secure your data with simple, browser-based utilities. No installation required.",
  keywords: [
    "online text encryption",
    "online text encoding",
    "AES encryption decryption",
    "RSA encrypt decrypt",
    "RSA key generate",
    "Base64 encode decode",
    "Caesar cipher encrypt decrypt",
    "Caesar cipher brute force",
    "cryptography tools",
    "secure text encryption",
    "free encryption tools",
    "online crypto tools",
    "text cipher",
    "encoding tools",
    "secure text encoding",
    "free encoding tools",
    "online encoding tools",
  ],
  authors: [{ name: "CryptoTools", url: "https://cryptotools.example.com" }],
  creator: "CryptoTools",
  publisher: "CryptoTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cryptotools.example.com",
    title: "Free Online Text Encryption and Encoding Tools",
    description:
      "Use our free online tools to encrypt, decrypt, encode, and decode text instantly. Secure your data with simple, browser-based utilities.",
    siteName: "CryptoTools",
    images: [
      {
        url: "https://cryptotools.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoTools - Online Encryption and Encoding Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Encryption and Encoding Tools",
    description:
      "Secure your data with our free online encryption and encoding tools. No installation required.",
    images: ["https://cryptotools.example.com/twitter-image.jpg"],
    creator: "@cryptotools",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

function addStructuredData() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "CryptoTools",
      "url": "https://cryptotools.example.com",
      "description": "Free online tools for text encryption, decryption, encoding, and decoding.",
      "applicationCategory": "WebApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Organization",
        "name": "CryptoTools"
      }
    }`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CryptoTools" />
        <link rel="canonical" href="https://cryptotools.example.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredData()}
          key="structured-data"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="min-h-screen space-y-8 w-full">
            <header className="py-16 px-4 space-y-8 text-center bg-accent/40">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Free Online Encryption & Encoding Tools
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Professional-grade text encryption and decryption tools.
                  Secure your data with AES-256, RSA, Base64 encoding, and
                  classical ciphers.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Badge variant="outline">AES-256</Badge>
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
