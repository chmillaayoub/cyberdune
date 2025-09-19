"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  { id: "bootcamp", title: "Bootcamp", image: "/bootcamp.webp", description: "CyberDune organized a 4-day online bootcamp to welcome new members and introduce them to CTF competitions and essential cybersecurity skills through interactive sessions and hands-on challenges." },
  { id: "first_meeting", title: "First Meeting", image: "/first_meeting.webp", description: "Our first meeting brought members together to introduce the club’s vision, present the office team, and share upcoming plans, creating a welcoming space for collaboration and growth." },
  { id: "ctf_session", title: "CTF Session", image: "/ctf_session.webp", description: "CyberDune held a CTF training session focused on Forensics, introducing members to digital investigation techniques and practical challenges that sharpen problem-solving and analytical skills." },
  { id: "cyber_tools", title: "Cyber Tools", image: "/cyber_tools.webp", description: "In this session, members were introduced to Metasploit, exploring its features and learning how it can be used as a powerful tool in penetration testing and cybersecurity practice." },
  { id: "lets_h4ck", title: "Let's H4ck L'3otla", image: "/let's_h4ack_l'3otla.webp", description: "A 3-week program combining sessions on Cryptography, Web, Forensics, and more, along with CTF challenges and fun game times, offering members both learning and community-building experiences." },
  { id: "xmirage", title: "Xmirage CTF 2025", image: "/xmirage.webp", description: "CyberDune proudly organized XMirage, the first-ever CTF competition in Southern Morocco — a milestone event that brought together students to showcase their skills, collaborate, and compete in cybersecurity challenges." },
]

export function ActivitiesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  const prevItem = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const nextItem = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  const currentItem = galleryItems[currentIndex]

  return (
    <section id="activities-gallery" className="py-20 bg-black font-mono">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 flex flex-col items-center">
        
        {/* Centered split color title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
          <span className="text-white">Activities</span> <span className="text-red-600">Gallery</span>
        </h2>

        {/* Current item title */}
        <h3 className="text-4xl font-bold text-red-500 mb-8 text-center drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
          {currentItem.title}
        </h3>

        {/* Image with hover description */}
        <div
          className="w-full h-80 sm:h-96 relative rounded-lg overflow-hidden border-2 border-red-600 mb-6 shadow-[0_0_25px_rgba(255,0,0,0.7)] group cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay description */}
          {hovered && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-4 transition-opacity duration-300">
              <p className="text-gray-400 text-sm sm:text-base">{currentItem.description}</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-6 mt-4">
          <button
            onClick={prevItem}
            className="flex items-center justify-center px-6 py-3 bg-black border-2 border-red-600 text-red-600 font-bold uppercase rounded-md tracking-wider shadow-md transition-all duration-300 hover:bg-red-600 hover:text-black hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={nextItem}
            className="flex items-center justify-center px-6 py-3 bg-black border-2 border-red-600 text-red-600 font-bold uppercase rounded-md tracking-wider shadow-md transition-all duration-300 hover:bg-red-600 hover:text-black hover:scale-105"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
