import PlaceholderArt from '../components/PlaceholderArt';
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
  { label: 'B.Com', detail: 'Calcutta University' },
  { label: 'Adv. Diploma, Software & Web Application Development' },
  { label: 'Digital Marketing Certification', detail: 'IIDE' },
  { label: 'Generative AI Certification', detail: 'Outskill' },
];

export default function About() {
  return (
    <>
      <section className="section page-head-section">
        <div className="container about-hero-grid">
          <Reveal className="about-hero-art">
            <PlaceholderArt label="Sounak Banerjee" ratio="3 / 4" dense />
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
              <StatCounter value={4} label="Tools shipped" />
              <StatCounter value={3} label="Person team" />
              <StatCounter value={5} suffix="yr" label="Financial model horizon" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
