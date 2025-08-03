"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ModeToggleSwitch() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    // Initialize state based on current theme
    setIsDarkMode(theme === "dark")
  }, [theme])

  const handleToggle = (checked: boolean) => {
    setIsDarkMode(checked)
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex items-center justify-between w-full">
      <Label htmlFor="theme-toggle">Dark Mode</Label>
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
      />
    </div>
  )
}
