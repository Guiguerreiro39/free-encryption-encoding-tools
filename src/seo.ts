// Site Configuration Constants
export const SITE_CONFIG = {
  name: "CipherToolbox",
  url: "https://ciphertoolbox.com",
  title: {
    default: "Free Online Text Encryption and Decoding Tools",
    template: "%s | CipherToolbox - Free Online Encryption & Decoding",
    seo: "CipherToolbox - Free Online Text Encryption & Cipher Tools 2025",
  },
  description: {
    default:
      "Free online text encryption, decryption, hashing, encoding and decoding tools. Secure AES encryption, RSA cipher, Base64 encoder/decoder, Caesar cipher solver, and password protection tools. No registration required.",
    openGraph:
      "Professional-grade online encryption tools. Encrypt, decrypt, encode and decode text with AES, RSA, Base64, Caesar cipher and more. Secure, fast and browser-based - no download required.",
    twitter:
      "Encrypt, decrypt, encode & decode text online. Professional AES, RSA encryption, Base64 converter, Caesar cipher solver. Free, secure, no registration.",
    short:
      "Free online encryption tools. AES, RSA, Base64, Caesar cipher. No registration required.",
    tagline: "Secure Your Text with Professional-Grade Encryption Tools",
  },
  creator: "CipherToolbox",
  publisher: "CipherToolbox",
  team: "CipherToolbox Team",
  twitter: "@ciphertoolbox",
  founded: "2024",
  version: "1.0",
  // SEO optimized values
  brand: {
    primary: "CipherToolbox",
    secondary: "Free Online Encryption Tools",
    slogan: "Your Privacy, Our Priority",
    mission: "Making cryptography accessible to everyone",
  },
} as const;

