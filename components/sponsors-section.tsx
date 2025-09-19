"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

const sponsors = [
  {
    name: "CIH Bank",
    logo: "/cih-logo.webp",
    tier: "gold",
    description: "Leading banking solutions in Morocco",
  },
  {
    name: "Your Brand Here",
    logo: "/logo.webp",
    tier: "coming-soon",
    description: "Become our next sponsor! Contact us to join.",
  },
]

const partnerships = [
  {
    name: "Soc4m",
    logo: "/soc4m-logo.webp",
    description: "Moroccan cybersecurity community focused on SOC practices and defensive cybersecurity.",
  },
  {
    name: "Join Us",
    logo: "/logo.webp",
    description: "Want to collaborate with us? Contact us!",
  },
  {
    name: "Join Us",
    logo: "/logo.webp",
    description: "Want to collaborate with us? Contact us!",
  },
  {
    name: "Join Us",
    logo: "/logo.webp",
    description: "Want to collaborate with us? Contact us!",
  },
]

export function SponsorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "border-red-600 bg-black/5"
      case "gold":
        return "border-red-500 bg-black/5"
      case "silver":
        return "border-gray-500 bg-black/5"
      case "bronze":
        return "border-orange-500 bg-black/5"
      case "coming-soon":
        return "border-dashed border-red-600 bg-gradient-to-br from-black to-red-900"
      default:
        return "border-border bg-card"
    }
  }

  return (
    <section id="sponsors" className="py-20 bg-black text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
    <span className="text-white">Our </span>
    <span className="text-red-500">Sponsors</span>
  </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Proud partners supporting cybersecurity education and innovation
          </p>
        </div>

        {/* Featured Sponsor Carousel */}
        <div className="mb-16">
          <Card
            className={`${getTierColor(sponsors[currentIndex].tier)} transition-all duration-500 max-w-2xl mx-auto hover:scale-105 hover:shadow-xl cursor-pointer`}
          >
            <CardContent className="p-8 text-center">
              <img
                src={sponsors[currentIndex].logo || "/placeholder.svg"}
                alt={sponsors[currentIndex].name}
                className="h-28 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold mb-2">{sponsors[currentIndex].name}</h3>
              <p className="text-gray-300 mb-4">{sponsors[currentIndex].description}</p>
              {sponsors[currentIndex].tier !== "coming-soon" && (
                <span className="inline-block px-4 py-2 bg-red-600/10 text-red-600 text-sm font-semibold rounded-full capitalize">
                  {sponsors[currentIndex].tier} Sponsor
                </span>
              )}
            </CardContent>
          </Card>
        </div>

        {/* All Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className={`${getTierColor(sponsor.tier)} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-4 text-center">
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-16 mx-auto mb-2 object-contain"
                />
                {sponsor.tier === "coming-soon" && (
                  <p className="text-xs text-gray-300 mt-1">More sponsors coming soon!</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnerships Section */}
        <div id="partnerships">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
    <span className="text-white">Strategic</span>
    <span className="text-red-500"> Partnerships</span>
  </h3>
               
          
            <p className="text-gray-300 max-w-xl mx-auto">
              Collaborating with leading organizations to advance cybersecurity research and education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card
                key={index}
                className={`bg-black border border-gray-700 hover:border-red-600 transition-all duration-300 hover:shadow-xl group cursor-pointer ${
                  partner.name.includes("Join Us") ? "bg-gradient-to-br from-black to-red-900" : ""
                }`}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-20 mx-auto mb-4 object-contain group-hover:scale-105 transition-transform"
                  />
                  <h4 className="font-semibold mb-2 group-hover:text-red-600 transition-colors">{partner.name}</h4>
                  <p className="text-sm text-gray-300">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
