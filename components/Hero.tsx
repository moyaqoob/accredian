'use client'

function AnimatedDashboard() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-[fadeUp_1s_ease_0.4s_both]">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="h-5 w-40 bg-slate-200 rounded-full"></div>
          <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-brand-500"></div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Learners', value: '12,480', change: '+18%', color: 'text-green-600' },
              { label: 'Completion', value: '94.2%', change: '+6%', color: 'text-green-600' },
              { label: 'Programs', value: '47', change: '+3', color: 'text-brand-500' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white rounded-xl p-4 border border-slate-100 shadow-sm animate-[fadeUp_0.6s_ease_${0.5 + i * 0.1}s_both]`}
              >
                <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                <p className="text-xl font-semibold text-slate-900 font-display">{stat.value}</p>
                <p className={`text-xs font-medium mt-0.5 ${stat.color}`}>{stat.change} this month</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Programs</p>
            {[
              { name: 'Data Science & ML', progress: 87, color: 'bg-brand-500' },
              { name: 'Product Management', progress: 72, color: 'bg-violet-500' },
              { name: 'Full Stack Development', progress: 65, color: 'bg-cyan-500' },
              { name: 'Cloud & DevOps', progress: 54, color: 'bg-emerald-500' },
            ].map((item, i) => (
              <div key={item.name} className="flex items-center gap-3">
                <p className="text-xs text-slate-600 w-44 shrink-0 truncate">{item.name}</p>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.progress}%`, animationDelay: `${i * 0.2}s` }}
                  ></div>
                </div>
                <p className="text-xs font-medium text-slate-500 w-8 text-right">{item.progress}%</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Recent Activity</p>
            {[
              { name: 'Priya Sharma', action: 'completed Module 6', time: '2m ago', avatar: 'PS' },
              { name: 'Rohan Mehta', action: 'started new program', time: '8m ago', avatar: 'RM' },
              { name: 'Team Analytics', action: 'report generated', time: '1h ago', avatar: '📊' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3 py-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white text-xs font-semibold shrink-0">
                  {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-700">
                    <span className="font-medium">{item.name}</span> {item.action}
                  </p>
                </div>
                <p className="text-xs text-slate-400 shrink-0">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl border border-slate-100 p-3 animate-float flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-800">Certified!</p>
          <p className="text-xs text-slate-500">240 this week</p>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-slate-100 p-3 animate-float-slow flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-800">94% ROI</p>
          <p className="text-xs text-slate-500">vs last quarter</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 gradient-mesh hero-grid overflow-hidden">
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
              Upskill your <span className="relative"><span className="text-brand-500">entire</span><svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none"><path d="M0 6 Q50 2 100 5 Q150 8 200 3" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" /></svg></span> workforce. <span className="font-display italic text-slate-400">At scale.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg animate-[fadeUp_0.7s_ease_0.2s_both]">
              Accredian partners with enterprise teams to deliver structured learning programs — from data science to
              leadership — with measurable outcomes and world-class faculty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.7s_ease_0.3s_both]">
              <a href="#contact" className="btn-primary text-white font-medium px-8 py-3.5 rounded-xl text-base text-center">
                Book a Demo
              </a>
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
