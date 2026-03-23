import { motion } from 'framer-motion'
import { Phone, Wrench, Rocket } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const steps = [
  { num: '01', icon: Phone, title: 'Discovery Call', badge: '45 mins', desc: 'We learn your business, map your workflows, and design your deployment. No jargon. No pressure. Just a clear plan.' },
  { num: '02', icon: Wrench, title: 'We Build Everything', badge: '24-48 hours', desc: 'We deploy your instance, program your AI, connect your tools, harden security, build automations, and test. You don\u2019t touch a terminal.' },
  { num: '03', icon: Rocket, title: 'The Lights Come On', badge: 'Same day', desc: 'Open Telegram. Text your AI. It responds. It starts learning your business. We provide 14 days of ValoGuard to perfect everything.' },
]

export default function HowItWorks() {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-it-works" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>The Process</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-16 tracking-[-0.02em]">
            Three Steps. 48 Hours. The Lights Come On.
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] -translate-y-1/2 h-px bg-border" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="relative flex flex-col h-full overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-6 md:p-8 text-center">
                  <span className="absolute top-4 right-4 font-mono text-5xl font-bold leading-none text-white/10 select-none">{s.num}</span>
                  <s.icon className="w-6 h-6 text-white mx-auto mb-4" />
                  <h3 className="font-heading text-base font-semibold text-white">{s.title}</h3>
                  <span className="inline-block mt-2 mb-4 font-mono text-xs text-white/70 bg-elevated rounded-md px-2 py-1 border border-border">{s.badge}</span>
                  <p className="font-body text-sm text-white leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-white mb-6">
            Most clients are live within 48 hours of the discovery call.
          </motion.p>
          <button onClick={scrollToBook} className="px-6 py-3 border border-white text-white bg-transparent rounded-lg text-sm font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
            Book Your Discovery Call &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}
