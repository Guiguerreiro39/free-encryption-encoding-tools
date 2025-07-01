"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Unlock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cryptoRouter } from "@/lib/crypto";
import { toast } from "sonner";
import { NumberInput } from "@/components/ui/number-input";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
  shift: z
    .number()
    .min(1, "Shift must be at least 1")
    .max(25, "Shift must be at most 25"),
});

export const CaesarDecryption = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
      shift: 1,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.caesar.decrypt(
        data.inputText,
        data.shift
      );
      setOutputText(decryptedText);
    } catch (error) {
      console.error(error);
      toast.error("Failed to decrypt text");
      setOutputText("");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <FormField
            control={form.control}
            name="inputText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Input Text</FormLabel>
                <Textarea
                  className="h-32"
                  placeholder="Enter text to decrypt..."
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label>Output Text</Label>
            <div className="relative">
              <Textarea
                value={outputText}
                placeholder="Decrypted text will appear here..."
                readOnly
                className="h-32"
              />
              {outputText && (
                <Button
                  size="sm"
                  type="button"
                  variant="outline"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(outputText)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <FormField
          control={form.control}
          name="shift"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shift Value (1 to 25)</FormLabel>
              <div className="flex gap-2">
                <NumberInput {...field} min={1} max={25} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={form.formState.isSubmitting} className="w-sm">
          <Unlock className="h-4 w-4" />
          Decrypt
        </Button>
      </form>
    </Form>
  );
};
