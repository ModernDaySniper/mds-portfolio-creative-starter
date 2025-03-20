"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Crosshair } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Training", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Equipment", href: "#projects" },
    { name: "Courses", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md border-b border-olive-800" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl bg-gradient-to-r from-gold-500 to-gold-400 text-transparent bg-clip-text flex items-center">
              <Crosshair className="h-6 w-6 text-gold-500 mr-1" />
              MDS
            </div>
            <div className="hidden md:block">
              <div className="font-bold uppercase tracking-wider">Modern Day Sniper</div>
              <div className="text-xs text-muted-foreground">Precision Rifle Training & Tactics</div>
            </div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-gold-500 uppercase tracking-wider font-medium",
                  pathname === item.href ? "font-medium text-gold-500" : "",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 after:transition-all hover:after:w-full",
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <ModeToggle />
          </motion.div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-zinc-900 border-olive-900"
          >
            <div className="flex flex-col space-y-3 p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 uppercase tracking-wider font-medium",
                      pathname === item.href ? "text-gold-500" : "hover:text-gold-500",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

