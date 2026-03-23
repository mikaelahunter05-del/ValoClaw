import { motion } from 'framer-motion'

export default function PullQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="py-10 px-5"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="h-12 w-px bg-valo mx-auto mb-6" />
        <p className="text-lg md:text-xl text-[#b0b0b0] italic leading-relaxed">
          Every founder who&apos;s winning right now has this infrastructure.
          The question is whether you build it yourself or let us handle it.
        </p>
      </div>
    </motion.div>
  )
}
