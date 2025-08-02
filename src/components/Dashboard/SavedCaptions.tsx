"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SavedCaptionsTab() {
  const [savedCaptions, setSavedCaptions] = useState<string[]>([]);

  const captions = [
    { id: "1", text: "Code is not just lines written in a text editor—it's the language through which we shape the future." },
    { id: "2", text: "Behind every great software is a developer who refused to quit after countless bugs." },
    { id: "3", text: "Programming teaches you one vital life lesson: Every problem has a solution, you just need to debug your approach." },
    { id: "4", text: "From blank screens to powerful platforms—every coder’s journey begins with a single line of code." },
    { id: "5", text: "Code smart. Build scalable. Impact globally." },
    { id: "6", text: "Coding is the new literacy of the digital age. If you can't speak to machines, you're mute in the modern economy." },
  ];

  const toggleSave = (id: string) => {
    setSavedCaptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {captions.map((caption) => {
        const isSaved = savedCaptions.includes(caption.id);
        return (
          <Card
            key={caption.id}
          >
            <CardHeader className="flex items-center justify-between">
              <CardDescription className="text-gray-500 text-sm">Caption</CardDescription>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleSave(caption.id)}
                className="hover:text-primary"
              >
                {isSaved ? < Bookmark /> : <BookmarkCheck className="text-green-500" />}
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base font-medium leading-snug text-gray-800">
                {caption.text}
              </CardTitle>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
