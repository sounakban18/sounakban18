import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SystemsStack from '../components/SystemsStack';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import PlaceholderArt from '../components/PlaceholderArt';
import Photo from '../components/Photo';
import HeroVideo from '../components/HeroVideo';
import { useMagnetic } from '../hooks';

// Once you have a real clip: drop it in src/assets/hero-loop.mp4 (+ .webm
// optionally), uncomment the import below, and pass mp4={heroMp4} to
// <HeroVideo /> further down.
// import heroMp4 from '../assets/hero-loop.mp4';

const marqueeItems = [
  'Simple Good Foods',
  'ÒMG',
  'Morfiizo Enterprise',
  'Figma',
  'Shopify',
  'React',
  'UI/UX',
];

export default function Home() {
  const ctaRef = useMagnetic(12);

  return (
    <>
      <section className="hero section">
        <HeroVideo />
        <div className="container hero-grid">
          <div className="hero-copy glass-panel">
            <Reveal>
              <span className="eyebrow">Sounak Banerjee — Frontend Designer</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl">
                UI/UX and frontend work,<br />built with business context.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="subhead hero-subhead">
                Two years inside a growing FMCG operation taught me that design
                decisions ripple into brand, users, and operations — not just the screen.
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
            <h2 className="display-md">Five real problems, five shipped builds.</h2>
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
            <Photo ratio="3 / 4" />
          </Reveal>
          <Reveal delay={100} className="about-teaser-copy">
            <span className="eyebrow">About</span>
            <h2 className="display-md">Design work grounded in real business context.</h2>
            <p className="body-lg">
              Two years inside Morfiizo Enterprise — across UI/UX, frontend, brand,
              and operations — is where that instinct comes from. Not theory: brand
              meetings, distributor calls, and the occasional broken storefront.
            </p>
            <div className="stat-row">
              <StatCounter value={2} label="FMCG brands" />
              <StatCounter value={5} label="Projects shipped" />
              <StatCounter value={3} label="Person team" />
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
            <h2 className="display-lg">Let&rsquo;s build something useful.</h2>
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
