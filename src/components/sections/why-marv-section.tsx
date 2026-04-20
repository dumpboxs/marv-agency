import { Heart, MessageCircle, Rocket, Wallet } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const values = [
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    description: 'Most projects launch within 2-3 weeks. No months of waiting.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'Clear quotes upfront. No hidden fees or surprise charges.',
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: Heart,
    title: 'Post-Launch Support',
    description:
      "We don't disappear after launch. Count on us for updates and help.",
    color: 'from-rose-500/20 to-rose-500/5',
  },
  {
    icon: MessageCircle,
    title: 'No Tech Jargon',
    description:
      'Plain language always. We explain everything in terms you understand.',
    color: 'from-amber-500/20 to-amber-500/5',
  },
]

export function WhyMarvSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="why-marv"
      className="relative w-full overflow-hidden bg-muted/30 py-24 md:py-36"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 right-0 size-[600px] rounded-full bg-linear-to-bl from-primary/5 to-transparent blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
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
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-muted bg-background/50 px-3 py-1 text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Why Choose Us</span>
          </motion.div>

          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Why Work With Marv?
          </h2>
          <p className="text-lg text-muted-foreground">
            We built Marv Agency specifically for businesses like yours.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div className="relative overflow-hidden rounded-2xl border border-muted bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <motion.div
                      className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl border bg-background shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30"
                      whileHover={{ rotate: 5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon className="size-7 text-primary" />
                    </motion.div>

                    <h3 className="mb-2 text-center text-lg font-medium">
                      {value.title}
                    </h3>
                    <p className="text-center text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute top-4 right-4 font-display text-3xl font-bold text-muted/20 transition-colors duration-300 group-hover:text-primary/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            Ready to experience the difference?{' '}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Let's talk
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
