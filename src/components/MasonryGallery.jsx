import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import Lightbox from './Lightbox'

export default function MasonryGallery({ items }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <ul className="masonry">
        {items.map((item, i) => (
          <li key={item.id} className="masonry__item">
            <button type="button" className="masonry__btn" onClick={() => setActive(i)}>
              <img src={item.src} alt={item.title} loading="lazy" decoding="async" className="masonry__img" />
              <span className="masonry__overlay">
                <span className="masonry__title">{item.title}</span>
                {item.category && <span className="masonry__tag">{item.category}</span>}
                <ZoomIn size={22} aria-hidden="true" className="masonry__zoom" />
              </span>
              <span className="sr-only">Open full-size preview</span>
            </button>
          </li>
        ))}
      </ul>
      {active !== null && items[active] && (
        <Lightbox items={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
      )}
    </>
  )
}
