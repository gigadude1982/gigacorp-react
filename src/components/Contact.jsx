import { useState } from 'react'

const inquiryTypes = [
  'Cloud Infrastructure',
  'AI & Machine Learning',
  'Product Engineering',
  'Data & Analytics',
  'Cybersecurity',
  'Digital Transformation',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', inquiry: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-dark-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
              <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Let's build
              <br />
              <span className="text-gradient">something great</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Whether you're ready to kick off a project or just exploring possibilities, our team is here to help you find the right path forward.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@gigacorp.co',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+1 (415) 555-0192',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Headquarters',
                  value: '100 Spear St, San Francisco, CA 94105',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white/70 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 rounded-2xl glass">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Message received!</h3>
                <p className="text-white/50 text-sm">We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corporation"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5">Area of Interest</label>
                  <select
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm focus:outline-none focus:border-brand-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-dark-800">Select a service...</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t} className="bg-dark-800">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
