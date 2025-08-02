"use client"

import { usePathname } from "next/navigation"

const usePageTitle = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "";
  const pageTitle = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  return pageTitle;
}

export default usePageTitle