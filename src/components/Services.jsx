const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Cloud Infrastructure',
    desc: 'Scalable, resilient cloud architectures built on AWS, GCP, and Azure. We design systems that grow with your business.',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Terraform'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Custom AI models, LLM integrations, and intelligent automation that turn data into competitive advantage.',
    tags: ['LLMs', 'Computer Vision', 'NLP', 'MLOps'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3M6.75 20.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: 'Product Engineering',
    desc: 'End-to-end product development — from UX research to production deployment — with world-class engineering teams.',
    tags: ['React', 'Node.js', 'Go', 'React Native'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'Data & Analytics',
    desc: 'Real-time data pipelines, business intelligence dashboards, and analytics platforms that surface actionable insights.',
    tags: ['Snowflake', 'dbt', 'Spark', 'Looker'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Cybersecurity',
    desc: 'Penetration testing, zero-trust architecture, compliance frameworks, and 24/7 security monitoring at enterprise scale.',
    tags: ['SOC 2', 'ISO 27001', 'SIEM', 'Zero Trust'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Digital Transformation',
    desc: 'Strategic consulting and change management to modernize legacy systems and unlock new digital revenue streams.',
    tags: ['Strategy', 'Change Mgmt', 'Agile', 'DevOps'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Services built for scale
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            From concept to global deployment, our full-stack capabilities cover every layer of the modern technology stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-7 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center mb-5 group-hover:bg-brand-500/25 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-white/40 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
