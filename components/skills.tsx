"use client"

import { useState, useEffect, useRef } from "react"
import { Target, Crosshair, Compass, Wind, Ruler, BookOpen, Thermometer, Zap, Briefcase, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type SkillLevel = "All" | "Expert" | "Advanced" | "Intermediate"

// Skill data
const skillCategories = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Precision Shooting",
    skills: [
      { name: "Long Range Marksmanship", level: "Expert", color: "red", years: 15 },
      { name: "Positional Shooting", level: "Expert", color: "red", years: 15 },
      { name: "Stress Fire", level: "Expert", color: "red", years: 12 },
      { name: "Competition Tactics", level: "Expert", color: "green", years: 10 },
      { name: "Rapid Engagement", level: "Expert", color: "green", years: 15 },
      { name: "Cold Bore Shots", level: "Expert", color: "green", years: 15 },
      { name: "Moving Targets", level: "Expert", color: "green", years: 12 },
    ],
  },
  {
    icon: <Crosshair className="h-6 w-6" />,
    title: "Ballistics & Equipment",
    skills: [
      { name: "External Ballistics", level: "Expert", color: "blue", years: 15 },
      { name: "Ballistic Calculators", level: "Expert", color: "blue", years: 15 },
      { name: "Rifle Setup", level: "Expert", color: "blue", years: 15 },
      { name: "Optics Selection", level: "Expert", color: "blue", years: 15 },
      { name: "Ammunition Testing", level: "Expert", color: "blue", years: 15 },
      { name: "Load Development", level: "Expert", color: "yellow", years: 12 },
      { name: "Equipment Optimization", level: "Expert", color: "yellow", years: 15 },
    ],
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Field Craft",
    skills: [
      { name: "Range Estimation", level: "Expert", color: "blue", years: 15 },
      { name: "Concealment", level: "Expert", color: "blue", years: 15 },
      { name: "Observation", level: "Expert", color: "blue", years: 15 },
      { name: "Stalking", level: "Expert", color: "green", years: 15 },
      { name: "Field Positions", level: "Expert", color: "green", years: 15 },
      { name: "Urban Operations", level: "Expert", color: "green", years: 12 },
      { name: "Rural Operations", level: "Expert", color: "green", years: 15 },
    ],
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Environmental Factors",
    skills: [
      { name: "Wind Reading", level: "Expert", color: "blue", years: 15 },
      { name: "Mirage Reading", level: "Expert", color: "blue", years: 15 },
      { name: "Density Altitude", level: "Expert", color: "blue", years: 15 },
      { name: "Weather Effects", level: "Advanced", color: "blue", years: 15 },
      { name: "Coriolis Effect", level: "Expert", color: "blue", years: 12 },
      { name: "Spin Drift", level: "Expert", color: "green", years: 12 },
      { name: "Angle Firing", level: "Expert", color: "green", years: 15 },
    ],
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Measurement & Calculation",
    skills: [
      { name: "DOPE Development", level: "Expert", color: "blue", years: 15 },
      { name: "Milling Targets", level: "Expert", color: "blue", years: 15 },
      { name: "MOA Calculations", level: "Expert", color: "blue", years: 15 },
      { name: "MRAD Calculations", level: "Expert", color: "blue", years: 15 },
      { name: "Ranging Methods", level: "Expert", color: "blue", years: 15 },
      { name: "Truing Ballistics", level: "Expert", color: "green", years: 12 },
      { name: "Trajectory Analysis", level: "Expert", color: "green", years: 15 },
    ],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Training & Instruction",
    skills: [
      { name: "Curriculum Development", level: "Expert", color: "blue", years: 10 },
      { name: "Classroom Instruction", level: "Expert", color: "blue", years: 15 },
      { name: "Range Instruction", level: "Expert", color: "blue", years: 15 },
      { name: "Student Assessment", level: "Expert", color: "green", years: 15 },
      { name: "Skill Progression", level: "Expert", color: "green", years: 15 },
      { name: "Scenario Design", level: "Expert", color: "green", years: 12 },
      { name: "Coaching Techniques", level: "Expert", color: "green", years: 15 },
    ],
  },
  {
    icon: <Thermometer className="h-6 w-6" />,
    title: "Advanced Techniques",
    skills: [
      { name: "Extreme Long Range", level: "Expert", color: "blue", years: 10 },
      { name: "Rapid Engagement", level: "Expert", color: "blue", years: 15 },
      { name: "Stress Shooting", level: "Expert", color: "blue", years: 15 },
      { name: "Night Operations", level: "Expert", color: "green", years: 12 },
      { name: "Barrier Shooting", level: "Expert", color: "green", years: 15 },
      { name: "Unconventional Positions", level: "Expert", color: "green", years: 15 },
      { name: "Time-Constrained Shots", level: "Expert", color: "green", years: 15 },
    ],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Equipment Expertise",
    skills: [
      { name: "Rifle Systems", level: "Expert", color: "blue", years: 15 },
      { name: "Optics & Scopes", level: "Expert", color: "blue", years: 15 },
      { name: "Suppressors", level: "Expert", color: "blue", years: 12 },
      { name: "Bipods & Support", level: "Expert", color: "green", years: 15 },
      { name: "Ballistic Tools", level: "Expert", color: "green", years: 15 },
      { name: "Range Finders", level: "Expert", color: "green", years: 15 },
      { name: "Weather Meters", level: "Expert", color: "green", years: 12 },
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Professional Experience",
    skills: [
      { name: "Military Operations", level: "Expert", color: "blue", years: 15 },
      { name: "Law Enforcement", level: "Expert", color: "blue", years: 10 },
      { name: "Competition Shooting", level: "Expert", color: "blue", years: 15 },
      { name: "Tactical Consulting", level: "Expert", color: "green", years: 12 },
      { name: "Equipment Testing", level: "Expert", color: "green", years: 15 },
      { name: "Course Development", level: "Expert", color: "green", years: 10 },
      { name: "Mentorship", level: "Expert", color: "green", years: 15 },
    ],
  },
]

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel>("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="skills" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wider">Training Expertise</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A comprehensive overview of our training capabilities across various domains, from precision shooting and
          ballistics to field craft and tactical applications.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Search
            className={cn(
              "absolute left-3 top-3 h-4 w-4 transition-colors duration-200",
              isSearchFocused ? "text-tactical-red" : "text-muted-foreground",
            )}
          />
          <Input
            ref={searchRef}
            placeholder="Search skills... (Ctrl+K)"
            className={cn(
              "pl-10 transition-all duration-300",
              isSearchFocused ? "ring-2 ring-tactical-red ring-offset-2 ring-offset-background" : "",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Button
            variant={selectedLevel === "All" ? "default" : "outline"}
            onClick={() => setSelectedLevel("All")}
            className="transition-all duration-300 uppercase tracking-wider"
          >
            All
          </Button>
          <Button
            variant={selectedLevel === "Expert" ? "default" : "outline"}
            onClick={() => setSelectedLevel("Expert")}
            className="transition-all duration-300 uppercase tracking-wider"
          >
            Expert
          </Button>
          <Button
            variant={selectedLevel === "Advanced" ? "default" : "outline"}
            onClick={() => setSelectedLevel("Advanced")}
            className="transition-all duration-300 uppercase tracking-wider"
          >
            Advanced
          </Button>
          <Button
            variant={selectedLevel === "Intermediate" ? "default" : "outline"}
            onClick={() => setSelectedLevel("Intermediate")}
            className="transition-all duration-300 uppercase tracking-wider"
          >
            Intermediate
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {skillCategories.map((category, categoryIndex) => {
            // Filter skills based on search and level
            const filteredSkills = category.skills.filter((skill) => {
              const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
              const matchesLevel = selectedLevel === "All" || skill.level === selectedLevel
              return matchesSearch && matchesLevel
            })

            // Skip rendering if no skills match the filters
            if (filteredSkills.length === 0) return null

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="border rounded-xl p-6 bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
                    className="text-tactical-red"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold uppercase tracking-wider">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  <TooltipProvider>
                    {filteredSkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={cn(
                                `skill-tag skill-tag-${skill.color}`,
                                hoveredSkill === skill.name ? "scale-110" : "",
                              )}
                            >
                              {skill.name}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="animate-fade-in">
                            <div className="text-center">
                              <div className="font-semibold">{skill.name}</div>
                              <div className="text-xs">
                                {skill.level} • {skill.years} {skill.years === 1 ? "year" : "years"}
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </TooltipProvider>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12 gap-8"
      >
        <div className="flex items-center gap-2">
          <div className="skill-level-expert px-2 py-1 rounded-md">Expert</div>
          <span>10+ years</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="skill-level-advanced px-2 py-1 rounded-md">Advanced</div>
          <span>5-10 years</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="skill-level-intermediate px-2 py-1 rounded-md">Intermediate</div>
          <span>2-5 years</span>
        </div>
      </motion.div>
    </section>
  )
}

