"use client"

import { useState } from "react"
import { ExternalLink, Star, Search, X, Calendar, Users, Target, Crosshair, Compass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useIsClient } from "usehooks-ts"
import { cn } from "@/lib/utils"

// Project data
const projects = [
  {
    id: 1,
    title: "Precision Rifle Package",
    category: "Equipment",
    description:
      "Complete precision rifle system including custom action, barrel, chassis, optics, and accessories optimized for long-range performance.",
    technologies: ["Custom Action", "Match Barrel", "Tactical Chassis", "Premium Optics", "Precision Accessories"],
    difficulty: 5,
    completed: "2023",
    teamSize: 3,
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    details:
      "A comprehensive precision rifle system built on a custom action with a match-grade barrel, tactical chassis, and premium optics. This package is designed for extreme accuracy at extended ranges with sub-MOA precision guaranteed.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Advanced Ballistics Calculator",
    category: "Software",
    description: "Proprietary ballistics calculator with advanced environmental modeling and custom bullet libraries.",
    technologies: ["Applied Ballistics", "Environmental Modeling", "Custom Profiles", "Mobile App"],
    difficulty: 5,
    completed: "2023-03-01",
    teamSize: 2,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    details:
      "A sophisticated ballistics calculator that accounts for all environmental factors, bullet characteristics, and weapon specifications to provide highly accurate firing solutions at extreme distances.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Field Craft Equipment Kit",
    category: "Tactical",
    description:
      "Comprehensive kit for field operations including observation, range finding, and weather monitoring tools.",
    technologies: ["Laser Rangefinder", "Weather Meter", "Spotting Scope", "Tripod System"],
    difficulty: 4,
    completed: "2023-01-20",
    teamSize: 2,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A complete field kit containing all necessary tools for precision shooting in field environments, including advanced range finding, weather monitoring, and target observation equipment.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Competition Shooting Package",
    category: "Equipment",
    description:
      "Specialized equipment package optimized for precision rifle competitions with focus on speed and accuracy.",
    technologies: ["Competition Rifle", "Speed Bags", "Quick-Adjust Bipod", "Competition Optic"],
    difficulty: 3,
    completed: "2022-11-15",
    teamSize: 2,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A purpose-built equipment package designed specifically for precision rifle competitions, featuring lightweight components, quick-adjustment features, and optimized ergonomics for positional shooting.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Precision Reloading System",
    category: "Ammunition",
    description: "Complete reloading setup for developing match-grade ammunition with consistent performance.",
    technologies: ["Single-Stage Press", "Digital Scale", "Case Prep", "Chronograph"],
    difficulty: 3,
    completed: "2022-08-10",
    teamSize: 1,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A comprehensive reloading system for developing custom, match-grade ammunition with exceptional consistency and accuracy, including all necessary tools for brass preparation, powder measurement, and load testing.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Tactical Training Props",
    category: "Training",
    description:
      "Collection of specialized training props for positional shooting, stress training, and skill development.",
    technologies: ["Barricades", "Stability Trainers", "Positional Supports", "Target Systems"],
    difficulty: 4,
    completed: "2022-05-22",
    teamSize: 4,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A set of purpose-built training props designed to develop advanced shooting skills, including unstable platforms, various barricade designs, and specialized target systems for realistic training scenarios.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

// Filter types
type CategoryFilter = string | null
type DifficultyFilter = number | null
type TeamSizeFilter = number | null

interface ProjectCardProps {
  project: (typeof projects)[0]
  onSelect: () => void
}

// Update the project cards with olive borders
function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isClient = useIsClient()

  return (
    <Card
      className="overflow-hidden h-full flex flex-col border-olive-800 shadow-md hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isClient && isHovered ? "scale-110" : "scale-100",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r from-olive-800 to-zinc-900",
          )}
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" className="border-white text-white hover:bg-white/20" onClick={onSelect}>
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs border-olive-800">
            {project.category === "ai"
              ? "AI & ML"
              : project.category === "web"
                ? "Web Dev"
                : project.category === "data"
                  ? "Data Science"
                  : project.category === "audio"
                    ? "Audio"
                    : "Research"}
          </Badge>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < project.difficulty ? "fill-gold-500 text-gold-500" : "text-muted"}`}
              />
            ))}
          </div>
        </div>

        <h3 className="font-bold mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary" className="text-xs border border-olive-800">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs border border-olive-800">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.completed}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>Team: {project.teamSize}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>(null)
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>(null)
  const [teamSizeFilter, setTeamSizeFilter] = useState<TeamSizeFilter>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const featuredProject = projects.find((project) => project.featured)

  // Filter projects based on search and filters
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = !categoryFilter || project.category === categoryFilter
    const matchesDifficulty = !difficultyFilter || project.difficulty === difficultyFilter
    const matchesTeamSize = !teamSizeFilter || project.teamSize === teamSizeFilter

    return matchesSearch && matchesCategory && matchesDifficulty && matchesTeamSize
  })

  // Get unique categories for filter
  const categories = Array.from(new Set(projects.map((project) => project.category)))

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setCategoryFilter(null)
    setDifficultyFilter(null)
    setTeamSizeFilter(null)
  }

  // Handle demo click
  const handleDemoClick = (url: string) => {
    toast({
      title: "Product Link",
      description: "Opening product details in a new tab...",
      duration: 3000,
    })
    window.open(url, "_blank")
  }

  return (
    <section id="projects" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wider">Equipment</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore our recommended precision rifle equipment, accessories, and training tools. Each item has been
          thoroughly tested and proven in the field.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12">
          <motion.h3
            className="text-xl font-semibold mb-6 uppercase tracking-wider flex items-center gap-2 justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Target className="h-5 w-5 text-tactical-red" />
            Featured Equipment
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none bg-gradient-to-br from-tactical-dark/30 to-tactical-gray/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl">
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="mb-2 uppercase tracking-wider bg-tactical-red text-white">
                        {featuredProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold uppercase tracking-wider">{featuredProject.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{featuredProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in uppercase tracking-wider text-xs"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Released: {featuredProject.completed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Development Team: {featuredProject.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-tactical-accent text-tactical-accent" : "text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group bg-tactical-red hover:bg-tactical-red/90 text-white uppercase tracking-wider font-bold"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                    >
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 uppercase tracking-wider font-bold"
                      onClick={() => {
                        setSelectedProject(featuredProject)
                        setIsDialogOpen(true)
                      }}
                    >
                      <Crosshair className="h-4 w-4" />
                      Specifications
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}

      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search equipment..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Select value={categoryFilter || ""} onValueChange={(value) => setCategoryFilter(value || null)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={difficultyFilter?.toString() || ""}
              onValueChange={(value) => setDifficultyFilter(value ? Number.parseInt(value) : null)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Complexity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Complexity</SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem key={level} value={level.toString()}>
                    {level} {level === 1 ? "Star" : "Stars"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="icon"
              onClick={resetFilters}
              className="shrink-0"
              aria-label="Reset filters"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground">
              No equipment matches your filters. Try adjusting your search criteria.
            </p>
            <Button variant="link" onClick={resetFilters} className="mt-2">
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="project-card"
                  >
                    <ProjectCard
                      project={project}
                      onSelect={() => {
                        setSelectedProject(project)
                        setIsDialogOpen(true)
                      }}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          {selectedProject && (
            <div className="flex flex-col h-full">
              <DialogHeader className="px-6 pt-6 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2 uppercase tracking-wider bg-tactical-red text-white">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl uppercase tracking-wider">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="mt-2">{selectedProject.description}</DialogDescription>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-tactical-accent text-tactical-accent" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="overview" className="flex-1 overflow-hidden">
                <TabsList className="px-6 justify-start border-b rounded-none">
                  <TabsTrigger value="overview" className="uppercase tracking-wider">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gallery" className="uppercase tracking-wider">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="demo" className="uppercase tracking-wider">
                    Specifications
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6">
                  <TabsContent value="overview" className="mt-0 h-full">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">Equipment Details</h4>
                        <p className="mb-6">{selectedProject.details}</p>

                        <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">Components</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="uppercase tracking-wider">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button
                            variant="default"
                            className="gap-2 bg-tactical-red hover:bg-tactical-red/90 text-white uppercase tracking-wider font-bold"
                            onClick={() => handleDemoClick(selectedProject.demoUrl)}
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Product
                          </Button>
                          <Button variant="outline" className="gap-2 uppercase tracking-wider font-bold" asChild>
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Compass className="h-4 w-4" />
                              Related Items
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">Product Info</h4>
                        <div className="space-y-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Released</span>
                            <span>{selectedProject.completed}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Development Team</span>
                            <span>{selectedProject.teamSize} people</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Complexity</span>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-tactical-accent text-tactical-accent" : "text-muted"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center p-6">
                        <h4 className="text-lg font-semibold mb-2 uppercase tracking-wider">
                          Technical Specifications
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          View detailed specifications and performance data for this equipment.
                        </p>
                        <Button
                          onClick={() => handleDemoClick(selectedProject.demoUrl)}
                          className="gap-2 bg-tactical-red hover:bg-tactical-red/90 text-white uppercase tracking-wider font-bold"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Full Specifications
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

