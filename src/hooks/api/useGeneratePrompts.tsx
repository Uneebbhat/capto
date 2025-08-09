import React from "react";
import useFormHandler from "../useFormHandler";
import { IPrompts } from "@/types/PromptsTypes";
import { HandleOnSubmit } from "@/types/FormTypes";
import axios from "axios";
import { toast } from "sonner";

const useGeneratePrompts = () => {
  const { formData, loading, setLoading, setFormData, handleOnChange } =
    useFormHandler<IPrompts>({
      promptIdea: "",
      promptsData: [],
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data } = await axios.post("/api/prompts-generator", formData);
      // console.log(data);

      // Dispatch a custom event to notify that prompts have been generated
      const promptsGeneratedEvent = new CustomEvent("promptsGenerated", {
        detail: { data },
      });
      window.dispatchEvent(promptsGeneratedEvent);

      toast.success("Prompts generated successfully!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Axios error:", error.response?.data || error.message);
        toast.error(
          error.response?.data?.error ||
            "An error occurred while generating prompts."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, formData, handleOnChange, handleOnSubmit };
};

export default useGeneratePrompts;
