"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";

interface PromptItem {
  _id: string;
  promptIdea: string;
  promptsData: string[];
  createdAt: string;
  updatedAt: string;
}

const useGetGeneratedPrompts = () => {
  const [prompts, setPrompts] = useState<PromptItem[]>([]);

  const fetchGeneratedPrompts = useCallback(async () => {
    try {
      // Clear previous data before fetching new data
      setPrompts([]);

      const { data } = await axios.get("/api/prompts-generator");
      // console.log("Fetched prompts data:", data);

      // Only keep the most recent prompt (first item since it's sorted by createdAt: -1)
      if (data.promptData && data.promptData.length > 0) {
        setPrompts(data.promptData); // Store the prompts data
      }
    } catch (error) {
      console.error("Error fetching generated prompts:", error);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchGeneratedPrompts();

    // Listen for the custom event dispatched when new captions are generated
    const handlePromptsGenerated = () => {
      fetchGeneratedPrompts();
    };

    window.addEventListener("promptsGenerated", handlePromptsGenerated);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("promptsGenerated", handlePromptsGenerated);
    };
  }, [fetchGeneratedPrompts]);

  return { prompts };
};

export default useGetGeneratedPrompts;
