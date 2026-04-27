const team = [
  {
    name: 'Dalton B. Mangrum',
    role: 'Chief Executive Officer',
    bio: 'Former VP Engineering at Google. 20 years building and scaling technology organizations.',
    initials: 'DM',
    color: 'from-brand-500 to-purple-600',
    linkedin: '#',
    phone: '+1720.528.8910',
  },
  {
    name: 'Marcus Webb',
    role: 'Chief Technology Officer',
    bio: 'Ex-principal architect at AWS. Designed systems processing trillions of requests per year.',
    initials: 'MW',
    color: 'from-emerald-500 to-teal-600',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Product Officer',
    bio: 'Previously led product at Stripe and Figma. Passionate about intuitive, high-impact software.',
    initials: 'PS',
    color: 'from-pink-500 to-rose-600',
    linkedin: '#',
  },
  {
    name: 'Jordan Rivera',
    role: 'VP of Engineering',
    bio: 'Built engineering teams from 0 to 500 at two unicorn startups. Expert in distributed systems.',
    initials: 'JR',
    color: 'from-orange-500 to-amber-600',
    linkedin: '#',
  },
  {
    name: 'Kai Nakamura',
    role: 'Head of AI Research',
    bio: 'PhD from MIT CSAIL. Published researcher in ML systems and practical AI deployment.',
    initials: 'KN',
    color: 'from-cyan-500 to-sky-600',
    linkedin: '#',
  },
  {
    name: 'Sofia Andrade',
    role: 'VP of Design',
    bio: 'Former Creative Director at Pentagram. Brings world-class design thinking to enterprise products.',
    initials: 'SA',
    color: 'from-violet-500 to-indigo-600',
    linkedin: '#',
  },
]

export default function Team() {
  return (
    <section id="team" className="section-padding bg-dark-800/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
              Leadership
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            World-class people
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Our leadership team brings together decades of experience from the
            world&apos;s most respected technology organizations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    member.color
                  } flex items-center justify-center flex-shrink-0`}
                >
                  <span className="font-display font-bold text-white text-base">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-brand-400 text-xs font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              {member.phone && (
                <p
                  className="text-white/45 text-xs mb-3"
                  data-testid="ceo-phone"
                >
                  {member.phone}
                </p>
              )}
              <a
                href={member.linkedin}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/30 hover:text-brand-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
