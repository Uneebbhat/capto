import mongoose, { Schema } from "mongoose";
import { ICaptions, Platform, Tone } from "@/types/CaptionsTypes";

const CaptionsModel: Schema<ICaptions> = new Schema<ICaptions>(
  {
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    postIdea: {
      type: String,
      required: true,
    },
    tone: {
      type: String,
      enum: Object.values(Tone),
      required: true,
    },
    platform: {
      type: String,
      enum: Object.values(Platform),
      required: true,
    },
    context: {
      type: String,
    },
    captionData: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Captions =
  (mongoose.models.Captions as mongoose.Model<ICaptions>) ||
  mongoose.model<ICaptions>("Captions", CaptionsModel);

export default Captions;
