import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import sgfProductsImg from '../assets/sgf-products.jpg';
import sgfTshirtImg from '../assets/sgf-tshirt-sheet.jpg';

const galleryItems = [
  {
    number: '01',
    title: 'Product Range & Packaging',
    tag: 'Packaging Design',
    format: 'packaging',
    image: sgfProductsImg,
    caption: 'Everyday household food range spanning Soya Chunks, Spiral Pasta, Seviyan Vermicelli, Heart Papad and Badminton Papad.',
  },
  {
    number: '02',
    title: 'Corporate Apparel & Team Wear',
    tag: 'Brand Extension',
    format: 'apparel',
    image: sgfTshirtImg,
    caption: 'Official corporate uniform T-shirt design sheet detailing front, back, side views, garment specs and brand Pantone references.',
  },
  {
    number: '03',
    title: 'Packaging Structure & SKU Detail',
    tag: 'Visual Hierarchy',
    format: 'packaging',
    image: sgfProductsImg,
    caption: 'Distinctive packaging compositions balancing local Bengali flavor callouts with appetizing culinary staging and clear product hierarchy.',
  },
];

function SgfGallery({ label }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

  const move = (direction) => {
    setActive((current) => (current + direction + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[active];

  return (
    <div className="sgf-gallery" aria-label={label}>
      <div
        className="sgf-gallery-stage"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') move(-1);
          if (event.key === 'ArrowRight') move(1);
        }}
        onTouchStart={(event) => {
          touchStart.current = event.changedTouches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
          touchStart.current = null;
        }}
      >
        <div className="sgf-gallery-visual-wrap" aria-live="polite">
          <div className={`sgf-gallery-image-frame frame-${currentItem.format}`}>
            <img
              key={currentItem.image}
              src={currentItem.image}
              alt={currentItem.title}
              loading="lazy"
              className={`sgf-gallery-image img-${currentItem.format}`}
            />
          </div>
        </div>
      </div>

      <div className="sgf-gallery-footer">
        <p className="caption gallery-caption">
          <span className="mono">{currentItem.number} · {currentItem.tag}</span> — {currentItem.caption}
        </p>
        <div className="sgf-gallery-controls">
          <div className="sgf-thumbnails" role="tablist" aria-label={`${label} views`}>
            {galleryItems.map((item, index) => (
              <button
                key={item.number}
                className={`sgf-thumb${active === index ? ' active' : ''}`}
                onClick={() => setActive(index)}
                role="tab"
                aria-selected={active === index}
                aria-label={`Show ${item.title}`}
              >
                <span>{item.number}</span>
                {item.title}
              </button>
            ))}
          </div>
          <div className="sgf-gallery-arrows">
            <button
              className="gallery-arrow"
              onClick={() => move(-1)}
              aria-label="Previous image"
            >
              ←
            </button>
            <span className="caption">
              {String(active + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
            </span>
            <button
              className="gallery-arrow"
              onClick={() => move(1)}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SgfCaseStudy({ project, next }) {
  const decisions = [
    {
      num: '01',
      title: 'LOCAL RECOGNITION',
      copy: 'Visual cues needed to feel relevant to the West Bengal market and everyday household context.',
    },
    {
      num: '02',
      title: 'PREMIUM PERCEPTION',
      copy: 'The brand needed to communicate quality without becoming inaccessible or overly luxurious.',
    },
    {
      num: '03',
      title: 'PRODUCT CLARITY',
      copy: 'Packaging and catalogue layouts needed to make products immediately understandable.',
    },
    {
      num: '04',
      title: 'SYSTEM THINKING',
      copy: 'Different products and touchpoints needed to feel connected rather than individually designed.',
    },
  ];

  const systemPillars = [
    {
      title: 'Typography',
      desc: 'Bold, structured display lettering paired with clear bilingual nutritional hierarchies.',
    },
    {
      title: 'Colour Palette',
      desc: 'Heritage Burgundy/Maroon foundation accented with vibrant culinary yellows, greens and gold.',
    },
    {
      title: 'Logo Treatment',
      desc: 'Distinctive bowl flame emblem establishing instant brand recall across packaging and sales collateral.',
    },
    {
      title: 'Product Hierarchy',
      desc: 'Clear distinction between staples (Soya, Vermicelli, Pasta) and playful specialty snacks (3D Papad).',
    },
    {
      title: 'Visual Elements',
      desc: 'Wholesome culinary photography, ingredient callouts, and localized Bengali benefit badges.',
    },
    {
      title: 'Layout Structure',
      desc: 'Consistent architectural grid adaptable from flexible pouches to digital catalogue spreads.',
    },
  ];

  return (
    <article className="section page-head-section sgf-case-study">
      <div className="container">
        {/* Back Link */}
        <Reveal>
          <Link to="/projects" className="back-link mono">
            ← All projects
          </Link>
        </Reveal>

        {/* Hero Header */}
        <Reveal delay={60} className="project-detail-head">
          <span className="eyebrow">BRAND SYSTEM · DIGITAL EXPERIENCE</span>
          <h1 className="display-lg">SGF Brand System & Digital Catalogue</h1>
          <p className="subhead">
            Building a familiar yet premium visual language for an everyday-food brand — from the pack on the shelf to the catalogue in a sales meeting.
          </p>
        </Reveal>

        {/* Metadata Grid */}
        <Reveal delay={120} className="project-detail-meta">
          <div>
            <p className="caption">Brand</p>
            <p className="body-sm">{project?.brand || 'Simple Good Foods'}</p>
          </div>
          <div>
            <p className="caption">Role</p>
            <p className="body-sm">{project?.role || 'Brand Design · Packaging · UI/UX · Frontend'}</p>
          </div>
          <div>
            <p className="caption">Year</p>
            <p className="body-sm">{project?.year || '2024–Present'}</p>
          </div>
          <div>
            <p className="caption">Tools</p>
            <p className="body-sm">Photoshop · HTML/CSS/JS · AI-assisted exploration</p>
          </div>
        </Reveal>

        {/* Hero Product Visual */}
        <Reveal delay={160} className="sgf-hero-visual-frame">
          <div className="sgf-hero-stage">
            <img
              src={sgfProductsImg}
              alt="Simple Good Foods (SGF) Product Packaging Range"
              className="sgf-hero-img"
            />
          </div>
        </Reveal>

        {/* The Context & Design Thinking */}
        <div className="sgf-story">
          <section className="sgf-story-section">
            <span className="eyebrow">The Context</span>
            <h2 className="display-md">A familiar brand, held to a higher standard.</h2>
            <p className="body-lg">
              Simple Good Foods (SGF) is an everyday-food brand serving products designed for the local household market in West Bengal — from soya chunks and pasta to distinctive 3D papad formats.
            </p>
            <p className="body-lg">
              The challenge was not simply to make the products look attractive. The brand needed to feel familiar enough for a local consumer to immediately understand, while still communicating the quality and care behind the products.
            </p>
            <p className="body-lg">
              That balance became the starting point for the visual direction.
            </p>
          </section>

          <section className="sgf-story-section">
            <span className="eyebrow">Design Thinking</span>
            <h2 className="display-md">Familiar, But Not Ordinary.</h2>
            <p className="body-lg">
              For an everyday-food brand, familiarity matters.
            </p>
            <p className="body-lg">
              The visual language needed to feel approachable and recognisable within the local market, without falling into the visual conventions of a generic mass-market food label.
            </p>
            <p className="body-lg">
              I explored a balance between familiar food cues, strong product communication and more considered typography, colour and composition.
            </p>
            <div className="sgf-intent-list">
              <div className="sgf-intent-item">
                <span className="caption mono">INTENTION 01</span>
                <strong>Make the product easy to recognise.</strong>
              </div>
              <div className="sgf-intent-item">
                <span className="caption mono">INTENTION 02</span>
                <strong>Make the brand easy to remember.</strong>
              </div>
              <div className="sgf-intent-item">
                <span className="caption mono">INTENTION 03</span>
                <strong>Make the overall experience feel more premium.</strong>
              </div>
            </div>
          </section>
        </div>

        {/* Packaging Design Section & Gallery */}
        <Reveal className="sgf-process">
          <span className="eyebrow">Packaging Direction</span>
          <h2 className="display-md">Designing the Shelf Before Designing the Screen</h2>
          <p className="body-lg">
            The packaging became one of the first places where the visual system had to work.
          </p>
          <p className="body-lg">
            Each product needed its own identity while still feeling like part of the same family. I worked on packaging compositions, product hierarchy, visual elements and presentation with the larger product range in mind — so that individual SKUs could stand apart without losing the SGF identity.
          </p>

          <SgfGallery label="SGF Packaging and Product Showcase" />
        </Reveal>

        {/* Visual System Section */}
        <Reveal className="sgf-visual-system-section">
          <div className="section-head">
            <span className="eyebrow">System Architecture</span>
            <h2 className="display-md">One Brand. Different Products.</h2>
            <p className="body-lg">
              Consistency comes through deliberate rules across typography, colour, logo treatment, product hierarchy, visual elements and layout structure.
            </p>
          </div>

          <div className="sgf-system-grid">
            {systemPillars.map((pillar, idx) => (
              <div className="sgf-system-card" key={idx}>
                <span className="caption mono">0{idx + 1} / SYSTEM PILLAR</span>
                <h3 className="card-title">{pillar.title}</h3>
                <p className="body-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Digital Catalogue Section */}
        <Reveal className="sgf-catalogue-story">
          <div>
            <span className="eyebrow">Digital Product</span>
            <h2 className="display-md">Turning a Catalogue into a Sales Tool</h2>
            <p className="body-lg">
              The product range also needed a better way to be presented beyond individual packaging.
            </p>
            <p className="body-lg">
              The existing sales material was static and slower to navigate during distributor and trade conversations.
            </p>
            <p className="body-lg">
              I designed and built an interactive digital catalogue that turned the product range into a more engaging browsing experience.
            </p>
            <p className="body-lg">
              Instead of treating the catalogue as a document, I approached it as a lightweight digital product — designed to be easy to navigate, visually consistent and practical during real sales conversations.
            </p>
          </div>

          <div className="sgf-catalogue-callout">
            <span className="caption mono">SALES EXPERIENCE WORKFLOW</span>
            <div className="sgf-catalogue-flow">
              <div className="sgf-cat-node">
                <strong>01 / Catalogue Cover</strong>
                <span className="body-sm">Brand introduction & category index</span>
              </div>
              <div className="sgf-cat-arrow">↓</div>
              <div className="sgf-cat-node">
                <strong>02 / Product Range</strong>
                <span className="body-sm">Scannable household portfolio</span>
              </div>
              <div className="sgf-cat-arrow">↓</div>
              <div className="sgf-cat-node">
                <strong>03 / Product Detail</strong>
                <span className="body-sm">SKU specifications & pack sizes</span>
              </div>
              <div className="sgf-cat-arrow">↓</div>
              <div className="sgf-cat-node">
                <strong>04 / Interactive Flipbook</strong>
                <span className="body-sm">Fluid distributor browsing on mobile & tablet</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Why the Digital Experience Mattered */}
        <Reveal className="sgf-technical">
          <div>
            <span className="eyebrow">Business Impact</span>
            <h2 className="display-md">From Static Information to a Conversation Tool</h2>
            <p className="body-lg">
              A catalogue is useful only when information can be found quickly.
            </p>
            <p className="body-lg">
              The digital version was designed around the way distributors and sales teams actually use product information — browsing a range, comparing products and presenting them during a conversation.
            </p>
            <p className="body-lg">
              That shifted the focus from simply displaying products to designing a more usable sales experience.
            </p>
          </div>

          <div className="sgf-systems">
            <div className="sgf-system-node">
              <span className="caption mono">01 · RAPID RETRIEVAL</span>
              <strong>Instant SKU & pack size reference during trade meetings</strong>
            </div>
            <div className="sgf-system-node">
              <span className="caption mono">02 · BRAND CONTINUITY</span>
              <strong>Consistent visual presentation across physical and digital touchpoints</strong>
            </div>
            <div className="sgf-system-node">
              <span className="caption mono">03 · PORTABLE PRODUCT</span>
              <strong>Responsive web deployment accessible on any distributor device</strong>
            </div>
          </div>
        </Reveal>

        {/* T-Shirt / Brand Extension */}
        <Reveal className="sgf-apparel-section">
          <div className="section-head">
            <span className="eyebrow">Brand Extension</span>
            <h2 className="display-md">Extending the Brand Beyond Packaging</h2>
            <p className="body-lg">
              The same visual language was extended into corporate apparel for the SGF team.
            </p>
            <p className="body-lg">
              The objective was not to create a separate promotional design, but to carry the brand's existing colour, typography and identity into a physical team touchpoint.
            </p>
          </div>

          <div className="sgf-tshirt-showcase">
            <img
              src={sgfTshirtImg}
              alt="SGF Corporate Uniform T-Shirt Design Sheet — Front, Back, Side Views and Specifications"
              className="sgf-tshirt-img"
            />
          </div>
        </Reveal>

        {/* Design Decisions */}
        <section className="sgf-decisions">
          <div className="sgf-decisions-head">
            <span className="eyebrow">Editorial Framework</span>
            <h2 className="display-md">The Design Decisions</h2>
          </div>
          <div className="sgf-decision-grid">
            {decisions.map((item) => (
              <article className="sgf-decision" key={item.num}>
                <span className="caption">{item.num}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="body-sm">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* AI-assisted Workflow */}
        <Reveal className="sgf-ai">
          <span className="eyebrow">Exploration Process</span>
          <h2 className="display-md">Exploring Faster, Designing Deliberately</h2>
          <p className="body-lg">
            Generative AI became part of the exploration process — helping me test visual references, explore compositions and develop supporting imagery faster.
          </p>
          <p className="body-lg">
            The final design decisions remained grounded in brand context, usability and practical production requirements.
          </p>
        </Reveal>

        {/* Frontend Section */}
        <Reveal className="sgf-learning">
          <span className="eyebrow">Frontend Implementation</span>
          <h2 className="display-md">Where Brand Design Meets Frontend</h2>
          <p className="body-lg">
            The catalogue was not only designed; it was built as an interactive web experience.
          </p>
          <p className="body-lg">
            Working across the visual system and the frontend gave me a practical understanding of how design decisions translate into layout, interaction, responsiveness and real-world usage.
          </p>
          <p className="body-lg">
            This project helped me move from designing individual visuals toward thinking about complete digital experiences.
          </p>

          <div className="sgf-flow-pipeline" aria-label="Brand to Live Experience Flow">
            <div className="sgf-flow-node">
              <span className="mono caption">01</span>
              <strong>Brand</strong>
              <span className="body-sm">Market positioning & identity</span>
            </div>
            <div className="sgf-flow-arrow" aria-hidden="true">→</div>
            <div className="sgf-flow-node">
              <span className="mono caption">02</span>
              <strong>Design</strong>
              <span className="body-sm">Packaging & visual assets</span>
            </div>
            <div className="sgf-flow-arrow" aria-hidden="true">→</div>
            <div className="sgf-flow-node">
              <span className="mono caption">03</span>
              <strong>Interface</strong>
              <span className="body-sm">Catalogue UI & navigation layout</span>
            </div>
            <div className="sgf-flow-arrow" aria-hidden="true">→</div>
            <div className="sgf-flow-node">
              <span className="mono caption">04</span>
              <strong>Interaction</strong>
              <span className="body-sm">Flipbook dynamics & product filtering</span>
            </div>
            <div className="sgf-flow-arrow" aria-hidden="true">→</div>
            <div className="sgf-flow-node">
              <span className="mono caption">05</span>
              <strong>Live Experience</strong>
              <span className="body-sm">Sales tool for distributor meetings</span>
            </div>
          </div>
        </Reveal>

        {/* Business Problem Section (Before / After) */}
        <Reveal className="sgf-comparison-section">
          <div className="section-head">
            <span className="eyebrow">Business Context</span>
            <h2 className="display-md">The Problem Behind the Design</h2>
          </div>

          <div className="sgf-before-after-grid">
            <div className="sgf-comparison-card before-card">
              <span className="caption mono">BEFORE / THE BOTTLENECK</span>
              <ul className="sgf-comparison-list">
                <li>Static product information</li>
                <li>Slower browsing</li>
                <li>Disconnected product presentation</li>
                <li>Limited visual storytelling</li>
              </ul>
            </div>

            <div className="sgf-comparison-card after-card">
              <span className="caption mono">AFTER / THE DIGITAL TOOL</span>
              <ul className="sgf-comparison-list">
                <li>Interactive catalogue</li>
                <li>Faster product discovery</li>
                <li>Consistent product presentation</li>
                <li>Stronger brand experience</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Beyond the Interface & What I Took Forward */}
        <Reveal className="sgf-learning">
          <span className="eyebrow">Reflection & Takeaways</span>
          <h2 className="display-md">Beyond the Interface</h2>
          <p className="body-lg">
            This project sits at the intersection of design and business.
          </p>
          <p className="body-lg">
            It required thinking about how a product looks, how a customer recognises it, how a distributor presents it and how a digital experience supports the conversation around it.
          </p>
          <p className="body-lg">
            That is the kind of work I enjoy most — taking a practical business requirement and turning it into something people can actually use.
          </p>

          <div className="sgf-takeaway-block">
            <h3 className="card-title">What I Took Forward</h3>
            <p className="body-lg">
              SGF strengthened my understanding that good design is not isolated to a single screen or package. A consistent experience has to survive across physical products, digital interfaces, sales material and everyday business use.
            </p>
            <p className="body-lg">
              It also pushed me further toward frontend — understanding how the systems behind a design affect the final experience, not just how the design looks in a static frame.
            </p>
          </div>
        </Reveal>

        {/* Next Project Footer Link */}
        <Reveal className="next-project hairline-top">
          <p className="caption">Next</p>
          <Link
            to={`/projects/${next.slug}`}
            className="next-project-link"
            data-cursor="view"
          >
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
