"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Bookmark, Copy } from "lucide-react";
import useGetGeneratedPrompts from "@/hooks/api/useGetGeneratedPrompts";

const GeneratedPrompts = () => {
  const { prompts } = useGetGeneratedPrompts();

  const handleCopyCaption = (promptText: string) => {
    navigator.clipboard.writeText(promptText);
    toast.success("Caption copied!");
  };

  return (
    <div className="space-y-4">
      {prompts && prompts.length > 0 ? (
        prompts.map((prompt) =>
          prompt.promptsData && prompt.promptsData.map((promptText, index) => (
            <Card key={`${prompt._id}-${index}`} className="overflow-hidden">
              <CardHeader className="flex items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    {index + 1}. {prompt.promptIdea}
                  </CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyCaption(promptText)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p>{promptText}</p>
              </CardContent>
            </Card>
          ))
        )
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No prompts generated yet. Use the form to create some prompts.
        </div>
      )}
    </div>
  );
};

export default GeneratedPrompts;
