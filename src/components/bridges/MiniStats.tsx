import { motion } from 'framer-motion'

const stats = [
  { number: '24/7', label: 'Always On' },
  { number: '10,000+', label: 'Tool Integrations' },
  { number: '< 48hrs', label: 'To Deployment' },
]

export default function MiniStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="py-10 px-5"
    >
      <div className="flex justify-center gap-8 md:gap-16 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-xl font-bold text-white">{s.number}</div>
            <div className="text-xs text-[#888888] uppercase tracking-wide mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
