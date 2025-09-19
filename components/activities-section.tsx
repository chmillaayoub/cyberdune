"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Instagram } from "lucide-react"

const activities = [
{ title: "Xmirage CTF Competition - Second Edition", date: "December 15 - 16, 2025", location: "Higher School of Technology - Guelmim , Amphi 1", participants: "50", status: "Upcoming", description: "An exciting Capture The Flag competition with various challenges.", image: "/logo.png", tags: ["Lecture", "Awards", "CTF"], instagram: [], }, { title: "CyberDune Toolbox - First Edition", date: "October 11, 2025 to March 20, 2026", location: "Bloc C - Room 06", participants: "50", status: "Upcoming", description: "6 months program to master essential cybersecurity tools and techniques, from basics to advanced levels.", image: "/logo.png", tags: ["Workshop", "Hands-on", "Tools"], instagram: [], }, { title: "Welcome to members", date: "October 4, 2025", location: "Bloc C - Room 05", participants: "70-100", status: "Upcoming", description: "Kickoff meeting to introduce new members to the club's mission, upcoming events, and opportunities.", image: "/logo.png", tags: ["First meeting", "New Members", "Introduction"], instagram: [], }, { title: "CyberDune bootcamp - Second Edition", date: "September 29 - October 2, 2025", location: "Bloc C - Room 06", participants: "50", status: "Upcoming", description: "4 days intensive bootcamp to welcome new members and introduce them to CTF competitions and essential cybersecurity skills.", image: "/logo.png", tags: ["Workshop", "Hands-on", "Introduction"], instagram: [], }, { title: "Xmirage CTF Competition - First Edition", date: "February 24 - 25 , 2025", location: "Higher School of Technology - Guelmim , Amphi 1", participants: "50", status: "Completed", description: "CyberDune's inaugural Capture The Flag competition, featuring a range of challenges in web exploitation, forensics, and reverse engineering.", image: "/xmirage.jpg", tags: ["CTF", "Lecture", "Awards"], instagram: [ "https://www.instagram.com/p/DGq1AdoqZvw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "https://www.instagram.com/p/DHKCzpsKXzh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" ], }, { title: "Let's H4ck L'3otla - First Edition", date: "January 22 - February 6, 2025", location: "The club's Discord server", participants: "45", status: "Completed", description: "A 3 weeks online event during the winter break, featuring daily challenges and mini-competitions to keep skills sharp.", image: "/let's_h4ack_l'3otla.jpg", tags: ["Workshop", "Hands-on", "Advanced"], instagram: [ "https://www.instagram.com/p/DFJEMzARw0z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "https://www.instagram.com/p/DFgXvOtKwo_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "https://www.instagram.com/p/DFvdFYWq18u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" ], }, { title: "Cyber Tools", date: "December 25, 2024", location: "Bloc C - Room 06", participants: "40", status: "Completed", description: "A hands-on workshop where members learn to use essential cybersecurity techniques in metasploit.", image: "/cyber_tools.jpg", tags: ["Workshop", "Hands-on", "Metasploit"], instagram: ["https://www.instagram.com/p/DEAsvNyqVOj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="], }, { title: "CTF Session", date: "November 15, 2024", location: "Bloc C - Room 04", participants: "60", status: "Completed", description: "Monthly Capture The Flag competition to practice and enhance cybersecurity skills in a competitive environment.", image: "/ctf_session.jpg", tags: ["Competition", "CTF", "Monthly"], instagram: ["https://www.instagram.com/p/DDnFTrvR3sq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="], }, { title: "Welcome to members", date: "November 12, 2024", location: "Bloc C - Room 05", participants: "60-80", status: "Completed", description: "Kickoff meeting to introduce new members to the club's mission, upcoming events, and opportunities.", image: "/first_meeting.jpg", tags: ["Lecture", "First Meeting", "Introduction"], instagram: ["https://www.instagram.com/p/DCSZc_uNN0m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="], }, { title: "Cyberdune bootcamp - First Edition", date: "November 03 - 09, 2024", location: "Bloc C - Room 05", participants: "80-100", status: "Completed", description: "A week-long intensive bootcamp covering the basics of cybersecurity and CTF competitions.", image: "/bootcamp.jpg", tags: ["Introduction to Cybersecurity", "Cryptographie", "Web Exploitation", "Forensics", "Reverse Engineering"], instagram: ["https://www.instagram.com/p/DB6FW2vqClw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="], }, ]


export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-black font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
            Our <span className="text-red-600">Activities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engaging events, workshops, and competitions that drive cybersecurity excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-600/30"></div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-red-600 rounded-full border-2 border-black shadow-[0_0_10px_rgba(255,0,0,0.7)] z-10"></div>

                {/* Activity Card */}
                <div className="ml-16 bg-zinc-950 border border-red-600 rounded-lg p-6 hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all duration-300 group w-full">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <div className="relative overflow-hidden rounded-lg border-2 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.7)]">
                        <img
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge status={activity.status} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
                        {activity.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {activity.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs border-red-600 text-red-500"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-gray-400 mb-4">{activity.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-red-500" />
                          {activity.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-red-500" />
                          {activity.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-red-500" />
                          {activity.participants} participants
                        </div>
                      </div>

                      {activity.instagram.length > 0 && (
                        <div className="flex items-center gap-2 mt-4 text-red-500">
                          <Instagram className="h-4 w-4" />
                          {activity.instagram.map((link, i) => (
                            <a
                              key={i}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-sm"
                            >
                              Post {i + 1}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
