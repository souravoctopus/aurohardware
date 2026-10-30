import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { enquiryLink } from '../data/categories'

export default function EnquiryBand({
  title = 'Looking for something specific?',
  text = 'Tell us what you have in mind — our team will help you find the right fittings, finishes and decor for your space.',
  category,
}) {
  return (
    <section className="band">
      <Reveal className="container band__inner">
        <div>
          <p className="eyebrow">Enquiries welcome</p>
          <h2 className="band__title">{title}</h2>
          <p className="band__text">{text}</p>
        </div>
        <Link to={enquiryLink(category)} className="btn btn--gold">
          Enquire Now <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  )
}
