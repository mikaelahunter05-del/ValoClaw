import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={`bg-surface border border-border rounded-xl p-6 md:p-8 transition-colors duration-200 hover:border-border-hover ${className}`}
    >
      {children}
    </motion.div>
  )
}
