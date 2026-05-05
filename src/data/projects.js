import pitchVaultImage from '../assets/images/pitch-vault.png'

const projects = [
  {
    category: 'Cloud Migration',
    title: 'Global Banking Platform Overhaul',
    desc: "Migrated a $20B financial institution's legacy on-premise infrastructure to a fully cloud-native architecture, reducing operational costs by 42%.",
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
  {
    category: 'Venture Build',
    title: 'Pitch Vault',
    desc: 'Built and launched pitchvault.co — a GigaCorp venture providing founders with a secure, structured platform to create and share investor-ready pitch decks.',
    metrics: ['0 to launch', 'Founder-focused', 'pitchvault.co'],
    color: 'from-violet-500/20 to-indigo-600/20',
    accent: 'text-violet-400',
    image: {
      url: pitchVaultImage,
      alt: 'Pitch Vault — investor-ready pitch deck platform',
      width: 800,
      height: 450,
    },
    cardTestId: 'pitch-vault-card',
    categoryTestId: 'pitch-vault-category',
    descTestId: 'pitch-vault-desc',
  },
]

export default projects
