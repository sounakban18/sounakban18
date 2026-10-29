import { useRef, useEffect, useState } from 'react';
import Photo from '../components/Photo';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import GitHubShowcase from '../components/GitHubShowcase';
import CertificationSection from '../components/CertificationSection';
import { projects } from '../data/projects';
import { certificates, otherCertifications, education, showCertificate } from '../data/certificates';

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

// aiAccelerator was removed as its data is now integrated into the components.

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

const monthYear = (dateTime) =>
  new Date(dateTime).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

const certificateMeta = (c) =>
  [c.issuer && c.issuer !== c.organisation ? `${c.organisation}, via ${c.issuer}` : c.organisation, c.dateTime && monthYear(c.dateTime)]
    .filter(Boolean)
    .join(' · ');

// One row of an iOS-style inset grouped list. Rows with a certificate image open its preview.
function CredentialRow({ item, meta, onOpen }) {
  const body = (
    <>
      <span className="icon-tile" style={{ '--c': item.color }}><Icon name={item.icon} /></span>
      <span className="credential-text">
        <span className="credential-title">{item.title}</span>
        <span className="credential-meta">{meta}</span>
      </span>
      {onOpen && <Icon name="chevron.right" className="credential-chevron" />}
    </>
  );
  return (
    <li>
      {onOpen
        ? <button type="button" className="credential-row" aria-haspopup="dialog" onClick={onOpen}>{body}</button>
        : <div className="credential-row">{body}</div>}
    </li>
  );
}

const certificationCount = certificates.length + otherCertifications.length;


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

const AIPrinciples = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const principles = [
    {
      title: 'Security',
      summary: 'AI output is not automatically trusted.',
      concern: 'AI can generate insecure patterns or expose sensitive information when code is accepted blindly.',
      approach: 'I treat generated code as untrusted until reviewed. I use structured prompts, explicit constraints, environment variables for secrets, basic security practices, and manual verification.',
    },
    {
      title: 'Understanding',
      summary: 'Avoiding the "black box" of generated code.',
      concern: 'AI can produce working code that the developer does not actually understand.',
      approach: 'I use AI alongside my HTML, CSS, JavaScript, React, API, and browser fundamentals. If I cannot explain the generated solution, I break it down and learn the underlying logic before keeping it.',
    },
    {
      title: 'Verification',
      summary: 'Confidently validating technical decisions.',
      concern: 'AI can confidently suggest incorrect APIs, architecture, dependencies, or technical decisions.',
      approach: 'I provide context, constraints, expected behaviour, and project structure through structured prompting, then verify the output through builds, browser testing, documentation, and iteration.',
    },
    {
      title: 'Maintainability',
      summary: 'Prioritising structure over speed.',
      concern: 'Fast AI-generated implementations can become messy, duplicated, or difficult to maintain.',
      approach: 'I review the structure, reuse components, remove unnecessary code, simplify where possible, and refactor generated output instead of accepting everything blindly.',
    },
    {
      title: 'Fundamentals',
      summary: 'Strengthening the core developer skill set.',
      concern: 'Heavy AI usage can create dependency and weaken technical understanding.',
      approach: 'I deliberately continue strengthening fundamentals while using AI as a development partner. The goal is to understand what I build, not simply generate it.',
    },
  ];

  const handleItemClick = (i) => {
    if (activeIdx === i) {
      setIsExpanded(!isExpanded);
    } else {
      setActiveIdx(i);
      setIsExpanded(true);
    }
  };

  return (
    <div className="ai-concerns-module">
      <div className="ai-focus-list">
        {principles.map((p, i) => (
          <div
            key={p.title}
            className={`ai-focus-item ${activeIdx === i ? 'active' : ''}`}
            role="button"
            aria-expanded={activeIdx === i && isExpanded}
            aria-controls="ai-principles-detail"
            onClick={() => handleItemClick(i)}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleItemClick(i);
              }
            }}
          >
            <span className="ai-focus-num">0{i + 1}</span>
            <div className="ai-focus-content">
              <h3 className="ai-focus-title">{p.title}</h3>
              <p className="ai-focus-summary">{p.summary}</p>
            </div>
            {/* Mobile expansion indicator can be added via CSS or here */}
          </div>
        ))}
      </div>

      <div
        id="ai-principles-detail"
        className={`ai-detail-panel ${isExpanded ? 'expanded' : 'collapsed'}`}
        role="region"
        aria-label="AI responsibility details"
        aria-hidden={!isExpanded}
      >
        <div key={activeIdx} className="ai-detail-content">
          <div className="ai-detail-block">
            <span className="ai-detail-label">Concern</span>
            <p className="ai-detail-text">{principles[activeIdx].concern}</p>
          </div>
          <div className="ai-detail-block">
            <span className="ai-detail-label">My Approach</span>
            <p className="ai-detail-text">{principles[activeIdx].approach}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIProcess = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const steps = [
    { label: 'Idea', desc: 'Define the problem and the core user need.' },
    { label: 'Prompt', desc: 'Provide the model with deep context, constraints, and expected behaviour.' },
    { label: 'Prototype', desc: 'Quickly iterate on a working direction and visual layout.' },
    { label: 'Code', desc: 'Build the actual implementation, integrating with existing systems.' },
    { label: 'Test', desc: 'Verify behavior, responsiveness, and edge cases across browsers.' },
    { label: 'Refine', desc: 'Review the code, remove redundancy, and optimize for performance.' },
    { label: 'Ship', desc: 'Deploy only when the result is verified, stable, and polished.' },
  ];

  return (
    <div className="ai-pipeline-container">
      <div className="pipeline-head">
        <span className="eyebrow">The Process</span>
        <h3 className="card-title">From Idea to Ship</h3>
      </div>

      <div className="ai-pipeline-rail">
        {steps.map((step, i) => (
          <div key={step.label} className="pipeline-segment">
            <div
              className={`ai-pipeline-node ${selectedStep === i ? 'active' : ''}`}
              role="button"
              aria-pressed={selectedStep === i}
              aria-controls="ai-pipeline-detail-panel"
              onClick={() => setSelectedStep(i)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedStep(i);
                }
              }}
            >
              <div className="ai-pipeline-dot">{i + 1}</div>
              <span className="ai-pipeline-label">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`ai-pipeline-connector ${selectedStep > i ? 'filled' : ''}`} />
            )}
          </div>
        ))}
      </div>

      <Reveal
        id="ai-pipeline-detail-panel"
        className="ai-pipeline-detail"
        role="region"
        aria-label="Selected workflow step"
        aria-live="polite"
      >
        <div className="ai-pipeline-detail-content">
          <div className="ai-pipeline-detail-title">{steps[selectedStep].label}</div>
          <div className="ai-pipeline-detail-text">{steps[selectedStep].desc}</div>
        </div>
      </Reveal>
    </div>
  );
};

