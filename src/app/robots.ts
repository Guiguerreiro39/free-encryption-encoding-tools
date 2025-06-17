import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/admin/",
          "/temp/",
          "/cache/",
          "/*.json$",
          "/search?*",
          "/*?utm_*",
          "/*?ref=*",
          "/*?fbclid=*",
          "/*?gclid=*",
        ],
        crawlDelay: 1,
      },
      // Allow specific search engine bots full access
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/"],
      },
    ],
    sitemap: "https://cryptotools.example.com/sitemap.xml",
    // Additional sitemaps for better indexing
    host: "https://cryptotools.example.com",
  };
}
