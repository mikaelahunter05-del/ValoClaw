import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'solid' | 'ghost'
  onClick?: () => void
  className?: string
  full?: boolean
}

export default function Button({
  children,
  variant = 'ghost',
  onClick,
  className = '',
  full = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer px-6 py-3'
  const variants = {
    solid: 'bg-primary text-bg hover:bg-white',
    ghost: 'border border-primary text-primary bg-transparent hover:bg-primary hover:text-bg',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${full ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