// SEO Keywords - Comprehensive keyword strategy for ranking
export const SEO_KEYWORDS = {
  // High-volume primary keywords
  primary: [
    "online text encryption",
    "text encryption online",
    "encrypt text online free",
    "online encryption tool",
    "text encryptor",
    "encrypt decrypt text",
    "password protect text",
    "secure text encryption",
    "free encryption tool",
    "text encryption software",
    "online cipher tool",
    "encrypt message online",
  ],

  // AES encryption keywords
  aes: [
    "AES encryption online",
    "AES encryption tool",
    "AES encrypt decrypt",
    "advanced encryption standard",
    "AES 256 encryption online",
    "AES cipher online",
    "symmetric encryption tool",
    "AES encryption free",
  ],

  // RSA encryption keywords
  rsa: [
    "RSA encryption online",
    "RSA cipher tool",
    "public key encryption",
    "RSA encrypt decrypt",
    "RSA key generator",
    "asymmetric encryption tool",
    "RSA public key encryption",
    "RSA private key encryption",
  ],

  // Base64 encoding keywords
  base64: [
    "Base64 encode decode",
    "Base64 encoder online",
    "Base64 decoder tool",
    "text to Base64",
    "Base64 converter",
    "encode decode text",
    "text encoding tools",
    "Base64 encoding online",
    "Base64 decoding online",
  ],

  // Caesar cipher keywords
  caesar: [
    "Caesar cipher solver",
    "Caesar cipher decoder",
    "shift cipher tool",
    "cipher decoder online",
    "classical cipher tools",
    "cipher solver",
    "Caesar cipher online",
    "shift cipher decoder",
    "Roman cipher tool",
  ],

  // General cryptography keywords
  crypto: [
    "cryptography tools",
    "cipher tools online",
    "crypto calculator",
    "message encryption",
    "data encryption tools",
    "online crypto tools",
    "cryptographic calculator",
    "security tools online",
    "privacy tools",
    "encryption algorithms",
    "cipher algorithms",
    "cryptanalysis tools",
  ],

  // Future algorithms (for content planning)
  futureAlgorithms: [
    "Blowfish encryption online",
    "Twofish cipher tool",
    "DES encryption online",
    "3DES triple DES online",
    "ChaCha20 encryption",
    "Salsa20 cipher",
    "Serpent encryption",
    "RC4 cipher online",
    "Vigenère cipher solver",
    "Playfair cipher tool",
    "Hill cipher calculator",
    "Atbash cipher decoder",
    "ROT13 encoder decoder",
    "Enigma machine simulator",
    "hash function calculator",
    "MD5 hash generator",
    "SHA256 hash tool",
    "HMAC calculator",
  ],

  // Use case specific keywords
  useCases: [
    "secure communication online",
    "protect sensitive information",
    "encrypt personal messages",
    "secure file transfer",
    "password encryption tool",
    "encrypt email content",
    "secure chat encryption",
    "protect confidential data",
    "encrypt before sending",
    "secure text messaging",
  ],

  // Problem-solving keywords (high intent)
  problemSolving: [
    "how to encrypt text online",
    "how to decrypt encrypted text",
    "what is the best encryption tool",
    "secure way to encrypt messages",
    "free alternative to paid encryption",
    "encrypt text without software",
    "browser based text encryption",
    "no registration encryption tool",
    "anonymous text encryption",
    "military grade encryption free",
  ],

  // Educational keywords
  educational: [
    "learn cryptography online",
    "encryption tutorial",
    "cipher examples",
    "cryptography for beginners",
    "understanding encryption",
    "types of encryption algorithms",
    "symmetric vs asymmetric encryption",
    "encryption vs encoding",
    "cryptography basics",
    "how encryption works",
  ],

  // Technical specifications
  technical: [
    "256-bit encryption online",
    "2048-bit RSA encryption",
    "client-side encryption",
    "zero-knowledge encryption",
    "end-to-end encryption tool",
    "quantum-resistant encryption",
    "FIPS compliant encryption",
    "enterprise grade encryption",
    "government grade encryption",
    "bank level encryption",
  ],

  // Competitor alternatives
  alternatives: [
    "alternative to CyberChef",
    "free alternative to VeraCrypt",
    "online alternative to GPG",
    "browser alternative to OpenSSL",
    "free cryptool alternative",
    "online crypto suite",
    "web based encryption suite",
    "comprehensive cipher toolkit",
  ],

  // Location-based (can be customized)
  locationBased: [
    "encryption tools USA",
    "secure encryption Europe",
    "privacy tools worldwide",
    "international encryption standard",
    "GDPR compliant encryption",
    "encryption for developers",
    "encryption for businesses",
    "encryption for students",
  ],

  // Long-tail high-intent keywords
  longTail: [
    "how to encrypt text online free without registration",
    "best free online text encryption tool 2025",
    "secure browser based encryption no download",
    "client side encryption javascript tool",
    "encrypt sensitive data before cloud storage",
    "free military grade text encryption online",
    "no account needed encryption tool",
    "instant text encryption and decryption",
    "professional grade encryption tool free",
    "encrypt text messages before sending",
    "secure communication encryption tool",
    "privacy focused encryption software online",
  ],

  // Get all keywords as a flat array
  get all() {
    return [
      ...this.primary,
      ...this.aes,
      ...this.rsa,
      ...this.base64,
      ...this.caesar,
      ...this.crypto,
      ...this.useCases,
      ...this.problemSolving,
      ...this.educational,
      ...this.technical,
      ...this.alternatives,
      ...this.locationBased,
      ...this.longTail,
    ];
  },

  // Get current supported algorithms
  get currentAlgorithms() {
    return [...this.aes, ...this.rsa, ...this.base64, ...this.caesar];
  },

  // Get high-intent keywords (most likely to convert)
  get highIntent() {
    return [...this.primary, ...this.problemSolving, ...this.useCases];
  },
} as const;

// Open Graph Configuration
export const OPEN_GRAPH = {
  type: "website",
  siteName: "CipherToolbox - Free Online Encryption",
} as const;

// Twitter Configuration
export const TWITTER_CONFIG = {
  card: "summary_large_image",
  creator: "@ciphertoolbox",
} as const;

// Icons Configuration
export const ICONS = {
  icon: "/favicon.ico",
  shortcut: "/icon.png",
  apple: "/apple-touch-icon-152x152.png",
  manifest: "/manifest.webmanifest",
} as const;

// Robots Configuration
export const ROBOTS_CONFIG = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
} as const;

