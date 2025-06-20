export {};

declare global {
  interface Window {
    adsbygoogle?: {
      push: (obj: Record<string, unknown>) => void;
    }[];
  }
}
