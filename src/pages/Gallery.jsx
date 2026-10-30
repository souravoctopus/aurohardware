import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Images } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import MasonryGallery from '../components/MasonryGallery'
import EnquiryBand from '../components/EnquiryBand'
import { CATEGORIES, GROUPS } from '../data/categories'
import { SHOWROOM_IMAGES, getProductImages } from '../data/images'

const ALL_ITEMS = [
  ...SHOWROOM_IMAGES.map((img) => ({ ...img, filter: 'showroom', category: 'Showroom' })),
  ...CATEGORIES.flatMap((c) =>
    getProductImages(c.slug).map((p) => ({
      id: p.id,
      src: p.src,
      title: p.name,
      category: c.name,
      filter: c.group,
    })),
  ),
]

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'showroom', label: 'Showroom' },
  { key: 'home-decor', label: GROUPS['home-decor'].name },
  { key: 'hardware', label: GROUPS.hardware.name },
].filter((f) => f.key === 'all' || ALL_ITEMS.some((i) => i.filter === f.key))

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const items = filter === 'all' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.filter === filter)

  return (
    <>
      <Seo
        title="Gallery & Our Showroom"
        description="Take a look inside the AURO HARDWARE showroom and browse photographs of our home decor and hardware collections."
      />
      <PageHero
        eyebrow="Gallery"
        title="Our Showroom"
        intro="A closer look at our space and collections. Select any photograph to view it full size."
        crumbs={[{ label: 'Gallery' }]}
      />
      <section className="section">
        <div className="container">
          {ALL_ITEMS.length > 0 ? (
            <>
              {FILTERS.length > 2 && (
                <div className="filters" role="group" aria-label="Filter gallery">
                  {FILTERS.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      className={`filters__btn ${filter === f.key ? 'is-active' : ''}`}
                      aria-pressed={filter === f.key}
                      onClick={() => setFilter(f.key)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              )}
              <MasonryGallery key={filter} items={items} />
            </>
          ) : (
            <div className="gallery-empty">
              <Images size={40} strokeWidth={1} aria-hidden="true" />
              <h2>Showroom photographs coming soon</h2>
              <p>
                We are preparing photographs of our showroom and collections. In the meantime, explore our{' '}
                <Link to="/home-decor">Home Decor</Link> and <Link to="/hardware">Hardware</Link> categories or visit
                us in person.
              </p>
            </div>
          )}
        </div>
      </section>
      <EnquiryBand title="Visit or enquire" text="Would you like to see a product in person or get more details? Send us an enquiry." />
    </>
  )
}
