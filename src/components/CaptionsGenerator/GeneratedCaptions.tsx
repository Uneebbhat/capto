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
import useGetGeneratedCaptions from "@/hooks/api/useGetGeneratedCaptions";

const GeneratedCaptions = () => {
  const { captions } = useGetGeneratedCaptions();

  const handleCopyCaption = (captionText: string) => {
    navigator.clipboard.writeText(captionText);
    toast.success("Caption copied!");
  };

  return (
    <div className="space-y-4">
      {captions.map((caption) =>
        caption.captionData.map((captionText, index) => (
          <Card key={`${caption._id}-${index}`} className="overflow-hidden">
            <CardHeader className="flex items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  {index + 1}. {caption.postIdea}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {caption.platform} • {caption.tone}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopyCaption(captionText)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p>{captionText}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default GeneratedCaptions;
