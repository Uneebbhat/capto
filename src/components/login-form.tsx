"use client";

import Link from "next/link";
import useLogin from "@/hooks/api/useLogin";
import useTogglePassword from "@/hooks/useTogglePassword";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { isPassword, handleTogglePassword } = useTogglePassword();
  const { loading, formData, handleOnChange, handleOnSubmit } = useLogin();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  value={formData.email}
                  onChange={handleOnChange}
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
                    value={formData.password}
                    onChange={handleOnChange}
                  />
                  {isPassword ? (
                    <EyeOff
                      className="absolute top-1.5 right-2 cursor-pointer"
                      onClick={handleTogglePassword}
                    />
                  ) : (
                    <Eye
                      className="absolute top-1.5 right-2 cursor-pointer"
                      onClick={handleTogglePassword}
                    />
                  )}{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading || !formData.email || !formData.password}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Login
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Signup
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
