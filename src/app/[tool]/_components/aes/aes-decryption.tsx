"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Unlock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cryptoRouter } from "@/lib/crypto";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const modeShowObject = {
  ecb: {
    iv: false,
    authTag: false,
  },
  cbc: {
    iv: true,
    authTag: false,
  },
  ctr: {
    iv: true,
    authTag: false,
  },
  gcm: {
    iv: true,
    authTag: true,
  },
};

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
  secretKey: z.string().min(1, "Key is required"),
  mode: z.enum(["ecb", "cbc", "ctr", "gcm"]),
  iv: z.string().optional(),
  keySize: z.enum(["128", "192", "256"]),
  outputEncoding: z.enum(["utf8", "base64"]),
  authTag: z.string(),
});

export const AESDecryption = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
      secretKey: "",
      mode: "ecb",
      iv: "",
      keySize: "128",
      outputEncoding: "utf8",
      authTag: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.aes.decrypt(data.inputText, {
        key: data.secretKey,
        iv: data.iv || "",
        keySize: Number(data.keySize) as 128 | 192 | 256,
        mode: data.mode,
        outputEncoding: data.outputEncoding,
        authTag: data.authTag,
      });

      setOutputText(decryptedText);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
        setOutputText("");
      }
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mode</FormLabel>
                <Select
                  {...field}
                  defaultValue={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecb">ECB</SelectItem>
                    <SelectItem value="cbc">CBC</SelectItem>
                    <SelectItem value="ctr">CTR</SelectItem>
                    <SelectItem value="gcm">GCM</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {modeShowObject[form.watch("mode")].iv && (
            <FormField
              control={form.control}
              name="iv"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>IV</FormLabel>
                  <Input
                    placeholder="Enter IV..."
                    maxLength={form.watch("mode") === "ctr" ? 32 : 16}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {modeShowObject[form.watch("mode")].authTag && (
            <FormField
              control={form.control}
              name="authTag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Auth tag</FormLabel>
                  <Input placeholder="Enter Auth tag..." {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="keySize"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Key Size</FormLabel>
                <Select
                  {...field}
                  defaultValue={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="128">128</SelectItem>
                    <SelectItem value="192">192</SelectItem>
                    <SelectItem value="256">256</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secretKey"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Secret Key</FormLabel>
                <Input placeholder="Enter encryption key..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="outputEncoding"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="mb-2">Output Encoding</FormLabel>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={(value) => field.onChange(value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="utf8" />
                    <Label>Plain Text</Label>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mt-8">
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
        <Button disabled={form.formState.isSubmitting} className="w-sm">
          <Unlock className="h-4 w-4" />
          Decrypt
        </Button>
      </form>
    </Form>
  );
};
