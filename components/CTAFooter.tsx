'use client'
import { FormEvent, useState } from 'react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark noise"></div>
      <div className="absolute inset-0 hero-grid opacity-20"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-brand-300 tracking-wide uppercase">Ready to Scale</span>
        </div>

        <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Transform how your
          <br />
          <span className="text-brand-400 italic">team learns.</span>
        </h2>

        <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
          Join 500+ enterprises already using Accredian to upskill at scale. Book a demo and we&apos;ll
          build a custom program roadmap for your team — free.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email address"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="btn-primary px-7 py-3.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap"
            >
              Book a Demo →
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 py-4 px-8 bg-green-500/10 border border-green-500/20 rounded-xl max-w-md mx-auto">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-green-300 text-sm font-medium">We&apos;ll be in touch within 24 hours.</p>
          </div>
        )}

        <p className="text-xs text-slate-500 mt-4">No commitment. Custom program roadmap included.</p>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['SOC 2 Compliant', 'SSO Supported', 'Custom Branding', 'Dedicated CSM', 'SLA Guaranteed'].map(
            (feature) => (
              <span
                key={feature}
                className="text-xs font-medium text-slate-400 border border-slate-700 rounded-full px-4 py-1.5 hover:border-slate-500 transition-colors"
              >
                ✓ {feature}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

type FooterLinks = Record<string, string[]>

export function Footer() {
  const links: FooterLinks = {
    Platform: ['Features', 'Analytics', 'Integrations', 'Security', 'Pricing'],
    Programs: ['Data Science', 'Product Management', 'Full Stack', 'Leadership'],
    Company: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display font-semibold text-xl text-white">Accredian</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Enterprise learning programs that create measurable skill transformation — at any scale.
            </p>
            <div className="flex gap-3">
              {['in', 'tw', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
          <p className="text-xs text-slate-600">© 2024 Accredian. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              All systems operational
            </span>
            <span className="text-xs text-slate-600">SOC 2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
