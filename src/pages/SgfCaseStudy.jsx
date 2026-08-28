import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const galleryItems = [
  ['01', 'Product range'],
  ['02', 'Packaging detail'],
  ['03', 'Individual SKU'],
  ['04', 'Visual system'],
];

function SgfGallery({ label }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

  const move = (direction) => {
    setActive((current) => (current + direction + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="sgf-gallery" aria-label={label}>
      <div
        className="sgf-gallery-stage"
        tabIndex="0"
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') move(-1);
          if (event.key === 'ArrowRight') move(1);
        }}
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
          touchStart.current = null;
        }}
      >
        <div className="sgf-gallery-visual" aria-live="polite">
          <span className="eyebrow">SGF / {galleryItems[active][0]}</span>
          <strong>{galleryItems[active][1]}</strong>
          <span className="body-sm">Source artwork not attached in this workspace.</span>
        </div>
      </div>
      <div className="sgf-gallery-controls">
        <div className="sgf-thumbnails" role="tablist" aria-label={`${label} views`}>
          {galleryItems.map(([number, title], index) => (
            <button
              key={number}
              className={`sgf-thumb${active === index ? ' active' : ''}`}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={active === index}
              aria-label={`Show ${title}`}
            >
              <span>{number}</span>{title}
            </button>
          ))}
        </div>
        <div className="sgf-gallery-arrows">
          <button className="gallery-arrow" onClick={() => move(-1)} aria-label="Previous gallery item">←</button>
          <span className="caption">{String(active + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}</span>
          <button className="gallery-arrow" onClick={() => move(1)} aria-label="Next gallery item">→</button>
        </div>
      </div>
    </div>
  );
}

