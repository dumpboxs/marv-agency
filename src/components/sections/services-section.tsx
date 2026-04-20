import { ArrowUpRight, Building2, Globe, GraduationCap } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    icon: Globe,
    title: 'Landing Pages',
    description:
      'High-converting single-page websites designed to turn visitors into customers. Perfect for product launches and lead generation.',
    price: 'Starting from $999',
    features: ['Mobile-first design', 'SEO optimized', 'Fast loading'],
  },
  {
    icon: Building2,
    title: 'Company Profiles',
    description:
      'Professional multi-page websites that showcase your business, team, and services. Build trust and credibility online.',
    price: 'Starting from $1,499',
    features: ['Multi-page structure', 'Team profiles', 'Service showcase'],
  },
  {
    icon: GraduationCap,
    title: 'School & Institution',
    description:
      'Complete websites for schools and organizations. Include admissions info, staff profiles, and communication portals.',
    price: 'Starting from $2,499',
    features: ['Admissions portal', 'Staff directory', 'Parent portal'],
  },
]

export function ServicesSection() {
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full overflow-hidden py-24 md:py-36"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 left-0 size-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
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
            <span className="text-muted-foreground">Our Services</span>
          </motion.div>

          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground">
            From simple landing pages to complete business websites — we've got
            you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="group relative h-full overflow-hidden border-muted transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/3 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <CardHeader className="relative">
                    <motion.div
                      className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-muted transition-all duration-300 group-hover:bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon className="size-7 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                    </motion.div>

                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <motion.div
                        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        initial={false}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight className="size-5 text-primary" />
                      </motion.div>
                    </div>

                    <CardDescription className="mt-2 text-sm font-medium text-primary">
                      {service.price}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.1 + i * 0.1,
                            duration: 0.3,
                          }}
                        >
                          <motion.span
                            className="size-1.5 rounded-full bg-primary/50"
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative number */}
                    <div className="absolute top-4 right-4 font-display text-6xl font-bold text-muted/10 transition-colors duration-300 group-hover:text-primary/10">
                      0{index + 1}
                    </div>
                  </CardContent>

                  {/* Bottom gradient line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-primary/50 to-transparent"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
