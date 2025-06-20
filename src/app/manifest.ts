// manifest.ts

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/seo";

const manifest: MetadataRoute.Manifest = {
  name: SITE_CONFIG.name,
  short_name: "CipherToolbox",
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

export default manifest;
