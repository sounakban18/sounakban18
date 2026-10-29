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
import GitHubPreview from '../components/GitHubPreview';
import DynamicIsland from '../components/DynamicIsland';
import Dock from '../components/Dock';
import ScrollWords from '../components/ScrollWords';
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

const glyph = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths}</svg>
);

const capabilities = [
  {
    title: 'Figma → UI/UX',
    body: 'Wireframes, hierarchy, responsive systems, and interaction patterns that make the next decision clear.',
    visual: (
      <div className="bento-visual viz-canvas" aria-hidden="true">
        <span className="viz-block b1" />
        <span className="viz-block b2" />
        <span className="viz-block b3" />
        <span className="viz-select">
          <i /><i /><i /><i />
          <span className="viz-cursor">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 2.5 19 11l-6.4 1.7L9.4 19z" /></svg>
            <em>Sounak</em>
          </span>
        </span>
      </div>
    ),
  },
  {
    title: 'HTML → CSS',
    body: 'Turning a frame into structure, rhythm, and responsive detail that holds up in a real browser.',
    visual: (
      <div className="bento-visual viz-code" aria-hidden="true">
        <code>
          <span><b className="t">&lt;section</b> <b className="a">class</b>=<b className="s">&quot;hero&quot;</b><b className="t">&gt;</b></span>
          <span>{'  '}<b className="t">&lt;h1&gt;</b>Hello<b className="t">&lt;/h1&gt;</b></span>
          <span><b className="t">&lt;/section&gt;</b></span>
          <span> </span>
          <span><b className="p">.hero</b> {'{'}</span>
          <span>{'  '}<b className="a">display</b>: grid;<i className="caret" /></span>
          <span>{'}'}</span>
        </code>
      </div>
    ),
  },
  {
    title: 'JavaScript → React',
    body: 'Building reusable components and interfaces while learning how design decisions behave in code.',
    visual: (
      <div className="bento-visual viz-atom" aria-hidden="true">
        <span className="viz-chip">&lt;Card /&gt;</span>
        <span className="viz-chip">useState()</span>
        <span className="viz-chip">&lt;Button /&gt;</span>
        <svg viewBox="-60 -60 120 120">
          <g className="orbits">
            <ellipse rx="52" ry="20" />
            <ellipse rx="52" ry="20" transform="rotate(60)" />
            <ellipse rx="52" ry="20" transform="rotate(120)" />
          </g>
          <circle r="9" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Problem solving',
    body: 'Looking past the screen for the workflow, coordination, or business question that needs a practical answer.',
    visual: (
      <div className="bento-visual viz-flow" aria-hidden="true">
        <span className="viz-node">Question</span>
        <span className="viz-line"><i /></span>
        <span className="viz-node">Workflow</span>
        <span className="viz-line l2"><i /></span>
        <span className="viz-node is-done">Answer</span>
      </div>
    ),
  },
];

const problems = [
  {
    title: 'A static catalogue',
    problem: 'Distributors were working from a PDF that was slow to browse in sales conversations.',
    solution: 'Built an interactive 3D catalogue that runs as a self-contained web app.',
    color: '#ff9f0a',
    icon: glyph(<><path d="M12 3 4 7.5v9L12 21l8-4.5v-9z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></>),
  },
  {
    title: 'Manual dispatch documents',
    problem: 'A repeated invoice and challan task depended on hand-filled documents and consistent formatting.',
    solution: 'Designed a live-preview workflow with one-click PDF export for the operations team.',
    color: '#0a84ff',
    icon: glyph(<><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></>),
  },
  {
    title: 'A storefront in transition',
    problem: 'ÒMG needed to move its D2C storefront to Shopify without losing the structure around it.',
    solution: 'Worked across wireframes, landing pages, responsive QA, redirects, SEO, and funnel follow-up.',
    color: '#30d158',
    icon: glyph(<><path d="M4 9.5h16l-1.2-5H5.2z" /><path d="M5 9.5V20h14V9.5M10 20v-5h4v5" /></>),
  },
];

const chapters = [
  { period: '2023 — present', title: 'Morfiizo Enterprise', body: 'I joined at the beginning and grew with the work, moving across UI/UX, frontend, brand development, and the operational details that keep a growing business moving.' },
  { period: 'Across ÒMG', title: 'A wider creative role', body: 'For Ò Morsel Goûter, my work has included packaging and labels, product photography, social content, Shopify, creator coordination, B2B communication, and campaign support.' },
];

const nameWords = ['Sounak', 'Banerjee'];

export default function Home() {
  const ctaRef = useMagnetic(12);

  return (
    <>
      <section className="hero">
        <HeroVideo />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <DynamicIsland />
            </Reveal>
            <h1 className="hero-name" aria-label="Sounak Banerjee">
              {nameWords.map((word, w) => (
                <span key={word}>
                  {w > 0 && <br />}
                  <span className="word" aria-hidden="true">
                    {[...word].map((ch, c) => (
                      <span className="char" key={c} style={{ '--i': w * nameWords[0].length + c }}>{ch}</span>
                    ))}
                  </span>
                </span>
              ))}
            </h1>
            <Reveal delay={260}>
              <p className="hero-role">Frontend Designer / Developer</p>
            </Reveal>
            <Reveal delay={340}>
              <p className="subhead hero-subhead">
                I design and build digital experiences while growing from
                thoughtful interfaces into working frontend systems.
              </p>
            </Reveal>
            <Reveal delay={420}>
              <div className="hero-actions">
                <Link ref={ctaRef} to="/projects" className="btn btn-primary" viewTransition>
                  View my work <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/about" className="btn btn-secondary" viewTransition>
                  Explore my journey
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-visual">
            <SystemsStack />
          </Reveal>
        </div>

        <Reveal delay={650}>
          <Dock />
        </Reveal>
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
            {projects.slice(0, 3).map((p, i) => (
                <ProjectCard project={p} key={p.slug} delay={i * 80} priority />
            ))}
          </div>

          <Reveal delay={200} className="home-projects-cta-wrap">
            <Link to="/projects" className="btn btn-secondary home-projects-cta" viewTransition>
              <span>View all projects</span>
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <DesignBusiness />

      <section className="section capability-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What I do</span>
            <h2 className="display-md">The useful overlap between disciplines.</h2>
          </Reveal>
          <div className="bento">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="bento-cell">
                <article className="bento-tile" data-tilt>
                  <div className="bento-copy">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="body-sm">{item.body}</p>
                  </div>
                  {item.visual}
                </article>
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
            {problems.map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 70} className="problem-item" style={{ '--i': i }}>
                <div className="problem-head">
                  <span className="problem-icon" style={{ '--c': item.color }}>{item.icon}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <div className="problem-cols">
                  <div className="problem-col">
                    <p className="problem-label">The problem</p>
                    <p className="body-sm">{item.problem}</p>
                  </div>
                  <div className="problem-col is-solution">
                    <p className="problem-label">What I built</p>
                    <p className="body-sm">{item.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InterfaceLab />

      <section className="statement">
        <div className="container">
          <Reveal>
            <h2 className="eyebrow">How I work</h2>
          </Reveal>
          <ScrollWords text="Understand the problem. Structure the experience. Design the interface. Build the solution. Refine what doesn’t work. Keep learning." />
        </div>
      </section>

      <section className="section learning-section">
        <div className="container learning-grid">
          <Reveal><span className="eyebrow">What I&rsquo;m learning</span><h2 className="display-md">From a frame in Figma to something that works in a browser.</h2></Reveal>
          <Reveal delay={100}><p className="body-lg">Frontend is a continuous learning process for me. I&rsquo;m building the connection between design decisions and structure, interaction, responsiveness, and real interfaces.</p><div className="learning-list">{['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'Responsive systems', 'Interaction design', 'Component thinking'].map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div></Reveal>
        </div>
      </section>

      <GitHubPreview />

      <section className="section about-teaser">
        <div className="container about-teaser-grid">
          <Reveal className="about-teaser-art">
            <Photo ratio="3 / 4" />
          </Reveal>
          <Reveal delay={100} className="about-teaser-copy">
            <span className="eyebrow">About</span>
            <h2 className="display-md">Designing, building, and learning at the intersection of frontend and AI.</h2>
            <p className="body-lg">
              I'm an early-career frontend developer and AI enthusiast who enjoys turning ideas into working digital experiences. My work spans UI/UX, frontend development, brand systems, and business operations — with hands-on contributions to SGF and O Morsel Goûter, alongside freelance AI-assisted web projects.
            </p>
            <div className="learning-list about-teaser-focus">
              {['AI-assisted development', 'Vibe coding', 'React', 'UI/UX', 'Digital products'].map((item) => <span className="skill-pill" key={item}>{item}</span>)}
            </div>
            <Link to="/about" className="btn btn-secondary" viewTransition>
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
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-orbit" aria-hidden="true"><span /><span /><span /></div>
            <Reveal className="cta-band-content">
              <span className="eyebrow">Open to build</span>
              <h2 className="display-lg">Let&rsquo;s build something useful.</h2>
              <p className="body-lg">Frontend development, design thinking and AI-assisted building for practical problems that deserve a clearer digital experience.</p>
              <div className="cta-band-actions">
                <Link to="/contact" className="btn btn-primary" viewTransition>Start a conversation <span aria-hidden="true">↗</span></Link>
                <a href="https://linkedin.com/in/sounak-banerjee-a5292b183/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
              </div>
              <p className="cta-band-status"><span className="status-dot" /> Available for thoughtful builds in Kolkata, IN</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
