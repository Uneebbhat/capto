import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const CaptionsGeneratorForm = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Generate Captions</CardTitle>
          <CardDescription>Enter your product or topic and select options to generate captions</CardDescription>
        </CardHeader>

        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="topic">What's your post about?</Label>
            <Input
              id="topic"
              name="topic"
              placeholder="e.g., Coffee, Travel, Fashion, Food..."
              className="w-full"
            // value={formData.topic}
            // onChange={handleOnChange}
            // disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="tone">Tone</Label>
              <Select
              // value={tone}
              // onValueChange={setTone}
              >
                <SelectTrigger id="tone" className='w-full'>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="promotional">Promotional</SelectItem>
                  <SelectItem value="funny">Funny</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="platform">Platform</Label>
              <Select
              // value={platform} 
              // onValueChange={setPlatform}
              >
                <SelectTrigger id="platform" className='w-full'>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="context">Additional Context (Optional)</Label>
            <Textarea
              id="context"
              name="context"
              placeholder="Add any specific details, hashtags, or requirements..."
              className="min-h-[100px]"
            // value={formData.context}
            // onChange={handleOnChange}
            // disabled={isLoading}
            />
          </div>
          <Button
            // onClick={generateCaptions}
            // disabled={!product || isGenerating}
            className="mt-2"
          >
            {/* {isGenerating ? 'Generating...' : 'Generate Captions'} */}
            Generate Captions
          </Button>
        </div>
      </Card>
    </>
  )
}

export default CaptionsGeneratorForm