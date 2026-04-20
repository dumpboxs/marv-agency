import { ArrowRight, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  // Only use scroll transforms on client side
  const scrollYProgress = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  }).scrollYProgress

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[95vh] w-full items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-linear-to-br from-primary/5 via-transparent to-secondary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-1/2 -bottom-1/2 h-full w-full rounded-full bg-linear-to-tl from-accent/5 via-transparent to-primary/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="group mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="mr-2 flex size-2 items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="size-2 rounded-full bg-primary" />
              </motion.span>
              <span className="text-muted-foreground">
                Web Development for Small Businesses
              </span>
              <Sparkles className="ml-2 size-3 text-primary/50" />
            </motion.div>
          </motion.div>

          {/* Headline with letter animation */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              <span className="flex flex-wrap items-center justify-center">
                <motion.span
                  className="inline-flex overflow-hidden"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {'Your Business Deserves'.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterVariants}
                      style={{ display: 'inline-block' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
              <span className="mt-2 flex flex-wrap items-center justify-center">
                <motion.span
                  className="inline-flex overflow-hidden text-muted-foreground"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {'a Real Online Presence'.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterVariants}
                      style={{ display: 'inline-block' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Professional websites that build credibility and attract customers.
            No technical knowledge required{' '}
            <span className="text-primary">—</span> we handle everything.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get a Free Consultation
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <ArrowRight className="size-4" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {['Fast turnaround', 'Transparent pricing', 'No hidden fees'].map(
              (text, index) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                >
                  <motion.div
                    className="size-2 rounded-full bg-emerald-500"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                  <span>{text}</span>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="pointer-events-none absolute top-1/4 -left-12 size-24 rounded-full border border-primary/10 opacity-50"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="pointer-events-none absolute -right-8 bottom-1/3 size-16 rounded-full border border-secondary/20 opacity-40"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-linear-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
