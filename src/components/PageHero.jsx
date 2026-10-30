import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, intro, crumbs = [], children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label}>
                  <ChevronRight size={14} aria-hidden="true" />
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
