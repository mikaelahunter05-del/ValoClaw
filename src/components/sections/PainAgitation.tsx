import { motion } from 'framer-motion'
import {
  Clock,
  Brain,
  Megaphone,
  MailX,
  UserX,
  AlertTriangle,
  TrendingDown,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const pains = [
  {
    icon: Clock,
    title: '30-45 minutes of admin wrapped around every single session.',
    detail:
      'That\'s 15-30 hours a month on notes, follow-ups, action plans, and prep. Not coaching. Not selling. Not thinking. Just admin that eats your calendar alive.',
  },
  {
    icon: Brain,
    title: 'You have 12-13 clients. You should have 20.',
    detail:
      'ICF data shows the average coach works with 12-13 active clients. Not because demand isn\'t there, because 64% of coaches say client acquisition is their number one challenge. Your pipeline isn\'t cold. It\'s unworked.',
  },
  {
    icon: Megaphone,
    title: 'You post on LinkedIn once a week, maybe.',
    detail:
      'Only 1% of LinkedIn users post weekly. You know content drives inbound. You know coaches who post 3-5 times a week get 45-67% more engagement. But between session prep and email, who has the time?',
  },
  {
    icon: MailX,
    title: '80% of your deals need 5+ follow-ups. You send one.',
    detail:
      'Sales research is brutal: 44% of professionals stop after a single follow-up. Meanwhile, your best-fit prospects are sitting in your inbox waiting for touch number three, four, five. They\'re not saying no. They\'re being forgotten.',
  },
  {
    icon: UserX,
    title: 'Your VA costs $4,000-$6,500/month and still can\'t prep a session brief.',
    detail:
      'They handle scheduling. Maybe invoicing. But they can\'t research a new client\'s LinkedIn at 11pm, draft a proposal in your voice, or monitor your competitors while you sleep. And when they quit, your entire operational memory walks out the door.',
  },
  {
    icon: AlertTriangle,
    title: 'You\'ve tried AI tools. They forgot your client roster by Wednesday.',
    detail:
      'ChatGPT resets every session. You spent a weekend watching tutorials about building your own AI agent. Broke the config. Gave up. You\'re not alone, and it\'s not your fault.',
  },
  {
    icon: TrendingDown,
    title: 'Every week without systems is a week you\'re leaking revenue.',
    detail:
      'The coaches winning right now have AI handling their admin, their follow-ups, their content, and their pipeline, 24/7. While you\'re manually typing session recaps, they\'re closing their next $15,000 engagement. The gap is widening.',
  },
]

export default function PainAgitation() {
  return (
    <section id="problem" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>The Darkness</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl md:text-3xl font-bold text-white mb-8 tracking-[-0.02em]"
        >
          You Didn&apos;t Become a Coach to Drown in Admin.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-sm md:text-base text-white max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          But here you are. The executive coach who&apos;s also the appointment
          setter, the content writer, the invoice chaser, and the person who
          still hasn&apos;t sent that session recap from Tuesday.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {pains.map((p) => (
            <div
              key={p.title}
              className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3"
            >
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <div className="relative flex flex-col h-full overflow-hidden rounded-xl border-[0.75px] border-border bg-surface p-6 md:p-8">
                <p.icon className="w-6 h-6 text-white mb-4" />
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-white leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-body text-sm text-white italic"
          >
            This isn&apos;t a discipline problem. It&apos;s an infrastructure
            problem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-heading text-xl md:text-2xl font-bold mt-6 text-white"
          >
            What if you woke up tomorrow and your{' '}
            <span className="text-valo">practice</span> was already running?
          </motion.p>
        </div>
      </div>
    </section>
  )
}
