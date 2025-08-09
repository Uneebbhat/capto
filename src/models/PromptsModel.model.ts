import mongoose, { Schema } from "mongoose";
import { IPrompts, Platform, Tone } from "@/types/PromptsTypes";

const PromptsModel: Schema<IPrompts> = new Schema<IPrompts>(
  {
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    promptIdea: {
      type: String,
      required: true,
    },
    promptsData: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Prompts =
  (mongoose.models.Prompts as mongoose.Model<IPrompts>) ||
  mongoose.model<IPrompts>("Prompts", PromptsModel);

export default Prompts;
