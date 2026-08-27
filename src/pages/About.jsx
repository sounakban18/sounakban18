import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';

const focus = [
  {
    title: 'Product & interface design',
    body: 'Interaction design and UI for internal tools and customer-facing surfaces — catalogues, dashboards, document generators.',
  },
  {
    title: 'Frontend build',
    body: 'I ship what I design. HTML/CSS/JS, React where the complexity earns it, dependency-free where portability matters more.',
  },
  {
    title: 'Financial systems',
    body: 'Pricing engines, working capital models, and multi-year projection workbooks anchored to real bank data.',
  },
  {
    title: 'Brand & marketing',
    body: 'Brand governance across two FMCG lines — consistency, claims, and positioning across D2C and trade channels.',
  },
  {
    title: 'Operations',
    body: 'Distribution frameworks, QC parameters, and the day-to-day process work that keeps two brands running.',
  },
];

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
      'Led the end-to-end Shopify platform migration — wireframes, landing pages, responsive QA, and URL redirect mapping.',
      'Implemented on-site SEO and product metadata structure to improve organic discoverability.',
      'Ran funnel analysis and user research to prioritise conversion-rate changes, and built automated customer messaging and opt-in nurture sequences.',
    ],
  },
  {
    role: 'UI/UX & Operations Intern',
    org: 'Morfiizo Enterprise',
    period: 'Jan 2023 – Aug 2024',
    points: [
      'Early groundwork across UI/UX and day-to-day operations, before moving into the Growth & Operations role.',
    ],
  },
];

const skills = [
  'UI/UX Design', 'Figma', 'Canva', 'Adobe Photoshop', 'Generative AI Tools',
  'Wireframing', 'Shopify Architecture', 'Responsive QA Testing', 'URL Redirects',
  'On-site SEO', 'Conversion Rate Optimization', 'Funnel Analysis', 'Metadata Optimization',
];

export default function About() {
  return (
    <>
      <section className="section page-head-section">
        <div className="container about-hero-grid">
          <Reveal className="about-hero-art">
            <Photo ratio="3 / 4" />
          </Reveal>
          <Reveal delay={100} className="about-hero-copy">
            <span className="eyebrow">About</span>
            <h1 className="display-lg">Sounak Banerjee</h1>
            <p className="subhead">
              Co-founder, Morfiizo Enterprise — a partnership firm in West Bengal
              running two FMCG food brands.
            </p>
            <p className="body-lg">
              Morfiizo operates <strong>Simple Good Foods (SGF)</strong>, a
              B2B/distributor-focused volume brand, and{' '}
              <strong>ÒMG (Ò Morsel Goûter)</strong>, a premium D2C and
              marketplace brand. I work hands-on across operations, finance,
              marketing, product, and systems — and build the internal tools,
              financial models, and digital assets myself rather than
              outsourcing the parts I can move fastest on.
            </p>
            <p className="body-lg">Based in Kolkata.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Experience</span>
            <h2 className="display-md">From intern to running the growth function.</h2>
          </Reveal>
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal as="div" key={job.role} delay={i * 80} className="timeline-item hairline-top">
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
            <h2 className="display-md">Five disciplines, one small team.</h2>
          </Reveal>
          <div className="focus-grid">
            {focus.map((f, i) => (
              <Reveal as="div" key={f.title} delay={i * 60} className="focus-card card">
                <p className="mono focus-index">0{i + 1}</p>
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
            <span className="eyebrow">Toolkit</span>
            <h2 className="display-md">Skills &amp; tools.</h2>
          </Reveal>
          <div className="skill-cloud">
            {skills.map((s, i) => (
              <Reveal as="span" key={s} delay={i * 30} className="skill-pill mono">
                {s}
              </Reveal>
            ))}
          </div>
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
            <div className="stat-row stat-row-wrap">
              <StatCounter value={2} label="FMCG brands" />
              <StatCounter value={5} label="Projects shipped" />
              <StatCounter value={3} label="Person team" />
              <StatCounter value={5} suffix="yr" label="Financial model horizon" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
