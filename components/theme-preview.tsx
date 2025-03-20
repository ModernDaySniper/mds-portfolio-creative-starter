"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useExtendedTheme, type ColorTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Palette, Check } from "lucide-react"

interface ThemePreviewProps {
  className?: string
}

interface ColorOption {
  value: ColorTheme
  label: string
  color: string
  darkColor: string
}

const colorOptions: ColorOption[] = [
  {
    value: "default",
    label: "Default",
    color: "from-gold-500 to-gold-400",
    darkColor: "from-gold-500 to-gold-400",
  },
  {
    value: "ocean",
    label: "Ocean",
    color: "from-zinc-700 to-zinc-800",
    darkColor: "from-zinc-700 to-zinc-800",
  },
  {
    value: "forest",
    label: "Forest",
    color: "from-olive-500 to-olive-800",
    darkColor: "from-olive-500 to-olive-800",
  },
  {
    value: "monochrome",
    label: "Monochrome",
    color: "from-zinc-700 to-zinc-900",
    darkColor: "from-zinc-700 to-zinc-900",
  },
]

export function ThemePreview({ className }: ThemePreviewProps) {
  const { theme, setTheme, resolvedTheme, colorTheme, setColorTheme } = useExtendedTheme()
  const [hoveredTheme, setHoveredTheme] = useState<ColorTheme | null>(null)
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely access theme information
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className={cn("border-none bg-background/50 backdrop-blur-sm", className)}>
        <CardContent className="p-4">
          <div className="h-[150px] flex items-center justify-center">
            <div className="animate-pulse">Loading theme options...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <Card className={cn("border-olive-800 bg-background/50 backdrop-blur-sm", className)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Palette className="h-4 w-4 text-gold-500" />
          <h3 className="text-sm font-medium uppercase tracking-wider">Theme Customization</h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <Button
            variant={isDark ? "default" : "outline"}
            size="sm"
            className="text-xs h-8 uppercase tracking-wider border-olive-800"
            onClick={() => setTheme("dark")}
          >
            Dark Mode
          </Button>
          <Button
            variant={!isDark ? "default" : "outline"}
            size="sm"
            className="text-xs h-8 uppercase tracking-wider border-olive-800"
            onClick={() => setTheme("light")}
          >
            Light Mode
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {colorOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setColorTheme(option.value)}
              onMouseEnter={() => setHoveredTheme(option.value)}
              onMouseLeave={() => setHoveredTheme(null)}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center justify-center p-1 rounded-md hover:bg-muted transition-colors"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full bg-gradient-to-br transition-transform duration-300",
                  isDark ? option.darkColor : option.color,
                  (hoveredTheme === option.value || colorTheme === option.value) && "scale-110",
                )}
              />
              <span className="text-xs mt-1 uppercase tracking-wider">{option.label}</span>
              {colorTheme === option.value && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-0 right-0 bg-gold-500 text-zinc-900 rounded-full p-0.5"
                >
                  <Check className="h-3 w-3" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

