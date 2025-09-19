"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

// GlitchText Component
function GlitchText({ text, alt }: { text: string; alt: string }) {
  const [display, setDisplay] = useState(text)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!hovered) return
    let i = 0
    const interval = setInterval(() => {
      const chars = "01#@$%&*?"
      setDisplay((prev) =>
        prev
          .split("")
          .map((c, idx) =>
            idx < i ? alt[idx] || "" : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      )
      i++
      if (i > alt.length) clearInterval(interval)
    }, 70)
    return () => clearInterval(interval)
  }, [hovered, alt])

  return (
    <span
      onMouseEnter={() => {
        setHovered(true)
        setDisplay(text)
      }}
      onMouseLeave={() => {
        setHovered(false)
        setDisplay(text)
      }}
      className="cursor-pointer font-mono transition-colors"
    >
      {display}
    </span>
  )
}

export function HeroSection() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [hover, setHover] = useState(false)

  const normalText =
    "Our club was founded in October 2024 at the Higher School of Technology in Guelmim. We are the first cybersecurity student community in the Moroccan Sahara, dedicated to learning, sharing knowledge, and promoting cybersecurity awareness."

  const presidentText =
    'Message from the President: "CyberDune is more than a club; it’s a movement. We aim to push boundaries, challenge ourselves, and grow together as future cybersecurity leaders. Every event is a step toward talent, confidence, and innovation."'

  const words = (hover ? presidentText : normalText).split(" ")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX - window.innerWidth / 2) / 30)
      setMouseY((e.clientY - window.innerHeight / 2) / 30)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black font-mono"
    >
      {/* Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translate(${mouseX}px, ${mouseY}px)`,
          transition: "transform 0.1s",
        }}
      >
        <img
          src="/cyberdune_community.webp"
          alt="CyberDune Community"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Shapes */}
      <div
        className="absolute w-32 h-32 border-4 border-red-600 rotate-45 opacity-80 top-1/3 left-1/4 animate-bounce-slow"
        style={{
          transform: `translate(${mouseX / 2}px, ${mouseY / 2}px) rotate(45deg)`,
        }}
      >
        <div className="w-full h-full bg-red-600/20" />
      </div>
      <div
        className="absolute w-20 h-20 border-2 border-blue-500 rounded-full opacity-70 bottom-1/4 right-1/3 animate-bounce-slow"
        style={{ transform: `translate(${mouseX / 3}px, ${mouseY / 3}px)` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
       <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-500 leading-snug tracking-wide drop-shadow-[0_0_25px_rgba(255,0,0,0.7)]">
  First Cybersecurity Student <br />
  Club in The Moroccan Sahara!
</h1>


        {/* Per-word flip / hover effect */}
        <p
          className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl drop-shadow-md leading-relaxed cursor-pointer flex flex-wrap justify-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-500 ease-in-out mr-1"
              style={{
                transform: hover ? "rotateY(360deg)" : "rotateY(0deg)",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#about">
            <Button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Learn More About Us
            </Button>
          </Link>

          <a
            href="https://forms.gle/K3YhHXnDUQRyYqDu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Join Our Community
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
