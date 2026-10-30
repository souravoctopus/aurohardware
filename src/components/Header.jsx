import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import CategoryIcon from './CategoryIcon'
import { NAV_LINKS } from '../data/site'
import { GROUPS, categoryPath, getCategoriesByGroup } from '../data/categories'

function MegaMenu({ group, id, onNavigate }) {
  const info = GROUPS[group]
  const items = getCategoriesByGroup(group)
  return (
    <div className="mega" id={id}>
      <div className="mega__inner">
        <div className="mega__intro">
          <p className="eyebrow">{info.eyebrow}</p>
          <p className="mega__title">{info.name}</p>
          <p className="mega__text">{info.intro}</p>
          <Link to={info.path} className="link-arrow" onClick={onNavigate}>
            View all {info.name} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="mega__list">
          {items.map((c) => (
            <li key={c.slug}>
              <Link to={categoryPath(c)} className="mega__link" onClick={onNavigate}>
                <CategoryIcon name={c.icon} size={18} />
                <span>{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const [openMenu, setOpenMenu] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerGroup, setDrawerGroup] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setDrawerOpen(false)
      }
    }
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', drawerOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [drawerOpen])

  const closeAll = () => {
    setOpenMenu(null)
    setDrawerOpen(false)
  }

  const overHero = pathname === '/' && !scrolled && !drawerOpen
  const isGroupActive = (to) => pathname.startsWith(to)

  return (
    <header className={`header ${overHero ? 'header--transparent' : 'header--solid'}`}>
      <div className="container header__bar">
        <Link to="/" className="header__brand" onClick={closeAll}>
          <Logo />
        </Link>

        <nav className="header__nav" aria-label="Main" ref={navRef}>
          <ul className="nav">
            {NAV_LINKS.map((item) =>
              item.group ? (
                <li
                  key={item.to}
                  className={`nav__item nav__item--has-menu ${openMenu === item.group ? 'is-open' : ''}`}
                  onMouseEnter={() => setOpenMenu(item.group)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <NavLink
                    to={item.to}
                    className={() => `nav__link ${isGroupActive(item.to) ? 'is-active' : ''}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </NavLink>
                  <button
                    type="button"
                    className="nav__toggle"
                    aria-expanded={openMenu === item.group}
                    aria-controls={`mega-${item.group}`}
                    aria-label={`Show ${item.label} categories`}
                    onClick={() => setOpenMenu((m) => (m === item.group ? null : item.group))}
                  >
                    <ChevronDown size={14} aria-hidden="true" />
                  </button>
                  <MegaMenu group={item.group} id={`mega-${item.group}`} onNavigate={closeAll} />
                </li>
              ) : (
                <li key={item.to} className="nav__item">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Link to="/contact#enquiry" className="btn btn--gold btn--sm header__cta" onClick={closeAll}>
          Enquire Now
        </Link>

        <button
          type="button"
          className="header__burger"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((o) => !o)}
        >
          {drawerOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-drawer" className={`drawer ${drawerOpen ? 'is-open' : ''}`} hidden={!drawerOpen}>
        <nav aria-label="Mobile">
          <ul className="drawer__list">
            {NAV_LINKS.map((item) =>
              item.group ? (
                <li key={item.to} className="drawer__item">
                  <div className="drawer__row">
                    <Link to={item.to} className="drawer__link" onClick={closeAll}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="drawer__expand"
                      aria-expanded={drawerGroup === item.group}
                      aria-label={`Show ${item.label} categories`}
                      onClick={() => setDrawerGroup((g) => (g === item.group ? null : item.group))}
                    >
                      <ChevronDown size={20} aria-hidden="true" />
                    </button>
                  </div>
                  {drawerGroup === item.group && (
                    <ul className="drawer__sub">
                      {getCategoriesByGroup(item.group).map((c) => (
                        <li key={c.slug}>
                          <Link to={categoryPath(c)} onClick={closeAll}>
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to} className="drawer__item">
                  <Link to={item.to} className="drawer__link" onClick={closeAll}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link to="/contact#enquiry" className="btn btn--gold drawer__cta" onClick={closeAll}>
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
