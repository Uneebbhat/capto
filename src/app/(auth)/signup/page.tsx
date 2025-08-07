import { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup to Capto",
};

export default async function SignupPage() {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
