import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
      {/* Subtle radial gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <span className="mr-2 size-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">
              Web Development for Small Businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Your Business Deserves a
            <br />
            <span className="text-muted-foreground">Real Online Presence</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Professional websites that build credibility and attract customers.
            No technical knowledge required — we handle everything.
          </p>

          {/* CTA */}
          <Button size="lg" onClick={scrollToContact} className="group">
            Get a Free Consultation
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Fast turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
