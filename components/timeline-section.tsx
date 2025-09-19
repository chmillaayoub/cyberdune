"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Trophy, Users, Zap } from "lucide-react"

const timelineEvents = [
  {
    date: "October 2024",
    title: "Club Foundation",
    description: "CyberDune Club was established with 10 founding members passionate about cybersecurity.",
    icon: Users,
  },
  {
    date: "October 2024",
    title: "Our first Bootcamp",
    description: "A 4-day online bootcamp to welcome new members and introduce them to CTF competitions and essential cybersecurity skills.",
    icon: Calendar,
  },
  {
    date: "February 2025",
    title: "First CTF Competition - XMirage",
    description: "Organized our inaugural Capture The Flag competition with 50+ participants.",
    icon: Trophy,
  },
  {
    date: "February 2025",
    title: "Strategic Partnerships",
    description: "Established partnerships with leading cybersecurity clubs across the country.",
    icon: Zap,
  },
  {
    date: "Present",
    title: "Continued Growth",
    description: "Now with 150+ members, continuing to lead in cybersecurity innovation and education.",
    icon: Users,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 bg-black/20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)]">Journey</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From humble beginnings to becoming a leading cybersecurity community
          </p>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-500/30 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-red-500 rounded-full transform md:-translate-x-1.5 drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="bg-black/80 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-red-500/10 rounded-lg mr-3 group-hover:bg-red-500/20 transition-colors">
                            <Icon className="h-5 w-5 text-red-500" />
                          </div>
                          <span className="text-sm text-gray-300 font-mono">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
