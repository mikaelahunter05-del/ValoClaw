import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const entries = [
  { time: '6:45 AM', title: '47 emails handled before your alarm.', desc: 'Urgent items flagged. Routine replies drafted and waiting for one-tap approval. Junk filtered. Your inbox went from 47 to 4.' },
  { time: '7:00 AM', title: 'A morning brief arrives on your phone.', desc: 'Today\u2019s meetings with attendee backgrounds and prep notes. 3 priorities ranked by impact. 1 competitor move you need to know about. 90-second read.' },
  { time: '9:15 AM', title: 'VIP investor emails. Handled in one tap.', desc: 'Your AI drafted a response in your voice, checked calendar availability, and queued a follow-up task. You tapped approve. Total effort: one thumb.' },
  { time: '11:30 AM', title: 'Running late. One text fixes everything.', desc: 'You text \u2018running 10 min late to the Acme call.\u2019 Your AI emails attendees, shifts the calendar, and reschedules the overlap. Done before your next sip of coffee.' },
  { time: '2:00 PM', title: 'A competitor moves. You knew first.', desc: 'Your research agent scans Reddit, X, and industry news 24/7. The briefing hit your Discord channel before their press release went live.' },
  { time: '6:00 PM', title: 'End-of-day digest: you spent 12 minutes on admin today.', desc: '47 emails handled. 3 meetings prepped. 2 research reports. 1 content draft ready. Your AI workforce ran the engine. You steered.' },
  { time: '11:00 PM', title: 'You\u2019re asleep. Your AI isn\u2019t.', desc: 'Monitoring for VIP emails. Holding everything else until morning. No anxiety. No mental checklists. Just rest.' },
]

export default function DreamOutcome() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-bg py-32 md:py-40 lg:py-48 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <SectionLabel>The Light</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-16 tracking-[-0.02em]">
            This Is Tomorrow Morning.
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative">
          <div className="hidden md:block absolute left-[52px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-6">
            {entries.map((e) => (
              <div key={e.time} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0">
                <span className="md:hidden font-mono text-xs text-white/70">{e.time}</span>
                <div className="hidden md:flex items-center shrink-0 w-24">
                  <span className="font-mono text-xs text-white/70 whitespace-nowrap">{e.time}</span>
                </div>
                <div className="hidden md:flex items-center shrink-0 mr-4">
                  <span className="w-2 h-2 bg-border-accent rounded-full" />
                </div>
                <div className="flex-1 relative rounded-[1.25rem] border-[0.75px] border-border p-2">
                  <GlowingEffect spread={30} glow disabled={false} proximity={48} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-5">
                    <h3 className="font-heading font-semibold text-white text-base">{e.title}</h3>
                    <p className="font-body text-sm text-white mt-1 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-xl md:text-2xl font-bold text-white">
            This isn&apos;t a future roadmap. It&apos;s running for our clients right now.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-8">
            <button onClick={scrollToOffer} className="px-6 py-3 border border-white text-white bg-transparent rounded-lg text-sm font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
              See What You Get &rarr;
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
