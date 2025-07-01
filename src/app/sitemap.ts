import { TOOLS_CONFIG } from "@/seo/tools-config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ciphertoolbox.com";
  const currentDate = new Date();

  const toolsRoutes = Object.keys(TOOLS_CONFIG).map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    priority: 0.9,
  }));

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...toolsRoutes];
}
