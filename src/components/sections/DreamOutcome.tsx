import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const entries = [
  { time: '6:45 AM', title: '23 emails handled before your first cup of coffee.', desc: 'Client scheduling requests confirmed. Referral introductions flagged. Session reminders sent. Admin noise filtered. Your inbox went from 23 to 3, and those 3 actually matter.' },
  { time: '7:00 AM', title: 'A morning brief arrives on your phone.', desc: 'Today\'s coaching sessions with client backgrounds and progress notes. 2 proposals awaiting follow-up. 1 referral that came in overnight. A competitor just launched a new group programme. You know before they announce it. 90-second read.' },
  { time: '9:00 AM', title: 'Your first session starts. You\'re already prepped.', desc: 'Your AI pulled the client\'s last session notes, their action items, their LinkedIn activity since your last call, and their company\'s recent news. You walk in knowing more about their week than they expect. That\'s the prep that turns good coaching into unforgettable coaching.' },
  { time: '11:30 AM', title: 'A prospect who ghosted 9 days ago just replied.', desc: 'Because your AI sent follow-up number four, a case study about a similar executive who doubled their leadership pipeline. You didn\'t write it. You didn\'t remember to send it. Your AI did. The prospect wants to book a discovery call.' },
  { time: '2:00 PM', title: 'Session recap done in 90 seconds.', desc: 'Your AI captured the key themes, decisions, and action items from the session transcript. You reviewed, tweaked one line, and hit send. Your client received a polished summary with their next steps before they got back to their desk. Last month that took you 35 minutes per session.' },
  { time: '6:00 PM', title: 'End-of-day digest: you spent 14 minutes on admin today.', desc: '23 emails handled. 4 sessions prepped. 2 recaps sent. 1 proposal drafted. 1 ghosted prospect re-engaged. Your AI practice manager ran the engine. You coached.' },
  { time: '11:00 PM', title: 'You\'re asleep. Your AI isn\'t.', desc: 'Monitoring for urgent client emails. Holding everything else until morning. No mental checklist of who you forgot to follow up with. No Sunday-night dread about Monday\'s prep. Just rest.' },
]

export default function DreamOutcome() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
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

        <div className="mt-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-xl md:text-2xl font-bold text-white">
            This isn&apos;t a future roadmap. It&apos;s running for our coaching clients right now.
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
