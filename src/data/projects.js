export const projects = [
  {
    slug: 'omg-shopify-migration',
    tag: 'PRODUCT · UX · GROWTH',
    title: '\u00d2MG Shopify Platform Migration',
    summary:
      'End-to-end migration of \u00d2MG\u2019s D2C storefront to Shopify \u2014 wireframes, QA, SEO, and the funnel work that followed it.',
    brand: '\u00d2 Morsel Go\u00fbter (\u00d2MG)',
    role: 'Led migration, solo',
    year: '2024\u2013present',
    description: [
      'ÒMG\u2019s direct-to-consumer storefront needed to move onto Shopify \u2014 not a lift-and-shift, but a chance to fix the information architecture and conversion path along the way.',
      'I owned it end to end: wireframed the new site, designed the landing pages, and ran responsive QA across breakpoints before launch, then mapped every old URL to its Shopify equivalent so existing search rankings and inbound links survived the switch.',
      'Post-launch, I implemented on-site SEO and product metadata structure to improve organic discoverability, ran funnel analysis to find where shoppers dropped off, and used those findings to prioritise conversion-rate changes \u2014 then built automated customer messaging and opt-in nurture sequences to bring shoppers back into the funnel.',
    ],
    stack: ['Shopify', 'Figma', 'On-site SEO', 'CRO / funnel analysis'],
    accent: '#5e6ad2',
  },
  {
    slug: 'sgf-catalogue',
    tag: 'PRODUCT · FRONTEND',
    title: 'SGF Digital Product Catalogue',
    summary:
      'An interactive 3D flipbook web app that replaced a static PDF catalogue for trade partners and distributors.',
    brand: 'Simple Good Foods',
    role: 'Design & build, solo',
    year: '2026',
    description: [
      'Simple Good Foods sells Pasta, Papad, and Soya Chunks through a distributor network that previously worked off a static PDF catalogue — no way to browse quickly, no consistent brand presentation across sales calls.',
      'I designed and built a self-contained web app that renders the catalogue as a page-turning 3D flipbook, styled with an Apple-minimal aesthetic: generous whitespace, restrained type, product photography doing the talking.',
      'Shipped as a single dependency-free HTML deliverable so it runs on any distributor\u2019s laptop or tablet with no install step — a constraint I design around deliberately for a field-sales context.',
    ],
    stack: ['HTML/CSS/JS', 'CSS 3D transforms', 'No build step'],
    accent: '#5e6ad2',
  },
  {
    slug: 'sgf-partner-portal',
    tag: 'SYSTEMS · FRONTEND',
    title: 'SGF Partner & Distributor Portal',
    summary:
      'A B2B site and pricing infrastructure for SGF\u2019s trade channel — the front door for distributors, and the engine behind it.',
    brand: 'Simple Good Foods',
    role: 'Design & build, solo',
    year: '2026',
    description: [
      'SGF is a distributor-volume brand, which meant the audience for this build was never a retail shopper — it was a channel partner deciding whether to stock the line.',
      'I designed a partner-facing website in a maroon-and-gold system distinct from SGF\u2019s consumer packaging, then built the machinery behind it: a pricing engine, a trade incentive gift matrix, and a trade promotion management system (TPMS) so the commercial team could run offers without a spreadsheet rebuild each time.',
      'The interesting problem here wasn\u2019t visual — it was information architecture: getting pricing tiers, incentive rules, and promotion windows to stay legible to a non-technical sales team.',
    ],
    stack: ['HTML/CSS/JS', 'Pricing logic', 'Google Sheets integration'],
    accent: '#b8860b',
  },
  {
    slug: 'omg-thank-you-studio',
    tag: 'BRAND · INTERACTION',
    title: '\u00d2MG Thank-You Card Studio',
    summary:
      'A small web app that lets the \u00d2MG team generate on-brand, personalised thank-you cards for D2C customers.',
    brand: '\u00d2 Morsel Go\u00fbter (\u00d2MG)',
    role: 'Design & build, solo',
    year: '2026',
    description: [
      '\u00d2MG is Morfiizo\u2019s premium D2C brand, sold direct and on Amazon and Blinkit — a channel where the unboxing moment matters more than it does for SGF\u2019s trade business.',
      'I built a lightweight studio app so the team could generate a personalised, on-brand thank-you card per order without opening a design tool each time — templated layout, editable fields, export-ready output.',
      'This sits alongside a broader run of \u00d2MG digital-asset work: a blog page for the brand site, and a content production tracker for the social team.',
    ],
    stack: ['HTML/CSS/JS', 'Template rendering', 'PDF/print export'],
    accent: '#c9704f',
  },
  {
    slug: 'road-challan-generator',
    tag: 'INTERNAL TOOLS · UX',
    title: 'Road Challan & Tax Invoice Generator',
    summary:
      'An internal tool that turns a five-minute manual document task into a live-preview, one-click PDF export.',
    brand: 'Morfiizo Enterprise',
    role: 'Design & build, solo',
    year: '2026',
    description: [
      'Every dispatch needs a road challan and tax invoice — previously assembled by hand, which meant inconsistent formatting and a slow turnaround at the loading dock.',
      'I designed a form-to-document flow: fill in the shipment details on the left, watch the actual invoice render on the right, export straight to PDF with the company logo embedded — no template file to hunt down, no formatting drift between documents.',
      'The design brief here was pure UX economy: the fewer fields a warehouse operator has to touch under time pressure, the fewer mistakes ship with the goods.',
    ],
    stack: ['HTML/CSS/JS', 'Live preview', 'PDF export'],
    accent: '#5e6ad2',
  },
];
