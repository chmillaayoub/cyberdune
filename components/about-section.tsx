"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.7)]">
              <img
                src="/cybersecurity-professional.jpg"
                alt="Cybersecurity professional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-0 top-1/2 w-1 h-32 bg-red-600 transform -translate-y-1/2" />
          </div>

          {/* Right side text */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
              <span className="text-red-600">✦</span>  <span className="text-white">About </span>
        <span className="text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)]">Us</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-red-600 font-semibold mb-2 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
                  <span className="text-red-600">✦</span> Introduction
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Founded in October 2024 at the Higher School of Technology in Guelmim, <span className="text-red-500 font-bold">CyberDune</span> is a club dedicated to advancing cybersecurity excellence.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  What started as a response to limited opportunities in cybersecurity has become a vibrant community dedicated to growth, creativity, and practical expertise.
                </p>
              </div>

              <div>
                <h3 className="text-red-600 font-semibold mb-2 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
                  <span className="text-red-600">✦</span> Our Mission
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Our goal extends beyond competitions. Through immersive bootcamps, hands-on workshops, and collaborative projects, we work to broaden our members' cybersecurity expertise and knowledge.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  We emphasize practical learning and real-world applications, enabling our members to enhance their skills and confidently tackle challenges in both academic and professional settings.
                </p>
              </div>

              <Link href="#contact">
                <Button className="bg-red-600 text-white hover:bg-red-700 mt-6">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
