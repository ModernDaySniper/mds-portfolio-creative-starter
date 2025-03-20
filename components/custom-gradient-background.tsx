"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { useIsClient } from "@/hooks/use-is-client"

interface CustomGradientBackgroundProps {
  children: ReactNode
  className?: string
}

export function CustomGradientBackground({ children, className }: CustomGradientBackgroundProps) {
  const isClient = useIsClient()

  // Don't render animations until client-side
  if (!isClient) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-b from-olive-800/5 to-zinc-800/5 -z-10" />
        {children}
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-olive-800/5 to-zinc-800/5 -z-10" />

      {/* Animated orbs for background effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-olive-800/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-800/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {children}
    </div>
  )
}

