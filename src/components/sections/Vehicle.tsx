import { motion } from 'framer-motion'
import { X, Minus, Check } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const columns = [
  { badge: 'The Chatbot', header: 'ChatGPT / Claude', Icon: X, iconColor: 'text-white/50', spread: 30, items: ['Forgets you every single session', 'You visit it. It never comes to you.', 'Can only answer questions', 'Zero access to your tools', 'Stops the moment you close the tab'] },
  { badge: 'The Human', header: 'Executive Assistant', Icon: Minus, iconColor: 'text-white/50', spread: 30, items: ['$70K+ before benefits and overhead', 'Works 9-5. Takes sick days.', 'Weeks to train. Months to trust.', "Can't operate 15 tools at once", 'Quits and takes your context with them'] },
  { badge: 'Recommended', header: 'ValoClaw', Icon: Check, iconColor: 'text-valo', recommended: true, spread: 40, items: ['Remembers everything. Gets smarter daily.', 'Lives on your phone. Messages you first.', 'Takes action: email, calendar, research, CRM, content', 'Connects to Gmail, Slack, Notion, Stripe + 10,000 tools', 'Runs 24/7. Never sleeps. Never quits. $0 salary.'] },
]

const row1 = ['Gmail', 'Google Calendar', 'Slack', 'Discord', 'Notion', 'HubSpot', 'Salesforce', 'Stripe', 'Zapier', 'Trello']
const row2 = ['Shopify', 'WhatsApp', 'Telegram', 'Zoom', 'GitHub', 'Google Drive', 'Sheets', 'iMessage', 'Linear', 'Airtable']

function LogoTicker({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-bg to-transparent" />
      <motion.div className="flex gap-4 w-max ticker-track" animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="text-white/60 text-xs font-medium whitespace-nowrap px-3 py-1.5 border border-border rounded-md">{name}</span>
        ))}
      </motion.div>
    </div>
  )
}

const mobileOrder = ['order-last md:order-first', 'order-last md:order-none', 'order-first md:order-last']

export default function Vehicle() {
  return (
    <section id="technology" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>The Technology</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 tracking-[-0.02em]">
            This Isn&apos;t a Chatbot. It&apos;s Your Back Office. Illuminated.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-body text-sm md:text-base text-white max-w-2xl mx-auto mb-16 leading-relaxed">
            OpenClaw is the most powerful open-source AI agent ever built. We configure, deploy, and manage it so it works for you around the clock.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-4">
          {columns.map((col, ci) => (
            <div key={col.header} className={`relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 ${mobileOrder[ci]}`}>
              <GlowingEffect spread={col.spread} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <div className="relative flex flex-col h-full overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-6 md:p-8">
                <span className="inline-flex items-center gap-1.5 text-xs rounded-md px-2 py-1 mb-4 bg-elevated text-white border border-border w-fit">
                  {col.recommended && <span className="w-1.5 h-1.5 rounded-full bg-valo" />}
                  {col.badge}
                </span>
                <h3 className="font-heading text-base font-semibold text-white mb-6">{col.header}</h3>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white leading-relaxed">
                      <col.Icon className={`w-4 h-4 shrink-0 mt-0.5 ${col.iconColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 space-y-3">
          <LogoTicker items={row1} direction="left" />
          <LogoTicker items={row2} direction="right" />
          <p className="text-xs text-white/60 text-center mt-4">Connects to 10,000+ tools via secure Zapier MCP integration.</p>
        </div>
      </div>
    </section>
  )
}
