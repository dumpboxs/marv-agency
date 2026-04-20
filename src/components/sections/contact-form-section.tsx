import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { CheckCircle, Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const businessTypes = [
  { value: 'small-business', label: 'Small Business' },
  { value: 'school', label: 'School / Education' },
  { value: 'organization', label: 'Organization / NGO' },
  { value: 'startup', label: 'Startup / Early-stage Business' },
  { value: 'other', label: 'Other' },
]

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    businessType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-muted/30 py-24 md:py-36"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute top-1/2 right-0 size-[500px] -translate-y-1/2 rounded-full bg-linear-to-l from-primary/10 to-transparent blur-3xl"
        animate={{
          x: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="mx-auto max-w-xl"
            >
              <Card className="border-green-500/20">
                <CardContent className="pt-6 text-center">
                  <motion.div
                    className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-green-500/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                  >
                    <CheckCircle className="size-10 text-green-500" />
                  </motion.div>

                  <motion.h3
                    className="mb-2 text-2xl font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Message Sent!
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </motion.p>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-sm text-muted-foreground"
                    >
                      <Sparkles className="mx-auto mb-2 size-5 text-primary/50" />
                      Average response time: 2 hours
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="mx-auto max-w-xl"
            >
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
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
                  <span className="text-muted-foreground">Get in Touch</span>
                </motion.div>

                <h2 className="mb-4 text-3xl md:text-4xl">
                  Let's Build Something Together
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your project. We'll respond within 24 hours with
                  a free consultation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                  ease: 'easeOut' as const,
                }}
              >
                <Card className="group border-muted transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader>
                    <CardTitle>Get Your Free Consultation</CardTitle>
                    <CardDescription>
                      No commitment required. Just a friendly conversation about
                      your needs.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="transition-all duration-200 focus:border-primary"
                        />
                      </motion.div>

                      {/* Contact Field */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.35, duration: 0.4 }}
                      >
                        <Label htmlFor="contact">Email or WhatsApp</Label>
                        <Input
                          id="contact"
                          name="contact"
                          type="text"
                          autoComplete="email"
                          placeholder="john@example.com or +1 234 567 890"
                          value={formData.contact}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contact: e.target.value,
                            })
                          }
                          required
                          className="transition-all duration-200 focus:border-primary"
                        />
                      </motion.div>

                      {/* Business Type Field */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.4 }}
                      >
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, businessType: value })
                          }
                        >
                          <SelectTrigger
                            id="businessType"
                            className="transition-all duration-200"
                          >
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>

                      {/* Message Field */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.45, duration: 0.4 }}
                      >
                        <Label htmlFor="message">
                          Tell us about your project
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="I need a website for my bakery that shows our menu and allows online orders..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                          className="transition-all duration-200 focus:border-primary"
                        />
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.4 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <Button
                            type="submit"
                            className="group w-full"
                            size="lg"
                          >
                            <motion.span
                              className="flex items-center justify-center"
                              whileHover={{ x: 3 }}
                            >
                              <Send className="mr-2 size-4 transition-transform group-hover:rotate-12" />
                              Send & Get a Free Consultation
                            </motion.span>
                          </Button>
                        </motion.div>
                      </motion.div>

                      <p className="text-center text-xs text-muted-foreground">
                        We respect your privacy. Your information is never
                        shared.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
