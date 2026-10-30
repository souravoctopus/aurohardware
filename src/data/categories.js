// All AURO HARDWARE product categories.
// Descriptions are intentionally general — add verified product details to
// `details` only when the business supplies them (no invented specs or prices).

export const GROUPS = {
  'home-decor': {
    key: 'home-decor',
    name: 'Home Decor',
    path: '/home-decor',
    eyebrow: 'Surfaces · Furnishings · Finishes',
    intro:
      'Wall coverings, window treatments, flooring and decorative panels to shape the look and feel of every room.',
  },
  hardware: {
    key: 'hardware',
    name: 'Hardware',
    path: '/hardware',
    eyebrow: 'Fittings · Fixtures · Fixings',
    intro:
      'Locks, handles, hinges, profiles and accessories — the essential details that make furniture and doors work beautifully.',
  },
}

export const CATEGORIES = [
  // ---------- HOME DECOR ----------
  {
    slug: 'wallpaper',
    name: 'Wallpaper',
    group: 'home-decor',
    icon: 'Wallpaper',
    description:
      'A curated selection of wallpaper designs in a variety of patterns, textures and colourways for feature walls and complete rooms.',
    details: [],
  },
  {
    slug: 'customised-wallpaper',
    name: 'Customised Wallpaper',
    group: 'home-decor',
    icon: 'Palette',
    description:
      'Wallpaper made to your design, artwork or photograph, sized for your wall to create a truly personal interior.',
    details: [],
  },
  {
    slug: 'window-blinds',
    name: 'Window Blinds',
    group: 'home-decor',
    icon: 'Blinds',
    description:
      'Window blinds in a range of styles, fabrics and finishes to control light and privacy with a clean, tailored look.',
    details: [],
  },
  {
    slug: 'customised-window-blinds',
    name: 'Customised Window Blinds',
    group: 'home-decor',
    icon: 'Ruler',
    description:
      'Blinds made to the measurements and style of your windows, with fabrics and designs chosen to suit your space.',
    details: [],
  },
  {
    slug: 'curtain',
    name: 'Curtain',
    group: 'home-decor',
    icon: 'Columns3',
    description:
      'Curtains in a variety of fabrics, colours and textures to frame your windows and soften your interiors.',
    details: [],
  },
  {
    slug: 'wooden-floor',
    name: 'Wooden Floor',
    group: 'home-decor',
    icon: 'Rows3',
    description:
      'Wooden flooring options that bring natural warmth and timeless character to living spaces.',
    details: [],
  },
  {
    slug: 'window-glass-film',
    name: 'Window Glass Film',
    group: 'home-decor',
    icon: 'Sun',
    description:
      'Decorative and functional films for windows and glass partitions, adding privacy and style to glazed surfaces.',
    details: [],
  },
  {
    slug: 'pvc-flooring',
    name: 'PVC Flooring',
    group: 'home-decor',
    icon: 'Grid2x2',
    description:
      'PVC flooring in a choice of designs and finishes for homes, offices and commercial interiors.',
    details: [],
  },
  {
    slug: 'carpets',
    name: 'Carpets',
    group: 'home-decor',
    icon: 'Square',
    description:
      'Carpets in a range of colours, patterns and textures to add comfort and character underfoot.',
    details: [],
  },
  {
    slug: 'charcoal-panel',
    name: 'Charcoal Panel',
    group: 'home-decor',
    icon: 'PanelsTopLeft',
    description:
      'Charcoal wall panels for contemporary feature walls, TV units and accent surfaces.',
    details: [],
  },
  {
    slug: 'charcoal-sheet',
    name: 'Charcoal Sheet',
    group: 'home-decor',
    icon: 'SquareStack',
    description:
      'Charcoal sheets for decorative wall cladding and interior surface finishing.',
    details: [],
  },
  {
    slug: 'louvers-panel',
    name: 'Louvers Panel',
    group: 'home-decor',
    icon: 'Fence',
    description:
      'Fluted and louvered panels that add rhythm, depth and a refined architectural texture to walls and ceilings.',
    details: [],
  },
  {
    slug: '3d-panels',
    name: '3D Panels',
    group: 'home-decor',
    icon: 'Shapes',
    description:
      'Three-dimensional decorative wall panels that create striking patterns of light and shadow.',
    details: [],
  },
  {
    slug: 'laminates',
    name: 'Laminates',
    group: 'home-decor',
    icon: 'Layers',
    description:
      'Laminates in a wide palette of colours, wood grains and textures for furniture, cabinetry and wall surfaces.',
    details: [],
  },
  {
    slug: 'acrylic-sheet',
    name: 'Acrylic Sheet',
    group: 'home-decor',
    icon: 'Gem',
    description:
      'Acrylic sheets for glossy, modern finishes on shutters, furniture and decorative applications.',
    details: [],
  },
  {
    slug: 'shutter-door-windows',
    name: 'Shutter Door/Windows',
    group: 'home-decor',
    icon: 'DoorClosed',
    description:
      'Shutter doors and windows for interiors, wardrobes and openings, available in different styles and finishes.',
    details: [],
  },
  {
    slug: 'artificial-grass-plants',
    name: 'Artificial Grass/Plants',
    group: 'home-decor',
    icon: 'Leaf',
    description:
      'Artificial grass and decorative plants that bring a touch of green to balconies, terraces and interiors.',
    details: [],
  },

  // ---------- HARDWARE ----------
  {
    slug: 'door-lock',
    name: 'Door Lock',
    group: 'hardware',
    icon: 'Lock',
    description:
      'Door locks for main doors, rooms and interiors, in a selection of designs and finishes.',
    details: [],
  },
  {
    slug: 'mortise-handle',
    name: 'Mortise Handle',
    group: 'hardware',
    icon: 'KeyRound',
    description:
      'Mortise handles that pair elegant design with everyday function for interior and main doors.',
    details: [],
  },
  {
    slug: 'cabinet-handle',
    name: 'Cabinet Handle',
    group: 'hardware',
    icon: 'GripHorizontal',
    description:
      'Cabinet handles in a variety of profiles, sizes and finishes for kitchens, wardrobes and furniture.',
    details: [],
  },
  {
    slug: 'door-handle',
    name: 'Door Handle',
    group: 'hardware',
    icon: 'DoorOpen',
    description:
      'Door handles in classic and contemporary designs to complement your doors and interiors.',
    details: [],
  },
  {
    slug: 'auto-hinge',
    name: 'Auto Hinge',
    group: 'hardware',
    icon: 'Spline',
    description:
      'Auto hinges for cabinets and furniture shutters, for smooth everyday opening and closing.',
    details: [],
  },
  {
    slug: 'hinge',
    name: 'Hinge',
    group: 'hardware',
    icon: 'Frame',
    description:
      'Hinges for doors, cabinets and furniture in a range of types and finishes.',
    details: [],
  },
  {
    slug: 'profiles',
    name: 'Profiles',
    group: 'hardware',
    icon: 'AppWindow',
    description:
      'Profiles for furniture, shutters and interior detailing, giving edges and frames a clean, finished look.',
    details: [],
  },
  {
    slug: 'bathroom-accessories',
    name: 'Bathroom Accessories',
    group: 'hardware',
    icon: 'Bath',
    description:
      'Bathroom accessories to complete your bathroom with practical, well-designed fittings.',
    details: [],
  },
  {
    slug: 'knobs',
    name: 'Knobs',
    group: 'hardware',
    icon: 'Circle',
    description:
      'Decorative knobs for drawers, cabinets and furniture in a variety of shapes and finishes.',
    details: [],
  },
  {
    slug: 'baskets',
    name: 'Baskets',
    group: 'hardware',
    icon: 'ShoppingBasket',
    description:
      'Kitchen and wardrobe baskets to organise storage neatly and make every space more usable.',
    details: [],
  },
  {
    slug: 'channels',
    name: 'Channels',
    group: 'hardware',
    icon: 'Boxes',
    description:
      'Drawer channels for kitchens, wardrobes and furniture drawers.',
    details: [],
  },
  {
    slug: 'hardware-accessories',
    name: 'Hardware Accessories',
    group: 'hardware',
    icon: 'Wrench',
    description:
      'A range of furniture and hardware accessories to complete your fittings and installations.',
    details: [],
  },
]

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug)

export const getCategoriesByGroup = (group) =>
  CATEGORIES.filter((c) => c.group === group)

export const categoryPath = (category) =>
  `${GROUPS[category.group].path}/${category.slug}`

/** Builds a link to the enquiry form with category / product prefilled. */
export const enquiryLink = (categorySlug, productName) => {
  const params = new URLSearchParams()
  if (categorySlug) params.set('category', categorySlug)
  if (productName) params.set('product', productName)
  const query = params.toString()
  return `/contact${query ? `?${query}` : ''}#enquiry`
}
