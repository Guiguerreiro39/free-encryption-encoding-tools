"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Copy, Lock, Unlock } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { AES_TOOL } from "@/constants";

const modeShowObject = {
  ecb: {
    iv: false,
  },
  cbc: {
    iv: true,
  },
  ctr: {
    iv: true,
  },
  gcm: {
    iv: true,
  },
};

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
  secretKey: z.string().min(1, "Key is required"),
  mode: z.enum(["ecb", "cbc", "ctr", "gcm"]),
  iv: z.string().optional(),
  keySize: z.enum(["128", "192", "256"]),
  outputEncoding: z.enum(["hex", "base64"]),
  authTag: z.string().optional(),
});

export const AESCalculator = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
      secretKey: "",
      mode: "ecb",
      iv: "",
      keySize: "128",
      outputEncoding: "hex",
      authTag: "",
    },
  });

  const onEncryptionSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await cryptoRouter.aes.encrypt(data.inputText, {
        key: data.secretKey,
        iv: data.iv || "",
        keySize: Number(data.keySize) as 128 | 192 | 256,
        mode: data.mode,
        outputEncoding: data.outputEncoding,
        authTag: data.authTag || "",
      });

      if (data.mode === "gcm" && res.authTag) {
        form.setValue("authTag", res.authTag);
      }

      setOutputText(res.encrypted);

      if (res.iv) {
        form.setValue("iv", res.iv);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const onDecryptionSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.aes.decrypt(data.inputText, {
        key: data.secretKey,
        iv: data.iv || "",
        keySize: Number(data.keySize) as 128 | 192 | 256,
        mode: data.mode,
        outputEncoding: data.outputEncoding,
        authTag: data.authTag || "",
      });

      setOutputText(decryptedText);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const onSubmit = (
    values: z.infer<typeof formSchema>,
    event?: React.BaseSyntheticEvent
  ) => {
    const submitter = (event?.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;
    const buttonClicked = submitter?.value;

    switch (buttonClicked) {
      case "encrypt":
        onEncryptionSubmit(values);
        break;
      case "decrypt":
        onDecryptionSubmit(values);
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {AES_TOOL.title}
        </CardTitle>
        <CardDescription>{AES_TOOL.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <FormField
                control={form.control}
                name="inputText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input Text</FormLabel>
                    <Textarea
                      placeholder="Enter text to encrypt or decrypt..."
                      className="min-h-32"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4 justify-between">
                <div className="space-y-2">
                  <Label htmlFor="aes-output">Output</Label>
                  <div className="relative">
                    <Textarea
                      id="aes-output"
                      value={outputText}
                      readOnly
                      className={cn(
                        "min-h-32",
                        form.watch("mode") === "gcm" && "min-h-12"
                      )}
                      placeholder="Encrypted/decrypted text will appear here..."
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
                {form.watch("mode") === "gcm" && (
                  <FormField
                    control={form.control}
                    name="authTag"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Auth tag</FormLabel>
                        <Textarea
                          placeholder="Enter auth tag for decryption only..."
                          className="min-h-10"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
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
            <div className="flex gap-2">
              <Button
                disabled={form.formState.isSubmitting}
                className="flex items-center gap-2 flex-1"
                value="encrypt"
              >
                <Lock className="h-4 w-4" />
                Encrypt
              </Button>
              <Button
                variant="outline"
                disabled={form.formState.isSubmitting}
                className="flex items-center gap-2 flex-1"
                value="decrypt"
              >
                <Unlock className="h-4 w-4" />
                Decrypt
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
