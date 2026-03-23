import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const valueItems = [
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

export default function OfferStack() {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="offer" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>Your Deployment</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 tracking-[-0.02em]">
            Everything You Need. Nothing You Don&apos;t.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-body text-sm md:text-base text-white max-w-2xl mx-auto mb-16 leading-relaxed">
            One flat fee. No subscriptions. No hidden costs. You own everything we build.
          </motion.p>
        </div>

        {/* Main pricing card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
          <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-8 md:p-10">
            <span className="text-xs uppercase tracking-widest text-white/70">ValoCore</span>
            <p className="font-body text-sm text-white mt-3">Your AI assistant, deployed, secured, and running in 48 hours.</p>
            <div className="mt-6">
              <span className="font-mono text-4xl font-bold text-white">$2,795</span>
              <span className="text-xs text-white/60 ml-2">one-time setup</span>
            </div>

            <div className="mt-8 space-y-3">
              {valueItems.map((item) => (
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

        {/* Beyond ValoCore */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest text-[#999999]">
            &mdash; Beyond ValoCore
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-6">
            Need More Than an Assistant?
          </h3>
          <p className="font-body text-sm md:text-base text-[#b0b0b0] mt-4 leading-relaxed">
            ValoPrime is our bespoke engagement for founders who want more than
            a setup. We audit your entire operation, identify every hour
            you&apos;re wasting, and build the AI infrastructure to get it back.
            Custom agents, custom workflows, custom integrations, architected
            around how your business actually runs. Apply on your discovery call.
          </p>
          <p className="text-xs text-[#888888] mt-6 italic">
            Limited availability. Pricing based on scope.
          </p>
        </motion.div>

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
