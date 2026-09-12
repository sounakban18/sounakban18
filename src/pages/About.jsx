import { useRef, useEffect } from 'react';
import Photo from '../components/Photo';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import GitHubShowcase from '../components/GitHubShowcase';
import CertificationSection from '../components/CertificationSection';
import { projects } from '../data/projects';

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

const aiAccelerator = {
  heading: 'AI is my accelerator, not my substitute.',
  copy: 'I use AI to move faster, explore more possibilities, and reduce repetitive work — but I still rely on fundamentals, structured prompting, testing, and human judgement to decide what actually ships.',
  cards: [
    {
      title: 'SECURITY',
      concern: 'AI-generated code can create security risks.',
      approach: 'I never treat generated code as trusted code. I use structured prompts, explicit constraints, environment variables for secrets, basic security practices, and manual review before anything ships.',
      loop: 'AI generates → I inspect → I understand → I test → I ship.',
    },
    {
      title: 'UNDERSTANDING',
      concern: 'AI can generate code that works but I don\'t understand.',
      approach: 'I use AI alongside HTML, CSS, JavaScript, React, APIs and browser fundamentals. When AI produces something I cannot explain, I break it down, test it, and learn the underlying logic before keeping it.',
    },
    {
      title: 'HALLUCINATION / WRONG DECISIONS',
      concern: 'AI can confidently make technically wrong decisions.',
      approach: 'I use structured prompting with context, constraints, expected behaviour and project structure, then verify the result through builds, browser testing, documentation and iteration.',
    },
    {
      title: 'MESSY CODE',
      concern: 'AI-assisted projects can become messy quickly.',
      approach: 'I review structure, reuse components, remove unnecessary code, keep the architecture understandable, and refactor generated output instead of accepting everything blindly.',
    },
    {
      title: 'DEPENDENCY',
      concern: 'AI tools can make developers dependent on them.',
      approach: 'I deliberately keep strengthening my fundamentals while using AI as a development partner. I want to understand what I\'m building, not simply generate it.',
    },
  ],
  pipeline: {
    steps: ['IDEA', 'PROMPT', 'PROTOTYPE', 'CODE', 'TEST', 'REFINE', 'SHIP'],
    copy: 'I use conversational AI to move from idea to interface to implementation to testing faster. The difference is in how I guide it: breaking problems down, writing better prompts, setting constraints, reviewing generated code, and iterating until the result actually works.',
  },
};

const independentBuilds = {
  heading: 'Independent Builds',
  copy: 'Outside my brand and business work, I experiment with freelance and self-directed web projects using AI-assisted development workflows.',
  projects: [
    // These will be filtered from the existing projects data to include only AI-assisted ones
  ],
};

