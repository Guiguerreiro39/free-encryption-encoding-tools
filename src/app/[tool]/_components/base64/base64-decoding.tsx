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
import { Copy, LetterText } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cryptoRouter } from "@/lib/crypto";
import { toast } from "sonner";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
});

export const Base64Decoding = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decodedText = await cryptoRouter.base64.decode(data.inputText);
      setOutputText(decodedText);
    } catch (error) {
      console.error(error);
      toast.error("Failed to decode text");
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
                  placeholder="Enter text to decode..."
                  className="h-32"
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
                placeholder="Decoded text will appear here..."
                readOnly
                className="h-32"
              />
              {outputText && (
                <Button
                  size="sm"
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

        <Button disabled={form.formState.isSubmitting} className="w-sm">
          <LetterText className="h-4 w-4" />
          Decode
        </Button>
      </form>
    </Form>
  );
};
