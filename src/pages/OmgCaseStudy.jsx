import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import omgHeroImg from '../assets/omg-hero-cards.png';
import omgChiaImg from '../assets/omg-chia-benefits.png';
import omgSocialImg from '../assets/omg-social-footer.png';

const galleryItems = [
  {
    number: '01',
    title: 'Introducing Pure Goodness',
    tag: 'Hero & Visual Direction',
    image: omgHeroImg,
    caption: 'Story-driven hero cards establishing the clean, cold-pressed purity visual direction and brand tone.',
  },
  {
    number: '02',
    title: 'Health Journey & Benefits',
    tag: 'Content & Layout Structure',
    image: omgChiaImg,
    caption: 'Structured educational sections translating ingredient benefits into scannable, balanced digital layouts.',
  },
  {
    number: '03',
    title: 'Social Grid & Storefront Footer',
    tag: 'D2C Ecosystem & Navigation',
    image: omgSocialImg,
    caption: 'Instagram community showcase and complete direct-to-consumer footer hierarchy across brand channels.',
  },
];

function OmgGallery({ label }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

  const move = (direction) => {
    setActive((current) => (current + direction + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[active];

  return (
    <div className="omg-gallery" aria-label={label}>
      <div
        className="omg-gallery-stage"
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
        <div className="omg-gallery-visual-wrap" aria-live="polite">
          <div className="omg-gallery-image-frame">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              loading="lazy"
              className="omg-gallery-image"
            />
          </div>
        </div>
      </div>

      <div className="omg-gallery-footer">
        <p className="caption gallery-caption">
          <span className="mono">{currentItem.number} · {currentItem.tag}</span> — {currentItem.caption}
        </p>
        <div className="omg-gallery-controls">
          <div className="omg-thumbnails" role="tablist" aria-label={`${label} views`}>
            {galleryItems.map((item, index) => (
              <button
                key={item.number}
                className={`omg-thumb${active === index ? ' active' : ''}`}
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
          <div className="omg-gallery-arrows">
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

export default function OmgCaseStudy({ project, next }) {
  const problems = [
    {
      num: '01',
      title: 'PLATFORM TRANSITION',
      desc: 'WordPress → Shopify',
      detail: 'Moving product data, navigation, and page architectures into a clean direct-to-consumer store.',
    },
    {
      num: '02',
      title: 'RESPONSIVE CONSISTENCY',
      desc: 'Checking the experience across screen sizes and devices.',
      detail: 'Ensuring typography, image scaling, touch targets, and visual balance hold up reliably everywhere.',
    },
    {
      num: '03',
      title: 'SEARCH CONTINUITY',
      desc: 'Reviewing links, search structure and migration-related issues.',
      detail: 'Auditing page structures and URL routes to protect search indexing throughout the platform transition.',
    },
    {
      num: '04',
      title: 'MEASUREMENT',
      desc: 'Connecting Google Analytics and Search Console to the new experience.',
      detail: 'Setting up tracking property IDs and search console verification to monitor post-launch performance.',
    },
    {
      num: '05',
      title: 'TECHNICAL CLEANUP',
      desc: 'Identifying broken links and product/schema issues.',
      detail: 'Reviewing structured product data, resolving missing asset paths, and debugging live layout quirks.',
    },
  ];

  return (
    <article className="section page-head-section omg-case-study">
      <div className="container">
        {/* Back Link */}
        <Reveal>
          <Link to="/projects" className="back-link mono">
            ← All projects
          </Link>
        </Reveal>

        {/* Hero Header */}
        <Reveal delay={60} className="project-detail-head">
          <span className="eyebrow">DIGITAL EXPERIENCE · SHOPIFY MIGRATION</span>
          <h1 className="display-lg">ÒMG Shopify Platform Migration</h1>
          <p className="subhead">
            From a legacy WordPress storefront to a cleaner, more scalable Shopify experience.
          </p>
        </Reveal>

        {/* Metadata Grid */}
        <Reveal delay={120} className="project-detail-meta">
          <div>
            <p className="caption">Brand</p>
            <p className="body-sm">{project?.brand || 'Ò Morsel Goûter'}</p>
          </div>
          <div>
            <p className="caption">Role</p>
            <p className="body-sm">{project?.role || 'Digital Design · UI/UX · Migration Support'}</p>
          </div>
          <div>
            <p className="caption">Year</p>
            <p className="body-sm">{project?.year || '2024–Present'}</p>
          </div>
          <div>
            <p className="caption">Stack</p>
            <p className="body-sm">{project?.stack ? project.stack.join(' · ') : 'Shopify · Figma · HTML · SEO · Analytics'}</p>
          </div>
        </Reveal>

        {/* Hero Visual */}
        <Reveal delay={160} className="omg-hero-visual-frame">
          <div className="omg-hero-browser">
            <div className="omg-browser-bar">
              <span className="omg-browser-dot" />
              <span className="omg-browser-dot" />
              <span className="omg-browser-dot" />
              <span className="omg-browser-url mono">omorselgouter.com</span>
            </div>
            <img
              src={omgHeroImg}
              alt="ÒMG Shopify Storefront — Introducing Pure Goodness"
              className="omg-hero-img"
            />
          </div>
        </Reveal>

        {/* The Context & Contribution Story */}
        <div className="omg-story">
          <section className="omg-story-section">
            <span className="eyebrow">The Context</span>
            <h2 className="display-md">A platform change with a focus on brand clarity.</h2>
            <p className="body-lg">
              Ò Morsel Goûter was transitioning its direct-to-consumer storefront from WordPress to Shopify.
            </p>
            <p className="body-lg">
              The move was more than a platform change. It was an opportunity to create a cleaner, more consistent digital experience around the brand’s growing wellness identity while making the storefront easier to manage and scale.
            </p>
            <p className="body-lg">
              I was part of the wider migration process, contributing to the visual direction, website structure, digital assets and quality checks throughout the transition.
            </p>
          </section>

          <section className="omg-story-section">
            <span className="eyebrow">My Contribution</span>
            <h2 className="display-md">Bridging design, implementation and quality control.</h2>
            <p className="body-lg">
              My role sat between design, implementation and quality control.
            </p>
            <p className="body-lg">
              I designed and refined visual assets used across the website, contributed to page structures and helped establish a cleaner, minimal visual language suited to the brand.
            </p>
            <p className="body-lg">
              As the migration progressed, I worked through responsive QA across layouts and devices, checking whether the intended experience translated properly into the live Shopify environment.
            </p>
            <p className="body-lg">
              I also worked on the technical side of the transition — connecting Google Search Console and Google Analytics, checking search-related structure, identifying broken links and helping resolve product/schema issues.
            </p>
            <p className="body-lg">
              This was one of my early opportunities to understand that a website is not simply a collection of designed screens. It is a system where visual design, frontend structure, search visibility, analytics and business requirements have to work together.
            </p>
          </section>
        </div>

        {/* Interactive Visual Showcase Gallery */}
        <Reveal className="omg-gallery-section">
          <div className="section-head">
            <span className="eyebrow">Storefront Visuals</span>
            <h2 className="display-md">Visual Execution Across the Storefront</h2>
            <p className="body-lg">
              Key layouts and digital touchpoints designed and audited during the Shopify migration.
            </p>
          </div>
          <OmgGallery label="ÒMG Shopify Storefront Showcase" />
        </Reveal>

        {/* Design to Frontend Progression */}
        <Reveal className="omg-process">
          <span className="eyebrow">Workflow & Progression</span>
          <h2 className="display-md">From Design to a Live Experience</h2>
          <p className="body-lg">
            A design does not end in Figma.
          </p>
          <p className="body-lg">
            Working on the migration gave me practical exposure to how visual decisions translate into responsive layouts, frontend structure, content systems and a live Shopify storefront.
          </p>

          <div className="omg-flow-pipeline" aria-label="Design to Live Experience Flow">
            <div className="omg-flow-node">
              <span className="mono caption">01</span>
              <strong>Figma</strong>
              <span className="body-sm">Visual assets & layout mockups</span>
            </div>
            <div className="omg-flow-arrow" aria-hidden="true">→</div>
            <div className="omg-flow-node">
              <span className="mono caption">02</span>
              <strong>Page Structure</strong>
              <span className="body-sm">Section hierarchy & content blocks</span>
            </div>
            <div className="omg-flow-arrow" aria-hidden="true">→</div>
            <div className="omg-flow-node">
              <span className="mono caption">03</span>
              <strong>Frontend</strong>
              <span className="body-sm">Liquid templates & HTML styling</span>
            </div>
            <div className="omg-flow-arrow" aria-hidden="true">→</div>
            <div className="omg-flow-node">
              <span className="mono caption">04</span>
              <strong>Responsive QA</strong>
              <span className="body-sm">Multi-device & viewport auditing</span>
            </div>
            <div className="omg-flow-arrow" aria-hidden="true">→</div>
            <div className="omg-flow-node">
              <span className="mono caption">05</span>
              <strong>Live Experience</strong>
              <span className="body-sm">Active direct-to-consumer store</span>
            </div>
          </div>
        </Reveal>

        {/* Technical Contribution Section */}
        <Reveal className="omg-technical">
          <div>
            <span className="eyebrow">Technical Support</span>
            <h2 className="display-md">Beyond the Interface</h2>
            <p className="body-lg">
              The migration also introduced me to the systems supporting the interface.
            </p>
            <p className="body-lg">
              I worked with Google Search Console and Google Analytics, reviewed broken links and product/schema issues, and helped clean up parts of the migrated site’s technical structure.
            </p>
          </div>
          <div className="omg-systems">
            <div className="omg-system-node">
              <span className="caption mono">SEARCH CONSOLE</span>
              <strong>Indexing & Sitemap Verification</strong>
            </div>
            <div className="omg-system-node">
              <span className="caption mono">ANALYTICS SETUP</span>
              <strong>GA4 Measurement & Event Flow</strong>
            </div>
            <div className="omg-system-node">
              <span className="caption mono">TECHNICAL QA</span>
              <strong>Broken Links & Schema Remediation</strong>
            </div>
          </div>
        </Reveal>

        {/* Problems Behind the Screen */}
        <section className="omg-problems">
          <div className="omg-problems-head">
            <span className="eyebrow">Problem Solving</span>
            <h2 className="display-md">Problems Behind the Screen</h2>
          </div>
          <div className="omg-problem-grid">
            {problems.map((prob) => (
              <article className="omg-problem" key={prob.num}>
                <span className="caption">{prob.num}</span>
                <h3 className="card-title">{prob.title}</h3>
                <p className="problem-summary">{prob.desc}</p>
                <p className="body-sm">{prob.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <Reveal className="omg-learning">
          <span className="eyebrow">Reflection & Takeaways</span>
          <h2 className="display-md">What I Learned</h2>
          <p className="body-lg">
            This project became an important building block in how I approach digital work.
          </p>
          <p className="body-lg">
            I learned to look beyond the interface and understand what happens around it:
          </p>
          <div className="omg-learning-questions">
            <div className="omg-question-card">
              <span className="caption mono">01 / IMPLEMENTATION</span>
              <p>How does a design behave when implemented?</p>
            </div>
            <div className="omg-question-card">
              <span className="caption mono">02 / MIGRATION</span>
              <p>What happens to existing URLs during a migration?</p>
            </div>
            <div className="omg-question-card">
              <span className="caption mono">03 / TRACKING</span>
              <p>How do analytics and search tools connect to the experience?</p>
            </div>
            <div className="omg-question-card">
              <span className="caption mono">04 / QUALITY</span>
              <p>Where do broken links or schema issues affect the product?</p>
            </div>
            <div className="omg-question-card">
              <span className="caption mono">05 / BUSINESS</span>
              <p>How do business requirements influence design decisions?</p>
            </div>
          </div>
          <p className="body-lg omg-learning-conclusion">
            It was an early step toward the way I work today — designing with implementation and the larger business context in mind.
          </p>
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

