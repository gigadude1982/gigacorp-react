const testimonials = [
  {
    quote: "GigaCorp didn't just deliver a platform — they delivered a competitive advantage. Their team operated as true partners from day one, and the results speak for themselves.",
    author: 'Rachel Kim',
    role: 'CTO, Horizon Financial Group',
    initials: 'RK',
    color: 'from-brand-500 to-purple-600',
  },
  {
    quote: "We evaluated 12 firms before choosing GigaCorp. 18 months later, our AI-powered supply chain has eliminated $180M in annual waste. Best decision we've ever made.",
    author: 'Thomas Brennan',
    role: 'SVP Operations, Apex Retail Corp',
    initials: 'TB',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    quote: "The speed at which GigaCorp moved was remarkable. They shipped our entire platform in 8 months — a timeline our internal team said would take 2 years.",
    author: 'Ananya Patel',
    role: 'CEO, Vitara Health',
    initials: 'AP',
    color: 'from-pink-500 to-rose-600',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Client Voices</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Don&apos;t take our word for it
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.author} className="flex flex-col p-7 rounded-2xl glass">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/65 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-display font-bold text-white text-xs">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
