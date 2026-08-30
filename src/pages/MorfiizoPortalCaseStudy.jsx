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
      title: 'Interface & UI Design',
      desc: 'Contributed to the visual structure, layout decisions, component hierarchy, and overall frontend experience of the platform.',
    },
    {
      num: '02',
      title: 'Module Planning',
      desc: 'Helped think through how different business functions could be organized into practical modules and how information should flow between them.',
    },
    {
      num: '03',
      title: 'Frontend Development',
      desc: 'Assisted with implementing and refining frontend interfaces, layouts, responsive behavior, and smaller functional improvements.',
    },
    {
      num: '04',
      title: 'AI-Assisted Development',
      desc: 'Learned and applied prompt-driven coding workflows to build, test, refine, and troubleshoot interface components.',
    },
    {
      num: '05',
      title: 'Backend Integration Learning',
      desc: 'Worked alongside the senior developer to understand how frontend systems connect with databases and services such as Supabase.',
    },
    {
      num: '06',
      title: 'Responsive Product Thinking',
      desc: 'Contributed to making the system usable across desktop and mobile environments, with layouts and interactions adapted to different screen sizes.',
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

        {/* Hero Header */}
        <Reveal delay={60} className="project-detail-head">
          <span className="eyebrow">INTERNAL BUSINESS SYSTEM · PRODUCT DESIGN · AI-ASSISTED DEVELOPMENT</span>
          <h1 className="display-lg">Morfiizo Enterprise Partner & Distributor Portal</h1>
          <p className="subhead">
            A complete internal business platform built around the operational needs of a growing enterprise — combining partner management, sales visibility, vendor operations, scheme management, authentication, and business intelligence into one responsive system.
          </p>
        </Reveal>

        {/* Metadata Grid */}
        <Reveal delay={120} className="project-detail-meta">
          <div>
            <p className="caption">Brand</p>
            <p className="body-sm">{project?.brand || 'Morfiizo Enterprise'}</p>
          </div>
          <div>
            <p className="caption">Role</p>
            <p className="body-sm">{project?.role || 'Product & Frontend Contributor'}</p>
          </div>
          <div>
            <p className="caption">Collaboration</p>
            <p className="body-sm">Senior Full-Stack Developer / CEO</p>
          </div>
          <div>
            <p className="caption">Year</p>
            <p className="body-sm">{project?.year || '2024–Present'}</p>
          </div>
          <div>
            <p className="caption">Stack / Environment</p>
            <p className="body-sm">HTML · CSS · JavaScript · Supabase · AI-Assisted Coding</p>
          </div>
        </Reveal>

        {/* Hero Conceptual Dashboard Visual */}
        <Reveal delay={160} className="morfiizo-hero-frame">
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
              {slides[0].render()}
            </div>

            <div className="morfiizo-preview-footer">
              <span className="caption mono">● CONCEPTUAL INTERFACE REPRESENTATION · DESIGNED AROUND INTERNAL ENTERPRISE WORKFLOWS</span>
            </div>
          </div>
        </Reveal>

        {/* Main Narrative */}
        <div className="morfiizo-story">
          <section className="morfiizo-story-section">
            <span className="eyebrow">The Context</span>
            <h2 className="display-md">Bringing disparate operations into a single structured platform.</h2>
            <p className="body-lg">
              Morfiizo Enterprise needed more than a collection of disconnected operational tools. The goal was to create a single internal platform that could bring different parts of the business into one structured digital environment.
            </p>
            <p className="body-lg">
              I worked closely with the senior full-stack developer and CEO throughout the process, contributing to the frontend design, interface planning, module structure, responsive behavior, and iterative refinements.
            </p>
            <p className="body-lg">
              Rather than treating the project purely as a design exercise, the experience introduced me to the thinking required to turn real business requirements into usable software — deciding what information should surface first, how different modules should connect, and how a system can remain useful across different users and devices.
            </p>
          </section>

          <section className="morfiizo-story-section">
            <span className="eyebrow">Collaborative Execution</span>
            <h2 className="display-md">Practical AI workflows and real backend integration.</h2>
            <p className="body-lg">
              I worked through AI-assisted development workflows, using prompting and iterative coding to understand how interfaces could be built, refined, debugged, and connected to real backend services such as Supabase.
            </p>
            <p className="body-lg">
              The result was a complete internal business platform with authentication, operational dashboards, partner and distributor management, sales visibility, vendor information, scheme management, and business-level reporting.
            </p>
          </section>
        </div>

        {/* What I Contributed (6 Structured Cards) */}
        <Reveal className="morfiizo-contribution-section">
          <div className="section-head">
            <span className="eyebrow">Role & Scope</span>
            <h2 className="display-md">What I Contributed</h2>
            <p className="body-lg">
              Working alongside the senior full-stack developer, my role focused on frontend structuring, UI decisions, responsive optimization, and iterative problem solving.
            </p>
          </div>

          <div className="morfiizo-contrib-grid">
            {contributions.map((c) => (
              <div className="morfiizo-contrib-card" key={c.num}>
                <span className="caption mono">{c.num} / CONTRIBUTION</span>
                <h3 className="card-title">{c.title}</h3>
                <p className="body-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Interactive Conceptual System Views (Slideshow) */}
        <Reveal className="morfiizo-system-views-section">
          <div className="section-head">
            <span className="eyebrow">Inside the System</span>
            <h2 className="display-md">Interactive Conceptual System Views</h2>
            <p className="body-lg">
              Explore the key operational modules and interface compositions structured for the platform.
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
                  </div>
                  <div className="morfiizo-slide-indicator mono">
                    VIEW {slides[activeSlide].id} / 03
                  </div>
                </div>

                <div className="morfiizo-dashboard-content">
                  {slides[activeSlide].render()}
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

        {/* Modules Section */}
        <Reveal className="morfiizo-modules-section">
          <div className="section-head">
            <span className="eyebrow">Product Architecture</span>
            <h2 className="display-md">Designed Around Real Business Operations</h2>
            <p className="body-lg">
              A breakdown of the core modules planned, designed, and structured across the platform.
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

        {/* Design Thinking Section */}
        <Reveal className="morfiizo-design-thinking">
          <div className="section-head">
            <span className="eyebrow">Design Philosophy</span>
            <h2 className="display-md">Designing for an Operational System</h2>
            <p className="body-lg">
              The challenge was not simply making the interface look modern. An internal business platform has to make large amounts of operational information understandable without overwhelming the people using it.
            </p>
            <p className="body-lg">
              The interface therefore followed a simple principle: surface what matters first, keep modules predictable, and make deeper information available without creating unnecessary complexity.
            </p>
            <p className="body-lg">
              The visual language stayed corporate and restrained, while introducing enough modern interaction and hierarchy to make the system feel like a contemporary product rather than a collection of traditional business screens.
            </p>
          </div>

          <div className="morfiizo-principles-grid">
            <div className="morfiizo-principle-card">
              <span className="caption mono">01 / PRINCIPLE</span>
              <h3 className="card-title">CLARITY</h3>
              <p className="body-sm">Important business information should be visible at a glance.</p>
            </div>
            <div className="morfiizo-principle-card">
              <span className="caption mono">02 / PRINCIPLE</span>
              <h3 className="card-title">STRUCTURE</h3>
              <p className="body-sm">Every module should have a predictable place within the larger system.</p>
            </div>
            <div className="morfiizo-principle-card">
              <span className="caption mono">03 / PRINCIPLE</span>
              <h3 className="card-title">RESPONSIVENESS</h3>
              <p className="body-sm">The experience should remain useful regardless of the device used to access it.</p>
            </div>
          </div>
        </Reveal>

        {/* Learning & Development Section */}
        <Reveal className="morfiizo-learning-section">
          <span className="eyebrow">Professional Progression</span>
          <h2 className="display-md">More Than a Design Project</h2>
          <p className="body-lg">
            This project became an important introduction to product development beyond visual design.
          </p>
          <p className="body-lg">
            Working closely with an experienced full-stack developer allowed me to see how a business requirement moves through different stages — from understanding the operational problem, to planning modules, designing interfaces, connecting data, testing workflows, and refining the experience.
          </p>
          <p className="body-lg">
            It also gave me practical exposure to AI-assisted development. Instead of treating AI as a simple code generator, I learned how much of the outcome depends on breaking a problem down correctly, writing precise prompts, reviewing the generated implementation, identifying failures, and iterating until the system behaves as intended.
          </p>
          <p className="body-lg morfiizo-learning-highlight">
            That process changed how I think about digital products: the interface is only one layer. The real work is understanding the system behind it.
          </p>
        </Reveal>

        {/* Tools & Workflow Section */}
        <Reveal className="morfiizo-tools-section">
          <div className="section-head">
            <span className="eyebrow">Environment</span>
            <h2 className="display-md">Tools & Workflow</h2>
          </div>

          <div className="morfiizo-tools-grid">
            <div className="morfiizo-tool-card">
              <span className="caption mono">UI / UX</span>
              <strong>Figma</strong>
              <span className="body-sm">Component layouts, design tokens & interface flows</span>
            </div>
            <div className="morfiizo-tool-card">
              <span className="caption mono">FRONTEND</span>
              <strong>HTML · CSS · JavaScript</strong>
              <span className="body-sm">Interactive components, layouts & responsive styling</span>
            </div>
            <div className="morfiizo-tool-card">
              <span className="caption mono">BACKEND / DATA</span>
              <strong>Supabase</strong>
              <span className="body-sm">Database tables, user auth & API connectivity learning</span>
            </div>
            <div className="morfiizo-tool-card">
              <span className="caption mono">DEV APPROACH</span>
              <strong>AI-Assisted Workflows</strong>
              <span className="body-sm">Prompt-driven component iteration & debugging</span>
            </div>
            <div className="morfiizo-tool-card">
              <span className="caption mono">VISUAL EXPLORATION</span>
              <strong>Photoshop · Generative AI</strong>
              <span className="body-sm">Asset generation & brand presentation materials</span>
            </div>
          </div>
        </Reveal>

        {/* Business Problem Section (Before vs After) */}
        <Reveal className="morfiizo-comparison-section">
          <div className="section-head">
            <span className="eyebrow">Business Impact</span>
            <h2 className="display-md">The Problem Behind the Platform</h2>
          </div>

          <div className="morfiizo-before-after-grid">
            <div className="morfiizo-comparison-card before-card">
              <span className="caption mono">BEFORE / FRAGMENTED OPERATIONS</span>
              <ul className="morfiizo-comparison-list">
                <li>Fragmented operational tools & spreadsheets</li>
                <li>Manual, slow trade scheme calculations</li>
                <li>Disconnected sales & payment tracking</li>
                <li>Slower information retrieval across departments</li>
              </ul>
            </div>

            <div className="morfiizo-comparison-card after-card">
              <span className="caption mono">AFTER / UNIFIED PLATFORM</span>
              <ul className="morfiizo-comparison-list">
                <li>Centralized enterprise management portal</li>
                <li>Automated scheme & partner incentive rules</li>
                <li>Unified transaction, credit & vendor visibility</li>
                <li>Responsive multi-device operational access</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Final Reflection */}
        <Reveal className="morfiizo-reflection-section">
          <span className="eyebrow">Reflection</span>
          <h2 className="display-md">What This Project Taught Me</h2>
          <p className="body-lg">
            Working on Morfiizo Enterprise’s internal platform gave me a much broader understanding of digital product development.
          </p>
          <p className="body-lg">
            It taught me to look beyond individual screens and think in terms of systems — users, information, workflows, data, permissions, responsiveness, and business requirements.
          </p>
          <p className="body-lg">
            More importantly, it gave me first-hand exposure to collaborative development and AI-assisted coding: how to communicate an idea clearly, break complex requirements into smaller problems, test implementations, and iterate with a developer until the product works as intended.
          </p>
        </Reveal>

        {/* Project Summary Box */}
        <Reveal className="morfiizo-summary-box">
          <div className="summary-item">
            <span className="caption mono">PROJECT</span>
            <strong>Morfiizo Enterprise Partner & Distributor Portal</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">ROLE</span>
            <strong>Product & Frontend Contributor</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">COLLABORATION</span>
            <strong>Senior Full-Stack Developer / CEO</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">FOCUS</span>
            <strong>UI/UX · Frontend · Module Planning · AI-Assisted Development</strong>
          </div>
          <div className="summary-item">
            <span className="caption mono">PLATFORM</span>
            <strong>Responsive Internal Business System</strong>
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
