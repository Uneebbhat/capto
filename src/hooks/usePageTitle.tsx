"use client"

import { usePathname } from "next/navigation"

const usePageTitle = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "Home";

  // Handle titles with hyphens
  if (lastSegment.includes("-")) {
    const segments = lastSegment.split("-");
    const formattedSegments = segments.map((segment, index) => {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    });
    return formattedSegments.join(" ");
  }

  const pageTitle = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  return pageTitle;
}

export default usePageTitle