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
import { Copy, Lock } from "lucide-react";
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

export const RSAEncryption = () => {
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
      const encryptedText = await cryptoRouter.rsa.encrypt(data.inputText, {
        publicKey: data.publicKey,
        outputEncoding: data.encoding,
      });
      setOutputText(encryptedText);
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to encrypt text. Ensure you have the correct key pairs."
      );
      setOutputText("");
    }
  };

  const onGenerateKeys = async () => {
    try {
      const { publicKey, privateKey } =
        await cryptoRouter.rsa.generateKeyPair();
      form.setValue("publicKey", publicKey);
      form.setValue("privateKey", privateKey);
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate keys");
      form.setValue("publicKey", "");
      form.setValue("privateKey", "");
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-2 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <FormField
              control={form.control}
              name="publicKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Public Key</FormLabel>
                  <div className="relative">
                    <Textarea
                      placeholder="Enter public key..."
                      className="h-40"
                      {...field}
                    />
                    {field.value && (
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-6"
                        onClick={() => copyToClipboard(field.value)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="privateKey"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Private Key</FormLabel>
                  <div className="relative">
                    <Textarea
                      placeholder="Enter private key..."
                      className="h-40"
                      {...field}
                    />
                    {field.value && (
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-6"
                        onClick={() => copyToClipboard(field.value)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button variant="outline" type="button" onClick={onGenerateKeys}>
            Generate Keys
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <FormField
            control={form.control}
            name="inputText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Input Text</FormLabel>
                <Textarea
                  placeholder="Enter text to encrypt..."
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
                placeholder="Encrypted text will appear here..."
              />
              {outputText && (
                <Button
                  type="button"
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
                <FormLabel className="mb-2">Output Encoding</FormLabel>
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
          <Lock className="h-4 w-4" />
          Encrypt
        </Button>
      </form>
    </Form>
  );
};
