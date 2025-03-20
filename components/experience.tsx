import { Calendar, Building, Trophy, Crosshair } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Update the Experience cards with olive borders and secondary backgrounds
export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wider">Professional Background</h2>

      <div className="space-y-8 mt-12">
        <ExperienceCard
          title="Lead Instructor & Founder"
          company="Modern Day Sniper"
          period="January 2015 - Present"
          achievements={[
            "Developed comprehensive precision rifle training curriculum for military, law enforcement, and civilian shooters",
            "Trained over 5,000 students in long-range marksmanship and precision shooting techniques",
            "Created specialized courses for extreme long range, competition preparation, and tactical applications",
            "Established industry partnerships with leading equipment manufacturers for testing and development",
          ]}
          technologies={[
            "Precision Rifle",
            "Long Range",
            "Ballistics",
            "Field Craft",
            "Tactical Training",
            "Equipment Selection",
          ]}
          impact={{
            title: "Training Impact",
            description:
              "Transformed the precision rifle training industry with innovative methodologies and measurable results",
            metrics: [
              { value: "5,000+", label: "Students Trained" },
              { value: "15+", label: "Course Types" },
              { value: "98%", label: "Student Satisfaction" },
            ],
          }}
          bgColor="secondary-bg-subtle"
        />

        <ExperienceCard
          title="Military Special Operations"
          company="U.S. Armed Forces"
          period="2005 - 2015"
          achievements={[
            "Served as designated marksman and sniper in special operations units",
            "Deployed to multiple combat theaters providing overwatch and precision fire support",
            "Trained junior snipers in advanced marksmanship and field craft techniques",
            "Developed and implemented tactical standard operating procedures for precision engagements",
          ]}
          technologies={[
            "Military Operations",
            "Combat Deployments",
            "Team Leadership",
            "Tactical Planning",
            "Advanced Marksmanship",
          ]}
          impact={{
            title: "",
            description: "",
            metrics: [],
          }}
          bgColor="secondary-bg-subtle"
        />
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  achievements: string[]
  technologies: string[]
  impact: {
    title: string
    description: string
    metrics: {
      value: string
      label: string
    }[]
  }
  bgColor: string
}

function ExperienceCard({ title, company, period, achievements, technologies, impact, bgColor }: ExperienceCardProps) {
  return (
    <Card className={`${bgColor} border-olive-800`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl uppercase tracking-wider">{title}</CardTitle>
          <Badge className="bg-olive-800 text-white uppercase tracking-wider text-xs">{company}</Badge>
        </div>
        <CardDescription className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-gold-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wider">Key Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-sm mt-1 text-gold-500">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crosshair className="h-5 w-5 text-gold-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wider">Specializations</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="uppercase tracking-wider text-xs border border-olive-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {impact.title && (
              <>
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">{impact.title}</h3>
                <p className="mb-4">{impact.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {impact.metrics.map((metric, index) => (
                    <div key={index} className="bg-black/20 rounded-lg p-4 text-center border border-olive-800">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

