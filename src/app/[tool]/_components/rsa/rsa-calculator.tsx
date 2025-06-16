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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Lock, Unlock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cryptoRouter } from "@/lib/crypto";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RSA_TOOL } from "@/constants";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
  publicKey: z.string(),
  privateKey: z.string(),
  encoding: z.enum(["hex", "base64"]),
});

export const RSACalculator = () => {
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

  const onEncryptionSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const encryptedText = await cryptoRouter.rsa.encrypt(data.inputText, {
        publicKey: data.publicKey,
        encoding: data.encoding,
      });
      setOutputText(encryptedText);
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to encrypt text. Ensure you have the correct key pairs."
      );
    }
  };

  const onDecryptionSubmit = async (data: z.infer<typeof formSchema>) => {
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
          {RSA_TOOL.title}
        </CardTitle>
        <CardDescription>{RSA_TOOL.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
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
                      placeholder="Enter text to encrypt or decrypt..."
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
