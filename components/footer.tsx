"use client"

import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.webp"
                alt="CyberDune Club"
                className="h-10 w-10 rounded-lg shadow-red-600/50"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering the next generation of cybersecurity professionals through education, research, and hands-on
              experience in digital security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-900 hover:bg-red-900/20 rounded-lg transition-colors group">
                <Github className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/cyberdune/posts/?feedView=all" className="p-2 bg-gray-900 hover:bg-red-900/20 rounded-lg transition-colors group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
              <a href="https://www.instagram.com/cyberdune_estg/?__pwa=1" className="p-2 bg-gray-900 hover:bg-red-900/20 rounded-lg transition-colors group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-red-500 transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-400 hover:text-red-500 transition-colors">
                  Activities
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#members" className="text-gray-400 hover:text-red-500 transition-colors">
                  Members
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-red-500">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-sm"><a
              href="mailto:cyberdunecontact@gmail.com"
              className="text-gray-300 hover:text-red-500 transition border-b border-gray-600 hover:border-red-600 pb-1"
            >
              cyberdunecontact@gmail.com
            </a></span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-sm">
                     <a
              href="tel:+212771970185"
              className="text-gray-300 hover:text-red-500 transition border-b border-gray-600 hover:border-red-600 pb-1"
>
              +212 771-970185
            </a>
            </span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                <span className="text-sm">
                  The Higher School Of Technology - Guelmim <br />
                  University of Ibn Zohr, Morocco
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CyberDune Club. All rights reserved. Designed by CyberDune Web Team.
          </p>
        </div>
      </div>
    </footer>
  )
}
