import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, intro, align = 'left', as: Heading = 'h2' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="section-heading__title">{title}</Heading>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </Reveal>
  )
}
