import { motion } from 'framer-motion'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`inline-block text-xs uppercase tracking-[0.25em] font-medium font-body text-white/60 mb-6 ${className}`}
    >
      {children}
    </motion.span>
  )
}
