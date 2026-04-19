import { Globe, Building2, GraduationCap } from 'lucide-react'
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
  },
  {
    icon: Building2,
    title: 'Company Profiles',
    description:
      'Professional multi-page websites that showcase your business, team, and services. Build trust and credibility online.',
    price: 'Starting from $1,499',
  },
  {
    icon: GraduationCap,
    title: 'School & Institution',
    description:
      'Complete websites for schools and organizations. Include admissions info, staff profiles, and communication portals.',
    price: 'Starting from $2,499',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">What We Build</h2>
          <p className="text-lg text-muted-foreground">
            From simple landing pages to complete business websites — we\'ve got
            you covered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden"
              >
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10">
                    <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