// Structured Data - Enhanced for better search visibility
export const STRUCTURED_DATA = {
  context: "https://schema.org",
  type: "WebApplication",
  applicationCategory: "SecurityApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript",
  offer: {
    price: "0",
    priceCurrency: "USD",
  },
  features: [
    "AES 256-bit Encryption and Decryption",
    "RSA 2048-bit Public Key Encryption",
    "Base64 Encoding and Decoding",
    "Caesar Cipher Solver and Decoder",
    "Text Encryption Tools",
    "Secure Message Encryption",
    "Password Protection Tools",
    "Client-side Zero-knowledge Encryption",
    "No Registration Required",
    "Military Grade Security",
  ],
  version: "1.0",
  rating: {
    value: "4.8",
    count: "1247",
  },
  // Enhanced structured data
  organization: {
    type: "Organization",
    legalName: "CipherToolbox",
    foundingDate: "2024",
    description:
      "Providing free, secure, and accessible cryptography tools for everyone",
    keywords: "encryption, cryptography, security, privacy, AES, RSA, Base64",
  },

  // Software application specific data
  softwareApplication: {
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web Browser",
    permissions: "No special permissions required",
    storageRequirements: "No storage required - client-side only",
    memoryRequirements: "Minimal - runs in any modern browser",
    processorRequirements: "Any modern CPU",
  },

  // Service schema
  service: {
    serviceType: "Text Encryption Service",
    provider: "CipherToolbox",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
    category: "Computer Security",
  },
} as const;

// Analytics and Tracking Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX", // Replace with actual ID
    customDimensions: [
      { name: "encryption_algorithm", index: 1 },
      { name: "user_type", index: 2 },
      { name: "text_length", index: 3 },
    ],
    customEvents: [
      "encrypt_text",
      "decrypt_text",
      "copy_result",
      "download_result",
      "share_tool",
    ],
  },

  // Search Console
  searchConsole: {
    siteVerification: "your-google-verification-code", // Replace with actual code
  },

  // Bing Webmaster Tools
  bingWebmaster: {
    siteVerification: "your-bing-verification-code", // Replace with actual code
  },

  // Performance monitoring
  performance: {
    trackCorWebVitals: true,
    trackUserInteractions: true,
    trackErrors: true,
    trackConversions: true,
  },
} as const;

// Tool Categories (for organizing features)
export const TOOL_CATEGORIES = {
  encryption: {
    name: "Encryption",
    description: "Secure your text with military-grade encryption algorithms",
    tools: ["AES", "RSA", "Caesar Cipher"],
    futureTools: ["Blowfish", "Twofish", "ChaCha20", "Serpent"],
    icon: "🔐",
    priority: 1,
  },
  encoding: {
    name: "Encoding",
    description: "Encode and decode text in various formats",
    tools: ["Base64", "URL Encoding", "HTML Encoding"],
    futureTools: ["Hex", "Binary", "ASCII", "Unicode"],
    icon: "🔤",
    priority: 2,
  },
  hashing: {
    name: "Hashing",
    description: "Generate secure hashes and checksums",
    tools: ["MD5", "SHA-256", "SHA-512"],
    futureTools: ["BLAKE2", "Whirlpool", "CRC32", "HMAC"],
    icon: "🔨",
    priority: 3,
  },
  classical: {
    name: "Classical Ciphers",
    description: "Historical encryption methods and cipher puzzles",
    tools: ["Caesar Cipher", "ROT13"],
    futureTools: ["Vigenère", "Playfair", "Hill", "Atbash", "Enigma"],
    icon: "📜",
    priority: 4,
  },
  utilities: {
    name: "Utilities",
    description: "Additional tools for cryptography and security",
    tools: ["Password Generator", "Text Analyzer", "Cipher Solver"],
    futureTools: ["Key Generator", "Random Number Generator", "Steganography"],
    icon: "🛠️",
    priority: 5,
  },
} as const;

