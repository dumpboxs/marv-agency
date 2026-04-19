import { AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ProblemSolutionSection() {
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

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">
            The Challenge & Our Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            Most small businesses struggle to get online. We make it simple.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Problem Card */}
          <Card className="border-destructive/20">
            <CardContent className="pt-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10">
                  <AlertTriangle className="size-5 text-destructive" />
                </div>
                <h3 className="text-xl">The Problem</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-destructive">×</span>
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="size-5 text-primary" />
                </div>
                <h3 className="text-xl">Marv Agency</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-primary">✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
