import { MetadataRoute } from "next";
import { TOOL_INFO } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cryptotools.example.com";

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic routes for tools
  const toolRoutes = TOOL_INFO.flatMap((category) =>
    category.tools.map((tool) => ({
      url: `${baseUrl}${tool.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...toolRoutes];
}
