import { motion } from 'framer-motion'
import {
  Clock,
  Brain,
  Moon,
  DollarSign,
  AlertTriangle,
  TrendingDown,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const pains = [
  {
    icon: Clock,
    title: '3+ hours a day on email, scheduling, and admin.',
    detail:
      'That\u2019s 780 hours a year. You could\u2019ve launched two new products, closed 50 more deals, or actually taken a holiday.',
  },
  {
    icon: Brain,
    title: 'Your strategic brain is being wasted on logistics.',
    detail:
      'Every context switch between inbox and big-picture thinking costs you 23 minutes of deep focus. Multiply that across a day. That\u2019s where your best ideas go to die.',
  },
  {
    icon: Moon,
    title: 'You go to bed running a mental checklist of what slipped.',
    detail:
      'The follow-up you forgot. The email sitting in drafts. The meeting you walked into blind. Every single night, the same quiet dread.',
  },
  {
    icon: DollarSign,
    title: 'Your EA costs $70K+ and still can\u2019t keep up.',
    detail:
      'They call in sick. They quit. They can\u2019t work at 2am when your investor in Singapore emails. And when they leave, your entire operational memory walks out the door.',
  },
  {
    icon: AlertTriangle,
    title: 'You\u2019ve tried AI tools. They forgot you by Tuesday.',
    detail:
      'ChatGPT resets every session. You tried setting up your own AI agent \u2014 spent a weekend watching tutorials, broke the config, gave up. You\u2019re not alone.',
  },
  {
    icon: TrendingDown,
    title: 'Every day without leverage is a day you\u2019re losing ground.',
    detail:
      'The founders winning right now have autonomous AI running their operations 24/7. While you\u2019re manually triaging email, they\u2019re three moves ahead. The gap is widening.',
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
          You Didn&apos;t Start a Company to Drown in Your Inbox.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-sm md:text-base text-white max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          But here you are. The CEO who&apos;s also the executive assistant,
          the project manager, the follow-up machine, and the person who still
          hasn&apos;t replied to that investor from Thursday.
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
            What if you woke up tomorrow and the{' '}
            <span className="text-valo">lights</span> were already on?
          </motion.p>
        </div>
      </div>
    </section>
  )
}
