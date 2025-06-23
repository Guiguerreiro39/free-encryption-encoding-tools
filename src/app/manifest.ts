import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.name,
    start_url: "/",
    display: "standalone",
    background_color: "#fcf6f3",
    theme_color: "#b98771",
    description: SITE_CONFIG.description.default,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
