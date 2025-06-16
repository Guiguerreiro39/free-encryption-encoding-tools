import { toast } from "sonner";

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copied!", {
      description: "Text copied to clipboard",
      duration: 2000,
    });
  } catch (error) {
    console.error(error);
    toast.error("Copy failed", {
      description: "Please copy manually",
      duration: 2000,
    });
  }
};
