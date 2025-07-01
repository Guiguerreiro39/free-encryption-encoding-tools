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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
  publicKey: z.string(),
  privateKey: z.string(),
  encoding: z.enum(["hex", "base64"]),
});

export const RSADecryption = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
      publicKey: "",
      privateKey: "",
      encoding: "hex",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.rsa.decrypt(data.inputText, {
        privateKey: data.privateKey,
        encoding: data.encoding,
      });
      setOutputText(decryptedText);
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to decrypt text. Ensure you have the correct key pairs."
      );
      setOutputText("");
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <FormField
            control={form.control}
            name="publicKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Public Key</FormLabel>
                <Textarea
                  placeholder="Enter public key..."
                  className="h-40"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privateKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Private Key</FormLabel>
                <Textarea
                  placeholder="Enter private key..."
                  className="h-40"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <FormField
            control={form.control}
            name="inputText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Input Text</FormLabel>
                <Textarea
                  placeholder="Enter text to decrypt..."
                  className="min-h-32"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label htmlFor="aes-output">Output</Label>
            <div className="relative">
              <Textarea
                id="aes-output"
                value={outputText}
                readOnly
                className="min-h-32"
                placeholder="Decrypted text will appear here..."
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
          <FormField
            control={form.control}
            name="encoding"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Encoding</FormLabel>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={(value) => field.onChange(value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="hex" />
                    <Label>Hex</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="base64" />
                    <Label>Base64</Label>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={form.formState.isSubmitting} className="w-sm">
          <Unlock className="h-4 w-4" />
          Decrypt
        </Button>
      </form>
    </Form>
  );
};
