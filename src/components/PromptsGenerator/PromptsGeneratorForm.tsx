"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import useGeneratePrompts from "@/hooks/api/useGeneratePrompts";

const PromptsGeneratorForm = () => {
  const { loading, formData, handleOnChange, handleOnSubmit } =
    useGeneratePrompts();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Prompts</CardTitle>
        <CardDescription>
          Enter your topic and select options to generate content prompts
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleOnSubmit}>
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="promptIdea">Your Prompt Idea</Label>
            <Textarea
              id="promptIdea"
              name="promptIdea"
              placeholder="e.g., Teach me coding in JavaScript step-by-step"
              className="min-h-[100px]"
              value={formData.promptIdea}
              onChange={handleOnChange}
              disabled={loading}
            />
            <p className="text-sm text-muted-foreground">
              Enter a short concept or request. We’ll turn it into 5 fully
              detailed prompts ready for any AI model.
            </p>
          </div>

          <Button disabled={loading || !formData.promptIdea} className="mt-2">
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Generate Prompts
              </>
            ) : (
              "Generate Prompts"
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PromptsGeneratorForm;
