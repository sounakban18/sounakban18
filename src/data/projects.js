import omgHeroImg from '../assets/omg-hero-cards.png';
import sgfProductsImg from '../assets/sgf-products.jpg';
import invoiceToolImg from '../assets/invoice-tool.jpg';

export const projects = [
  {
    slug: 'omg-shopify-migration',
    tag: 'DIGITAL · MIGRATION · UI/UX',
    title: 'ÒMG Shopify Platform Migration',
    summary:
      'Helping move ÒMG from WordPress to Shopify while shaping a cleaner digital experience, supporting responsive QA, analytics, search visibility and technical cleanup.',
    brand: 'Ò Morsel Goûter (ÒMG)',
    role: 'Digital Design · UI/UX · Migration Support',
    year: '2024–Present',
    description: [
      'Ò Morsel Goûter was transitioning its direct-to-consumer storefront from WordPress to Shopify.',
      'The move was more than a platform change. It was an opportunity to create a cleaner, more consistent digital experience around the brand’s growing wellness identity while making the storefront easier to manage and scale.',
      'I was part of the wider migration process, contributing to the visual direction, website structure, digital assets and quality checks throughout the transition.',
    ],
    stack: ['Shopify', 'Figma', 'HTML', 'SEO', 'Analytics'],
    accent: '#4c805c',
    image: omgHeroImg,
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
    stack: ['Photoshop', 'HTML/CSS/JS', 'AI-assisted exploration'],
    accent: '#8f2d38',
    image: sgfProductsImg,
  },
  {
    slug: 'morfiizo-partner-portal',
    tag: 'INTERNAL SYSTEM · PRODUCT DESIGN · AI-ASSISTED DEV',
    title: 'Morfiizo Enterprise Partner & Distributor Portal',
    summary:
      'An internal business platform designed around partner, distributor, sales, vendor, scheme, and business operations — developed collaboratively with the senior full-stack developer.',
    brand: 'Morfiizo Enterprise',
    role: 'Product & Frontend Contributor',
    collaboration: 'Senior Full-Stack Developer / CEO',
    year: '2024–Present',
    focus: 'UI/UX · Frontend · Module Planning · AI-Assisted Development',
    description: [
      'Morfiizo Enterprise needed more than a collection of disconnected operational tools. The goal was to create a single internal platform that could bring different parts of the business into one structured digital environment.',
      'I worked closely with the senior full-stack developer and CEO throughout the process, contributing to the frontend design, interface planning, module structure, responsive behavior, and iterative refinements.',
      'The result was a complete internal business platform with authentication, operational dashboards, partner and distributor management, sales visibility, vendor information, scheme management, and business-level reporting.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'AI-Assisted Coding'],
    accent: '#3b82f6',
    customPreview: 'dashboard',
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
