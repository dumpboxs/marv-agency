import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const portfolioItems = [
  {
    title: 'Local Bakery Website',
    category: 'Small Business',
    description:
      'A warm, inviting website showcasing daily specials and allowing online orders.',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Private School Portal',
    category: 'Education',
    description:
      'Complete school website with admissions info, staff profiles, and parent portal.',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Consulting Firm Landing Page',
    category: 'Professional Services',
    description:
      'High-converting landing page that increased lead generation by 200%.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
]

const testimonials = [
  {
    quote:
      'Marv made our first website feel easy. They explained everything clearly and delivered faster than expected. Highly recommended!',
    author: 'Sarah Johnson',
    role: 'Owner, Artisan Bakery',
  },
  {
    quote:
      "Professional, fast, and actually affordable. Our school's website has never looked better. Parents love the new portal.",
    author: 'Michael Chen',
    role: 'Principal, Oakridge Academy',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses like yours.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="group overflow-hidden">
              <div
                className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="mx-auto mb-2 h-16 w-24 rounded bg-background/50" />
                  <div className="mx-auto h-2 w-16 rounded bg-background/30" />
                </div>
              </div>
              <CardHeader>
                <div className="mb-1 text-xs tracking-wider text-muted-foreground uppercase">
                  {item.category}
                </div>
                <h3 className="text-lg">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-2xl">What Our Clients Say</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-muted/50">
                <CardContent className="pt-6">
                  <Quote className="mb-4 size-8 text-primary/50" />
                  <p className="mb-6 text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
