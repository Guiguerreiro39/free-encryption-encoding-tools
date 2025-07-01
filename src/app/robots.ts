import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy", "/terms"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://ciphertoolbox.com/sitemap.xml",
  };
}
