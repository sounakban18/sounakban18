import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SystemsStack from '../components/SystemsStack';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import Photo from '../components/Photo';
import HeroVideo from '../components/HeroVideo';
import DesignBusiness from '../components/DesignBusiness';
import InterfaceLab from '../components/InterfaceLab';
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

const capabilities = [
  ['01', 'Figma → UI/UX', 'Wireframes, hierarchy, responsive systems, and interaction patterns that make the next decision clear.'],
  ['02', 'HTML → CSS', 'Turning a frame into structure, rhythm, and responsive detail that holds up in a real browser.'],
  ['03', 'JavaScript → React', 'Building reusable components and interfaces while learning how design decisions behave in code.'],
  ['04', 'Problem solving', 'Looking past the screen for the workflow, coordination, or business question that needs a practical answer.'],
];

const problems = [
  ['01', 'A static catalogue', 'Distributors were working from a PDF that was slow to browse in sales conversations.', 'Built an interactive 3D catalogue that runs as a self-contained web app.'],
  ['02', 'Manual dispatch documents', 'A repeated invoice and challan task depended on hand-filled documents and consistent formatting.', 'Designed a live-preview workflow with one-click PDF export for the operations team.'],
  ['03', 'A storefront in transition', 'ÒMG needed to move its D2C storefront to Shopify without losing the structure around it.', 'Worked across wireframes, landing pages, responsive QA, redirects, SEO, and funnel follow-up.'],
];

const chapters = [
  { period: '2023 — present', title: 'Morfiizo Enterprise', body: 'I joined at the beginning and grew with the work, moving across UI/UX, frontend, brand development, and the operational details that keep a growing business moving.' },
  { period: 'Across ÒMG', title: 'A wider creative role', body: 'For Ò Morsel Goûter, my work has included packaging and labels, product photography, social content, Shopify, creator coordination, B2B communication, and campaign support.' },
];

export default function Home() {
  const ctaRef = useMagnetic(12);

  return (
    <>
      <section className="hero section">
        <HeroVideo />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow">Frontend · UI/UX · Building</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero-name">Sounak<br />Banerjee</h1>
              <p className="hero-role">Frontend Designer / Developer</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="subhead hero-subhead">
                I design and build digital experiences while growing from
                thoughtful interfaces into working frontend systems.
              </p>
              <p className="hero-capabilities mono">Figma <span>→</span> UI/UX <span>→</span> HTML <span>→</span> CSS <span>→</span> JavaScript <span>→</span> React</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-actions">
                <Link ref={ctaRef} to="/projects" className="btn btn-primary" data-cursor="view">
                  View my work <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Explore my journey
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
            <h2 className="display-md">A selection of things I&rsquo;ve designed, built, improved, and explored.</h2>
            <p className="body-lg">Digital products, internal tools, and brand moments built inside a real operating business.</p>
          </Reveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard project={p} key={p.slug} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <DesignBusiness />

      <section className="section capability-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What I do</span>
            <h2 className="display-md">The useful overlap between disciplines.</h2>
          </Reveal>
          <div className="capability-grid">
            {capabilities.map(([index, title, body], i) => (
              <Reveal as="article" key={title} delay={i * 60} className="capability-item">
                <span className="caption">{index}</span>
                <h3 className="card-title">{title}</h3>
                <p className="body-sm">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section problems-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Problems I&rsquo;ve solved</span>
            <h2 className="display-md">Not every problem starts with a screen.</h2>
            <p className="body-lg">Working inside growing businesses taught me to look for the system behind the problem, then find a practical way to improve it.</p>
          </Reveal>
          <div className="problem-list">
            {problems.map(([index, title, problem, solution], i) => (
              <Reveal as="article" key={title} delay={i * 70} className="problem-item hairline-top">
                <span className="caption problem-index">{index}</span>
                <div className="problem-copy"><h3 className="card-title">{title}</h3><p className="body-sm"><strong>Problem:</strong> {problem}</p></div>
                <p className="body-sm"><strong>What I built:</strong> {solution}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InterfaceLab />

      <section className="section approach-section">
        <div className="container approach-grid">
          <Reveal>
            <span className="eyebrow">How I work</span>
            <h2 className="display-md">Understand the problem. Build the next useful version.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-lg">Understand the problem. Structure the experience. Design the interface. Build the solution. Refine what doesn&rsquo;t work. Keep learning.</p>
          </Reveal>
        </div>
      </section>

      <section className="section learning-section">
        <div className="container learning-grid">
          <Reveal><span className="eyebrow">What I&rsquo;m learning</span><h2 className="display-md">From a frame in Figma to something that works in a browser.</h2></Reveal>
          <Reveal delay={100}><p className="body-lg">Frontend is a continuous learning process for me. I&rsquo;m building the connection between design decisions and structure, interaction, responsiveness, and real interfaces.</p><div className="learning-list">{['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'Responsive systems', 'Interaction design', 'Component thinking'].map((item) => <span className="skill-pill mono" key={item}>{item}</span>)}</div></Reveal>
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
              I explore frontend design and implementation through a process of building, testing, and refining real-world systems. I&rsquo;m fascinated by how interfaces actually behave in the browser and leverage AI-assisted workflows to iterate quickly, bridging the gap between business context and a polished digital experience.
            </p>
            <Link to="/about" className="btn btn-secondary">
              More about me
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section chapter-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Professional chapters</span>
            <h2 className="display-md">Learning the work by being close to it.</h2>
          </Reveal>
          <div className="chapter-list">
            {chapters.map((chapter, i) => (
              <Reveal as="article" key={chapter.title} delay={i * 80} className="chapter-item hairline-top">
                <p className="caption">{chapter.period}</p>
                <div>
                  <h3 className="card-title">{chapter.title}</h3>
                  <p className="body-sm">{chapter.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section current-focus">
        <div className="container current-focus-inner">
          <Reveal>
            <span className="eyebrow">Current focus</span>
            <h2 className="display-md">Building digital experiences with a longer view.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-lg">I am interested in frontend-led design work where the interface is only one part of the outcome: brand systems, useful tools, and products that can keep getting better after launch.</p>
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
