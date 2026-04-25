export function AnimatedDashboard() {
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
              { name: 'Executive LeaderShip', progress: 65, color: 'bg-cyan-500' },
              { name: 'Gen AI & MLops', progress: 54, color: 'bg-emerald-500' },
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
