import GeneratedPrompts from '@/components/PromptsGenerator/GeneratedPrompts';
import PromptsGeneratorForm from '@/components/PromptsGenerator/PromptsGeneratorForm';

export default function PromptsGeneratorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Generate Prompts</h1>
        <p className="text-muted-foreground">Effortlessly generate creative content prompts for your social media posts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card: Input Form */}
        <PromptsGeneratorForm />

        {/* Right Card: Output */}
        <GeneratedPrompts />
      </div>
    </div>
  );
}