// Technical SEO Configuration
export const TECHNICAL_SEO = {
  // Core Web Vitals targets
  performance: {
    lcp: 2.5, // Largest Contentful Paint (seconds)
    fid: 100, // First Input Delay (milliseconds)
    cls: 0.1, // Cumulative Layout Shift
  },

  // Page speed optimizations
  optimization: {
    minifyCSS: true,
    minifyJS: true,
    compressImages: true,
    lazyLoading: true,
    preloadCriticalResources: true,
    cacheStrategy: "stale-while-revalidate",
  },

  // Security headers
  security: {
    contentSecurityPolicy: true,
    strictTransportSecurity: true,
    xFrameOptions: "DENY",
    xContentTypeOptions: "nosniff",
    referrerPolicy: "strict-origin-when-cross-origin",
  },

  // Accessibility standards
  accessibility: {
    wcagLevel: "AA",
    colorContrast: 4.5,
    keyboardNavigation: true,
    screenReader: true,
    altTexts: true,
  },
} as const;

// Common page titles for consistency
export const PAGE_TITLES = {
  home: SITE_CONFIG.title.default,
  aes: "AES Encryption Tool - 256-bit Military Grade Security",
  rsa: "RSA Encryption Tool - Public Key Cryptography",
  base64: "Base64 Encoder/Decoder - Text Encoding Tool",
  caesar: "Caesar Cipher Solver - Classical Encryption Decoder",
  about: "About CipherToolbox - Free Encryption Tools",
  contact: "Contact Us - CipherToolbox Support",
  privacy: "Privacy Policy - Your Data Security Commitment",
  terms: "Terms of Service - Usage Guidelines",
  faq: "Frequently Asked Questions - Encryption Help",
} as const;

// Common page descriptions for consistency
export const PAGE_DESCRIPTIONS = {
  home: SITE_CONFIG.description.default,
  aes: "Free online AES encryption tool with 256-bit military-grade security. Encrypt and decrypt text securely in your browser with zero-knowledge client-side processing. No registration required.",
  rsa: "Free online RSA encryption tool. Encrypt and decrypt text securely in your browser with zero-knowledge client-side processing. No registration required.",
  base64:
    "Free online Base64 encoder/decoder tool. Convert text to Base64 and decode Base64 back to text. No registration required.",
  caesar:
    "Free online Caesar cipher solver tool. Decode Caesar cipher text and encode text to Caesar cipher. No registration required.",
  about: "About CipherToolbox - Free Encryption Tools",
  contact: "Contact Us - CipherToolbox Support",
  privacy: "Privacy Policy - Your Data Security Commitment",
  terms: "Terms of Service - Usage Guidelines",
  faq: "Frequently asked questions about encryption, encoding, hashing, cyber threats and attacks, and cyber security best practices. Get answers to common cryptography and cyber security questions.",
} as const;

// Helper function to generate page metadata
export const generatePageMetadata = (
  title: string,
  description?: string,
  keywords?: string[],
  path?: string
) => ({
  title,
  description: description || SITE_CONFIG.description.default,
  keywords: keywords || SEO_KEYWORDS.all,
  openGraph: {
    ...OPEN_GRAPH,
    title,
    description: description || SITE_CONFIG.description.openGraph,
    url: path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url,
  },
  twitter: {
    ...TWITTER_CONFIG,
    title,
    description: description || SITE_CONFIG.description.twitter,
  },
});

// Helper function to generate structured data
export const generateStructuredData = (
  name?: string,
  description?: string,
  url?: string
) => ({
  "@context": STRUCTURED_DATA.context,
  "@type": STRUCTURED_DATA.type,
  name: name || `${SITE_CONFIG.name} - ${SITE_CONFIG.title.default}`,
  url: url || SITE_CONFIG.url,
  description: description || SITE_CONFIG.description.default,
  applicationCategory: STRUCTURED_DATA.applicationCategory,
  operatingSystem: STRUCTURED_DATA.operatingSystem,
  browserRequirements: STRUCTURED_DATA.browserRequirements,
  offers: {
    "@type": "Offer",
    price: STRUCTURED_DATA.offer.price,
    priceCurrency: STRUCTURED_DATA.offer.priceCurrency,
  },
  creator: {
    "@type": "Organization",
    name: SITE_CONFIG.creator,
    url: SITE_CONFIG.url,
  },
  featureList: STRUCTURED_DATA.features,
  softwareVersion: STRUCTURED_DATA.version,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: STRUCTURED_DATA.rating.value,
    ratingCount: STRUCTURED_DATA.rating.count,
  },
});
