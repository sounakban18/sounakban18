import { useRef, useEffect } from 'react';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';

const focus = [
  {
    title: 'Frontend & UI/UX',
    body: 'From wireframes to shipped interfaces — Figma through to working frontend, not just static mockups.',
  },
  {
    title: 'Brand & creative',
    body: 'Packaging, product photography, and content design for a premium D2C food brand.',
  },
  {
    title: 'Business context',
    body: 'Market research, B2B communication, and cross-functional coordination across brand, product, and operations.',
  },
  {
    title: 'Execution',
    body: 'Turning a concept into something real — coordinating with agencies, creators, and platforms like Shopify to get it shipped.',
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
      'Employee from the beginning, taking on increasing responsibility across design, brand, digital experiences, and operations.',
      'Led the end-to-end Shopify platform migration — wireframes, landing pages, responsive QA, and URL redirect mapping.',
      'Implemented on-site SEO and product metadata structure to improve organic discoverability.',
      'Ran funnel analysis and user research to prioritise conversion-rate changes, and built automated customer messaging and opt-in nurture sequences.',
    ],
  },
  {
    role: 'Early cross-functional work',
    org: 'Morfiizo Enterprise',
    period: 'Jan 2023 – Aug 2024',
    points: [
      'Started by working across UI/UX and day-to-day operations, building the context that led into broader Brand Growth & Operations responsibility.',
    ],
  },
];

export default function About() {
  const frameRef = useRef(null);
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!frameRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = frameRef.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      frameRef.current.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };

    const handleScroll = () => {
      if (!timelineRef.current || !progressRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const scrolled = windowHeight / 2 - rect.top;
      const percentage = Math.min(Math.max((scrolled / totalHeight) * 100, 0), 100);
      progressRef.current.style.height = `${percentage}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
