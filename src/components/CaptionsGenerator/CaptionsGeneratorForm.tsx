"use client";

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
import useGenerateCaptions from "@/hooks/api/useGenerateCaptions";
import { Loader2 } from "lucide-react";

const CaptionsGeneratorForm = () => {
  const { formData, loading, handleOnChange, handleOnSubmit } =
    useGenerateCaptions();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Generate Captions</CardTitle>
          <CardDescription>
            Enter your product or topic and select options to generate captions
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleOnSubmit}>
          <div className="px-6 pb-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="topic">What's your post about?</Label>
              <Input
                id="postIdea"
                name="postIdea"
                placeholder="e.g., Coffee, Travel, Fashion, Food..."
                className="w-full"
                value={formData.postIdea}
                onChange={handleOnChange}
                disabled={loading}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="tone">Tone</Label>
                <Select
                  value={formData.tone}
                  onValueChange={(value) =>
                    handleOnChange({ target: { name: "tone", value } })
                  }
                  name="tone"
                >
                  <SelectTrigger id="tone" className="w-full" name="tone">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="promotional">Promotional</SelectItem>
                    <SelectItem value="funny">Funny</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="platform">Platform</Label>
                <Select
                  value={formData.platform}
                  onValueChange={(value) =>
                    handleOnChange({ target: { name: "platform", value } })
                  }
                  name="platform"
                >
                  <SelectTrigger
                    id="platform"
                    className="w-full"
                    name="platform"
                  >
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="context">Additional Context (Optional)</Label>
              <Textarea
                id="context"
                name="context"
                placeholder="Add any specific details, hashtags, or requirements..."
                className="min-h-[100px]"
                value={formData.context}
                onChange={handleOnChange}
                disabled={loading}
              />
            </div>
            <Button
              disabled={
                loading ||
                !formData.postIdea ||
                !formData.tone ||
                !formData.platform
              }
              className="mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Generate Captions
                </>
              ) : (
                "Generate Captions"
              )}
              {/* Generate Captions */}
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CaptionsGeneratorForm;
