'use client'

import { openEnquireModal } from './Enquire'
import { AnimatedDashboard } from './AnimatedDashboard'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 gradient-mesh hero-grid overflow-hidden">
      <div className="absolute top-20 right-[15%] w-96 h-96 bg-brand-500/5 blob-animate rounded-full blur-3xl pointer-events-none"></div>
      <div
        className="absolute bottom-20 left-[10%] w-80 h-80 bg-violet-500/5 blob-animate rounded-full blur-3xl pointer-events-none"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-8 animate-[fadeUp_0.6s_ease_both]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow"></span>
              <span className="text-xs font-semibold text-brand-600 tracking-wide uppercase">Trusted by 500+ Enterprises</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 animate-[fadeUp_0.7s_ease_0.1s_both]">
              Next gen <span className="relative"><span className="text-brand-500">Expertise</span><svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none"><path d="M0 6 Q50 2 100 5 Q150 8 200 3" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" /></svg></span> for your <span className="font-display text-black-500">Enterprise.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg animate-[fadeUp_0.7s_ease_0.2s_both]">
              Cultivate High Performance Through Expert Learning
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.7s_ease_0.3s_both]">
              <button
                type="button"
                onClick={openEnquireModal}
                className="btn-primary text-white font-medium px-8 py-3.5 rounded-xl text-base text-center"
              >
                Enquire Now
              </button>
              <a
                href="#programs"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-medium text-slate-700 border border-slate-200 hover:border-brand-300 hover:text-brand-500 transition-all duration-300 group"
              >
                Explore Programs
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-slate-100 animate-[fadeUp_0.7s_ease_0.4s_both]">
              <div className="flex -space-x-2">
                {['bg-violet-400', 'bg-cyan-400', 'bg-emerald-400', 'bg-amber-400'].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {['R', 'S', 'A', 'M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">4.9/5</span> from 1,200+ learner reviews
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8 animate-[fadeIn_0.8s_ease_0.3s_both]">
            <AnimatedDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
