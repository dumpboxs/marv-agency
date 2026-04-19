import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section'
import { ServicesSection } from '@/components/sections/services-section'
import { WhyMarvSection } from '@/components/sections/why-marv-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ContactFormSection } from '@/components/sections/contact-form-section'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Global Grid Pattern Background - Fixed overlay */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--border) 30%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--border) 30%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <Navbar />

      <main className="relative w-full">
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <WhyMarvSection />
        <PortfolioSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  )
}
