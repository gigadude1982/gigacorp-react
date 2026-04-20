const values = [
  {
    title: 'Relentless Execution',
    desc: 'We ship. Every sprint, every milestone, every time. No excuses — just results.',
  },
  {
    title: 'Engineering Excellence',
    desc: 'We hold ourselves to the highest technical standards. Clean code, robust architecture, thoughtful tradeoffs.',
  },
  {
    title: 'Radical Transparency',
    desc: 'We tell clients what they need to hear, not what they want to hear. Trust is built through honesty.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We measure success in years, not projects. Our clients\' outcomes are our outcomes.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
              <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">About GigaCorp</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              We&apos;re the team
              <br />
              <span className="text-gradient">the best companies</span>
              <br />
              call first
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              Founded in 2014, GigaCorp has grown from a 5-person consultancy into a global technology firm with 800+ engineers, designers, and strategists across 15 offices worldwide.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              We partner with industry leaders — from Series B startups to Fortune 50 enterprises — to solve their most complex technical challenges. Our work spans cloud infrastructure, artificial intelligence, product engineering, and everything in between.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-500/25 active:scale-95"
            >
              Work with us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 rounded-2xl glass">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center text-sm font-bold font-display mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{v.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
