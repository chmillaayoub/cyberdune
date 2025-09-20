"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mouseY, setMouseY] = useState(0)

  const navItems = [
    { name: "About Us", id: "about" },
    { name: "Timeline", id: "timeline" },
    { name: "Gallery", id: "activities-gallery" },
    { name: "Activities", id: "activities" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Members", id: "members" },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerY = window.innerHeight / 2
      setMouseY((e.clientY - centerY) / centerY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const translateY = mouseY * 10

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div
            className="flex items-center transition-transform duration-300 cursor-pointer"
            style={{ transform: `translateY(${translateY}px)` }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-16 h-16 relative">
              <img src="/logo.png" alt="CyberDune Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <div
            className="hidden md:flex flex-1 justify-center transition-transform duration-300"
            style={{ transform: `translateY(${translateY}px)` }}
          >
            <div className="flex space-x-6 bg-black/50 px-6 py-2 rounded-lg">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm font-bold cursor-pointer drop-shadow-[0_0_4px_rgba(255,0,0,0.6)]"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button
              className="bg-red-600 text-white hover:bg-red-700 text-sm px-6 font-mono"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT US
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/70 border border-gray-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors duration-200 cursor-pointer font-bold drop-shadow-[0_0_4px_rgba(255,0,0,0.6)]"
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsOpen(false)
                  }}
                >
                  {item.name}
                </span>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-red-600 text-white hover:bg-red-700 font-mono"
                  onClick={() => {
                    scrollToSection("contact")
                    setIsOpen(false)
                  }}
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
