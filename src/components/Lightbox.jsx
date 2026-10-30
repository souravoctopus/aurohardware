import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const item = items[index]
  const count = items.length

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
      previouslyFocused?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, count, onClose, onChange])

  if (!item) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${item.title}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close preview">
        <X size={26} aria-hidden="true" />
      </button>

      {count > 1 && (
        <button
          type="button"
          className="lightbox__btn lightbox__prev"
          onClick={() => onChange((index - 1 + count) % count)}
          aria-label="Previous image"
        >
          <ChevronLeft size={30} aria-hidden="true" />
        </button>
      )}

      <figure className="lightbox__figure">
        <img src={item.src} alt={item.title} className="lightbox__img" />
        <figcaption className="lightbox__caption">
          <span>{item.title}</span>
          {item.category && <span className="lightbox__tag">{item.category}</span>}
          <span className="lightbox__count">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>

      {count > 1 && (
        <button
          type="button"
          className="lightbox__btn lightbox__next"
          onClick={() => onChange((index + 1) % count)}
          aria-label="Next image"
        >
          <ChevronRight size={30} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
