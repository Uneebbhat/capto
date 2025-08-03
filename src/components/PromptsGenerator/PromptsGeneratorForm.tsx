'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const PromptsGeneratorForm = () => {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('')
  const [platform, setPlatform] = useState('')
  const [context, setContext] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  // Function to handle form submission and generate prompts
  const handleGeneratePrompts = () => {
    if (!topic) {
      toast.error('Please enter a topic')
      return
    }

    if (!tone) {
      toast.error('Please select a tone')
      return
    }

    if (!platform) {
      toast.error('Please select a platform')
      return
    }

    setIsGenerating(true)

    // Simulate API call to generate prompts
    setTimeout(() => {
      // In a real application, this would be an API call to an AI service
      const event = new CustomEvent('promptsGenerated', {
        detail: {
          prompts: [
            `Share your favorite ${topic} experience and ask your followers about theirs. #${topic} #Engagement`,
            `What's your go-to ${topic} tip that most people don't know about? Share in the comments! #${topic}Tips`,
            `Looking for recommendations on the best ${topic} options for beginners. What would you suggest?`,
            `How has ${topic} changed your perspective on life? Share your story below! #Personal${topic}Story`,
            `If you could only choose one ${topic} item/experience for the rest of your life, what would it be and why?`
          ]
        }
      })
      window.dispatchEvent(event)
      setIsGenerating(false)
      toast.success('Prompts generated successfully!')
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Prompts</CardTitle>
        <CardDescription>Enter your topic and select options to generate content prompts</CardDescription>
      </CardHeader>

      <div className="px-6 pb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="topic">What's your content about?</Label>
          <Input
            id="topic"
            name="topic"
            placeholder="e.g., Coffee, Travel, Fashion, Food..."
            className="w-full"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isGenerating}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="tone">Tone</Label>
            <Select
              value={tone}
              onValueChange={setTone}
              disabled={isGenerating}
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
              value={platform}
              onValueChange={setPlatform}
              disabled={isGenerating}
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
            value={context}
            onChange={(e) => setContext(e.target.value)}
            disabled={isGenerating}
          />
        </div>
        <Button
          onClick={handleGeneratePrompts}
          disabled={isGenerating}
          className="mt-2"
        >
          {isGenerating ? 'Generating...' : 'Generate Prompts'}
        </Button>
      </div>
    </Card>
  )
}

export default PromptsGeneratorForm