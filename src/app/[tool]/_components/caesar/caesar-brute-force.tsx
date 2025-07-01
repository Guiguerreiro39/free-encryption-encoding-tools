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
import { Bomb } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { cryptoRouter } from "@/lib/crypto";
import { toast } from "sonner";

const formSchema = z.object({
  inputText: z.string().min(1, "Input text is required"),
});

export const CaesarBruteForce = () => {
  const [outputText, setOutputText] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const decryptedText = await cryptoRouter.caesar.bruteForce(
        data.inputText
      );
      setOutputText(decryptedText.join("\n"));
    } catch (error) {
      console.error(error);
      toast.error("Failed to brute force text");
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
                  placeholder="Enter text to brute force..."
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
                placeholder="Brute forced text will appear here..."
                readOnly
                className="h-32"
              />
            </div>
          </div>
        </div>

        <Button disabled={form.formState.isSubmitting} className="w-sm">
          <Bomb className="h-4 w-4" />
          Brute Force
        </Button>
      </form>
    </Form>
  );
};
