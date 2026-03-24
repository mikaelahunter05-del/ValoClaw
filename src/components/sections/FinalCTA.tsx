import { motion } from 'framer-motion'
import { InlineWidget } from 'react-calendly'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function FinalCTA() {
  return (
    <>
      <section id="book" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Your Move</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]">
            Your Practice Is Ready for the <span className="text-valo">Light</span>.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-body text-sm md:text-base text-white max-w-2xl mx-auto mt-6 mb-12 leading-relaxed">
            45 minutes to map out exactly how an AI practice manager would transform your coaching operations. No pitch. No pressure. Just clarity on what 15-25 hours a week of reclaimed time looks like for your practice.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 max-w-2xl mx-auto">
            <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
            <div className="relative overflow-hidden rounded-xl">
              <InlineWidget
                url="https://calendly.com/kyle-holland-vigilamed/45min"
                styles={{ height: '700px', minWidth: '100%' }}
                pageSettings={{ backgroundColor: '0a0a0a', hideEventTypeDetails: false, hideLandingPageDetails: false, primaryColor: '00D4FF', textColor: 'ffffff' }}
              />
            </div>
          </motion.div>

          <p className="mt-8 text-xs text-white/60">
            Private and secure &middot; Free 45-minute call &middot; 100% satisfaction guarantee &middot; All time zones
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-5 text-center bg-bg">
        <span className="font-heading text-sm font-bold tracking-tight">
          <span className="text-white">Valo</span>
          <span className="text-valo/80">Claw</span>
        </span>
        <p className="text-xs text-white/60 mt-2">&copy; 2026 Drezion. All rights reserved.</p>
        <p className="text-xs text-white/60 mt-1">
          <a href="#" className="hover:underline">Privacy Policy</a>{' \u00B7 '}<a href="#" className="hover:underline">Terms</a>
        </p>
        <p className="text-xs text-white/60 mt-4">Accepting new coaching clients</p>
      </footer>
    </>
  )
}
