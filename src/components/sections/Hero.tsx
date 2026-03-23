import { motion } from 'framer-motion'

const HERO_VIDEO = '/video/Hero-Video.mp4'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video src={HERO_VIDEO} autoPlay muted loop playsInline poster="/hero-poster.jpg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 flex flex-col items-center justify-between text-center min-h-screen px-5 pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="flex flex-col items-center">
          <motion.p {...fade(0.2)} className="text-xs tracking-[0.3em] uppercase text-white/70 font-medium font-body mb-6">
            For Founders &amp; CEOs Who Refuse to Stay in the Dark
          </motion.p>
          <motion.h1 {...fade(0.4)} className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-[-0.02em]">
            Bring <span className="text-valo">Light</span> to the Chaos
          </motion.h1>
          <motion.p {...fade(0.6)} className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-white/70 mt-3 tracking-[-0.01em]">
            Your AI Workforce, Deployed in 48 Hours.
          </motion.p>
          <motion.p {...fade(0.8)} className="font-body text-sm md:text-base text-white/80 max-w-2xl mt-8 leading-relaxed">
            We build, harden, and manage autonomous AI agents that run
            your business 24/7 — you don&apos;t touch a terminal, you text
            your AI and it handles the rest.
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <motion.button {...fade(1.0)} whileTap={{ scale: 0.97 }} onClick={scrollToBook} className="w-full max-w-sm sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors duration-200">
            Book Your Free Discovery Call &rarr;
          </motion.button>
          <motion.p {...fade(1.2)} className="mt-6 text-xs text-white/60">
            No technical knowledge required &middot; Live same day &middot; 100% satisfaction guarantee
          </motion.p>
        </div>
      </div>
    </section>
  )
}
