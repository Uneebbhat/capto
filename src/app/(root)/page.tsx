import Link from "next/link";

import { Metadata } from "next";
import { IconFileAi, IconListDetails } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Capto — AI-Powered Caption & Content Prompt Generator for Social Media",
  description: "Capto helps small business owners and creators generate engaging social media captions and content ideas in seconds. Simplify your content creation with AI-powered tools designed for Instagram, LinkedIn, Facebook, and more.",
  openGraph: {
    title: "Capto — Instantly Generate Captions & Content Ideas with AI",
    description: "No more writer's block. Use Capto to create high-quality social media captions and prompts effortlessly.",
    tags: [
      "AI Content Generator",
      "Social Media Automation",
      "Content Marketing",
      "AI Tools for Creators",
      "Instagram Captions",
      "LinkedIn Content Ideas",
      "AI Copywriting",
      "Content Prompt Generator",
      "Marketing AI Assistant",
      "AI Writing Tool",
      "Small Business Marketing",
      "Social Media Content Planner",
      "Caption Generator for Business",
      "Content Idea Generator",
      "Social Media Strategy Tools"
    ]
  }
}

export default function HomePage() {
  return (
    <>
      <section className="w-full py-16 bg-gradient-to-b from-indigo-100 via-white to-white">
        <div className="container mx-auto text-center flex flex-col items-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Boost Your Creativity with AI-Powered Tools
          </h2>

          <p className="max-w-2xl text-gray-600 text-lg">
            Unlock your full potential with Capto&apos;s smart and easy-to-use AI features.
            Whether you're generating captions or content prompts — start creating better, faster, and smarter today.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Captions Generator */}
          <Link href="/captions-generator">
            <Card>
              <CardHeader>
                <IconListDetails size={32} />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-bold mb-2">Captions Generator</CardTitle>
                <CardDescription>
                  Generate engaging captions for your social media posts in seconds.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>

          {/* Prompts Generator */}
          <Link href="/prompts-generator">
            <Card>
              <CardHeader>
                <IconFileAi size={32} />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-bold mb-2">Prompts Generator</CardTitle>
                <CardDescription>
                  Create content prompts to inspire your next post or article.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </>
  );
}
