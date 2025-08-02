import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card"

interface AnalyticsCardProps {
  title: string;
  data: string
}

export function AnalyticsCard({ title, data }: AnalyticsCardProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {data}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
