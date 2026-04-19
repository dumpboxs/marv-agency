import { Mail, Camera } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <span className="text-xl">Marv Agency</span>
            <p className="text-sm text-muted-foreground">
              Web development for small businesses, schools, and organizations.
              Professional, affordable, and hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="#services"
                className="transition-colors hover:text-foreground"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="transition-colors hover:text-foreground"
              >
                Portfolio
              </a>
              <a
                href="#why-marv"
                className="transition-colors hover:text-foreground"
              >
                Why Marv
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                WhatsApp: +1 (234) 567-890
              </a>
              <a
                href="mailto:hello@marv.agency"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                hello@marv.agency
              </a>
              <a
                href="https://instagram.com/marvagency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Camera className="size-4" />
                @marvagency
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Marv Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
