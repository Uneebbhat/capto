import GeneratedCaptions from '@/components/CaptionsGenerator/GeneratedCaptions'
import CaptionsGeneratorForm from '@/components/CaptionsGenerator/CaptionsGeneratorForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Captions Generator",
  description: "Generate engaging social media captions effortlessly."
}

export default function CaptionsGeneratorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Generate Captions</h1>
        <p className="text-muted-foreground">Generate engaging social media captions effortlessly.</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CaptionsGeneratorForm />
          <GeneratedCaptions />
        </div>
      </div>
    </div >
  )
}
