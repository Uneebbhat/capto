"use client"

import Link from "next/link"
import useTogglePassword from "@/hooks/useTogglePassword"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconBrandGoogleFilled } from "@tabler/icons-react"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { isPassword, handleTogglePassword } = useTogglePassword()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up to your account</CardTitle>
          <CardDescription>
            Sign up to create a new account and access all the features of Capto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={isPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  {isPassword ? (
                    <EyeOff className="absolute top-1.5 right-2 cursor-pointer" onClick={handleTogglePassword} />
                  ) : (
                    <Eye className="absolute top-1.5 right-2 cursor-pointer" onClick={handleTogglePassword} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Signup
                </Button>
                <Button variant="outline" className="w-full">
                  <IconBrandGoogleFilled />
                  Signup with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}