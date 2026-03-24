import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import AccordionItem from '@/components/ui/AccordionItem'

const faqs = [
  { question: 'Do I need any technical skills?', answer: 'None. Zero. We handle the entire technical deployment. You interact with your AI by texting it on Telegram, the same way you\'d message a colleague. If you can send a text, you can use ValoClaw.' },
  { question: 'How is this different from ChatGPT?', answer: 'ChatGPT forgets you every session. It can\'t access your email, your calendar, or your client notes. It can\'t send follow-ups, prep your sessions, or monitor your pipeline. ValoClaw runs 24/7 on your own private server, connected to your actual tools, with permanent memory of your clients and your coaching practice. It doesn\'t wait for you to ask, it acts.' },
  { question: 'My clients are senior executives. Is their data secure?', answer: 'Absolutely. We security-harden every deployment with sandbox isolation, firewall configuration, encrypted secrets, and gateway lockdown. Your data lives on your own dedicated server, not on a shared platform. You control access. We build it to the same standard we use for regulated medical device manufacturers at our sister consultancy.' },
  { question: 'What does AI cost me monthly after setup?', answer: 'Your AI model runs through OpenRouter at approximately $20-55 per month depending on usage, plus your cloud server at $7-10 per month. Total ongoing cost is typically $27-65/month. Compare that to a VA at $4,000-$6,500/month or an appointment setter at $4,000-$6,500/month.' },
  { question: 'I already have systems. CRM, Calendly, Zoom. Will this integrate?', answer: 'Yes. We connect to HubSpot, Salesforce, Calendly, Zoom, Google Workspace, Stripe, Slack, Notion, and 10,000+ other tools via secure Zapier MCP integration. Your AI works inside your existing stack. We don\'t replace your tools, we connect them.' },
  { question: 'Can this actually replace my VA or appointment setter?', answer: 'For many coaching practices, yes. ValoClaw handles email triage, session prep, client follow-ups, scheduling coordination, and content drafting, the core tasks most coaches hire VAs for. Where a VA costs $4,000-$6,500/month and works 9-5, your AI runs 24/7 at a fraction of the cost. Coaches using our system typically delay or avoid $7,500-$12,000/month in headcount.' },
  { question: 'I\'m worried this will feel impersonal to my clients.', answer: 'Your AI never speaks to your clients directly unless you want it to. It drafts messages in your voice for your approval. It prepares your session briefs so you walk in more prepared, not less personal. The result is actually more personalised service, because you have time to focus on the coaching relationship instead of the admin around it.' },
  { question: 'What if something breaks?', answer: 'Every deployment includes 14 days of ValoGuard, priority support where we tune, troubleshoot, and optimise your system. After that, you can continue ValoGuard on a monthly basis or self-manage. Your AI\'s brain is backed up nightly to a private cloud repository, so even in the worst case, we restore everything in minutes.' },
  { question: 'How fast can I be up and running?', answer: 'Most coaching clients are fully deployed within 48 hours of the discovery call. Some are live same day. You\'ll receive your first automated morning brief the morning after deployment.' },
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
