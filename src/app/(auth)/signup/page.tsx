import { SignupForm } from '@/components/signup-form'

export default function SignupPage() {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </>
  )
}
