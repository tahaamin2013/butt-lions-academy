import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TimingSection } from "@/components/timing-section"
import { AboutSection } from "@/components/about-section"
import { TeamsSection } from "@/components/teams-section"
import { FeaturedMatchSection } from "@/components/featured-match-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import  EmailForm from "@/components/EmailForm"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="flex flex-col lg:flex-row">
        <HeroSection />
        <TimingSection />
      </div>
      <AboutSection />
      <TeamsSection />
      <FeaturedMatchSection />
      <TestimonialsSection />
      <EmailForm />
      <Footer />
    </div>
  )
}
