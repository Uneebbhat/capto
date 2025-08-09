"use client";

import useFormHandler from "../useFormHandler";
import { ICaptions, Platform, Tone } from "@/types/CaptionsTypes";
import { Types } from "mongoose";
import { HandleOnSubmit } from "@/types/FormTypes";
import axios from "axios";
import { toast } from "sonner";
import { useCallback } from "react";

const useGenerateCaptions = () => {
  const { loading, formData, setFormData, setLoading, handleOnChange } =
    useFormHandler<ICaptions>({
      // userId: new Types.ObjectId(),
      postIdea: "",
      tone: Tone.casual,
      platform: Platform.linkedin,
      context: "",
      captionData: [],
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/api/captions-generator", formData);
      console.log(data);

      // Dispatch a custom event to notify that captions have been generated
      const captionsGeneratedEvent = new CustomEvent("captionsGenerated", {
        detail: { data }
      });
      window.dispatchEvent(captionsGeneratedEvent);

      setFormData({
        postIdea: "",
        tone: Tone.casual,
        platform: Platform.linkedin,
        context: "",
        captionData: [],
      })

      toast.success("Captions generated successfully!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Axios error:", error.response?.data || error.message);
        toast.error(
          error.response?.data?.error ||
          "An error occurred while generating captions."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, formData, setFormData, handleOnChange, handleOnSubmit };
};

export default useGenerateCaptions;
