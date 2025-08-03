'use client'

import { useState, useEffect } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const GeneratedPrompts = () => {
  const [prompts, setPrompts] = useState<string[]>([])

  useEffect(() => {
    // Listen for the custom event from the form component
    const handlePromptsGenerated = (event: CustomEvent) => {
      setPrompts(event.detail.prompts)
    }

    window.addEventListener('promptsGenerated', handlePromptsGenerated as EventListener)

    return () => {
      window.removeEventListener('promptsGenerated', handlePromptsGenerated as EventListener)
    }
  }, [])

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt)
    toast.success('Prompt copied to clipboard!', {
      description: 'You can now paste it anywhere you need.',
      duration: 3000
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Prompts</CardTitle>
        <CardDescription>Copy and use these prompts for your content creation</CardDescription>
      </CardHeader>
      
      <div className="px-6 pb-6 flex flex-col gap-4">
        {prompts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {prompts.map((prompt, index) => (
              <div key={index} className="p-4 border rounded-lg bg-muted/30">
                <p>{prompt}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => handleCopyPrompt(prompt)}
                >
                  Copy
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[300px] text-center">
            <p className="text-muted-foreground">Your generated prompts will appear here</p>
          </div>
        )}
      </div>
    </Card>
  )
}

export default GeneratedPrompts