# AURO HARDWARE – Furniture Fittings & Solutions

Product catalogue and customer enquiry website (React + Vite + React Router). Not an e-commerce site: no cart, checkout or pricing.

```bash
npm install
npm run dev       # local development
npm run lint      # ESLint
npm run build     # production build in dist/
```

## Adding the client's logo and photographs

Images are picked up automatically from these folders. No code changes are needed; just add files and rebuild.

| Folder | Used for |
| --- | --- |
| `src/assets/brand/logo.png` (or `.svg` / `.webp` / `.jpg`) | Header and footer logo (replaces the text wordmark) |
| `src/assets/hero/` | Homepage hero background (first file alphabetically) |
| `src/assets/showroom/` | Gallery / Our Showroom page and homepage showroom preview |
| `src/assets/products/<category-slug>/` | Product photos for that category (one folder per category already exists) |

- Product names come from file names: `01-brass-bar-handle.jpg` shows as **Brass Bar Handle**. A leading number only controls the order.
- The first image in a category folder becomes that category's cover image.
- Product photos also appear in the Gallery with Home Decor / Hardware filters.
- Optimise large photos before adding them (around 2000px on the long edge, JPG/WebP).

## Business details

Edit `src/data/site.js`. Any value left as `null` shows "Details to be updated".

- `phone`, `email`, `address`, `hours`
- `whatsapp`: when set, the enquiry form offers "Send via WhatsApp"
- `mapEmbedUrl`: the map on the Contact page appears only when both `address` and this are set

Category descriptions are in `src/data/categories.js`. Add verified product information to a category's `details` array and it will appear on that category page.

## Connecting the enquiry form

The form validates input but **does not send anything until an endpoint is configured.** Without one, it tells the customer their enquiry was not sent and points them to the phone, email or WhatsApp details if those are set.

To enable it, copy `.env.example` to `.env.local` and set:

```
VITE_ENQUIRY_ENDPOINT=https://your-endpoint
```

The form sends a JSON `POST` with `name`, `phone`, `email`, `category`, `categoryName`, `product`, `message`, `submittedAt` and `page`. A success message is shown only when the endpoint returns a 2xx response. Any backend works: your own API, or a form service such as Formspree or Getform.

## Deployment note

This is a single-page app using `BrowserRouter`. Configure the host to serve `index.html` for all routes (for example, a Netlify `_redirects` rule or a Vercel rewrite) so that deep links like `/hardware/hinge` work.
