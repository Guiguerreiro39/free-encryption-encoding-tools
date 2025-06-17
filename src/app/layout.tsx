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
      "Free Online Text Encryption Tools - AES, RSA, Base64 Encoder & Cipher Decoder",
    template: "%s | CryptoTools - Free Online Encryption & Decoding",
  },
  description:
    "Free online text encryption, decryption, encoding and decoding tools. Secure AES encryption, RSA cipher, Base64 encoder/decoder, Caesar cipher solver, and password protection tools. No registration required.",
  keywords: [
    // Primary encryption keywords
    "online text encryption",
    "text encryption online",
    "encrypt text online free",
    "online encryption tool",
    "text encryptor",
    "encrypt decrypt text",
    "password protect text",
    "secure text encryption",

    // AES specific
    "AES encryption online",
    "AES encryption tool",
    "AES encrypt decrypt",
    "advanced encryption standard",

    // RSA specific
    "RSA encryption online",
    "RSA cipher tool",
    "public key encryption",
    "RSA encrypt decrypt",
    "RSA key generator",

    // Base64 & encoding
    "Base64 encode decode",
    "Base64 encoder online",
    "Base64 decoder tool",
    "text to Base64",
    "Base64 converter",
    "encode decode text",
    "text encoding tools",

    // Caesar cipher
    "Caesar cipher solver",
    "Caesar cipher decoder",
    "shift cipher tool",
    "cipher decoder online",
    "classical cipher tools",
    "cipher solver",

    // General crypto terms
    "cryptography tools",
    "cipher tools online",
    "crypto calculator",
    "message encryption",
    "data encryption tools",
    "online crypto tools",
    "cryptographic calculator",
    "security tools online",
    "privacy tools",

    // Long-tail keywords
    "how to encrypt text online",
    "free encryption software online",
    "browser based encryption",
    "client side encryption",
    "no download encryption tool",
    "instant text encryption",
    "military grade encryption online",
    "secure message encryption",
  ],
  authors: [
    { name: "CryptoTools Team", url: "https://cryptotools.example.com" },
  ],
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
    title:
      "Free Online Text Encryption Tools - AES, RSA, Base64 & Cipher Decoder",
    description:
      "Professional-grade online encryption tools. Encrypt, decrypt, encode and decode text with AES, RSA, Base64, Caesar cipher and more. Secure, fast and browser-based - no download required.",
    siteName: "CryptoTools - Free Online Encryption",
    images: [
      {
        url: "https://cryptotools.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoTools - Free Online Text Encryption and Decoding Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Encryption Tools - Secure AES, RSA & Base64",
    description:
      "Encrypt, decrypt, encode & decode text online. Professional AES, RSA encryption, Base64 converter, Caesar cipher solver. Free, secure, no registration.",
    images: ["https://cryptotools.example.com/twitter-image.jpg"],
    creator: "@cryptotools",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://cryptotools.example.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

function addStructuredData() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "CryptoTools - Free Online Encryption Tools",
      "url": "https://cryptotools.example.com",
      "description": "Free online tools for text encryption, decryption, encoding, and decoding. Supports AES, RSA, Base64, Caesar cipher and more cryptographic algorithms.",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Organization",
        "name": "CryptoTools",
        "url": "https://cryptotools.example.com"
      },
      "featureList": [
        "AES Encryption and Decryption",
        "RSA Public Key Encryption",
        "Base64 Encoding and Decoding", 
        "Caesar Cipher Solver",
        "Text Encryption Tools",
        "Secure Message Encryption",
        "Password Protection Tools"
      ],
      "screenshot": "https://cryptotools.example.com/screenshot.jpg",
      "softwareVersion": "1.0",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247"
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
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Additional SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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
            <header className="py-16 px-4 space-y-8 text-center bg-accent/20">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-primary bg-clip-text text-transparent">
                  Free Online Encryption & Encoding Tools
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Professional-grade online encryption, decryption, encoding and
                  decoding tools. Secure your text with AES encryption, RSA
                  cipher, Base64 converter, Caesar cipher solver, and more. No
                  download or registration required - all processing happens in
                  your browser.
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
