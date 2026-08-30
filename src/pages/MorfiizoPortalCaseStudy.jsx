import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function MorfiizoPortalCaseStudy({ project, next }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('Aug');
  const touchStart = useRef(null);

  const slides = [
    {
      id: '01',
      title: 'Business Overview Dashboard',
      subtitle: 'High-level operational KPIs, monthly sales movement, receivables & regional network view.',
      render: () => (
        <div className="dash-view dash-view-overview">
          <div className="dash-view-header">
            <div>
              <span className="caption mono">EXECUTIVE OVERVIEW · {selectedMonth} 2026</span>
              <strong className="body-lg">Operational Performance Summary</strong>
            </div>
            <div className="dash-month-selector">
              {['May', 'Jun', 'Jul', 'Aug'].map((m) => (
                <button
                  key={m}
                  className={`dash-month-btn${selectedMonth === m ? ' active' : ''}`}
                  onClick={() => setSelectedMonth(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="dash-kpi-grid">
            <div className="dash-kpi-card">
              <span className="caption">MONTHLY SALES</span>
              <strong className="dash-kpi-val">₹12.8L</strong>
              <span className="dash-kpi-tag positive">+14.2% vs last month</span>
            </div>
            <div className="dash-kpi-card">
              <span className="caption">PENDING AMOUNT</span>
              <strong className="dash-kpi-val">₹3.4L</strong>
              <span className="dash-kpi-tag neutral">8 invoices due</span>
            </div>
            <div className="dash-kpi-card">
              <span className="caption">ACTIVE BUYERS</span>
              <strong className="dash-kpi-val">184</strong>
              <span className="dash-kpi-tag positive">Across 12 districts</span>
            </div>
            <div className="dash-kpi-card">
              <span className="caption">VENDORS</span>
              <strong className="dash-kpi-val">27</strong>
              <span className="dash-kpi-tag neutral">Active trade supply</span>
            </div>
          </div>

          <div className="dash-split-grid">
            <div className="dash-card dash-chart-card">
              <div className="dash-card-head">
                <span className="caption mono">SALES MOVEMENT & VOLUME</span>
                <span className="caption">Target: ₹15.0L</span>
              </div>
              <div className="dash-bar-chart">
                {[
                  { month: 'May', val: 68, amount: '₹9.2L' },
                  { month: 'Jun', val: 78, amount: '₹10.5L' },
                  { month: 'Jul', val: 84, amount: '₹11.4L' },
                  { month: 'Aug', val: 95, amount: '₹12.8L' },
                ].map((item) => (
                  <div className="dash-bar-col" key={item.month}>
                    <div className="dash-bar-track">
                      <div
                        className="dash-bar-fill"
                        style={{ height: `${item.val}%` }}
                      />
                    </div>
                    <span className="dash-bar-label mono">{item.month}</span>
                    <span className="dash-bar-sub caption">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-card dash-geo-card">
              <div className="dash-card-head">
                <span className="caption mono">GEOGRAPHIC NETWORK</span>
                <span className="dash-badge mono">12 Districts</span>
              </div>
              <div className="dash-district-list">
                {[
                  { district: 'Kolkata Hub', share: '38%', buyers: '64 Buyers' },
                  { district: 'Howrah Trade Area', share: '24%', buyers: '42 Buyers' },
                  { district: 'Hooghly & Burdwan', share: '21%', buyers: '38 Buyers' },
                  { district: 'North & South 24 Pgs', share: '17%', buyers: '40 Buyers' },
                ].map((d, i) => (
                  <div className="dash-district-item" key={i}>
                    <div className="dash-district-info">
                      <strong>{d.district}</strong>
                      <span className="caption">{d.buyers}</span>
                    </div>
                    <div className="dash-district-meter">
                      <div className="dash-meter-fill" style={{ width: d.share }} />
                    </div>
                    <span className="dash-district-pct mono">{d.share}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: '02',
      title: 'Partner & Distributor Operations',
      subtitle: 'Structured directory of distributor tiers, credit lines, payment status & order frequency.',
      render: () => (
        <div className="dash-view dash-view-partners">
          <div className="dash-view-header">
            <div>
              <span className="caption mono">DISTRIBUTOR NETWORK MANAGEMENT</span>
              <strong className="body-lg">Partner Accounts & Credit Control</strong>
            </div>
            <span className="dash-badge mono">Live Directory · 184 Accounts</span>
          </div>

          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>PARTNER NAME</th>
                  <th>TIER</th>
                  <th>REGION</th>
                  <th>MTD VOLUME</th>
                  <th>CREDIT STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Bengal Food Corp', tier: 'Tier A', region: 'Kolkata Central', vol: '₹2,40,000', status: 'Clear', cls: 'status-clear' },
                  { name: 'Apex Trade Distributors', tier: 'Tier A', region: 'Howrah Hub', vol: '₹1,85,000', status: 'Invoice Due', cls: 'status-pending' },
                  { name: 'Eastern Supply Network', tier: 'Tier B', region: 'Hooghly North', vol: '₹1,20,000', status: 'Clear', cls: 'status-clear' },
                  { name: 'Maa Tara Enterprises', tier: 'Tier B', region: 'Burdwan East', vol: '₹95,000', status: 'Clear', cls: 'status-clear' },
                  { name: 'Metro Retail Consortium', tier: 'Tier C', region: 'South 24 Pgs', vol: '₹62,000', status: 'Review', cls: 'status-review' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong>{row.name}</strong>
                    </td>
                    <td><span className="dash-pill mono">{row.tier}</span></td>
                    <td className="body-sm">{row.region}</td>
                    <td className="mono">{row.vol}</td>
                    <td><span className={`dash-status-dot ${row.cls}`}>{row.status}</span></td>
                    <td><button className="dash-action-btn">View Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: '03',
      title: 'Sales, Scheme & Vendor Operations',
      subtitle: 'Dynamic incentive scheme matrices, trade discount parameters & vendor procurement ledgers.',
      render: () => (
        <div className="dash-view dash-view-schemes">
          <div className="dash-view-header">
            <div>
              <span className="caption mono">SCHEME & VENDOR MANAGEMENT</span>
              <strong className="body-lg">Incentive Matrices & Procurement Ledgers</strong>
            </div>
            <span className="dash-badge mono">Active Schemes: 04</span>
          </div>

          <div className="dash-scheme-grid">
            <div className="dash-scheme-card">
              <div className="dash-scheme-head">
                <span className="caption mono">TIER A SCHEME</span>
                <span className="dash-status-dot status-clear">Active</span>
              </div>
              <h4>Festive Volume Bonus</h4>
              <p className="body-sm">5% additional credit rebate on orders exceeding ₹2.5L monthly threshold.</p>
              <div className="dash-scheme-metric">
                <span className="caption">QUALIFIED DISTRIBUTORS</span>
                <strong className="mono">28 Partners</strong>
              </div>
            </div>

            <div className="dash-scheme-card">
              <div className="dash-scheme-head">
                <span className="caption mono">EARLY SETTLEMENT</span>
                <span className="dash-status-dot status-clear">Active</span>
              </div>
              <h4>7-Day Payment Incentive</h4>
              <p className="body-sm">2% instant cash discount applied automatically on 7-day cleared accounts.</p>
              <div className="dash-scheme-metric">
                <span className="caption">UTILIZATION RATE</span>
                <strong className="mono">64% of Invoices</strong>
              </div>
            </div>

            <div className="dash-scheme-card">
              <div className="dash-scheme-head">
                <span className="caption mono">VENDOR SUPPLY</span>
                <span className="dash-status-dot status-clear">Synced</span>
              </div>
              <h4>Raw Packaging Procurement</h4>
              <p className="body-sm">Weekly purchase orders & dispatch tracking linked with vendor inventory balances.</p>
              <div className="dash-scheme-metric">
                <span className="caption">ACTIVE SUPPLIERS</span>
                <strong className="mono">27 Vendors</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const moveSlide = (dir) => {
    setActiveSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  const contributions = [
    {
      num: '01',
      title: 'UI & Visual Structuring',
      desc: 'Contributed to the overall interface direction, visual hierarchy, layouts, and presentation of information across the system.',
    },
    {
      num: '02',
      title: 'Module Planning',
      desc: 'Participated in planning how different business functions could be organized into practical modules and connected within one platform.',
    },
    {
      num: '03',
      title: 'Frontend Contribution',
      desc: 'Assisted with frontend implementation, refinements, responsive behavior, and iterative improvements across the interface.',
    },
    {
      num: '04',
      title: 'AI Workflow',
      desc: 'Wrote and refined prompts for building, modifying, testing, debugging, and improving parts of the application through a Vibe Coding workflow.',
    },
    {
      num: '05',
      title: 'Backend Integration Learning',
      desc: 'Worked alongside the primary developer to understand how frontend interfaces connect with Supabase databases, authentication, tables, APIs, and application data.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Identify the actual business requirement and operational context.',
    },
    {
      step: '02',
      title: 'Break Down',
      desc: 'Turn the requirement into smaller technical and interface problems.',
    },
    {
      step: '03',
      title: 'Prompt',
      desc: 'Write a structured instruction for the AI coding workflow.',
    },
    {
      step: '04',
      title: 'Generate',
      desc: 'Let the AI-assisted coding environment produce an implementation.',
    },
    {
      step: '05',
      title: 'Review',
      desc: 'Inspect the generated interface, structure, and functionality.',
    },
    {
      step: '06',
      title: 'Test',
      desc: 'Find visual, functional, responsive, or logical edge cases.',
    },
    {
      step: '07',
      title: 'Refine',
      desc: 'Write a more precise follow-up prompt targeting discovered issues.',
    },
    {
      step: '08',
      title: 'Repeat',
      desc: 'Continue iterating until the implementation behaves reliably.',
    },
  ];

  const modules = [
    {
      num: '01',
      title: 'Dashboard',
      desc: 'Business overview, sales visibility, pending amounts, operational KPIs and high-level performance.',
    },
    {
      num: '02',
      title: 'Partner & Distributor Management',
      desc: 'Structured information about business partners, distributors and their activity.',
    },
    {
      num: '03',
      title: 'Sales & Transactions',
      desc: 'Visibility into sales activity, transaction records and business movement.',
    },
    {
      num: '04',
      title: 'Vendor Management',
      desc: 'A structured area for vendor information and operational relationships.',
    },
    {
      num: '05',
      title: 'Scheme Management',
      desc: 'Tools for managing business schemes, offers, partner programs and related operational information.',
    },
    {
      num: '06',
      title: 'Geographic Business View',
      desc: 'A visual representation of where the business network is distributed.',
    },
    {
      num: '07',
      title: 'Authentication & Access',
      desc: 'Secure user authentication and controlled access to internal information.',
    },
    {
      num: '08',
      title: 'Responsive Interface',
      desc: 'Designed to remain usable across desktop, tablet and mobile environments.',
    },
  ];

  return (
    <article className="section page-head-section morfiizo-case-study">
      <div className="container">
        {/* Back Link */}
        <Reveal>
          <Link to="/projects" className="back-link mono">
            ← All projects
          </Link>
        </Reveal>

        {/* 01. Hero / Project Introduction */}
        <Reveal delay={60} className="project-detail-head">
          <span className="eyebrow">INTERNAL BUSINESS SYSTEM · PRODUCT DESIGN · AI-ASSISTED DEVELOPMENT · VIBE CODING</span>
          <h1 className="display-lg">Morfiizo Enterprise Partner & Distributor Portal</h1>
          <p className="subhead">
            A complete internal business platform built around the operational needs of a growing enterprise — combining partner management, sales visibility, vendor operations, scheme management, authentication, and business intelligence into one responsive system.
          </p>
        </Reveal>

        {/* Project Metadata Grid */}
        <Reveal delay={120} className="project-detail-meta">
          <div>
            <p className="caption">Brand</p>
            <p className="body-sm">{project?.brand || 'Morfiizo Enterprise'}</p>
          </div>
          <div>
            <p className="caption">Role</p>
            <p className="body-sm">Product & Frontend Contributor</p>
          </div>
          <div>
            <p className="caption">Collaboration</p>
            <p className="body-sm">Company CEO (15+ Years Full-Stack Experience)</p>
          </div>
          <div>
            <p className="caption">Year</p>
            <p className="body-sm">2024–Present</p>
          </div>
          <div>
            <p className="caption">Tech & AI Environment</p>
            <p className="body-sm">HTML · CSS · JS · ChatGPT · Codex · Supabase</p>
          </div>
        </Reveal>

        {/* Primary Narrative Block */}
        <Reveal delay={140} className="morfiizo-lead-narrative">
          <p className="body-lg">
            Morfiizo Enterprise’s internal business platform was created to bring multiple operational functions into one connected digital system — from sales visibility and partner management to vendors, schemes, business performance, authentication, and geographic coverage.
          </p>
          <p className="body-lg">
            I worked alongside the company’s CEO, a full-stack software professional with 15+ years of industry experience across software and MNC environments, contributing to the UI direction, visual structuring, module planning, frontend refinement, and iterative development process.
          </p>
          <p className="body-lg">
            The project was built through an AI-assisted, Vibe Coding workflow using HTML, CSS, JavaScript, ChatGPT, Codex, and Supabase.
          </p>
          <p className="body-lg morfiizo-lead-highlight">
            For me, the project became an introduction to something much larger than frontend development: learning how to break down real business requirements, communicate them to AI coding tools, review generated implementations, debug problems, refine prompts, and understand how frontend systems connect with databases, authentication, APIs, and other backend services.
          </p>
          <p className="body-lg">
            The most valuable outcome was not simply the finished software. It was learning how to think through the process of building one.
          </p>
        </Reveal>

        {/* 04. Inside the System — Conceptual Dashboard */}
        <Reveal delay={160} className="morfiizo-hero-frame">
          <div className="section-head-compact">
            <span className="eyebrow">Inside the System</span>
            <h2 className="display-md">Conceptual System View</h2>
            <p className="body-sm caption">
              Conceptual representation — values shown for illustrative demonstration only. Actual production screenshots are omitted in compliance with internal company data confidentiality.
            </p>
          </div>

          <div
            className="morfiizo-slides-container"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') moveSlide(-1);
              if (e.key === 'ArrowRight') moveSlide(1);
            }}
            onTouchStart={(e) => {
              touchStart.current = e.changedTouches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStart.current === null) return;
              const dist = e.changedTouches[0].clientX - touchStart.current;
              if (Math.abs(dist) > 40) moveSlide(dist > 0 ? -1 : 1);
              touchStart.current = null;
            }}
          >
            <div className="morfiizo-slide-stage">
              <div className="morfiizo-browser-shell">
                <div className="morfiizo-app-bar">
                  <div className="morfiizo-app-brand">
                    <span className="morfiizo-app-logo">M</span>
                    <span className="morfiizo-app-name mono">MORFIIZO ENTERPRISE</span>
                    <span className="morfiizo-portal-badge mono">PORTAL v2.4</span>
                  </div>
                  <div className="morfiizo-app-nav">
                    <span className="app-nav-item active">Overview</span>
                    <span className="app-nav-item">Partners</span>
                    <span className="app-nav-item">Sales</span>
                    <span className="app-nav-item">Vendors</span>
                    <span className="app-nav-item">Schemes</span>
                  </div>
                  <div className="morfiizo-app-status">
                    <span className="status-live-dot" />
                    <span className="caption mono">Synced / Supabase</span>
                  </div>
                </div>

                <div className="morfiizo-dashboard-content">
                  {slides[activeSlide].render()}
                </div>

                <div className="morfiizo-preview-footer">
                  <span className="caption mono">● CONCEPTUAL INTERFACE REPRESENTATION · DESIGNED AROUND INTERNAL ENTERPRISE WORKFLOWS</span>
                </div>
              </div>
            </div>

            <div className="morfiizo-slide-footer">
              <div className="morfiizo-slide-meta">
                <p className="caption">
                  <span className="mono">{slides[activeSlide].id} · {slides[activeSlide].title}</span> — {slides[activeSlide].subtitle}
                </p>
              </div>

              <div className="morfiizo-slide-controls">
                <div className="morfiizo-slide-tabs" role="tablist">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      className={`morfiizo-slide-tab${activeSlide === idx ? ' active' : ''}`}
                      onClick={() => setActiveSlide(idx)}
                      role="tab"
                      aria-selected={activeSlide === idx}
                    >
                      <span>{s.id}</span>
                      {s.title}
                    </button>
                  ))}
                </div>

                <div className="morfiizo-slide-arrows">
                  <button
                    className="gallery-arrow"
                    onClick={() => moveSlide(-1)}
                    aria-label="Previous view"
                  >
                    ←
                  </button>
                  <span className="caption mono">
                    0{activeSlide + 1} / 0{slides.length}
                  </span>
                  <button
                    className="gallery-arrow"
                    onClick={() => moveSlide(1)}
                    aria-label="Next view"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 03. My Contribution (5 Cards) */}
        <Reveal className="morfiizo-contribution-section">
          <div className="section-head">
            <span className="eyebrow">Role & Scope</span>
            <h2 className="display-md">My Contribution</h2>
            <p className="body-lg">
              Working alongside the CEO, my contributions centered on interface structuring, module breakdown, prompt crafting, iterative frontend refinements, and responsive verification.
            </p>
          </div>

          <div className="morfiizo-contrib-grid five-cards">
            {contributions.map((c) => (
              <div className="morfiizo-contrib-card" key={c.num}>
                <span className="caption mono">{c.num} / CONTRIBUTION</span>
                <h3 className="card-title">{c.title}</h3>
                <p className="body-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 05. Modules & Business Functions (8 Modules) */}
        <Reveal className="morfiizo-modules-section">
          <div className="section-head">
            <span className="eyebrow">Product Architecture</span>
            <h2 className="display-md">Designed Around Real Business Operations</h2>
            <p className="body-lg">
              A breakdown of the core operational modules planned and structured across the platform.
            </p>
          </div>

          <div className="morfiizo-module-grid">
            {modules.map((m) => (
              <div className="morfiizo-module-card" key={m.num}>
                <span className="caption mono">{m.num} / MODULE</span>
                <h3 className="card-title">{m.title}</h3>
                <p className="body-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 06. Thinking in Systems */}
        <Reveal className="morfiizo-system-thinking-section">
          <div className="section-head">
            <span className="eyebrow">System Thinking</span>
            <h2 className="display-md">Thinking Beyond Individual Screens</h2>
            <p className="body-lg">
              The work also introduced me to thinking about software as a system rather than a collection of individual screens. I participated in discussions around module planning, information hierarchy, user flows, and how different business functions could be organized into one usable platform.
            </p>
          </div>

          <div className="morfiizo-system-pillars">
            <div className="morfiizo-system-pillar">
              <span className="caption mono">01 / REQUIREMENT</span>
              <h3 className="card-title">BUSINESS REQUIREMENTS</h3>
              <p className="body-sm">“What does the company actually need the software to solve?”</p>
            </div>
            <div className="morfiizo-pillar-arrow">↓</div>
            <div className="morfiizo-system-pillar">
              <span className="caption mono">02 / STRUCTURE</span>
              <h3 className="card-title">INFORMATION ARCHITECTURE</h3>
              <p className="body-sm">“How should that information be organized into modules and workflows?”</p>
            </div>
            <div className="morfiizo-pillar-arrow">↓</div>
            <div className="morfiizo-system-pillar">
              <span className="caption mono">03 / EXECUTION</span>
              <h3 className="card-title">IMPLEMENTATION</h3>
              <p className="body-sm">“How can the interface, data, authentication, and functionality work together?”</p>
            </div>
          </div>

          <div className="morfiizo-system-conclusion">
            <p className="body-lg">
              The project gave me exposure to the complete chain between a business problem and a working digital product.
            </p>
          </div>
        </Reveal>

        {/* 07. The Vibe Coding Workflow & Prompt Engineering */}
        <Reveal className="morfiizo-vibe-coding-section">
          <div className="section-head">
            <span className="eyebrow">AI-Assisted Development</span>
            <h2 className="display-md">From Requirement to Working Feature</h2>
            <p className="body-lg">
              Effective AI development is an iterative discipline. Rather than expecting one-shot code generations, our workflow broke complex business needs into precise technical prompts, code review, and systematic refinement.
            </p>
          </div>

          {/* 8-Step Interactive Visual Workflow */}
          <div className="morfiizo-workflow-stepper">
            {workflowSteps.map((ws, i) => (
              <div className="workflow-step-node" key={ws.step}>
                <div className="step-badge mono">{ws.step}</div>
                <strong className="step-title">{ws.title}</strong>
                <p className="step-desc body-sm">{ws.desc}</p>
                {i < workflowSteps.length - 1 && <span className="step-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>

          {/* Narrative: Learning the Workflow Behind Vibe Coding */}
          <div className="morfiizo-vibe-narrative">
            <h3 className="display-sm">Learning the Workflow Behind Vibe Coding</h3>
            <p className="body-lg">
              One of the most valuable parts of this project was learning how to work with AI as part of a development workflow.
            </p>
            <p className="body-lg">
              I contributed prompts for building, modifying, testing, and refining different parts of the application. The process was highly iterative: describe the requirement, inspect the implementation, identify what was wrong or incomplete, write a more precise follow-up prompt, test again, and continue refining.
            </p>
            <p className="body-lg">
              That experience taught me that effective AI-assisted development is less about generating code once and more about understanding the problem well enough to guide the system toward the right implementation.
            </p>
          </div>
        </Reveal>

        {/* 08. Tools Behind the Workflow */}
        <Reveal className="morfiizo-tools-section">
          <div className="section-head">
            <span className="eyebrow">Technology Stack</span>
            <h2 className="display-md">Tools Behind the Workflow</h2>
            <p className="body-lg">
              A breakdown of the development stack, AI toolchain, and supporting visual utilities used throughout the project.
            </p>
          </div>

          <div className="morfiizo-tools-categorized">
            <div className="tool-category-card">
              <span className="caption mono">AI & DEVELOPMENT</span>
              <div className="tool-tags">
                <span className="tool-tag">ChatGPT</span>
                <span className="tool-tag">Codex</span>
                <span className="tool-tag">Vibe Coding</span>
              </div>
              <p className="body-sm">Prompt-driven generation, component iteration, logic debugging and refactoring.</p>
            </div>

            <div className="tool-category-card">
              <span className="caption mono">FRONTEND</span>
              <div className="tool-tags">
                <span className="tool-tag">HTML</span>
                <span className="tool-tag">CSS</span>
                <span className="tool-tag">JavaScript</span>
              </div>
              <p className="body-sm">Responsive layout structure, data presentation components, DOM interactions.</p>
            </div>

            <div className="tool-category-card">
              <span className="caption mono">BACKEND & DATA (SUPABASE)</span>
              <div className="tool-tags">
                <span className="tool-tag">Supabase</span>
                <span className="tool-tag">Authentication</span>
                <span className="tool-tag">Database & Tables</span>
                <span className="tool-tag">APIs</span>
              </div>
              <p className="body-sm">Backend capabilities and data connectivity observed and integrated with frontend views.</p>
            </div>

            <div className="tool-category-card">
              <span className="caption mono">VISUAL ASSETS</span>
              <div className="tool-tags">
                <span className="tool-tag">Adobe Photoshop</span>
                <span className="tool-tag">Canva</span>
              </div>
              <p className="body-sm">Used for visual assets, presentation materials, imagery, and demo support.</p>
            </div>
          </div>
        </Reveal>

        {/* 09. Backend Integration Learning */}
        <Reveal className="morfiizo-backend-learning-section">
          <div className="section-head">
            <span className="eyebrow">Data & Architecture</span>
            <h2 className="display-md">Bridging Interface and Backend</h2>
          </div>
          <div className="morfiizo-backend-card">
            <p className="body-lg">
              I gained practical exposure to backend integration while working alongside the primary developer, learning how authentication, databases, tables, APIs, and frontend interfaces connect within a real business application.
            </p>
            <div className="backend-points-grid">
              <div className="backend-point">
                <strong>Authentication & Roles</strong>
                <p className="body-sm">Understanding how secure session tokens protect partner account data and govern tier access.</p>
              </div>
              <div className="backend-point">
                <strong>Relational Tables & Schema</strong>
                <p className="body-sm">Seeing how distributor orders link with vendor inventory ledgers and credit balance entries.</p>
              </div>
              <div className="backend-point">
                <strong>API Data Flow</strong>
                <p className="body-sm">Observing how frontend state queries backend endpoints and updates live status indicators.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 10. What This Project Taught Me */}
        <Reveal className="morfiizo-reflection-section">
          <span className="eyebrow">Reflection</span>
          <h2 className="display-md">What This Project Taught Me</h2>
          <div className="morfiizo-reflection-content">
            <p className="body-lg">
              This project changed the way I think about AI-assisted development.
            </p>
            <p className="body-lg">
              Before working through the process, it was easy to think of AI coding tools simply as systems that generate code from instructions. Working on a real business application showed me that the quality of the result depends heavily on how the problem is understood, structured, communicated, tested, and refined.
            </p>
            <p className="body-lg">
              I learned to think in iterations rather than one-shot generations.
            </p>
            <p className="body-lg">
              I also gained practical exposure to the relationship between interface design and backend systems — how a dashboard depends on data, how authentication affects the user experience, how APIs connect different parts of an application, and how database structures influence what the frontend can actually do.
            </p>
            <p className="body-lg highlight-conclusion">
              Most importantly, I learned that Vibe Coding is not a replacement for product thinking. It makes clear thinking even more important.
            </p>
          </div>
        </Reveal>

        {/* 11. Final Project Summary */}
        <Reveal className="morfiizo-summary-box">
          <div className="summary-item">
            <span className="caption mono">BRAND</span>
            <strong>Morfiizo Enterprise</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">PROJECT</span>
            <strong>Partner & Distributor Business Portal</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">ROLE</span>
            <strong>Product & Frontend Contributor</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">COLLABORATION</span>
            <strong>CEO / Senior Full-Stack Developer (15+ Years Exp.)</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">FOCUS</span>
            <strong>UI Structuring · Module Planning · Frontend Contribution · AI Workflow · System Thinking</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">TECHNOLOGY</span>
            <strong>HTML · CSS · JavaScript · ChatGPT · Codex · Supabase</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">VISUAL TOOLS</span>
            <strong>Photoshop · Canva</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">YEAR</span>
            <strong>2024–Present</strong>
          </div>
        </Reveal>

        {/* Next Project Footer Link */}
        <Reveal className="next-project hairline-top">
          <p className="caption">Next</p>
          <Link
            to={`/projects/${next.slug}`}
            className="next-project-link"
            data-cursor="view"
          >
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
