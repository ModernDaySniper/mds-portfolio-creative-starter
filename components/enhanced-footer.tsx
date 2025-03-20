"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { ArrowUp, CheckCircle, Target, Crosshair, Mail, Phone, MapPin } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { ThemePreview } from "@/components/theme-preview"

// Form validation schema
const subscribeSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function EnhancedFooter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Initialize form
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof subscribeSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Subscribed!",
        description: "You've been added to the newsletter.",
        action: (
          <div className="h-8 w-8 bg-olive-800/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-gold-500" />
          </div>
        ),
      })
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black border-t border-olive-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-bold text-xl mb-4 flex items-center">
                <Crosshair className="h-6 w-6 text-gold-500 mr-2" />
                <span className="uppercase tracking-wider">Modern Day Sniper</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Precision Rifle Training & Tactics for military, law enforcement, and civilian shooters.
              </p>

              <div className="flex gap-3">
                <SocialButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold-500"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  }
                  url="https://instagram.com/moderndaysniper"
                  label="Instagram"
                />
                <SocialButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold-500"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  }
                  url="https://youtube.com"
                  label="YouTube"
                />
                <SocialButton
                  icon={<Mail className="h-5 w-5 text-gold-500" />}
                  url="mailto:training@moderndaysniper.com"
                  label="Email"
                />
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="#" label="Home" />
                <FooterLink href="#skills" label="Training" />
                <FooterLink href="#experience" label="Experience" />
                <FooterLink href="#projects" label="Equipment" />
                <FooterLink href="#publications" label="Courses" />
                <FooterLink href="#contact" label="Contact" />
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4 uppercase tracking-wider">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-gold-500" />
                  <span>training@moderndaysniper.com</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-gold-500" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold-500" />
                  <span>Training Locations Nationwide</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Target className="h-4 w-4 text-gold-500" />
                  <span>Available for Custom Courses</span>
                </li>
              </ul>

              {/* Add Theme Preview */}
              <div className="mt-6">
                <ThemePreview />
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold mb-4 uppercase tracking-wider">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to receive updates on new courses, equipment reviews, and training tips.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isSubmitting}
                            className="bg-olive-800 hover:bg-olive-900 text-white"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            ) : (
                              <Target className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              <p className="text-xs text-muted-foreground mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-olive-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Modern Day Sniper. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gold-500/30 hover:bg-gold-500/10"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-gold-500" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ icon, url, label }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="rounded-full border-olive-800 hover:bg-olive-800 hover:text-white hover:border-olive-800 transition-colors duration-300"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </a>
    </Button>
  )
}

interface SocialButtonProps {
  icon: React.ReactNode
  url: string
  label: string
}

interface FooterLinkProps {
  href: string
  label: string
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-muted-foreground hover:text-gold-500 transition-colors duration-200 inline-block uppercase tracking-wider text-sm"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        {label}
      </a>
    </li>
  )
}

