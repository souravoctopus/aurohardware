import { useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import ContactDetails from '../components/ContactDetails'
import { getCategory } from '../data/categories'
import { SITE } from '../data/site'

export default function Contact() {
  const [params] = useSearchParams()
  const category = params.get('category') || ''
  const product = params.get('product') || ''
  const categoryName = getCategory(category)?.name
  const { address, mapEmbedUrl } = SITE.contact

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact AURO HARDWARE for furniture fittings, hardware and home decor enquiries. Send us your requirement and our team will get in touch."
      />
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your space"
        intro="Send us an enquiry about any product or requirement, and our team will get back to you."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section" id="enquiry">
        <div className="container contact">
          <Reveal as="aside" className="contact__info">
            <h2 className="sub-title">Get in touch</h2>
            <p>
              Prefer to talk in person? Visit our showroom to see our home decor and hardware collections.
            </p>
            <ContactDetails />
          </Reveal>

          <Reveal className="contact__form">
            <h2 className="sub-title">Enquiry form</h2>
            {(categoryName || product) && (
              <p className="contact__prefill">
                Enquiring about{' '}
                <strong>{[product, categoryName].filter(Boolean).join(' · ')}</strong>
              </p>
            )}
            {/* Remount when arriving from a different product so the prefill updates. */}
            <EnquiryForm key={`${category}|${product}`} initialCategory={category} initialProduct={product} />
          </Reveal>
        </div>
      </section>

      {address && mapEmbedUrl && (
        <section className="map" aria-label="Showroom location">
          <iframe
            title={`Map – ${address}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      )}
    </>
  )
}
