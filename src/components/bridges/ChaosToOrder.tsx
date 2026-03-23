import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ChaosToOrder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-10 px-5">
      <div className="max-w-2xl mx-auto relative h-[2px] overflow-hidden">
        {/* Jagged red left side */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 2"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,1 L50,0.2 L80,1.8 L120,0.5 L160,1.5 L200,0.8 L240,1.2 L280,0.3 L320,1.7 L360,0.6 L400,1 L440,1 L480,1 L520,1 L560,1 L600,1 L640,1 L680,1 L720,1 L760,1 L800,1"
            stroke="#ef4444"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 0.5, opacity: 0.4 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </svg>
        {/* Clean cyan right side */}
        <motion.div
          className="absolute top-0 right-0 h-full bg-valo"
          style={{ boxShadow: '0 0 8px rgba(0,212,255,0.3)' }}
          initial={{ width: '0%' }}
          animate={inView ? { width: '50%' } : {}}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
