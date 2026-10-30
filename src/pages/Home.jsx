import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Handshake, Ruler, Store } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CategoryCard from '../components/CategoryCard'
import CategoryIcon from '../components/CategoryIcon'
import ProductVisual from '../components/ProductVisual'
import MasonryGallery from '../components/MasonryGallery'
import EnquiryForm from '../components/EnquiryForm'
import ContactDetails from '../components/ContactDetails'
import { GROUPS, categoryPath, enquiryLink, getCategoriesByGroup, getCategory } from '../data/categories'
import { HERO_SRC, SHOWROOM_IMAGES, getProductImages } from '../data/images'

const FEATURED = ['wallpaper', 'window-blinds', 'louvers-panel', 'cabinet-handle']

const CUSTOM = [
  {
    slug: 'customised-wallpaper',
    text: 'Bring your own artwork, photograph or concept and we will help you turn it into wallpaper sized for your wall.',
  },
  {
    slug: 'customised-window-blinds',
    text: 'Blinds made to the measurements of your windows, with the fabric, colour and style chosen to suit your room.',
  },
]

const STEPS = [
  { title: 'Share your requirement', text: 'Tell us about your space, style and what you are looking for.' },
  { title: 'Explore the options', text: 'Browse finishes, materials and designs with our team at the showroom.' },
  { title: 'Get a tailored solution', text: 'Receive recommendations and a quotation for your project.' },
]

const REASONS = [
  {
    icon: Store,
    title: 'Decor & hardware under one roof',
    text: 'From wallpaper and flooring to hinges and handles — complete your interiors from a single destination.',
  },
  {
    icon: Ruler,
    title: 'Customised solutions',
    text: 'Made-to-measure blinds and customised wallpaper designed around your space.',
  },
  {
    icon: Gem,
    title: 'A curated selection',
    text: 'A considered range of designs, finishes and fittings chosen with detail in mind.',
  },
  {
    icon: Handshake,
    title: 'Personal guidance',
    text: 'Talk to our team about your requirement and get help choosing the right products.',
  },
]

function Hero() {
  return (
    <section className={`hero ${HERO_SRC ? 'hero--photo' : ''}`}>
      {HERO_SRC && <img src={HERO_SRC} alt="" className="hero__bg" fetchPriority="high" />}
      {!HERO_SRC && (
        <div className="hero__art" aria-hidden="true">
          <div className="hero__arch">
            <div className="hero__louvers" />
            <div className="hero__handle" />
          </div>
          <div className="hero__ring" />
        </div>
      )}
      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">AURO HARDWARE · Furniture Fittings &amp; Solutions</p>
        <h1 className="hero__title">
          The Art of Detail.
          <br />
          <em>The Beauty of Design.</em>
        </h1>
        <p className="hero__subtitle">
          Discover premium furniture fittings, home decor and interior solutions with AURO HARDWARE.
        </p>
        <div className="hero__actions">
          <a href="#collections" className="btn btn--gold">
            Explore Collections <ArrowRight size={18} aria-hidden="true" />
          </a>
          <Link to="/contact#enquiry" className="btn btn--outline">
            Enquire Now
          </Link>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to introduction">
        <span />
      </a>
    </section>
  )
}

