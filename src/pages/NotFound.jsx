import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <PageHero
        eyebrow="404"
        title="Page not found"
        intro="The page you are looking for may have moved. Explore our collections instead."
      >
        <div className="page-hero__actions">
          <Link to="/" className="btn btn--gold">
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn--outline">
            Contact Us
          </Link>
        </div>
      </PageHero>
    </>
  )
}
