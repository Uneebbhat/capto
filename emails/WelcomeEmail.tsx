import Link from 'next/link';

import { Button } from "@react-email/components";

interface WelcomeEmailTemplateProps {
  name: string;
}

export function WelcomeEmail({ name }: WelcomeEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '24px', color: '#4F46E5' }}>Welcome to Capto, {name}!</h1>

      <p>We're thrilled to have you on board. 🎉</p>

      <p>
        Capto helps you generate engaging <strong>social media captions</strong> and <strong>creative prompts</strong> in seconds.
        No more struggling with writer’s block — just input your topic, and let AI handle the rest!
      </p>

      <p>Here’s what you can do with Capto:</p>
      <ul>
        <li>✍️ Instantly generate high-quality captions for any platform</li>
        <li>🎯 Craft tailored prompts to boost your content creation workflow</li>
        <li>⭐ Save your favorite captions for later</li>
      </ul>

      <p>Get started now and supercharge your content creation!</p>

      <Button
        className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
        href="https://react.email"
      >
        Get started
      </Button>

      <p>If you have any questions, feel free to reply to this email. We’re here to help!</p>

      <p>Cheers,<br />The Capto Team 🚀</p>
    </div>
  );
}
