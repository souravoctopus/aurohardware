import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Handshake, Ruler, Store } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CategoryIcon from '../components/CategoryIcon'
import EnquiryBand from '../components/EnquiryBand'
import { GROUPS, categoryPath, getCategoriesByGroup } from '../data/categories'

const VALUES = [
  {
    icon: Gem,
    title: 'Attention to detail',
    text: 'We believe the smallest details — a handle, a hinge, a finish — shape how a space looks and feels every day.',
  },
  {
    icon: Store,
    title: 'Everything in one place',
    text: 'Home decor and hardware side by side, so you can plan surfaces and fittings together.',
  },
  {
    icon: Ruler,
    title: 'Solutions, not just products',
    text: 'From customised wallpaper to made-to-measure blinds, we help you find what fits your space.',
  },
  {
    icon: Handshake,
    title: 'Here to help',
    text: 'Bring your plans, photographs or ideas — our team will help you explore the right options.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="AURO HARDWARE is a destination for furniture fittings, hardware and home decor solutions — helping homeowners, designers and builders complete beautiful interiors."
      />
      <PageHero
        eyebrow="About Us"
        title="The art of detail, the beauty of design"
        intro="AURO HARDWARE – Furniture Fittings & Solutions."
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="section">
        <div className="container split">
          <SectionHeading eyebrow="Who we are" title="A destination for fittings & interiors" />
          <Reveal className="split__body">
            <p className="lead">
              AURO HARDWARE brings together furniture fittings, hardware and home decor solutions under one roof.
            </p>
            <p>
              Our collections span wall coverings, window treatments, flooring and decorative panels, alongside
              the locks, handles, hinges, profiles and accessories that make furniture and doors work beautifully.
            </p>
            <p>
              We work with homeowners, interior designers, carpenters and builders — helping each of them choose
              products that suit their space, style and requirement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading eyebrow="What we offer" title="Two collections, one vision" align="center" />
          <div className="offer">
            {Object.values(GROUPS).map((g, gi) => (
              <Reveal as="article" key={g.key} className="offer__card" delay={gi * 100}>
                <p className="eyebrow">{g.eyebrow}</p>
                <h3>{g.name}</h3>
                <p>{g.intro}</p>
                <ul className="chips chips--dark">
                  {getCategoriesByGroup(g.key).map((c) => (
                    <li key={c.slug}>
                      <Link to={categoryPath(c)} className="chip">
                        <CategoryIcon name={c.icon} size={15} /> {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={g.path} className="link-arrow">
                  Explore {g.name} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading eyebrow="Our approach" title="What guides us" align="center" />
          <div className="grid grid--4 reasons">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
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

      <EnquiryBand title="Planning a project?" />
    </>
  )
}
