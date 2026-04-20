import { AlertTriangle, ArrowRightLeft, CheckCircle } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const problems = [
  "Customers can't find you online — you're invisible to Google",
  'Without a website, you look less credible than competitors',
  "You're missing opportunities while your competitors capture them",
]

const solutions = [
  'We build professional websites that rank on Google',
  'Clear pricing, no surprises, no technical jargon',
  'Launch fast and get support even after going live',
]

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-36"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 size-96 rounded-full bg-destructive/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 size-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-muted bg-muted/50 px-3 py-1 text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ArrowRightLeft className="size-4 text-muted-foreground" />
            <span className="text-muted-foreground">Before & After</span>
          </motion.div>

          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            The Challenge & Our Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            Most small businesses struggle to get online. We make it simple.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Problem Card */}
          <motion.div variants={cardVariants}>
            <Card className="group relative h-full overflow-hidden border-destructive/20 transition-all duration-300 hover:border-destructive/40 hover:shadow-lg hover:shadow-destructive/5">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-linear-to-br from-destructive/2 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <CardContent className="relative pt-6">
                <div className="mb-6 flex items-center gap-3">
                  <motion.div
                    className="flex size-12 items-center justify-center rounded-2xl bg-destructive/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <AlertTriangle className="size-6 text-destructive" />
                  </motion.div>
                  <h3 className="text-xl font-medium">The Problem</h3>
                </div>

                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      variants={itemVariants}
                      custom={index}
                    >
                      <motion.span
                        className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-bold text-destructive"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                      >
                        ×
                      </motion.span>
                      <span className="text-muted-foreground">{problem}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative line */}
                <motion.div
                  className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-destructive/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ originX: 0 }}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Card */}
          <motion.div variants={cardVariants}>
            <Card className="group relative h-full overflow-hidden border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/2 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <CardContent className="relative pt-6">
                <div className="mb-6 flex items-center gap-3">
                  <motion.div
                    className="flex size-12 items-center justify-center rounded-2xl bg-primary/10"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle className="size-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-medium">Marv Agency</h3>
                </div>

                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      variants={itemVariants}
                      custom={index}
                    >
                      <motion.span
                        className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                        whileHover={{ scale: 1.2 }}
                      >
                        ✓
                      </motion.span>
                      <span>{solution}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative line */}
                <motion.div
                  className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{ originX: 0 }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Connecting arrow indicator for desktop */}
        <motion.div
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="flex size-12 items-center justify-center rounded-full border border-muted bg-background shadow-lg"
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowRightLeft className="size-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
