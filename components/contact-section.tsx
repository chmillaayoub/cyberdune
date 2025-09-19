"use client"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 lg:px-16 font-mono">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-extrabold text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)] flex items-center gap-2">
            <span>✦</span> CONTACT INFORMATION
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Get in touch with us anytime — whether by phone, email, or social media, we’re here to respond quickly and support you.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mt-8 text-lg">
            <a
              href="tel:+212771970185"
              className="text-gray-300 hover:text-red-500 transition border-b border-gray-600 hover:border-red-600 pb-1"
            >
              +212 771-970185
            </a>
            <a
              href="mailto:cyberdunecontact@gmail.com"
              className="text-gray-300 hover:text-red-500 transition border-b border-gray-600 hover:border-red-600 pb-1"
            >
              cyberdunecontact@gmail.com
            </a>
          </div>
        </div>

        <hr className="border-gray-800" />

        {/* Send a Message */}
        <div>
          <h2 className="text-3xl font-extrabold text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)] flex items-center gap-2">
            <span>✦</span> SEND A MESSAGE
          </h2>
          <p className="text-gray-400 mt-4 mb-8">
            Got a question or request? Fill out the form below, 
            and our team will respond as soon as possible.
          </p>

          {submitted && (
            <div className="flex items-center bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded-md mb-6" role="alert">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-mono">
                Your message has been sent successfully!
              </span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div>
              <label className="block text-gray-400 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="eg. Meryem"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-red-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-shadow shadow-red-500/50"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-400 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="eg. El Amrani"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-red-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-shadow shadow-red-500/50"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="eg. example@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-red-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-shadow shadow-red-500/50"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-400 mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="eg. +212 6XX-XXXXXX"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-red-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-shadow shadow-red-500/50"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-red-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-shadow shadow-red-500/50"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 text-right">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
