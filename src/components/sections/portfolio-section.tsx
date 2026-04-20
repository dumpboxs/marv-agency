import { ExternalLink, Quote } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const portfolioItems = [
  {
    title: 'Local Bakery Website',
    category: 'Small Business',
    description:
      'A warm, inviting website showcasing daily specials and allowing online orders.',
    gradient: 'from-amber-500/20 via-orange-500/10 to-rose-500/20',
    accent: 'text-amber-600',
  },
  {
    title: 'Private School Portal',
    category: 'Education',
    description:
      'Complete school website with admissions info, staff profiles, and parent portal.',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
    accent: 'text-blue-600',
  },
  {
    title: 'Consulting Firm Landing Page',
    category: 'Professional Services',
    description:
      'High-converting landing page that increased lead generation by 200%.',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    accent: 'text-emerald-600',
  },
]

const testimonials = [
  {
    quote:
      'Marv made our first website feel easy. They explained everything clearly and delivered faster than expected. Highly recommended!',
    author: 'Sarah Johnson',
    role: 'Owner, Artisan Bakery',
    initials: 'SJ',
  },
  {
    quote:
      "Professional, fast, and actually affordable. Our school's website has never looked better. Parents love the new portal.",
    author: 'Michael Chen',
    role: 'Principal, Oakridge Academy',
    initials: 'MC',
  },
]

export function PortfolioSection() {
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
      id="portfolio"
      className="relative w-full overflow-hidden py-24 md:py-36"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-1/4 size-[500px] rounded-full bg-linear-to-tr from-primary/5 to-transparent blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
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
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-muted bg-muted/50 px-3 py-1 text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Portfolio</span>
          </motion.div>

          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses like yours.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="mb-20 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card className="group relative h-full overflow-hidden border-muted transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                {/* Image placeholder with gradient */}
                <motion.div
                  className={`relative h-48 bg-linear-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="mx-auto mb-2 h-16 w-24 rounded-xl bg-background/60 backdrop-blur-sm"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="mx-auto h-2 w-16 rounded bg-background/40"
                      animate={{
                        scaleX: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5 + 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2 font-medium text-primary opacity-0 group-hover:opacity-100"
                    >
                      <span>View Project</span>
                      <ExternalLink className="size-4" />
                    </motion.div>
                  </div>
                </motion.div>

                <CardHeader className="pb-2">
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`text-xs tracking-wider uppercase ${item.accent}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${item.gradient} bg-size-[100%_100%]`}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.h3
            className="mb-8 text-center text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: 0.7 + index * 0.15,
                  duration: 0.6,
                  ease: 'easeOut' as const,
                }}
                whileHover={{ y: -4 }}
              >
                <Card className="group relative h-full overflow-hidden border-muted bg-muted/30 transition-all duration-300 hover:border-primary/30 hover:bg-muted/50">
                  <CardContent className="relative pt-6">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Quote className="mb-4 size-8 text-primary/30 transition-colors duration-300 group-hover:text-primary/50" />
                    </motion.div>

                    <p className="mb-6 text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        {testimonial.initials}
                      </motion.div>

                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
