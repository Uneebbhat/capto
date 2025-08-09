import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { NextResponse } from "next/server";
import Prompts from "@/models/PromptsModel.model";
import dbConnect from "@/lib/dbConnect";

const model = google("gemini-2.5-flash");

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const { promptIdea } = body;

    const promptData = `
    You are a prompt generator. 
    Your task is to take the provided details and expand them into exactly 5 **fully detailed prompts** that a user could directly give to any AI model to achieve the intended outcome. 
    Each prompt must be self-contained, include all necessary context, and clearly instruct the AI on the desired objectives. 
    Do not include explanations, only output the prompts as a numbered list from 1 to 5.
    
    Prompt Idea: ${promptIdea}
    `;

    const { text } = await generateText({
      model,
      prompt: promptData,
    });

    const promptsArray = text
      .split(/\n+/)
      .map((c) => c.replace(/^\d+[\).\s-]+/, "").trim())
      .filter((c) => c.length > 0);

    console.log("Generated prompts:", promptsArray);

    const prompts = await Prompts.create({
      // userId,
      promptIdea,
      promptsData: promptsArray,
    });

    return NextResponse.json({ data: prompts }, { status: 201 });
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

    // Get only the most recent prompts (latest POST request)
    const latestPrompts = await Prompts.findOne().sort({ createdAt: -1 });

    if (!latestPrompts) {
      return NextResponse.json({ error: "No prompts found" }, { status: 404 });
    }

    // Return as an array to maintain compatibility with your existing component
    return NextResponse.json({ promptData: [latestPrompts] }, { status: 200 });
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
