import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const HERO_VIDEO = '/video/Hero-Video.mp4'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay },
})

function TypewriterHighlight({ text, highlight, highlightClass, delay = 0, duration = 3.5 }: { text: string; highlight: string; highlightClass: string; delay?: number; duration?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    const interval = (duration * 1000) / text.length
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [started, text, duration])

  const idx = displayed.indexOf(highlight)
  const typing = started && displayed.length < text.length

  return (
    <>
      {idx >= 0 ? (
        <>
          {displayed.slice(0, idx)}
          <span className={highlightClass}>{displayed.slice(idx, idx + highlight.length)}</span>
          {displayed.slice(idx + highlight.length)}
        </>
      ) : (
        displayed
      )}
      {typing && <span className="inline-block w-[2px] h-[1em] bg-valo ml-0.5 align-middle animate-pulse" />}
    </>
  )
}

function Typewriter({ text, delay = 0, duration = 3.5 }: { text: string; delay?: number; duration?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    const interval = (duration * 1000) / text.length
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [started, text, duration])

  return (
    <>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-valo ml-0.5 align-middle animate-pulse" />
      )}
    </>
  )
}

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
          <motion.p {...fade(0.2)} className="text-xs tracking-[0.3em] uppercase text-white font-medium font-body mb-6">
            For Founders &amp; CEOs Who Refuse to Stay in the Dark
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-[-0.02em]">
              <TypewriterHighlight text="Bring Light to the Chaos" highlight="Light" highlightClass="text-valo" delay={0.5} duration={1.8} />
            </h1>
            <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-white mt-3 tracking-[-0.01em]">
              <Typewriter text="Your AI Workforce, Deployed in 48 Hours." delay={2.5} duration={1.7} />
            </p>
          </motion.div>

          <motion.p {...fade(4.5)} className="font-body text-sm md:text-base text-white font-bold max-w-2xl mt-8 leading-relaxed">
            White-glove OpenClaw deployment for founders and exec teams.
            We handle the install, security, integrations, and ongoing
            care. You just text your AI and run your business.
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <motion.button {...fade(5.0)} whileTap={{ scale: 0.97 }} onClick={scrollToBook} className="w-full max-w-sm sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors duration-200">
            Book Your Free Discovery Call &rarr;
          </motion.button>
          <motion.p {...fade(5.2)} className="mt-6 text-xs text-white/60">
            No technical knowledge required &middot; Live same day &middot; 100% satisfaction guarantee
          </motion.p>
        </div>
      </div>
    </section>
  )
}
