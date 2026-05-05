import PropTypes from 'prop-types'

export default function ProjectCard({
  title,
  description,
  metrics,
  color,
  accent,
  category,
  categoryTestId,
  descTestId,
  cardTestId,
  image,
}) {
  return (
    <div
      data-testid={cardTestId || undefined}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${color} border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-default`}
    >
      <div className="absolute inset-0 bg-dark-800/60" />
      <div className="relative z-10">
        {image && image.url && (
          <div
            data-testid="project-card-image-container"
            className="aspect-video w-full mb-4 overflow-hidden rounded-lg"
          >
            <img
              src={image.url}
              alt={image.alt || ''}
              width={image.width || undefined}
              height={image.height || undefined}
              data-testid="project-card-image"
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <span
          data-testid={categoryTestId || undefined}
          className={`text-xs font-semibold uppercase tracking-widest ${accent} mb-3 block`}
        >
          {category}
        </span>
        <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
          {title}
        </h3>
        <p
          data-testid={descTestId || undefined}
          className="text-white/50 text-sm leading-relaxed mb-6"
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {metrics &&
            metrics.map((m) => (
              <div key={m} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                <span className="text-xs font-semibold text-white/70">{m}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  metrics: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  accent: PropTypes.string,
  category: PropTypes.string,
  categoryTestId: PropTypes.string,
  descTestId: PropTypes.string,
  cardTestId: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

ProjectCard.defaultProps = {
  description: '',
  metrics: [],
  color: '',
  accent: '',
  category: '',
  categoryTestId: undefined,
  descTestId: undefined,
  cardTestId: undefined,
  image: null,
}