const finalSummary = {
  tools: ['Figma', 'Canva', 'Adobe Photoshop', 'Shopify', 'Claude', 'ChatGPT', 'Gemini', 'React', 'HTML/CSS/JS'],
  methods: ['Structured Prompting', 'Rapid Prototyping', 'Problem Decomposition', 'Component Thinking', 'Iterative Testing', 'Visual QA', 'Refactoring', 'Design-to-Code Iteration'],
};

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
    summary: 'Leading digital transitions and operational growth.',
    contributions: {
      frontend: ['Shopify migration', 'landing pages', 'responsive QA', 'product information structure', 'digital experience improvements'],
      brand: ['SGF', 'O Morsel Goûter', 'packaging', 'content', 'visual systems'],
      business: ['operations', 'product context', 'sales / fulfilment context', 'cross-functional coordination'],
      ai: ['AI-assisted development', 'rapid prototyping', 'prompt-driven implementation', 'AI-assisted problem solving', 'workflow experimentation'],
    },
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'Photoshop', 'Canva', 'Claude', 'ChatGPT', 'Gemini', 'Shopify'],
    methods: ['Structured Prompting', 'Rapid Prototyping', 'Component Thinking', 'Problem Decomposition', 'Iterative Testing', 'Visual QA', 'Refinement / Refactoring'],
  },
  {
    role: 'Early cross-functional foundation',
    org: 'Morfiizo Enterprise',
    period: 'Jan 2023 – Aug 2024',
    summary: 'Building a grounded understanding of design, brand, and operations.',
    details: {
      design: ['UI/UX', 'visual communication', 'packaging'],
      business: ['operations', 'product context', 'customer thinking'],
      execution: ['research', 'coordination', 'iteration'],
    },
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
      const rotateY = Math.max(-3, Math.min(3, x * 3));
      const rotateX = Math.max(-3, Math.min(3, -y * 3));

      frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
            <h1 className="display-lg">Building with curiosity, learning quickly, and making ideas work.</h1>
            <p className="subhead">
              I'm an early-career frontend developer with a strong interest in AI-assisted development, UI/UX, and digital products. I learn by building — exploring how interfaces work in the browser, how AI can accelerate development, and how thoughtful design can solve practical problems.
            </p>
            <p className="body-lg">
              My experience at Morfiizo Enterprise gave me the opportunity to contribute across SGF and O Morsel Goûter, working around frontend, UI/UX, branding, packaging, digital experiences, and business operations. Alongside that work, I've explored freelance AI-assisted web projects, using tools like Claude, ChatGPT, and Gemini to prototype, develop, test, and iterate faster.
            </p>
            <p className="body-lg">
              I'm still early in my journey, but I'm comfortable learning fast, experimenting, breaking things, understanding why they break, and building them better.
            </p>
            <p className="body-lg mono location">Based in Kolkata</p>
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
            <h2 className="display-md">Learning by doing — across design, technology, and business.</h2>
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
                  <p className="body-sm mono">{job.summary}</p>

                  {job.contributions && (
                    <details className="timeline-details">
                      <summary className="timeline-summary">View contributions</summary>
                      <div className="timeline-details-content">
                        <div className="timeline-detail-grid">
                          <div className="timeline-detail-col">
                            <span className="detail-label">Frontend & Digital</span>
                            <ul className="detail-list">{job.contributions.frontend.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div className="timeline-detail-col">
                            <span className="detail-label">Brand</span>
                            <ul className="detail-list">{job.contributions.brand.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div className="timeline-detail-col">
                            <span className="detail-label">Business</span>
                            <ul className="detail-list">{job.contributions.business.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div className="timeline-detail-col">
                            <span className="detail-label">AI</span>
                            <ul className="detail-list">{job.contributions.ai.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                        </div>
                        <div className="timeline-details-footer">
                          <div className="timeline-tools">
                            <span className="detail-label">Tools:</span>
                            <div className="tool-chips">{job.tools.map(t => <span key={t} className="tool-chip mono">{t}</span>)}</div>
                          </div>
                          <div className="timeline-methods">
                            <span className="detail-label">Methods:</span>
                            <div className="tool-chips">{job.methods.map(m => <span key={m} className="tool-chip mono">{m}</span>)}</div>
                          </div>
                        </div>
                      </div>
                    </details>
                  )}

                  {job.details && (
                    <details className="timeline-details">
                      <summary className="timeline-summary">View focus areas</summary>
                      <div className="timeline-details-content">
                        <div className="timeline-detail-grid">
                          <div className="timeline-detail-col">
                            <span className="detail-label">Design</span>
                            <ul className="detail-list">{job.details.design.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div className="timeline-detail-col">
                            <span className="detail-label">Business</span>
                            <ul className="detail-list">{job.details.business.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div className="timeline-detail-col">
                            <span className="detail-label">Execution</span>
                            <ul className="detail-list">{job.details.execution.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                        </div>
                      </div>
                    </details>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-accelerator">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">AI Workflow</span>
            <h2 className="display-md">{aiAccelerator.heading}</h2>
            <p className="body-lg">{aiAccelerator.copy}</p>
          </Reveal>
          <div className="ai-cards-grid">
            {aiAccelerator.cards.map((card, i) => (
              <Reveal as="article" key={card.title} delay={i * 60} className="ai-card">
                <span className="caption mono">{card.title}</span>
                <div className="ai-card-concern">
                  <strong>Concern:</strong> {card.concern}
                </div>
                <div className="ai-card-approach">
                  <strong>Approach:</strong> {card.approach}
                </div>
                {card.loop && (
                  <div className="ai-card-loop mono">
                    <span className="caption">Core Loop:</span> {card.loop}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="ai-pipeline-section">
            <div className="pipeline-head">
              <span className="eyebrow">The Process</span>
              <h3 className="card-title">From Idea to Ship</h3>
            </div>
            <div className="ai-pipeline">
              {aiAccelerator.pipeline.steps.map((step, i) => (
                <div key={step} className="pipeline-node">
                  <span className="pipeline-step">{step}</span>
                  {i < aiAccelerator.pipeline.steps.length - 1 && <span className="pipeline-arrow">→</span>}
                </div>
              ))}
            </div>
            <p className="body-sm center-text">{aiAccelerator.pipeline.copy}</p>
          </Reveal>
        </div>
      </section>

      <section className="section independent-builds">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Exploration</span>
            <h2 className="display-md">{independentBuilds.heading}</h2>
            <p className="body-lg">{independentBuilds.copy}</p>
          </Reveal>
          <div className="independent-grid">
            {/* I'll use the existing projects data and filter for AI-assisted ones */}
            {projects.filter(p => p.stack.some(s => s.toLowerCase().includes('ai') || s.toLowerCase().includes('gpt') || s.toLowerCase().includes('claude'))).map((p, i) => (
              <Reveal as="div" key={p.slug} delay={i * 60} className="independent-item">
                <div className="independent-info">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="body-sm">{p.role}</p>
                </div>
                <Link to={`/projects/${p.slug}`} className="btn btn-secondary btn-sm" data-cursor="view">View project ↗</Link>
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
          <Reveal delay={240} className="capability-summary">
            <div className="summary-grid">
              <div className="summary-col">
                <span className="eyebrow">Tools</span>
                <div className="summary-chips">
                  {finalSummary.tools.map(t => <span key={t} className="summary-chip mono">{t}</span>)}
                </div>
              </div>
              <div className="summary-col">
                <span className="eyebrow">Methods</span>
                <div className="summary-chips">
                  {finalSummary.methods.map(m => <span key={m} className="summary-chip mono">{m}</span>)}
                </div>
              </div>
            </div>
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
