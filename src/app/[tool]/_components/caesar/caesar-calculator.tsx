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
import { NumberInput } from "@/components/ui/number-input";
import { CAESAR_TOOL } from "@/constants";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
  shift: z
    .number()
    .min(1, "Shift must be at least 1")
    .max(25, "Shift must be at most 25"),
});

export const CaesarCalculator = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
      shift: 1,
    },
  });

  const onEncryptSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const encryptedText = await cryptoRouter.caesar.encrypt(
        data.inputText,
        data.shift
      );
      setOutputText(encryptedText);
    } catch (error) {
      console.error(error);
      toast.error("Failed to encrypt text");
    }
  };

  const onDecryptSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.caesar.decrypt(
        data.inputText,
        data.shift
      );
      setOutputText(decryptedText);
    } catch (error) {
      console.error(error);
      toast.error("Failed to decrypt text");
    }
  };

  const onBruteForceSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.caesar.bruteForce(
        data.inputText
      );
      setOutputText(decryptedText.join("\n"));
    } catch (error) {
      console.error(error);
      toast.error("Failed to brute force text");
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
        onEncryptSubmit(values);
        break;
      case "decrypt":
        onDecryptSubmit(values);
        break;
      case "brute-force":
        onBruteForceSubmit(values);
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{CAESAR_TOOL.title}</CardTitle>
        <CardDescription>{CAESAR_TOOL.description}</CardDescription>
      </CardHeader>
      <CardContent>
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
                      placeholder="Enter text to encrypt or decrypt..."
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
                    placeholder="Decoded/encoded text will appear here..."
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

            <div className="flex gap-4 mt-6">
              <Button type="submit" value="encrypt" className="flex-1">
                <Lock className="mr-2 h-4 w-4" />
                Encrypt
              </Button>
              <Button
                type="submit"
                value="decrypt"
                variant="outline"
                className="flex-1"
              >
                <Unlock className="mr-2 h-4 w-4" />
                Decrypt
              </Button>
              <Button
                type="submit"
                variant="secondary"
                value="brute-force"
                className="flex-1"
              >
                <Unlock className="mr-2 h-4 w-4" />
                Brute Force
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
