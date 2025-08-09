"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";

interface CaptionItem {
  _id: string;
  postIdea: string;
  tone: string;
  platform: string;
  context?: string;
  captionData: string[];
  createdAt: string;
  updatedAt: string;
}

const useGetGeneratedCaptions = () => {
  const [captions, setCaptions] = useState<CaptionItem[]>([]);

  const fetchGeneratedCaptions = useCallback(async () => {
    try {
      // Clear previous data before fetching new data
      setCaptions([]);

      const { data } = await axios.get("/api/captions-generator");
      // console.log(data.captionData);

      // Only keep the most recent caption (first item since it's sorted by createdAt: -1)
      if (data.captionData && data.captionData.length > 0) {
        setCaptions([data.captionData[0]]); // Only store the latest caption
      }
    } catch (error) {
      console.error("Error fetching generated captions:", error);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchGeneratedCaptions();

    // Listen for the custom event dispatched when new captions are generated
    const handleCaptionsGenerated = () => {
      fetchGeneratedCaptions();
    };

    window.addEventListener("captionsGenerated", handleCaptionsGenerated);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("captionsGenerated", handleCaptionsGenerated);
    };
  }, [fetchGeneratedCaptions]);

  return { captions };
};

export default useGetGeneratedCaptions;