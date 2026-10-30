import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CategoryCard from '../components/CategoryCard'
import EnquiryBand from '../components/EnquiryBand'
import { GROUPS, getCategoriesByGroup } from '../data/categories'

export default function CategoryGroup({ group }) {
  const info = GROUPS[group]
  const items = getCategoriesByGroup(group)

  return (
    <>
      <Seo
        title={info.name}
        description={`${info.name} at AURO HARDWARE: ${items.map((c) => c.name).join(', ')}. Explore the collection and send an enquiry.`}
      />
      <PageHero eyebrow={info.eyebrow} title={info.name} intro={info.intro} crumbs={[{ label: info.name }]}>
        <p className="page-hero__count">{items.length} categories</p>
      </PageHero>
      <section className="section">
        <div className="container grid grid--4">
          {items.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </section>
      <EnquiryBand />
    </>
  )
}
