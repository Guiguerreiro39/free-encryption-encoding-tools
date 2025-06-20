"use client";

import { useEffect } from "react";

export const AdSpace = () => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push(
          {} as { push: (obj: Record<string, unknown>) => void }
        );
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9131623089140541"
        data-ad-slot="6333536066"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
