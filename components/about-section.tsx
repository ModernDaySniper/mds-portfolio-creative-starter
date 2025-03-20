"use client"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal, StaggeredContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Briefcase, GraduationCap, Target, ExternalLink, Crosshair } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-olive-800/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-olive-800/5 rounded-full blur-3xl -z-10" />

      <SectionHeader
        title="ABOUT US"
        subtitle="Learn about our background, expertise, and what drives us to provide the highest quality precision rifle training."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-olive-800 shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Modern Day Sniper Training"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Add an overlay with a subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium uppercase tracking-wider">Modern Day Sniper</p>
                  <p className="text-sm text-white/80">Precision Rifle Training & Tactics</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-olive-800 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-gold-500/20 dark:from-olive-900/20 to-transparent rounded-lg -z-10" />

            {/* Stats cards */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="absolute -bottom-6 -right-6 w-40 shadow-lg backdrop-blur-sm bg-zinc-900/80 border-olive-800 border rounded-lg overflow-hidden"
            >
              <Card className="border-none bg-transparent">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="text-sm font-medium uppercase tracking-wider">Experience</div>
                      <div className="text-2xl font-bold">15+ Years</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="absolute -top-6 -right-6 w-40 shadow-lg backdrop-blur-sm bg-zinc-900/80 border-olive-800 border rounded-lg overflow-hidden"
            >
              <Card className="border-none bg-transparent">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="text-sm font-medium uppercase tracking-wider">Students</div>
                      <div className="text-2xl font-bold">5000+</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="secondary-bg-subtle p-6 rounded-lg border border-olive-800">
          <StaggeredContainer>
            <StaggerItem>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Elite Precision Rifle Training</h3>
            </StaggerItem>

            <StaggerItem>
              <p className="text-muted-foreground mb-6">
                Modern Day Sniper is a premier precision rifle training organization founded by elite military snipers
                and competitive shooters. We specialize in long-range marksmanship, ballistics, field craft, and
                tactical applications for military, law enforcement, and civilian shooters.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-muted-foreground mb-6">
                Our instructors bring decades of real-world experience from military special operations, law
                enforcement, and competitive shooting circuits. We've developed a comprehensive training methodology
                that breaks down the complex science of precision shooting into practical, actionable skills that
                produce measurable results on target.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="px-3 py-1.5 bg-olive-800/20 text-gold-500 border-olive-800 hover:bg-olive-800/30 transition-colors uppercase tracking-wider">
                  <Crosshair className="h-3.5 w-3.5 mr-1" />
                  Precision Shooting
                </Badge>
                <Badge className="px-3 py-1.5 bg-zinc-800/20 text-zinc-200 border-olive-800 hover:bg-zinc-800/30 transition-colors uppercase tracking-wider">
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  Expert Instruction
                </Badge>
                <Badge className="px-3 py-1.5 bg-zinc-900/20 text-zinc-200 border-olive-800 hover:bg-zinc-900/30 transition-colors uppercase tracking-wider dark:bg-zinc-200/20 dark:text-zinc-200 dark:border-olive-800 dark:hover:bg-zinc-200/30">
                  <Briefcase className="h-3.5 w-3.5 mr-1" />
                  Professional Experience
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem>
              <Button className="gap-2 group shadow-lg hover:shadow-olive-800/20 transition-all duration-300 bg-olive-800 hover:bg-olive-900 text-white uppercase tracking-wider font-bold">
                <Target className="h-4 w-4 group-hover:animate-pulse" />
                View Course Calendar
              </Button>
              <Button variant="outline" className="ml-3 gap-2 group uppercase tracking-wider font-bold" asChild>
                <a href="https://www.moderndaysniper.com/about" target="_blank" rel="noopener noreferrer">
                  <span>Learn More</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </StaggerItem>
          </StaggeredContainer>
        </div>
      </div>
    </SectionContainer>
  )
}

