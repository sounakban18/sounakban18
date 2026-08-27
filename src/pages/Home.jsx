import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SystemsStack from '../components/SystemsStack';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import PlaceholderArt from '../components/PlaceholderArt';
import { useMagnetic } from '../hooks';

const marqueeItems = [
  'Simple Good Foods',
  'ÒMG',
  'Morfiizo Enterprise',
  'React',
  'Figma',
  'Google Apps Script',
  'Systems Design',
];

export default function Home() {
  const ctaRef = useMagnetic(12);

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow">UI/UX Designer · Frontend · Operator</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl">
                Design systems for businesses<br />that actually ship.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="subhead hero-subhead">
                I co-run Morfiizo Enterprise — two FMCG food brands, SGF and ÒMG —
                and build the design and software that runs underneath them:
                interfaces, pricing engines, and the tools our own team uses every day.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-actions">
                <Link ref={ctaRef} to="/projects" className="btn btn-primary" data-cursor="view">
                  View the work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-visual">
            <SystemsStack />
          </Reveal>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2 className="display-md">Four problems, four shipped tools.</h2>
          </Reveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard project={p} key={p.slug} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-teaser">
        <div className="container about-teaser-grid">
          <Reveal className="about-teaser-art">
            <PlaceholderArt label="Sounak Banerjee — headshot" ratio="3 / 4" dense />
          </Reveal>
          <Reveal delay={100} className="about-teaser-copy">
            <span className="eyebrow">About</span>
            <h2 className="display-md">Hands-on across the whole stack of a small business.</h2>
            <p className="body-lg">
              Operations, finance, marketing, product, and the systems in between —
              I build the internal tools myself rather than hand off the parts I can
              reason about fastest.
            </p>
            <div className="stat-row">
              <StatCounter value={2} label="FMCG brands run" />
              <StatCounter value={4} label="Products shipped here" />
              <StatCounter value={3} label="Person core team" />
            </div>
            <Link to="/about" className="btn btn-secondary">
              More about me
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <Reveal>
            <h2 className="display-lg">Have something to build?</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/contact" className="btn btn-primary" data-cursor="view">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
