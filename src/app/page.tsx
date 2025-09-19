import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesGallery }  from "@/components/activities-gallery"
import {TimelineSection} from "@/components/timeline-section" 
import { SponsorsSection } from "@/components/sponsors-section"
import { ActivitiesSection } from "@/components/activities-section"
import { MembersSection } from "@/components/members-section"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ActivitiesGallery />
        <ActivitiesSection />
        <SponsorsSection />
        <MembersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
