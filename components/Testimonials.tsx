'use client'
import { useEffect, useRef, useState } from 'react'

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  color: string
  metric: string
  metricLabel: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We onboarded 400 engineers into our data stack in under 90 days. Accredian's cohort model meant nobody fell behind, and the completion rate was genuinely shocking.",
    name: 'Ravi Shankar',
    role: 'VP of Engineering',
    company: 'Infosys',
    avatar: 'RS',
    color: 'from-brand-500 to-cyan-500',
    metric: '94% completion',
    metricLabel: 'across 400 learners',
  },
  {
    quote:
      'Other platforms give you a course catalog and wish you luck. Accredian gave us a customer success manager, custom program tracks, and a dashboard our CLO actually uses.',
    name: 'Meera Iyer',
    role: 'Chief Learning Officer',
    company: 'Wipro',
    avatar: 'MI',
    color: 'from-violet-500 to-purple-500',
    metric: '3x faster',
    metricLabel: 'skill validation cycles',
  },
  {
    quote:
      'The IIT-backed certification moved the needle for our teams. Employees are actively requesting to be enrolled — that never happened with our old LMS.',
    name: 'Arjun Kapoor',
    role: 'Head of Talent',
    company: 'HCL Technologies',
    avatar: 'AK',
    color: 'from-emerald-500 to-teal-500',
    metric: '82 NPS',
    metricLabel: 'employee satisfaction score',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section id="testimonials" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-4">Case Studies</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Outcomes our clients
              <br />
              <span className="text-slate-400 italic font-normal">talk about.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              From Fortune 500s to fast-growing startups — here&apos;s what enterprise learning looks like when it
              actually works.
            </p>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    current === i ? 'w-8 h-2 bg-brand-500' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className="relative h-80">
            {testimonials.map((t, i) => {
              const offset = (i - current + testimonials.length) % testimonials.length
              const isActive = offset === 0
              const isNext = offset === 1

              return (
                <div
                  key={t.name}
                  className={`absolute inset-0 transition-all duration-700 cursor-pointer ${
                    isActive
                      ? 'opacity-100 translate-x-0 scale-100 z-20'
                      : isNext
                      ? 'opacity-30 translate-x-8 scale-95 z-10'
                      : 'opacity-0 translate-x-16 scale-90 z-0'
                  }`}
                  onClick={() => setCurrent(i)}
                >
                  <div className="h-full bg-white rounded-2xl border border-slate-100 shadow-xl p-8 flex flex-col justify-between">
                    <div>
                      <svg className="w-8 h-8 text-slate-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.657 1.343-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.657 1.343-3 3-3V8z" />
                      </svg>
                      <p className="text-slate-700 leading-relaxed text-base">{t.quote}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                          {t.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                          <p className="text-xs text-slate-500">
                            {t.role}, {t.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-900 font-display">{t.metric}</p>
                        <p className="text-xs text-slate-500">{t.metricLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
