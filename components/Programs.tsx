'use client'
import { useState, useRef, useEffect } from 'react'

const programs = [
  {
    category: 'Data & AI',
    title: 'Data Science & Machine Learning',
    duration: '6 months',
    level: 'Intermediate',
    learners: '12,480',
    rating: '4.9',
    skills: ['Python', 'TensorFlow', 'SQL', 'Statistics', 'MLOps'],
    description: 'End-to-end data science program covering ML fundamentals to production deployment. Co-certified with IIT Guwahati.',
    color: 'bg-brand-500',
    lightColor: 'bg-brand-50',
    textColor: 'text-brand-600',
  },
  {
    category: 'Product',
    title: 'Product Management',
    duration: '5 months',
    level: 'All Levels',
    learners: '8,200',
    rating: '4.8',
    skills: ['Strategy', 'Roadmapping', 'User Research', 'Metrics', 'Agile'],
    description: 'From 0 to PM — a practical, case-study-heavy program designed for engineers and analysts moving into product.',
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    category: 'Engineering',
    title: 'Full Stack Development',
    duration: '4 months',
    level: 'Beginner+',
    learners: '9,750',
    rating: '4.8',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    description: 'Build production-grade applications from front to back. Hands-on projects every week, mentored by senior engineers.',
    color: 'bg-cyan-500',
    lightColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    category: 'Cloud',
    title: 'Cloud & DevOps Engineering',
    duration: '5 months',
    level: 'Intermediate',
    learners: '6,300',
    rating: '4.7',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
    description: 'Infrastructure-as-code, container orchestration, and cloud architecture — built for teams moving to the cloud.',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
]

export default function Programs() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const prog = programs[active]

  return (
    <section id="programs" ref={sectionRef} className="py-28 gradient-mesh">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className="reveal">
              <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-4">Program Library</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                World-class programs,<br/>
                <span className="text-slate-400 italic font-normal">built for teams.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Not generic e-learning. Structured, mentor-led programs with real projects, peer cohorts, and credentials that matter.
              </p>
            </div>

            {/* Tab list */}
            <div className="space-y-3 reveal reveal-delay-2">
              {programs.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                    active === i
                      ? 'border-brand-200 bg-white shadow-lg shadow-brand-50'
                      : 'border-slate-100 bg-white/60 hover:border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full transition-colors ${active === i ? p.color : 'bg-slate-300'}`}></div>
                      <div>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${active === i ? p.textColor : 'text-slate-400'}`}>
                          {p.category}
                        </span>
                        <p className={`text-sm font-semibold mt-0.5 ${active === i ? 'text-slate-900' : 'text-slate-600'}`}>
                          {p.title}
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 text-xs text-slate-400 ${active === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                      <span>{p.duration}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detail card */}
          <div className="lg:w-1/2 lg:sticky lg:top-24 reveal reveal-delay-3">
            <div key={active} className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden animate-[fadeIn_0.3s_ease_both]">
              {/* Card header */}
              <div className={`${prog.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blob-animate"></div>
                <span className={`inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 mb-4`}>
                  {prog.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{prog.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{prog.description}</p>
              </div>

              {/* Card body */}
              <div className="p-8">
                {/* Meta */}
                <div className="grid grid-cols-3 gap-4 mb-7 pb-7 border-b border-slate-100">
                  {[
                    { label: 'Duration', value: prog.duration },
                    { label: 'Level', value: prog.level },
                    { label: 'Rating', value: `★ ${prog.rating}` },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-xs text-slate-400 mb-0.5">{m.label}</p>
                      <p className="text-sm font-semibold text-slate-800">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="mb-7">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Skills Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {prog.skills.map((skill) => (
                      <span key={skill} className={`text-xs font-medium px-3 py-1.5 ${prog.lightColor} ${prog.textColor} rounded-lg`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learner count */}
                <div className="flex items-center justify-between mb-6 p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500">Active Learners</p>
                    <p className="text-lg font-bold text-slate-900 font-display">{prog.learners}</p>
                  </div>
                  <div className="flex -space-x-2">
                    {['bg-blue-400', 'bg-violet-400', 'bg-rose-400', 'bg-amber-400', 'bg-emerald-400'].map((c, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`}></div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">+</div>
                  </div>
                </div>

                <a href="#contact" className="btn-primary block w-full text-center text-white font-medium py-3.5 rounded-xl text-sm">
                  Request Program Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
