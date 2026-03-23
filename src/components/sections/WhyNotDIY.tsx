import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const steps = [
  { num: 1, badge: '4 hrs', title: '4 hours watching contradicting YouTube tutorials', detail: 'Half are paid promotions for hosting companies pushing inferior setups. The other half assume you know Docker, Linux, and OAuth. You don\u2019t. That\u2019s not a character flaw.' },
  { num: 2, badge: '6 hrs', title: '2 hours wrestling with installation', detail: 'Terminal commands, environment variables, Docker configs. One wrong character and nothing works. No error message tells you what broke or why.' },
  { num: 3, badge: '9 hrs', title: '3 hours in Google OAuth hell', detail: 'Cloud Console, enabling APIs one by one, OAuth consent screens, credentials, JSON secret files, redirect URIs that throw cryptic errors. This alone makes most people quit.' },
  { num: 4, badge: '10 hrs', title: 'Install a skill from ClawHub. Hope it\u2019s not stealing your data.', detail: 'Security researchers found 300+ malicious skills on ClawHub. Nearly half of all reviewed skills had at least one vulnerability. Your self-install has no audit trail and no sandbox.' },
  { num: 5, badge: '10 hrs + 3 days', title: 'It works! ...for 72 hours.', detail: 'Then tokens expire, an update breaks your config, memory drifts, and your agent forgets everything you taught it. You\u2019re back to YouTube at midnight.' },
  { num: 6, badge: '15+ hrs gone', title: 'Attempt #2, #3, #4...', detail: 'Still no model routing, no sub-agents, no mission control, no security hardening. You have a basic chatbot on a VPS \u2014 not the AI workforce you were promised.' },
]

export default function WhyNotDIY() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <SectionLabel>The Hard Truth</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-16 tracking-[-0.02em]">
            You Could Do This Yourself. Here&apos;s What Happens{' '}
            <span className="text-white/50">in the Dark.</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-5">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-surface border border-border text-white/70 font-mono font-bold text-xs flex items-center justify-center shrink-0">{s.num}</div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
              </div>
              <div className="pb-10 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-heading font-semibold text-white text-base">{s.title}</h3>
                  <span className="font-mono text-xs text-white/70 bg-surface rounded-md px-2 py-0.5 border border-border whitespace-nowrap">{s.badge}</span>
                </div>
                <p className="font-body text-sm text-white leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-12 relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
          <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-8">
            <h3 className="font-heading text-base font-semibold text-white">Your Time Has a Price Tag.</h3>
            <p className="font-body text-sm text-white mt-3 leading-relaxed">
              At even $300/hour for a founder&apos;s time, 15 hours of fumbling in the dark costs $4,500 in opportunity cost alone. And you still won&apos;t have the security hardening, model routing, or multi-agent architecture we deploy in 48 hours.
            </p>
            <p className="text-white text-sm font-medium mt-4">
              Or you hand it to us for $2,795 and wake up with the{' '}<span className="text-valo">lights on</span>.
            </p>
            <button onClick={scrollToOffer} className="mt-8 px-6 py-3 border border-white text-white bg-transparent rounded-lg text-sm font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
              Let Us Build It &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
