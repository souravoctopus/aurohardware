// Business details. Leave a value as null until the real detail is provided —
// the site shows a neutral "to be updated" placeholder instead of fake data.
// WhatsApp enquiry and the map only appear once `whatsapp` / `address` are set.

export const SITE = {
  name: 'AURO HARDWARE',
  tagline: 'Furniture Fittings & Solutions',
  url: '',
  contact: {
    phone: null, // e.g. '+91 98765 43210'
    email: null, // e.g. 'info@aurohardware.com'
    address: null, // e.g. 'Shop no., Street, City, State PIN'
    whatsapp: null, // digits only with country code, e.g. '919876543210'
    hours: null, // e.g. 'Mon – Sat, 10:00 am – 8:00 pm'
    mapEmbedUrl: null, // Google Maps "Embed a map" src URL
  },
}

// Set VITE_ENQUIRY_ENDPOINT in a .env file to a URL that accepts a JSON POST
// (your own API, Formspree, Getform, etc.). Without it the form validates but
// does not claim to send anything.
export const ENQUIRY_ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || ''

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Home Decor', to: '/home-decor', group: 'home-decor' },
  { label: 'Hardware', to: '/hardware', group: 'hardware' },
  { label: 'Our Showroom', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]
