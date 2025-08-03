import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const GeneratedCaptions = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Generated Captions</CardTitle>
          <CardDescription>Copy and use these captions for your social media posts</CardDescription>
        </CardHeader>
        <div className="flex flex-col items-center justify-center h-[300px] text-center">
          <p className="text-muted-foreground">Your generated captions will appear here</p>
        </div>
      </Card>
    </>
  )
}

export default GeneratedCaptions