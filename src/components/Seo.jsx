import { SITE } from '../data/site'

// React 19 hoists <title> and <meta> rendered anywhere into <head>.
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} – ${SITE.tagline}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  )
}
