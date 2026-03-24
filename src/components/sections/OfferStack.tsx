import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const valoCoreItems = [
  'Discovery call to map your workflows and goals',
  'Dedicated cloud server provisioned and deployed',
  'Full personality and business context programming',
  'Security hardening (sandbox, firewall, spend limits, kill switch)',
  'Optimised AI model configuration. Your AI runs for $20-55/month, not $200-500/month like most setups',
  'Telegram setup. Text your AI like a personal assistant',
  'Google Workspace integration (Gmail, Calendar, Drive)',
  '1 custom automation (morning brief, email alerts, or your choice)',
  '14-day ValoGuard support',
  'Complete handover documentation. You own everything',
]

const valoPrimeItems = [
  'Full operational audit. We find every hour you\'re losing',
  'Custom AI workforce. Agents built for your specific roles',
  'Dedicated automations. Morning briefs, email triage, follow-ups, reports',
  'Deep integrations. Your CRM, your tools, your stack',
  'Multi-agent orchestration. Your AI team works in parallel',
  'ValoGuard included. 30 days of managed optimisation',
  'Complete handover. You own every agent, every workflow, everything',
]

export default function OfferStack() {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCard = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id="offer" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>Your Deployment</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 tracking-[-0.02em]">
            Everything You Need. Nothing You Don&apos;t.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-body text-sm md:text-base text-white max-w-2xl mx-auto mb-8 leading-relaxed">
            One flat fee. No subscriptions. No hidden costs. You own everything we build.
          </motion.p>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-12">
            <button
              onClick={() => scrollToCard('valocore-card')}
              className="text-xs uppercase tracking-widest text-white border-b-2 border-valo pb-2 cursor-pointer transition-colors duration-200"
            >
              One Agent
            </button>
            <button
              onClick={() => scrollToCard('valoprime-card')}
              className="text-xs uppercase tracking-widest text-[#888888] hover:text-white pb-2 border-b-2 border-transparent hover:border-[#888888] cursor-pointer transition-colors duration-200"
            >
              Full Infrastructure
            </button>
          </div>
        </div>

        {/* ValoCore Card */}
        <motion.div id="valocore-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
          <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-8 md:p-10">
            <span className="text-xs uppercase tracking-widest text-white/70">ValoCore</span>
            <p className="font-body text-sm text-white mt-3">Your AI assistant, deployed, secured, and running in 48 hours.</p>
            <div className="mt-6">
              <span className="font-mono text-4xl font-bold text-white">$1,795</span>
              <span className="text-xs text-white/60 ml-2">one-time setup</span>
            </div>

            <div className="mt-8 space-y-3">
              {valoCoreItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-valo shrink-0 mt-0.5" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={scrollToBook} className="w-full mt-8 py-3.5 bg-white text-black rounded-lg text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors duration-200">
              Book Your Discovery Call &rarr;
            </button>
          </div>
        </motion.div>

        {/* ValoPrime Card */}
        <motion.div id="valoprime-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto mt-8 relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
          <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border border-t-2 border-t-valo bg-surface p-8 md:p-12">
            <span className="text-xs uppercase tracking-widest text-valo">ValoPrime</span>
            <p className="font-body text-base md:text-lg text-[#b0b0b0] mt-2">
              Your entire operation, audited, architected, and automated.
            </p>
            <p className="font-body text-sm text-[#b0b0b0] leading-relaxed mt-4 max-w-lg mx-auto text-center">
              We don&apos;t just deploy an assistant. We audit every hour you&apos;re wasting,
              map every workflow that&apos;s bleeding time, and build the AI infrastructure
              to run your operation. Custom agents, custom automations, custom integrations,
              architected around how your business actually works.
            </p>

            <div className="mt-8 text-center">
              <span className="font-heading text-4xl md:text-5xl font-bold text-white">From $4,000+</span>
              <p className="text-sm text-[#888888] mt-1">scoped to your operation</p>
            </div>

            <div className="mt-8 space-y-3">
              {valoPrimeItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-valo shrink-0 mt-0.5" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={scrollToBook} className="w-full mt-8 py-3.5 bg-white text-black rounded-lg text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors duration-200">
              Apply for ValoPrime &rarr;
            </button>
            <p className="text-xs text-[#888888] mt-4 italic text-center">
              Starts with a free discovery call. We&apos;ll scope your build and quote a fixed price. No surprises.
            </p>
          </div>
        </motion.div>

        {/* Trust line */}
        <p className="mt-16 text-xs text-[#888888] leading-relaxed text-center max-w-xl mx-auto">
          Both plans include full handover. You own your server, your agents, your data. No lock-in. No recurring fees unless you choose ValoGuard.
        </p>

        {/* Guarantee */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-16 max-w-2xl mx-auto relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} variant="white" />
          <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-8 text-center">
            <Shield className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="font-heading text-base font-semibold text-white">100% Satisfaction Guarantee</h3>
            <p className="font-body text-sm text-white mt-3 max-w-lg mx-auto leading-relaxed">
              If you&apos;re not blown away by your ValoClaw deployment, we refund every penny. No questions. No fine print. No awkward conversation. We build things we stand behind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
