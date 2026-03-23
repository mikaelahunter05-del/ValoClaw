import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface CounterStatProps {
  end: number
  prefix?: string
  suffix?: string
  label: string
}

export default function CounterStat({ end, prefix = '', suffix = '', label }: CounterStatProps) {
  const { ref, isInView } = useScrollAnimation(0.5)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1000
    const step = Math.max(1, Math.ceil(end / (duration / 16)))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else { setCount(start) }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-mono font-bold text-white">{prefix}{count}{suffix}</div>
      <div className="text-xs uppercase tracking-wide text-white/60 mt-2">{label}</div>
    </div>
  )
}
