import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222]' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#" className="font-heading text-sm font-bold tracking-tight">
          <span className="text-white">Valo</span>
          <span className="text-valo/80">Claw</span>
        </a>
        <button onClick={scrollToBook} className="text-xs border border-[#444444] text-white px-4 py-2 rounded-md hover:border-white hover:text-white transition-all duration-200 cursor-pointer">
          <span className="hidden sm:inline">Book a Discovery Call</span>
          <span className="sm:hidden">Book Call</span>
        </button>
      </div>
    </nav>
  )
}
