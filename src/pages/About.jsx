import { useRef, useEffect } from 'react';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import GitHubShowcase from '../components/GitHubShowcase';
import CertificationSection from '../components/CertificationSection';

const focus = [
  {
    title: 'Frontend & UI/UX',
    body: 'From wireframes to working interface — designing in context, then shipping the experience with intentional product thinking.',
  },
  {
    title: 'AI-assisted building',
    body: 'Using AI tools as part of the workflow to prototype faster, test ideas earlier, and move from concept to usable frontend more quickly.',
  },
  {
    title: 'Brand & business context',
    body: 'Connecting design with market understanding, B2B communication, and the operational realities behind a growing business.',
  },
  {
    title: 'Execution',
    body: 'Turning an idea into something real across packaging, storefronts, campaigns, and website touchpoints that need to hold up in practice.',
  },
];

const skillGroups = [
  {
    title: 'Design',
    items: ['UI/UX', 'Interaction Design', 'Visual Design', 'Design Systems', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Frontend',
    items: ['Frontend Development', 'Responsive Design', 'Web Interfaces', 'Shopify'],
  },
  {
    title: 'Brand & Creative',
    items: ['Brand Identity', 'Packaging', 'Product Photography', 'Content Design'],
  },
  {
    title: 'Business',
    items: ['Brand Building', 'Business Understanding', 'Market Research', 'Cross-functional Coordination', 'B2B Communication'],
  },
];

const tools = ['Figma', 'Canva', 'Adobe Photoshop', 'Shopify', 'Generative AI Tools'];

const credentials = [
  { label: 'Advanced Diploma, Software & Web Application Development', detail: 'IISDT · Nov 2025 – Apr 2026' },
  { label: 'Bachelor of Commerce (B.Com)', detail: 'City College of Commerce & Business Administration, Kolkata · 2022 – 2025' },
  { label: 'Generative AI Mastermind', detail: 'Outskill' },
  { label: 'Digital Marketing Fundamentals', detail: 'IIDE' },
];

const experience = [
  {
    role: 'Brand Growth & Operations Executive',
    org: 'Morfiizo Enterprise',
    period: 'Aug 2024 – Present',
    points: [
      'Took on growing responsibility across brand, design, digital experience, and operations in a business that was still shaping its systems and processes.',
      'Led the end-to-end Shopify migration — landing pages, responsive QA, URL mapping, and product information structure for a cleaner customer journey.',
      'Worked across conversion and product communication, improving SEO structure, storefront clarity, and the operational flow behind sales and fulfilment.',
      'Used AI-assisted workflows to prototype faster, iterate on ideas quickly, and support product thinking without losing the practical realities of the business.',
    ],
  },
  {
    role: 'Early cross-functional foundation',
    org: 'Morfiizo Enterprise',
    period: 'Jan 2023 – Aug 2024',
    points: [
      'Started by working across UI/UX and day-to-day operations, which gave me a grounded understanding of how brand, product, and business decisions actually connect in practice.',
      'That work became the foundation for taking on more ownership in storefront, packaging, digital content, and process-driven execution.',
    ],
  },
];

export default function About() {
  const frameRef = useRef(null);
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handlePointerMove = (event) => {
      const { left, top, width, height } = frame.getBoundingClientRect();
      const x = (event.clientX - (left + width / 2)) / (width / 2);
      const y = (event.clientY - (top + height / 2)) / (height / 2);
      const rotateY = Math.max(-4, Math.min(4, x * 4));
      const rotateX = Math.max(-4, Math.min(4, -y * 4));

      frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    };

    const handlePointerLeave = () => {
      frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    };

    frame.addEventListener('pointermove', handlePointerMove);
    frame.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      frame.removeEventListener('pointermove', handlePointerMove);
      frame.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !progressRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const scrolled = windowHeight / 2 - rect.top;
      const percentage = Math.min(Math.max((scrolled / totalHeight) * 100, 0), 100);
      progressRef.current.style.height = `${percentage}%`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="section page-head-section about-hero">
        <div className="container about-hero-grid">
          <Reveal className="about-hero-interactive">
            <div className="portrait-frame" ref={frameRef} data-cursor="view">
              <div className="about-hero-image-wrap">
                <Photo ratio="3 / 4" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="about-hero-copy">
            <span className="eyebrow">About</span>
            <h1 className="display-lg">Sounak Banerjee</h1>
            <p className="subhead">
              Frontend designer working across UI/UX and digital experiences —
              shaped by hands-on work inside Morfiizo Enterprise, a growing FMCG business.
            </p>
            <p className="body-lg">
              I joined Morfiizo Enterprise at the beginning and grew into a Brand
              Growth &amp; Operations role. Along the way I worked across two food brands —{' '}
              <strong>Simple Good Foods (SGF)</strong>, sold through
              distributors, and <strong>ÒMG (Ò Morsel Goûter)</strong>, a
              premium D2C brand — covering frontend and UI/UX, brand and
              packaging, content, and the operational work needed to keep
              both moving.
            </p>
            <p className="body-lg">
              That range is where the business instinct comes from. I&rsquo;ve
              sat close enough to brand, product, and operations to know a
              design decision doesn&rsquo;t stop at the screen — it lands
              somewhere in the business too.
            </p>
            <p className="body-lg mono location">Based in Kolkata.</p>
            <a className="about-linkedin" href="https://linkedin.com/in/sounak-banerjee-a5292b183/" target="_blank" rel="noopener noreferrer" data-cursor="open">
              <span className="caption">Professional profile</span>
              <span className="body-sm">Connect on LinkedIn <span aria-hidden="true">↗</span></span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Experience</span>
            <h2 className="display-md">From early responsibility to owning growth and operations.</h2>
          </Reveal>
          <div className="about-timeline" ref={timelineRef}>
            <div className="about-timeline-progress" ref={progressRef} />
            {experience.map((job, i) => (
              <Reveal
                as="div"
                key={job.role}
                delay={i * 80}
                className="about-timeline-item"
              >
                <div className="timeline-meta">
                  <p className="caption">{job.period}</p>
                  <p className="body-sm">{job.org}</p>
                </div>
                <div className="timeline-body">
                  <h3 className="card-title">{job.role}</h3>
                  <ul className="timeline-points">
                    {job.points.map((pt) => (
                      <li key={pt} className="body-sm">{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What I do</span>
            <h2 className="display-md">Design work that accounts for what surrounds it.</h2>
          </Reveal>
          <div className="about-focus-grid">
            {focus.map((f, i) => (
              <Reveal as="div" key={f.title} delay={i * 60} className="about-focus-module" data-cursor="view">
                <p className="mono module-index">0{i + 1}</p>
                <h3 className="card-title">{f.title}</h3>
                <p className="body-sm">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Skills</span>
            <h2 className="display-md">Organised by capability, not a software list.</h2>
          </Reveal>
          <div className="about-skill-clusters">
            {skillGroups.map((group, gi) => (
              <Reveal as="div" key={group.title} delay={gi * 60} className="about-skill-cluster" data-cursor="view">
                <span className="cluster-title">{group.title}</span>
                <div className="about-skill-tags">
                  {group.items.map((s) => (
                    <span key={s} className="about-skill-tag mono">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240} className="tools-row">
            <p className="caption">Tools</p>
            <p className="body-sm">{tools.join(' · ')}</p>
          </Reveal>
        </div>
      </section>

      <GitHubShowcase />

      <CertificationSection />

      <section className="section">
        <div className="container about-split">
          <Reveal className="about-split-col">
            <span className="eyebrow">Credentials</span>
            <ul className="credential-list">
              {credentials.map((c) => (
                <li key={c.label} className="credential-item hairline-top">
                  <p className="body-sm">{c.label}</p>
                  {c.detail && <p className="caption">{c.detail}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="about-split-col">
            <span className="eyebrow">By the numbers</span>
            <div className="about-metrics-grid">
              <div className="about-metric-item">
                <StatCounter value={2} valueClassName="about-metric-value" />
                <span className="about-metric-label">FMCG brands</span>
              </div>
              <div className="about-metric-item">
                <StatCounter value={5} valueClassName="about-metric-value" />
                <span className="about-metric-label">Projects shipped</span>
              </div>
              <div className="about-metric-item">
                <StatCounter value={3} valueClassName="about-metric-value" />
                <span className="about-metric-label">Person team</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
