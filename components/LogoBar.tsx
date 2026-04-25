import Image from "next/image"

type Logo = {
  name: string
  logo: string
}

const logos: Logo[] = [
  { name: 'Reliance', logo: '/logos/reliance.jpg' },
  { name: 'HCL', logo: '/logos/hcl.jpg' },
  { name: 'IBM', logo: '/logos/ibm.jpg' },
  { name: 'CRIF', logo: '/logos/crif.jpg' },
  { name: 'ADP', logo: '/logos/ADP.jpg' },
  { name: 'TCS', logo: '/logos/tcs.jpg' },
  { name: 'Bayer', logo: '/logos/bayer.jpg' },
]
export default function LogoBar() {
  const doubled = [...logos, ...logos]

  return (
    <section id="clients" className="py-16 bg-white border-y border-slate-100 overflow-hidden">
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
              <Image
                src={logo.logo}
                alt={logo.name}
                width={34}
                height={34}
                className="object-contain"
              />
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
