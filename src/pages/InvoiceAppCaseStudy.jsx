import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

import dashboardImg from '../assets/Screenshot 2026-08-31 151501.png';
import settingsImg from '../assets/Screenshot 2026-08-31 151532.png';
import listingImg from '../assets/Screenshot 2026-08-31 151548.png';
import outputImg from '../assets/Screenshot 2026-08-31 151617.png';

const galleryItems = [
  {
    number: '01',
    title: 'Dashboard',
    tag: 'Overview',
    image: dashboardImg,
    caption: 'At-a-glance invoice status and recent activity.',
  },
  {
    number: '02',
    title: 'Business Profile',
    tag: 'Configuration',
    image: settingsImg,
    caption: 'Business information stays configurable inside the application.',
  },
  {
    number: '03',
    title: 'Invoice Management',
    tag: 'Administration',
    image: listingImg,
    caption: 'Search, review, duplicate and manage invoice records.',
  },
  {
    number: '04',
    title: 'Invoice Output',
    tag: 'Delivery',
    image: outputImg,
    caption: 'Export, print or share an invoice directly from the workflow.',
  },
];

function InvoiceGallery({ label }) {
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
          <div className="sgf-gallery-image-frame">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              loading="lazy"
              className="sgf-gallery-image"
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

export default function InvoiceAppCaseStudy({ project, next }) {
  const learningPoints = [
    {
      num: '01',
      title: 'Supabase Integration',
      desc: 'Connecting a lightweight frontend to a real backend database.',
    },
    {
      num: '02',
      title: 'Authentication',
      desc: 'Restricting access so the application data remains available only to the intended user.',
    },
    {
      num: '03',
      title: 'Data Management',
      desc: 'Persisting invoices and business information instead of relying on temporary/manual records.',
    },
    {
      num: '04',
      title: 'Performance Thinking',
      desc: 'Keeping the application lightweight and responsive without introducing unnecessary frameworks.',
    },
    {
      num: '05',
      title: 'AI-Assisted Development',
      desc: 'Using AI tools as part of the build, testing and refinement workflow.',
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
          <span className="eyebrow">PRODUCT · FRONTEND · BACKEND</span>
          <h1 className="display-lg">Invoice App for a Store</h1>
          <p className="subhead">
            A practical, lightweight invoice-management web app created to solve a real business workflow problem.
          </p>
        </Reveal>

        {/* Metadata Grid */}
        <Reveal delay={120} className="project-detail-meta">
          <div>
            <p className="caption">Brand</p>
            <p className="body-sm">Personal Project</p>
          </div>
          <div>
            <p className="caption">Role</p>
            <p className="body-sm">Product Workflow · Frontend Implementation · Supabase Integration</p>
          </div>
          <div>
            <p className="caption">Year</p>
            <p className="body-sm">2026</p>
          </div>
          <div>
            <p className="caption">Tools</p>
            <p className="body-sm">HTML · CSS · JavaScript · Supabase · Stitch</p>
          </div>
        </Reveal>

        {/* Hero Image */}
        <Reveal delay={160} className="sgf-hero-visual-frame">
          <div className="sgf-hero-stage">
            <img
              src={dashboardImg}
              alt="Invoice App Dashboard"
              className="sgf-hero-img"
            />
          </div>
        </Reveal>

        {/* The Problem */}
        <div className="sgf-story">
          <section className="sgf-story-section">
            <span className="eyebrow">01 — THE PROBLEM</span>
            <h2 className="display-md">From Manual Bills to an On-the-Go Invoice Workflow</h2>
            <p className="body-lg">
              The business relied heavily on manually created invoices. That created a simple but frustrating problem: if a bill was forgotten or unavailable when needed, creating and sharing an invoice immediately was difficult.
            </p>
            <p className="body-lg">
              Because the business operated online, a lightweight mobile-friendly solution made more sense than depending entirely on physical/manual invoices.
            </p>
          </section>

          <section className="sgf-story-section">
            <span className="eyebrow">02 — THE APPROACH</span>
            <h2 className="display-md">A Small Tool Built Around a Real Workflow</h2>
            <p className="body-lg">
              Instead of adding unnecessary complexity, the application focused on the essential workflow: Create → Store → Track → Export → Share.
            </p>
            <p className="body-lg">
              The interface was intentionally minimal and functional, built using HTML, CSS, and JavaScript, with Supabase handling authentication and database storage. The project also involved initial prototype exploration using Stitch and an AI-assisted development workflow.
            </p>
          </section>
        </div>

        {/* Product Experience / Gallery */}
        <Reveal className="sgf-process">
          <span className="eyebrow">03 — PRODUCT EXPERIENCE</span>
          <h2 className="display-md">Designed Around the Everyday Invoice Workflow</h2>
          <p className="body-lg">
            The application transforms the manual invoicing process into a streamlined digital experience.
          </p>
          <InvoiceGallery label="Invoice App Workflow Showcase" />
        </Reveal>

        {/* Technical Learning */}
        <Reveal className="sgf-visual-system-section">
          <div className="section-head">
            <span className="eyebrow">04 — TECHNICAL LEARNING</span>
            <h2 className="display-md">What This Project Taught Me</h2>
            <p className="body-lg">
              Beyond the final product, this project was a study in turning a real-world business problem into a usable software workflow.
            </p>
          </div>

          <div className="sgf-system-grid">
            {learningPoints.map((point, idx) => (
              <div className="sgf-system-card" key={idx}>
                <span className="caption mono">{point.num} / LEARNING</span>
                <h3 className="card-title">{point.title}</h3>
                <p className="body-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Role / Contribution */}
        <Reveal className="sgf-learning">
          <div className="sgf-takeaway-block">
            <span className="eyebrow">MY CONTRIBUTION</span>
            <h3 className="card-title">Role & Impact</h3>
            <p className="body-lg">
              I worked on the practical product workflow, frontend implementation, Supabase integration and iterative refinement of the application. The project gave me hands-on exposure to connecting a lightweight frontend with authentication and database-backed functionality while solving a real business requirement.
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
