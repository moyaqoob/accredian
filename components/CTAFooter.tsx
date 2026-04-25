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
              Enquire Now →
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

export function Footer() {
  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://facebook.com/accredianlearn',
      path: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/accredianedu/',
      path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/accredianedu',
      path: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/accredian_edu',
      path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA',
      path: 'M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z',
    },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div>
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
            <div className="space-y-3 text-slate-300">
              <h3 className="text-base font-semibold text-slate-200">Contact Us</h3>
              <p className="text-sm leading-relaxed">
                <span className="font-medium text-slate-400">Email: </span>
                <a href="mailto:enterprise@accredian.com" className="hover:text-white transition-colors">
                  enterprise@accredian.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                <span className="font-medium text-slate-400">Address: </span>
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <h3 className="text-base font-semibold text-slate-200 mb-3">Follow Us</h3>
            <p className="text-sm text-slate-400 mb-4 max-w-sm lg:ml-auto">
              Stay connected for new enterprise programs, learner success stories, and product updates.
            </p>
            <div className="flex gap-3 lg:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-400"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
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
