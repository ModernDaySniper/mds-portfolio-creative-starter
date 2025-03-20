import { Target, Compass } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Publications() {
  return (
    <section id="publications" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-wider">Training Courses & Resources</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Target className="h-5 w-5 text-tactical-red" />
            <h3 className="text-xl font-semibold uppercase tracking-wider">Training Courses</h3>
          </div>

          <div className="space-y-4">
            <PublicationCard
              title="Precision Rifle Fundamentals"
              type="Course"
              description="A comprehensive 3-day course covering the fundamentals of precision rifle marksmanship, ballistics, and field craft."
              date="Monthly"
              link="#"
            />

            <PublicationCard
              title="Advanced Long Range"
              type="Course"
              description="Take your precision shooting to the next level with this 2-day advanced course focused on extended ranges and complex environmental conditions."
              date="Quarterly"
              link="#"
              journal="Nationwide Locations"
            />

            <PublicationCard
              title="Competition Preparation"
              type="Course"
              description="Specialized training for precision rifle competition shooters, focusing on stage strategy, time management, and positional shooting."
              date="Bi-Monthly"
              link="#"
              journal="Regional Locations"
            />

            <PublicationCard
              title="Tactical Field Craft"
              type="Course"
              description="Intensive 3-day course covering advanced field craft techniques including stalking, concealment, observation, and unconventional shooting positions."
              date="Quarterly"
              link="#"
              journal="Select Locations"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Compass className="h-5 w-5 text-tactical-red" />
            <h3 className="text-xl font-semibold uppercase tracking-wider">Resources & Materials</h3>
          </div>

          <div className="space-y-4">
            <WorkshopCard
              title="Precision Rifle Data Book"
              venue="Training Resource"
              description="Comprehensive data book for recording DOPE, environmental conditions, and shot analysis for serious precision shooters."
              date="Available Now"
            />

            <WorkshopCard
              title="Wind Reading Masterclass"
              venue="Online Course"
              description="In-depth video course on reading wind conditions, mirage, and environmental factors affecting bullet trajectory."
              date="Self-Paced"
            />

            <WorkshopCard
              title="Ballistics Calculator App"
              venue="Digital Tool"
              description="Custom ballistics calculator with advanced features for precision shooters, including atmospheric modeling and custom bullet libraries."
              date="Available Now"
            />

            <WorkshopCard
              title="Equipment Selection Guide"
              venue="Digital Resource"
              description="Comprehensive guide to selecting, setting up, and optimizing precision rifle equipment for various applications."
              date="Updated Quarterly"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface PublicationCardProps {
  title: string
  type: string
  description: string
  date: string
  link: string
  journal?: string
  conference?: string
}

function PublicationCard({ title, type, description, date, link, journal, conference }: PublicationCardProps) {
  return (
    <Card className="border-olive-800 secondary-bg-subtle">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg uppercase tracking-wider">{title}</CardTitle>
          <Badge className="bg-olive-800 text-white uppercase tracking-wider text-xs">{type}</Badge>
        </div>
        {journal && <div className="text-sm text-muted-foreground">{journal}</div>}
        {conference && <div className="text-sm text-muted-foreground">{conference}</div>}
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">{date}</div>
          <a href={link} className="text-sm text-gold-500 hover:underline uppercase tracking-wider">
            Course Details
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

interface WorkshopCardProps {
  title: string
  venue: string
  description: string
  date: string
}

function WorkshopCard({ title, venue, description, date }: WorkshopCardProps) {
  return (
    <Card className="border-olive-800 secondary-bg-subtle">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg uppercase tracking-wider">{title}</CardTitle>
          <Badge variant="outline" className="uppercase tracking-wider text-xs border-olive-800">
            {venue}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{description}</p>
        <div className="text-sm text-muted-foreground">{date}</div>
      </CardContent>
    </Card>
  )
}

