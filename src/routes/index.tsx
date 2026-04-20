import { motion } from 'motion/react'
import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { HeroSection } from '@/components/sections/hero-section'
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section'
import { ServicesSection } from '@/components/sections/services-section'
import { WhyMarvSection } from '@/components/sections/why-marv-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ContactFormSection } from '@/components/sections/contact-form-section'
import { cn } from '#/lib/utils'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="relative min-h-svh w-full overflow-x-hidden">
      {/* Scroll Progress Indicator with spring physics */}
      <ScrollProgress color="gradient" height={1} />

      {/* Animated background patterns */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Dot Pattern Background */}
        <motion.div
          className={cn(
            'absolute inset-0',
            'bg-size-[50px_50px]',
            'bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:bg-[radial-gradient(#404040_1px,transparent_1px)]',
            'opacity-60 dark:opacity-60'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Grid Pattern Background */}
        <motion.div
          className={cn(
            'absolute inset-0',
            'bg-size-[25px_25px]',
            'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
            'opacity-30 dark:opacity-30'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        {/* Grain texture overlay */}
        <motion.div
          className="absolute inset-0 z-60 h-full w-full bg-[url('/grain.svg')] bg-size-[128px] bg-repeat opacity-[0.1] dark:opacity-[0.1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>

      {/* Gradient orbs for visual interest */}
      <motion.div
        className="pointer-events-none fixed top-0 left-1/4 size-[600px] rounded-full bg-linear-to-br from-primary/5 via-transparent to-transparent blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="pointer-events-none fixed right-0 bottom-1/3 size-[500px] rounded-full bg-linear-to-tl from-secondary/5 via-transparent to-transparent blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Navbar />

      <main className="relative z-10 w-full pt-16">
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
