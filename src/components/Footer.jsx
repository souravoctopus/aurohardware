import { Link } from 'react-router-dom'
import Logo from './Logo'
import ContactDetails from './ContactDetails'
import { NAV_LINKS, SITE } from '../data/site'
import { GROUPS, categoryPath, getCategoriesByGroup } from '../data/categories'

function CategoryColumn({ group }) {
  return (
    <div className="footer__col">
      <h2 className="footer__heading">
        <Link to={GROUPS[group].path}>{GROUPS[group].name}</Link>
      </h2>
      <ul className="footer__links footer__links--cols">
        {getCategoriesByGroup(group).map((c) => (
          <li key={c.slug}>
            <Link to={categoryPath(c)}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" aria-label={`${SITE.name} home`}>
            <Logo />
          </Link>
          <p className="footer__about">
            Furniture fittings, hardware and home decor solutions — brought together in one destination
            for homeowners, designers and builders.
          </p>
          <Link to="/contact#enquiry" className="btn btn--outline btn--sm">
            Send an Enquiry
          </Link>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__links">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <CategoryColumn group="home-decor" />
        <CategoryColumn group="hardware" />

        <div className="footer__col">
          <h2 className="footer__heading">Visit &amp; Contact</h2>
          <ContactDetails className="contact-list--footer" />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {SITE.name}. {SITE.tagline}.
          </p>
          <p>Product catalogue &amp; enquiries — prices on request.</p>
        </div>
      </div>
    </footer>
  )
}
