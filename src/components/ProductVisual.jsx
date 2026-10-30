import CategoryIcon from './CategoryIcon'

// Shows a real photograph when one exists; otherwise a styled placeholder
// that is clearly marked as awaiting the client's photo.
export default function ProductVisual({ src, alt, icon, label, variant = 0, ratio = '4 / 5', eager = false }) {
  if (src) {
    return (
      <div className="visual" style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="visual__img"
        />
      </div>
    )
  }

  return (
    <div
      className={`visual visual--placeholder visual--p${variant % 4}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${alt} – photograph coming soon`}
    >
      <span className="visual__icon">
        <CategoryIcon name={icon} size={40} strokeWidth={1} />
      </span>
      {label && <span className="visual__label">{label}</span>}
    </div>
  )
}
