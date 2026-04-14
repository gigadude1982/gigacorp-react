const stats = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '$4.2B', label: 'Revenue Generated' },
  { value: '98%', label: 'Client Retention' },
  { value: '40+', label: 'Countries Served' },
]

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
