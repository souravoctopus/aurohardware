import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SITE } from '../data/site'

const PENDING = 'Details to be updated'

export default function ContactDetails({ className = '' }) {
  const { phone, email, address, hours } = SITE.contact
  const rows = [
    {
      icon: Phone,
      label: 'Phone',
      value: phone,
      href: phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : null,
    },
    { icon: Mail, label: 'Email', value: email, href: email ? `mailto:${email}` : null },
    { icon: MapPin, label: 'Showroom', value: address },
    { icon: Clock, label: 'Hours', value: hours },
  ]

  return (
    <ul className={`contact-list ${className}`}>
      {rows.map(({ icon: Icon, label, value, href }) => (
        <li key={label} className="contact-list__item">
          <Icon size={18} strokeWidth={1.5} aria-hidden="true" className="contact-list__icon" />
          <span>
            <span className="contact-list__label">{label}</span>
            {value ? (
              href ? (
                <a href={href} className="contact-list__value">
                  {value}
                </a>
              ) : (
                <span className="contact-list__value">{value}</span>
              )
            ) : (
              <span className="contact-list__value contact-list__value--pending">{PENDING}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}