export default function SgfCaseStudy({ project, next }) {
  const decisions = [
    ['01', 'Local recognition', 'Visual cues needed to feel relevant to the West Bengal market and everyday household context.'],
    ['02', 'Premium perception', 'The brand needed to communicate quality without becoming inaccessible or overly luxurious.'],
    ['03', 'Product clarity', 'Packaging and catalogue layouts needed to make products immediately understandable.'],
    ['04', 'System thinking', 'Different products and touchpoints needed to feel connected rather than individually designed.'],
  ];

  return (
    <article className="section page-head-section sgf-case-study">
      <div className="container">
        <Reveal><Link to="/projects" className="back-link mono">← All projects</Link></Reveal>
        <Reveal delay={60} className="project-detail-head">
          <span className="eyebrow">BRAND SYSTEM · DIGITAL EXPERIENCE</span>
          <h1 className="display-lg">{project.title}</h1>
          <p className="subhead">Building a familiar yet premium visual language for an everyday-food brand — from the pack on the shelf to the catalogue in a sales meeting.</p>
        </Reveal>
        <Reveal delay={120} className="project-detail-meta">
          <div><p className="caption">Brand</p><p className="body-sm">Simple Good Foods</p></div>
          <div><p className="caption">Role</p><p className="body-sm">{project.role}</p></div>
          <div><p className="caption">Year</p><p className="body-sm">{project.year}</p></div>
          <div><p className="caption">Tools</p><p className="body-sm">Photoshop · HTML/CSS/JS · AI-assisted exploration</p></div>
        </Reveal>

        <Reveal className="sgf-visual sgf-hero-visual">
          <div className="sgf-board"><span className="eyebrow">Simple Good</span><strong>Foods</strong><span className="body-sm">Everyday staples, considered.</span></div>
          <div className="sgf-board sgf-board-offset"><span className="eyebrow">Product range</span><strong>SGF</strong><span className="body-sm">Packaging / catalogue / brand</span></div>
          <div className="sgf-board"><span className="eyebrow">West Bengal</span><strong>3D<br />Papad</strong><span className="body-sm">Visual system study</span></div>
          <p className="caption sgf-asset-note">Project photography not attached in this workspace.</p>
        </Reveal>

        <div className="sgf-story">
          <section className="sgf-story-section"><span className="eyebrow">The context</span><h2 className="display-md">A familiar brand, held to a higher standard.</h2><p className="body-lg">Simple Good Foods (SGF) is an everyday-food brand serving products designed for the local household market in West Bengal — from soya chunks and pasta to distinctive 3D papad formats.</p><p className="body-lg">The challenge was not simply to make the products look attractive. The brand needed to feel familiar enough for a local consumer to immediately understand, while still communicating the quality and care behind the products.</p></section>
          <section className="sgf-story-section"><span className="eyebrow">Design thinking</span><h2 className="display-md">Familiar, But Not Ordinary.</h2><p className="body-lg">For an everyday-food brand, familiarity matters. I explored a balance between familiar food cues, strong product communication and more considered typography, colour and composition.</p><p className="body-lg">Make the product easy to recognise. Make the brand easy to remember. Make the overall experience feel more premium.</p></section>
        </div>

        <Reveal className="sgf-process"><span className="eyebrow">Packaging design</span><h2 className="display-md">Designing the Shelf Before Designing the Screen</h2><p className="body-lg">Each product needed its own identity while still feeling like part of the same family. I worked on packaging compositions, product hierarchy, visual elements and presentation with the larger product range in mind.</p><SgfGallery label="Packaging design gallery" /></Reveal>
        <Reveal className="sgf-visual"><span className="eyebrow">Visual system</span><h2 className="display-md">One Brand. Different Products.</h2><div className="sgf-range"><div className="sgf-board"><strong>Soya<br />chunks</strong><span className="caption">Type / colour / hierarchy</span></div><div className="sgf-board sgf-board-offset"><strong>Pasta</strong><span className="caption">Shared identity</span></div><div className="sgf-board"><strong>3D<br />Papad</strong><span className="caption">Distinctive SKU</span></div></div><p className="body-sm">Consistency comes through typography, colour, logo treatment, product hierarchy, visual elements and layout structure.</p></Reveal>
        <Reveal className="sgf-catalogue-story"><div><span className="eyebrow">Digital catalogue</span><h2 className="display-md">Turning a Catalogue into a Sales Tool</h2></div><div><p className="body-lg">The product range also needed a better way to be presented beyond individual packaging. I designed and built an interactive digital catalogue as a lightweight digital product — easy to navigate, visually consistent and practical during real distributor conversations.</p></div></Reveal>
        <Reveal className="sgf-technical"><div><span className="eyebrow">Why it mattered</span><h2 className="display-md">From Static Information to a Conversation Tool</h2></div><div><p className="body-lg">A catalogue is useful only when information can be found quickly. The digital version was designed around browsing a range, comparing products and presenting them during a conversation.</p><SgfGallery label="Catalogue experience gallery" /></div></Reveal>
        <Reveal className="sgf-visual sgf-apparel"><div className="sgf-touchpoint"><span className="eyebrow">SGF team</span><strong>BRAND<br />EXTENSION</strong><span className="caption">Corporate apparel / artwork not attached</span></div><div className="sgf-touchpoint sgf-touchpoint-outline"><strong>FRONT<br />BACK<br />DETAIL</strong><span className="caption">T-shirt design sheet unavailable</span></div></Reveal>
        <section className="sgf-decisions"><span className="eyebrow">Editorial system</span><h2 className="display-md">The Design Decisions</h2><div className="sgf-decision-grid">{decisions.map(([number, title, copy]) => <article className="sgf-decision" key={number}><span className="caption">{number}</span><h3 className="card-title">{title}</h3><p className="body-sm">{copy}</p></article>)}</div></section>
        <Reveal className="sgf-ai"><span className="eyebrow">AI-assisted workflow</span><h2 className="display-md">Exploring Faster, Designing Deliberately</h2><p className="body-lg">Generative AI became part of the exploration process — helping me test visual references, explore compositions and develop supporting imagery faster. The final design decisions remained grounded in brand context, usability and practical production requirements.</p></Reveal>
        <Reveal className="sgf-learning"><span className="eyebrow">Frontend</span><h2 className="display-md">Where Brand Design Meets Frontend</h2><p className="body-lg">The catalogue was not only designed; it was built as an interactive web experience. Working across the visual system and the frontend gave me a practical understanding of how design decisions translate into layout, interaction, responsiveness and real-world usage.</p><div className="sgf-flow-labels"><span>BRAND</span><b>→</b><span>DESIGN</span><b>→</b><span>INTERFACE</span><b>→</b><span>INTERACTION</span><b>→</b><span>LIVE EXPERIENCE</span></div></Reveal>
        <Reveal className="sgf-technical"><div><span className="eyebrow">Business context</span><h2 className="display-md">The Problem Behind the Design</h2></div><div className="sgf-systems"><div className="sgf-system-node">BEFORE · Static product information</div><div className="sgf-system-node">BEFORE · Slower browsing</div><div className="sgf-system-node">AFTER · Interactive catalogue</div><div className="sgf-system-node">AFTER · Faster product discovery</div></div></Reveal>
        <Reveal className="sgf-learning"><span className="eyebrow">Learning</span><h2 className="display-md">Beyond the Interface</h2><p className="body-lg">This project sits at the intersection of design and business. It required thinking about how a product looks, how a customer recognises it, how a distributor presents it and how a digital experience supports the conversation around it.</p><p className="body-lg">SGF strengthened my understanding that good design is not isolated to a single screen or package. A consistent experience has to survive across physical products, digital interfaces, sales material and everyday business use.</p></Reveal>
        <Reveal className="next-project hairline-top"><p className="caption">Next</p><Link to={`/projects/${next.slug}`} className="next-project-link" data-cursor="view">{next.title} <span aria-hidden="true">→</span></Link></Reveal>
      </div>
    </article>
  );
}
