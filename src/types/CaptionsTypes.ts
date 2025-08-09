import { Types } from "mongoose";

export enum Tone {
  casual = "casual",
  professional = "professional",
  promotional = "promotional",
  funny = "funny",
}

export enum Platform {
  linkedin = "linkedin",
  twitter = "twitter",
  instagram = "instagram",
  facebook = "facebook",
}

export interface ICaptions {
  // userId: Types.ObjectId;
  postIdea: string;
  tone: Tone;
  platform: Platform;
  context?: string;
  captionData: string[];
}
