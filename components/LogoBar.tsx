type Logo = {
  name: string
  abbr: string
}

const logos: Logo[] = [
  { name: 'Infosys', abbr: 'IF' },
  { name: 'Wipro', abbr: 'WP' },
  { name: 'TCS', abbr: 'TC' },
  { name: 'HCL', abbr: 'HC' },
  { name: 'Cognizant', abbr: 'CG' },
  { name: 'Deloitte', abbr: 'DL' },
  { name: 'Accenture', abbr: 'AC' },
  { name: 'IBM', abbr: 'IB' },
  { name: 'Oracle', abbr: 'OR' },
  { name: 'Capgemini', abbr: 'CP' },
]

export default function LogoBar() {
  const doubled = [...logos, ...logos]

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by teams at leading companies
        </p>
      </div>
      <div className="relative">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/50 transition-colors duration-300 shrink-0 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-brand-100 group-hover:to-brand-200 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:text-brand-700 transition-all duration-300">
                {logo.abbr}
              </div>
              <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-700 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  )
}
