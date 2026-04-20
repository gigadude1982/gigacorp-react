const projects = [
  {
    category: 'Cloud Migration',
    title: 'Global Banking Platform Overhaul',
    desc: 'Migrated a $20B financial institution\'s legacy on-premise infrastructure to a fully cloud-native architecture, reducing operational costs by 42%.',
    metrics: ['42% cost reduction', '99.99% uptime', '3.2M daily users'],
    color: 'from-brand-500/20 to-purple-600/20',
    accent: 'text-brand-400',
  },
  {
    category: 'AI / ML',
    title: 'Predictive Supply Chain Engine',
    desc: 'Built a real-time ML platform for a Fortune 100 retailer to forecast demand, optimize inventory, and prevent $180M in annual stock-out losses.',
    metrics: ['$180M savings', '94% accuracy', '12ms latency'],
    color: 'from-emerald-500/20 to-teal-600/20',
    accent: 'text-emerald-400',
  },
  {
    category: 'Product Engineering',
    title: 'Health & Wellness Super App',
    desc: 'Designed and shipped a cross-platform health application from 0 to 2M users in 8 months, integrating with 60+ medical devices and EHR systems.',
    metrics: ['2M users in 8mo', '60+ integrations', '4.9 App Store rating'],
    color: 'from-pink-500/20 to-rose-600/20',
    accent: 'text-pink-400',
  },
  {
    category: 'Data & Analytics',
    title: 'Real-Time Media Analytics Hub',
    desc: 'Engineered a streaming analytics platform for a global media company processing 500B events per day, powering personalization and ad-targeting.',
    metrics: ['500B events/day', '40ms p99 latency', '$220M ad revenue'],
    color: 'from-orange-500/20 to-amber-600/20',
    accent: 'text-orange-400',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="section-padding bg-dark-800/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
              <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Case Studies</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Work that speaks
              <br />for itself
            </h2>
          </div>
          <p className="text-white/50 max-w-sm md:text-right">
            A selection of projects that define what&apos;s possible when ambition meets execution.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${p.color} border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-default`}
            >
              <div className="absolute inset-0 bg-dark-800/60" />
              <div className="relative z-10">
                <span className={`text-xs font-semibold uppercase tracking-widest ${p.accent} mb-3 block`}>
                  {p.category}
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {p.metrics.map((m) => (
                    <div key={m} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                      <span className="text-xs font-semibold text-white/70">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
          >
            See all case studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
