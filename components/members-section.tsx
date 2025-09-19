"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

const members = [
  {
    name: "Ayoub Chmilla",
    nickname: "kissandghost",
    role: "President",
    ctfType: "Web Exploitation",
    image: "/chmilla_ayoub.png",
    bio: "Student in Computing Networks and Security",
    social: {
      github: "https://github.com/chmillaayoub",
      linkedin: "https://www.linkedin.com/in/ayoub-chmilla-a5b758305",
      email: "chmillaayoub@gmail.com",
    },
  },
  {
    name: "Hajar Bouafar",
    nickname: "Qu1sar",
    role: "Vice President",
    image: "/bouafar_hajar.png",
    bio: "Student in Data Engineering",
    social: {
      github: "https://github.com/Astrohajar",
      linkedin: "https://www.linkedin.com/in/hajarbouafar",
      email: "hajar.bouafar@gmail.com",
    },
  },
  {
    name: "Ahmed Boukili",
    nickname: "Ultron",
    role: "Secretary General",
    image: "/boukili_ahmed.png",
    bio: "Student in Computer Engineering",
    social: {
      github: "https://github.com/ahmedbkli",
      email: "boukiliahmed222@gmail.com",
    },
  },
  {
    name: "Abderrahmane Aroussi",
    nickname: "Qino",
    role:"RH",
    ctfType: "Generalist",
    image: "/aroussi_abderrahmane.png",
    bio: "Student in Computing Networks and Security",
    social: {
      github: "https://github.com/Abderrahmane-Aroussi",
      linkedin: "https://www.linkedin.com/in/abderrahmane-aroussi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "abderrahmanearoussi166@gmail.com ",
    },
  },
  {
    name: "Abderrahim Graimez",
    nickname: "AG0709",
    role: "Sponsorship & Partnerships Manager",
    image: "/graimez_abderrahim.png",
    bio: "Student in Management Techniques",
    social: {
      github: "https://github.com/AG0709#:~:text=AG0709,-Set%20status",
      linkedin: "https://www.linkedin.com/in/abderrahim-graimez-324ba62b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "Graimezabderrahim@gmail.com",
    },
  },
  {
    name: "Elhassan Iyahia",
    nickname: "Cyb3r0xW0lF",
    role: "Events Manager",
    ctfType: "Forensics",
    image: "/iyahia_elhassan.png",
    bio: "Student in Computer Engineering",
    social: {
      github: "https://github.com/Cyber-WolF01",
      linkedin: "https://github.com/Cyber-WolF01",
      email: "iyahiaelhassan@gmail.com",
    },
  },
  {
    name: "Mariam Biki",
    nickname: "rize",
    role: "Communications Manager",
    image: "/biki_mariam.png",
    bio: "Student in Renewable Energy and Energy Efficiency",
    social: {
      email: "mariambekki@gmail.com",
    },
  },
  {
    name: "Marwan Atni",
    nickname: "marlithor_cyber",
    role: "Training Manager",
    ctfType: "Cryptography",
    image: "/atni_marwan.png",
    bio: "Student in Accounting, Control and Audit",
    social: {
      github: "https://github.com/marlithor-cyber",
      linkedin: "https://www.linkedin.com/in/atni-marwane-ba50a2330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "marwane.atni.2006@gmail.com",
    },
  },
  {
    name: "Meryam Dlimi",
    nickname: "ryu.mee",
    role: "Treasurer",
    image: "/dlimi_meryam.png",
    bio: "Student in Computing Networks and Security",
    social: {
      linkedin: "https://www.linkedin.com/in/dlimi-meryam-54b2b5336",
      email: "meryam.dlimi17@gmail.com",
    },
  },
]

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
      if (i > alt.length) {
        clearInterval(interval)
        setDisplay(alt)
      }
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

export function MembersSection() {
  return (
    <section id="members" className="py-20 bg-black text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">
            Cyber<span className="text-red-500">Dune</span> Team
          </h2>
          <p className="text-lg text-gray-400">Hackers, breakers, and builders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <Card
              key={i}
              className="bg-zinc-950 border border-red-500/30 relative group overflow-hidden 
                         hover:border-red-500/80 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {/* square cyber red glow image */}
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 object-cover border-2 border-red-500 
                               shadow-[0_0_25px_rgba(255,0,0,0.7)]"
                  />
                </div>

                {/* glitching name → nickname */}
                <h3 className="text-xl font-bold text-red-400 mb-1">
                  <GlitchText text={member.name} alt={member.nickname} />
                </h3>

                {/* glitching role → CTF type */}
                <p className="text-sm text-red-600 mb-2">
                  <GlitchText text={member.role} alt={member.ctfType} />
                </p>

                {/* field of study */}
                <p className="text-xs text-gray-400 mb-4">{member.bio}</p>

                {/* socials */}
                <div className="flex justify-center space-x-4">
                  <a href={member.social.github} className="hover:text-red-500 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="hover:text-red-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="hover:text-red-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
