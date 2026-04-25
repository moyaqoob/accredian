'use client'
import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix: string
  label: string
  description: string
  decimal?: boolean
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Enterprise Clients', description: 'Global companies trust Accredian' },
  { value: 1.2, suffix: 'M+', label: 'Hours Learned', description: 'Cumulative learning hours delivered', decimal: true },
  { value: 94, suffix: '%', label: 'Completion Rate', description: 'Industry-leading program completion' },
  { value: 48, suffix: 'hrs', label: 'Avg Time to ROI', description: 'From enrollment to measurable outcome' },
]

type CountUpProps = {
  target: number
  suffix: string
  decimal?: boolean
  isVisible: boolean
}

function CountUp({ target, suffix, decimal, isVisible }: CountUpProps) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible, target])

  const display = decimal ? count.toFixed(1) : Math.floor(count)
  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-slate-950 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-slate-950 to-violet-950/30 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">By The Numbers</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Results that speak
            <br />
            <span className="text-slate-400 italic font-normal">for themselves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-800">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-slate-950 p-8 lg:p-10 group hover:bg-slate-900 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/50 transition-all duration-500"></div>

              <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} isVisible={visible} />
              </div>
              <p className="text-base font-semibold text-slate-200 mb-1">{stat.label}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
