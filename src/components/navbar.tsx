import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Navbar() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-normal tracking-tight">
            Marv Agency
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#services"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </a>
            <a
              href="#why-marv"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Why Marv
            </a>
          </nav>
          <Button onClick={scrollToContact}>Get Free Consultation</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="mt-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                <a
                  href="#services"
                  className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  Portfolio
                </a>
                <a
                  href="#why-marv"
                  className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  Why Marv
                </a>
              </nav>
              <Button onClick={scrollToContact} className="w-full">
                Get Free Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
