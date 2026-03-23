import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import AccordionItem from '@/components/ui/AccordionItem'

const faqs = [
  { question: 'Do I need any technical skills?', answer: 'None. You\u2019ll never see a terminal or write a line of code. After setup, you talk to your AI through Telegram \u2014 exactly like texting a human assistant.' },
  { question: 'How is this different from ChatGPT?', answer: 'ChatGPT is a chatbot you visit that forgets you every session. We deploy an autonomous agent on its own server that runs 24/7, connects to your email, calendar, and CRM, and takes action without you asking. One is a search engine. The other is an employee.' },
  { question: 'Is it secure?', answer: 'Security is the reason we exist. Docker sandboxing, API spend limits, behavioral approval gates \u2014 your AI asks before sending emails or deleting anything \u2014 and an instant kill switch to revoke any integration. Your bot never touches raw credentials.' },
  { question: 'What will AI cost me monthly after setup?', answer: 'With our smart model routing, most clients spend $60-150/month. Without routing, the same usage runs $200-500/month. The routing we configure saves thousands annually.' },
  { question: 'What if I already have OpenClaw running?', answer: 'Perfect. Many clients come with working installs that have security gaps and basic configs. We audit, harden, optimize, and upgrade to production-grade. Same pricing.' },
  { question: 'What if something breaks?', answer: 'Daily auto-backups and snapshots. We can roll back in minutes. During your 14-day ValoGuard period, we handle everything. Monthly ValoGuard keeps it running after that.' },
  { question: 'Can this replace my executive assistant?', answer: 'It handles 70-80% of EA work \u2014 email triage, scheduling, research, meeting prep, follow-ups. The 20% that needs human judgment still needs a person. Most clients keep a part-time EA and let ValoClaw handle the rest.' },
  { question: 'What if I\u2019m not happy?', answer: 'Full refund. No questions. No fine print. We\u2019ve never had to use it.' },
  { question: 'How fast can I be up and running?', answer: '48 hours from your discovery call. You\u2019re chatting with your AI the same day we deploy.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <SectionLabel>Questions</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-white mb-12 tracking-[-0.02em]">
            Everything You&apos;re Wondering.
          </motion.h2>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          {faqs.map((faq) => (<AccordionItem key={faq.question} {...faq} />))}
        </motion.div>
      </div>
    </section>
  )
}
