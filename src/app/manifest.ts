import { SITE_CONFIG } from "@/seo/site-config";
import type { MetadataRoute } from "next";

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
        src: "/icon.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
