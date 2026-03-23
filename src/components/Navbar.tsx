import React from 'react'
import { Button, buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Technology', href: '#technology' },
  { label: 'Pricing', href: '#offer' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToBook = () => {
    setOpen(false)
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300',
        scrolled && !open
          ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : '',
        open ? 'bg-[#0a0a0a]' : '',
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full max-w-5xl mx-auto items-center justify-between px-5 transition-all duration-300',
          scrolled ? 'md:px-4' : '',
        )}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-heading text-sm font-bold tracking-tight shrink-0"
        >
          <span className="text-white">Valo</span>
          <span className="text-valo/80">Claw</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="ml-2"
            onClick={scrollToBook}
          >
            Book Call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden bg-[#0a0a0a] border-t border-[#222222] md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex h-full w-full flex-col justify-between gap-y-2 p-5">
          <div className="grid gap-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({
                  variant: 'ghost',
                  className: 'justify-start text-base h-12',
                })}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pb-8">
            <Button className="w-full" onClick={scrollToBook}>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
