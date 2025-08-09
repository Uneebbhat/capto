import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { NextResponse } from "next/server";
import Captions from "@/models/CaptionsModel.model";
import dbConnect from "@/lib/dbConnect";

const model = google("gemini-2.5-flash");

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const { postIdea, tone, platform, context } = body;

    const promptData = `
You are to return exactly 5 captions, no more and no less.
Output them as a numbered list from 1 to 5, one per line, without any extra text.

Post Idea: ${postIdea}
Tone: ${tone}
Platform: ${platform}
Context: ${context || "No specific context provided"}
`;

    const { text } = await generateText({
      model,
      prompt: promptData,
    });

    const captionsArray = text
      .split(/\n+/)
      .map((c) => c.replace(/^\d+[\).\s-]+/, "").trim())
      .filter((c) => c.length > 0);

    console.log("Generated captions:", captionsArray);

    const captions = await Captions.create({
      // userId,
      postIdea,
      tone,
      platform,
      context,
      captionData: captionsArray,
    });

    return NextResponse.json({ data: captions }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  try {
    await dbConnect();

    // Get only the most recent caption (latest POST request)
    const latestCaption = await Captions.findOne().sort({ createdAt: -1 });

    if (!latestCaption) {
      return NextResponse.json({ error: "No captions found" }, { status: 404 });
    }

    // Return as an array to maintain compatibility with your existing component
    return NextResponse.json({ captionData: [latestCaption] }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
