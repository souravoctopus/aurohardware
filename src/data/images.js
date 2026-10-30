// Client photographs are loaded automatically from the asset folders below.
// Drop images in and they appear on the site — no code changes needed.
//
//   src/assets/brand/logo.(png|svg|webp|jpg)        → header & footer logo
//   src/assets/hero/*                                → homepage hero (first file used)
//   src/assets/showroom/*                            → Gallery / Our Showroom
//   src/assets/products/<category-slug>/*            → that category's products
//
// Product names are taken from file names: "brass-pull-handle.jpg" → "Brass Pull Handle".

const brandFiles = import.meta.glob('../assets/brand/logo.{png,svg,webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
})
const heroFiles = import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  import: 'default',
})
const showroomFiles = import.meta.glob('../assets/showroom/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  import: 'default',
})
const productFiles = import.meta.glob('../assets/products/*/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  import: 'default',
})

const fileName = (path) => path.split('/').pop().replace(/\.[^.]+$/, '')

export const titleFromFile = (path) =>
  fileName(path)
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (ch) => ch.toUpperCase())

const sortedEntries = (files) =>
  Object.entries(files).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))

export const LOGO_SRC = Object.values(brandFiles)[0] || null

export const HERO_SRC = sortedEntries(heroFiles)[0]?.[1] || null

export const SHOWROOM_IMAGES = sortedEntries(showroomFiles).map(([path, src]) => ({
  id: path,
  src,
  title: titleFromFile(path) || 'AURO HARDWARE Showroom',
}))

const productsBySlug = {}
for (const [path, src] of sortedEntries(productFiles)) {
  const slug = path.split('/').slice(-2, -1)[0]
  ;(productsBySlug[slug] ||= []).push({ id: path, src, name: titleFromFile(path) })
}

export const getProductImages = (slug) => productsBySlug[slug] || []
