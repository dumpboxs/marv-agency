import { useState } from 'react'
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
import { CheckCircle, Send } from 'lucide-react'

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
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

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <Card className="mx-auto max-w-xl border-green-500/20">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle className="size-8 text-green-500" />
              </div>
              <h3 className="mb-2 text-2xl">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We\'ll get back to you within 24
                hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="w-full bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">
              Let\'s Build Something Together
            </h2>
            <p className="text-muted-foreground">
              Tell us about your project. We\'ll respond within 24 hours with a
              free consultation.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Get Your Free Consultation</CardTitle>
              <CardDescription>
                No commitment required. Just a friendly conversation about your
                needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
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
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Email or WhatsApp</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    autoComplete="email"
                    placeholder="john@example.com or +1 234 567 890"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, businessType: value })
                    }
                  >
                    <SelectTrigger id="businessType">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small-business">
                        Small Business
                      </SelectItem>
                      <SelectItem value="school">School / Education</SelectItem>
                      <SelectItem value="organization">
                        Organization / NGO
                      </SelectItem>
                      <SelectItem value="startup">
                        Startup / Early-stage Business
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    placeholder="I need a website for my bakery that shows our menu and allows online orders..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 size-4" />
                  Send & Get a Free Consultation
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. Your information is never shared.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
