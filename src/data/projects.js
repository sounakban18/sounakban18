import omgSiteImg from '../assets/omg-site.jpg';
import invoiceToolImg from '../assets/invoice-tool.jpg';

export const projects = [
  {
    slug: 'omg-shopify-migration',
    tag: 'FRONTEND · UX · GROWTH',
    title: '\u00d2MG Shopify Platform Migration',
    summary:
      'End-to-end migration of \u00d2MG\u2019s D2C storefront to Shopify \u2014 from wireframes through to the funnel work after launch.',
    brand: '\u00d2 Morsel Go\u00fbter (\u00d2MG)',
    role: 'Led migration',
    year: '2024\u2013present',
    description: [
      '\u00d2MG\u2019s direct-to-consumer storefront needed to move onto Shopify without losing existing search rankings or inbound links.',
      'I led it end to end \u2014 wireframes, landing pages, responsive QA, and URL redirect mapping \u2014 then followed up with on-site SEO, funnel analysis, and automated nurture sequences post-launch.',
      'A migration like this either protects a brand\u2019s organic traffic or quietly kills it. Getting the redirects and SEO structure right mattered as much as the new design.',
    ],
    stack: ['Shopify', 'Figma', 'On-site SEO', 'CRO / funnel analysis'],
    accent: '#5e6ad2',
    image: omgSiteImg,
  },
  {
    slug: 'sgf-catalogue',
    tag: 'BRAND · DIGITAL · UI/UX',
    title: 'SGF Brand System & Digital Catalogue',
    summary:
      'A visual system spanning packaging, product presentation, corporate apparel and an interactive digital catalogue for a West Bengal food brand.',
    brand: 'Simple Good Foods',
    role: 'Brand Design · Packaging · UI/UX · Frontend',
    year: '2024–Present',
    description: [
      'Simple Good Foods (SGF) is an everyday-food brand serving products designed for the local household market in West Bengal — from soya chunks and pasta to distinctive 3D papad formats.',
      'The challenge was not simply to make the products look attractive. The brand needed to feel familiar enough for a local consumer to immediately understand, while still communicating the quality and care behind the products.',
      'I worked across packaging direction, product presentation, catalogue design and frontend implementation to extend the brand into a usable sales tool.',
    ],
    stack: ['Photoshop', 'HTML/CSS/JS', 'Figma', 'AI-assisted exploration'],
    accent: '#5e6ad2',
  },
  {
    slug: 'sgf-partner-portal',
    tag: 'FRONTEND · SYSTEMS',
    title: 'SGF Partner & Distributor Portal',
    summary:
      'A B2B site and pricing infrastructure for SGF\u2019s trade channel \u2014 the front door for distributors, and the engine behind it.',
    brand: 'Simple Good Foods',
    role: 'Design & build',
    year: '2026',
    description: [
      'SGF needed a partner-facing presence distinct from its consumer packaging, plus the pricing infrastructure behind it.',
      'I designed a maroon-and-gold partner site, then built a pricing engine, a trade incentive matrix, and a promotion management system so the commercial team could run offers without a spreadsheet rebuild each time.',
      'The hard part wasn\u2019t visual \u2014 it was making pricing tiers and promotion rules legible to a non-technical sales team.',
    ],
    stack: ['HTML/CSS/JS', 'Pricing logic', 'Google Sheets integration'],
    accent: '#b8860b',
  },
  {
    slug: 'omg-thank-you-studio',
    tag: 'BRAND · FRONTEND',
    title: '\u00d2MG Thank-You Card Studio',
    summary:
      'A small web app that lets the \u00d2MG team generate on-brand, personalised thank-you cards for D2C customers.',
    brand: '\u00d2 Morsel Go\u00fbter (\u00d2MG)',
    role: 'Design & build',
    year: '2026',
    description: [
      '\u00d2MG ships direct to consumers \u2014 the unboxing moment matters more here than it does for SGF\u2019s trade business.',
      'I built a small studio app so the team could generate a personalised, on-brand thank-you card per order without opening a design tool each time.',
      'Small brand touches like this are cheap to build and easy to skip \u2014 they\u2019re often most of what a D2C customer actually remembers.',
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
    role: 'Design & build',
    year: '2026',
    description: [
      'Every dispatch needs a road challan and tax invoice \u2014 previously assembled by hand, with inconsistent formatting and slow turnaround.',
      'I designed a form-to-document flow: fill in shipment details, watch the invoice render live, export straight to PDF with the company logo embedded.',
      'Fewer fields for a warehouse operator to touch under time pressure means fewer mistakes shipping with the goods.',
    ],
    stack: ['HTML/CSS/JS', 'Live preview', 'PDF export'],
    accent: '#5e6ad2',
    image: invoiceToolImg,
    imageFit: 'contain',
  },
];