const AIIntro = () => (
  <div className="ai-workflow-hero">
    <Reveal className="section-head">
      <span className="eyebrow">AI Workflow</span>
      <h2 className="display-md">AI is my accelerator, not my substitute.</h2>
      <p className="body-lg">
        I use AI to move faster, explore more possibilities, and reduce repetitive work — but I still rely on fundamentals, structured prompting, testing, and human judgement to decide what actually ships.
      </p>
    </Reveal>

    <Reveal delay={200} className="ai-logic-formula-wrap">
      <div className="ai-logic-chain">
        <div className="ai-logic-node">
          <span className="ai-logic-pill">AI</span>
        </div>
        <span className="ai-logic-arrow">→</span>
        <div className="ai-logic-node">
          <span className="ai-logic-pill">Fundamentals</span>
        </div>
        <span className="ai-logic-arrow">→</span>
        <div className="ai-logic-node">
          <span className="ai-logic-pill">Judgement</span>
        </div>
      </div>
    </Reveal>
  </div>
);

export default function About() {

  const timelineRef = useRef(null);
  const progressRef = useRef(null);

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
            <div className="portrait-frame" data-tilt>
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
            <a className="about-linkedin" href="https://linkedin.com/in/sounak-banerjee-a5292b183/" target="_blank" rel="noopener noreferrer">
              <span className="caption">Professional profile</span>
              <span className="body-sm">Connect on LinkedIn <Icon name="arrow.up.right" /></span>
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

      <section className="section ai-workflow">
        <div className="container">
          <AIIntro />
          <AIPrinciples />
          <AIProcess />
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
                <Link to={`/projects/${p.slug}`} className="btn btn-secondary btn-sm" viewTransition>View project <Icon name="arrow.up.right" /></Link>
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
              <Reveal as="div" key={f.title} delay={i * 60} className="about-focus-module">
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
              <Reveal as="div" key={group.title} delay={gi * 60} className="about-skill-cluster">
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

      <section className="section credentials" id="credentials">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Credentials</span>
            <h2 className="display-md">Education and certifications.</h2>
            <p className="body-lg">A commerce degree, a diploma in software and web development, and certifications across generative AI, data analytics and digital marketing.</p>
          </Reveal>

          <div className="credentials-grid">
            <Reveal className="credential-col">
              <h3 className="credential-heading">Education <span>{education.length}</span></h3>
              <ul className="credential-group">
                {education.map((item) => (
                  <CredentialRow key={item.id} item={item} meta={`${item.organisation} · ${item.period}`} />
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="credential-col">
              <h3 className="credential-heading">Certifications <span>{certificationCount}</span></h3>
              <ul className="credential-group">
                {certificates.map((c) => (
                  <CredentialRow key={c.id} item={c} meta={certificateMeta(c)} onOpen={() => showCertificate(c.id)} />
                ))}
                {otherCertifications.map((c) => (
                  <CredentialRow key={c.id} item={c} meta={certificateMeta(c)} />
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="about-numbers">
            <h3 className="credential-heading">By the numbers</h3>
            <div className="about-metrics-grid">
              {[
                [2, 'FMCG brands'],
                [5, 'Projects shipped'],
                [certificationCount, 'Certifications'],
                [3, 'Person team'],
              ].map(([value, label]) => (
                <div className="about-metric-item" key={label}>
                  <StatCounter value={value} valueClassName="about-metric-value" />
                  <span className="about-metric-label">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
