import { LOGO_SRC } from '../data/images'
import { SITE } from '../data/site'

// Uses the client's original logo from src/assets/brand/ when present.
// Until then, a plain typographic wordmark stands in (not a logo recreation).
export default function Logo({ className = '' }) {
  if (LOGO_SRC) {
    return (
      <span className={`logo logo--image ${className}`}>
        <img src={LOGO_SRC} alt={`${SITE.name} – ${SITE.tagline}`} className="logo__img" />
      </span>
    )
  }

  return (
    <span className={`logo logo--text ${className}`} aria-label={`${SITE.name} – ${SITE.tagline}`}>
      <span className="logo__name" aria-hidden="true">
        AURO <span>HARDWARE</span>
      </span>
      <span className="logo__tag" aria-hidden="true">
        {SITE.tagline}
      </span>
    </span>
  )
}
