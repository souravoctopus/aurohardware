import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, ZoomIn } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ProductVisual from '../components/ProductVisual'
import CategoryIcon from '../components/CategoryIcon'
import Lightbox from '../components/Lightbox'
import EnquiryBand from '../components/EnquiryBand'
import NotFound from './NotFound'
import { GROUPS, categoryPath, enquiryLink, getCategoriesByGroup, getCategory } from '../data/categories'
import { getProductImages } from '../data/images'

export default function CategoryDetail({ group }) {
  const { slug } = useParams()
  const category = getCategory(slug)
  const [active, setActive] = useState(null)

  if (!category || category.group !== group) return <NotFound />

  const info = GROUPS[group]
  const products = getProductImages(slug)
  const related = getCategoriesByGroup(group).filter((c) => c.slug !== slug)
  const lightboxItems = products.map((p) => ({ id: p.id, src: p.src, title: p.name, category: category.name }))

  return (
    <>
      <Seo title={category.name} description={`${category.name} – ${category.description} Enquire at AURO HARDWARE.`} />
      <PageHero
        eyebrow={info.name}
        title={category.name}
        intro={category.description}
        crumbs={[{ label: info.name, to: info.path }, { label: category.name }]}
      >
        <div className="page-hero__actions">
          <Link to={enquiryLink(slug)} className="btn btn--gold">
            Enquire Now <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </PageHero>

      {category.details.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <h2 className="sub-title">Product details</h2>
            <ul className="details">
              {category.details.map((d) => (
                <li key={d}>
                  <Check size={16} aria-hidden="true" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="products-title">
        <div className="container">
          <h2 id="products-title" className="sub-title">
            {category.name} collection
          </h2>
          {products.length > 0 ? (
            <div className="grid grid--3">
              {products.map((p, i) => (
                <Reveal as="article" key={p.id} className="product" delay={(i % 3) * 70}>
                  <button type="button" className="product__zoom" onClick={() => setActive(i)}>
                    <ProductVisual src={p.src} alt={p.name} ratio="4 / 5" />
                    <span className="product__zoom-icon">
                      <ZoomIn size={20} aria-hidden="true" />
                      <span className="sr-only">View {p.name} full size</span>
                    </span>
                  </button>
                  <div className="product__body">
                    <h3 className="product__name">{p.name}</h3>
                    <Link to={enquiryLink(slug, p.name)} className="btn btn--outline-dark btn--sm">
                      Enquire Now
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty">
              <div className="grid grid--3 empty__grid">
                {[0, 1, 2].map((n) => (
                  <ProductVisual key={n} alt={category.name} icon={category.icon} variant={n} ratio="4 / 5" />
                ))}
              </div>
              <div className="empty__text">
                <p>
                  Product photographs for <strong>{category.name}</strong> will be added soon. Visit our showroom or
                  send an enquiry to see the available range.
                </p>
                <Link to={enquiryLink(slug)} className="btn btn--gold btn--sm">
                  Enquire about {category.name}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section--ivory section--tight">
        <div className="container">
          <h2 className="sub-title">More in {info.name}</h2>
          <ul className="chips">
            {related.map((c) => (
              <li key={c.slug}>
                <Link to={categoryPath(c)} className="chip">
                  <CategoryIcon name={c.icon} size={16} /> {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryBand title={`Interested in ${category.name}?`} category={slug} />

      {active !== null && (
        <Lightbox items={lightboxItems} index={active} onClose={() => setActive(null)} onChange={setActive} />
      )}
    </>
  )
}
