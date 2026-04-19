import { Rocket, Wallet, Heart, MessageCircle } from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    description: 'Most projects launch within 2-3 weeks. No months of waiting.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'Clear quotes upfront. No hidden fees or surprise charges.',
  },
  {
    icon: Heart,
    title: 'Post-Launch Support',
    description:
      "We don't disappear after launch. Count on us for updates and help.",
  },
  {
    icon: MessageCircle,
    title: 'No Tech Jargon',
    description:
      'Plain language always. We explain everything in terms you understand.',
  },
]

export function WhyMarvSection() {
  return (
    <section id="why-marv" className="w-full bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Why Work With Marv?</h2>
          <p className="text-lg text-muted-foreground">
            We built Marv Agency specifically for businesses like yours.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border bg-background">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