function GroupShowcase({ group, dark = false }) {
  const info = GROUPS[group]
  const items = getCategoriesByGroup(group)
  return (
    <section className={`section ${dark ? 'section--dark' : ''}`} id={group}>
      <div className="container showcase">
        <div className="showcase__intro">
          <SectionHeading eyebrow={info.eyebrow} title={info.name} intro={info.intro} />
          <Reveal>
            <Link to={info.path} className={`btn ${dark ? 'btn--outline' : 'btn--outline-dark'}`}>
              View all {info.name} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <ul className="tiles">
          {items.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 6) * 40}>
              <Link to={categoryPath(c)} className="tile">
                <CategoryIcon name={c.icon} size={26} />
                <span className="tile__name">{c.name}</span>
                <ArrowRight size={16} aria-hidden="true" className="tile__arrow" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  const featured = FEATURED.map(getCategory)
  const galleryPreview = SHOWROOM_IMAGES.slice(0, 6)

  return (
    <>
      <Seo
        description="AURO HARDWARE – premium furniture fittings, hardware and home decor: wallpaper, blinds, curtains, flooring, panels, laminates, locks, handles, hinges and more. Enquire today."
      />
      <Hero />

      {/* About introduction */}
      <section className="section section--ivory" id="about">
        <div className="container split">
          <SectionHeading
            eyebrow="About AURO HARDWARE"
            title="Where fine fittings meet beautiful interiors."
          />
          <Reveal className="split__body">
            <p className="lead">
              AURO HARDWARE is a destination for furniture fittings, hardware and home decor solutions. We bring
              together the materials, finishes and fittings that turn a space into a home — from the wallpaper on
              your walls to the handle in your hand.
            </p>
            <p>
              Whether you are a homeowner planning a makeover, an interior designer specifying finishes or a
              builder completing a project, our team is here to help you choose with confidence.
            </p>
            <Link to="/about" className="link-arrow">
              More about us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <GroupShowcase group="home-decor" />
      <GroupShowcase group="hardware" dark />

      {/* Featured collections */}
      <section className="section" id="collections">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Collections"
            title="Curated for considered spaces"
            intro="A glimpse of the collections customers explore most — visit the showroom to see and feel every finish."
            align="center"
          />
          <div className="grid grid--4">
            {featured.map((c, i) => (
              <CategoryCard key={c.slug} category={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Customised solutions */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Customised Solutions"
            title="Made around your space"
            intro="Some spaces call for something truly personal. Our customised products are tailored to your design and dimensions."
          />
          <div className="custom">
            {CUSTOM.map(({ slug, text }, i) => {
              const c = getCategory(slug)
              const img = getProductImages(slug)[0]
              return (
                <Reveal as="article" key={slug} className="custom__card" delay={i * 90}>
                  <ProductVisual src={img?.src} alt={c.name} icon={c.icon} variant={i + 2} ratio="16 / 10" />
                  <div className="custom__body">
                    <h3>{c.name}</h3>
                    <p>{text}</p>
                    <div className="custom__actions">
                      <Link to={categoryPath(c)} className="link-arrow">
                        Learn more <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                      <Link to={enquiryLink(slug)} className="btn btn--gold btn--sm">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} className="steps__item" delay={i * 90}>
                <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Showroom / gallery */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Our Showroom"
              title="Step inside AURO HARDWARE"
              intro="See our collections in person and explore finishes, textures and fittings side by side."
            />
            <Reveal>
              <Link to="/gallery" className="btn btn--outline-dark">
                View Gallery <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          {galleryPreview.length > 0 ? (
            <MasonryGallery items={galleryPreview} />
          ) : (
            <div className="grid grid--3">
              {['wallpaper', 'curtain', 'door-handle'].map(getCategory).map((c, i) => (
                <Reveal key={c.slug} delay={i * 80}>
                  <ProductVisual
                    alt={`Showroom – ${c.name}`}
                    icon={c.icon}
                    label="Showroom photographs coming soon"
                    variant={i}
                    ratio="4 / 3"
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why choose */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why AURO HARDWARE" title="Why choose us" align="center" />
          <div className="grid grid--4 reasons">
            {REASONS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="article" key={title} className="reason" delay={i * 80}>
                <span className="reason__icon">
                  <Icon size={26} strokeWidth={1.25} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section section--dark" id="home-enquiry">
        <div className="container enquiry">
          <div className="enquiry__intro">
            <SectionHeading
              eyebrow="Customer Enquiry"
              title="Tell us what you are looking for"
              intro="Share your requirement and our team will get in touch with options and pricing."
            />
            <Reveal className="enquiry__contact">
              <ContactDetails />
            </Reveal>
          </div>
          <Reveal className="enquiry__form">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
