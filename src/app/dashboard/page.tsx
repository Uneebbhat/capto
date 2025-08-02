import SavedDataPage from "@/components/Dashboard/SavedData";

import { Metadata } from "next";
import { AnalyticsCard } from "@/components/Dashboard/AnalyticsCard";

export const metadata: Metadata = {
  title: "Capto Dashboard — Track Your Content Generation Stats & Usage",
  description: "View your caption and prompt generation stats, daily limits, and favorites on the Capto Dashboard. Monitor your content creation activity and stay on top of your social media strategy.",
}

export default function DashboardPage() {
  const carData = [
    { title: "Captions generated", data: "14" },
    { title: "Prompts generated", data: "20" },
    { title: "Captions limit", data: "3/5" },
    { title: "Prompts limit", data: "7/10" },
  ]

  return (
    <>
      <section className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {carData.map((item, idx) => (
          <AnalyticsCard title={item.title} data={item.data} key={idx} />
        ))}
      </section>

      <section className="container mx-auto py-5">
        <SavedDataPage />
      </section>
    </>
  )
}
