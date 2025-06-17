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
import { BASE64_TOOL } from "@/constants";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
});

export const Base64Calculator = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
    },
  });

  const onEncodeSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const encodedText = await cryptoRouter.base64.encode(data.inputText);
      setOutputText(encodedText);
    } catch (error) {
      console.error(error);
      toast.error("Failed to encode text");
      setOutputText("");
    }
  };

  const onDecodeSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decodedText = await cryptoRouter.base64.decode(data.inputText);
      setOutputText(decodedText);
    } catch (error) {
      console.error(error);
      toast.error("Failed to decode text");
      setOutputText("");
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
      case "encode":
        onEncodeSubmit(values);
        break;
      case "decode":
        onDecodeSubmit(values);
        break;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{BASE64_TOOL.title}</CardTitle>
        <CardDescription>{BASE64_TOOL.description}</CardDescription>
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
                      placeholder="Enter text to encode or decode..."
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

            <div className="flex gap-4 mt-6">
              <Button type="submit" value="encode" className="flex-1">
                <Lock className="mr-2 h-4 w-4" />
                Encode
              </Button>
              <Button
                type="submit"
                value="decode"
                variant="outline"
                className="flex-1"
              >
                <Unlock className="mr-2 h-4 w-4" />
                Decode
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
