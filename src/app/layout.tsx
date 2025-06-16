import type { Metadata } from "next";
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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptotools.example.com"),
  title: {
    default:
      "Free Online Text Encryption and Encoding Tools – Encode & Decode Instantly",
    template: "%s",
  },
  description:
    "Use our free online tools to encrypt, decrypt, encode, and decode text instantly. Secure your data with simple, browser-based utilities.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cryptotools.example.com",
    siteName: "CryptoTools",
    title: "Free Online Encryption Tools - AES, RSA, Base64, Caesar Cipher",
    description:
      "Professional cryptographic tools for secure text encryption and decryption. Learn cryptography with our educational guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoTools - Free Online Encryption Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Encryption Tools",
    description:
      "Secure text encryption with AES, RSA, Base64, and Caesar cipher tools.",
    images: ["/twitter-image.jpg"],
    creator: "@cryptotools",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://cryptotools.example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cryptotools.example.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CryptoTools",
              description:
                "Free online text encryption and decryption tools with AES-256, RSA, Base64, and Caesar cipher support.",
              url: "https://cryptotools.example.com",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "AES-256 Encryption/Decryption",
                "RSA Key Generation",
                "Base64 Encoding/Decoding",
                "Caesar Cipher",
                "Educational Cryptography Guides",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="min-h-screen space-y-8 w-full">
            <header className="py-16 px-4 space-y-8 text-center bg-primary/5">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
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
