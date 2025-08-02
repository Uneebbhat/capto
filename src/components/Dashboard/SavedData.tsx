import SavedCaptionsTab from './SavedCaptions'
import SavedPromptsTab from './SavedPrompts'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SavedDataPage() {
  return (
    <>
      <Tabs defaultValue="savedCaptions">
        <TabsList>
          <TabsTrigger value="savedCaptions">Saved Captions</TabsTrigger>
          <TabsTrigger value="savedPrompts">Saved Prompts</TabsTrigger>
        </TabsList>
        <TabsContent value="savedCaptions">
          <SavedCaptionsTab />
        </TabsContent>
        <TabsContent value="savedPrompts">
          <SavedPromptsTab />
        </TabsContent>
      </Tabs>
    </>
  )
}
