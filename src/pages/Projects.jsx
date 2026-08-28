import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const categories = ['All', 'Frontend', 'Systems', 'Brand', 'Internal Tools'];

function matchesCategory(project, category) {
  if (category === 'All') return true;
  return project.tag.toLowerCase().includes(category.toLowerCase());
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => projects.filter((p) => matchesCategory(p, active)),
    [active]
  );

  return (
    <section className="section page-head-section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Projects</span>
          <h1 className="display-lg">Work built inside a real business, not an agency brief.</h1>
          <p className="body-lg page-head-copy">
            Everything here shipped inside Morfiizo Enterprise — no client
            hand-off. I owned the problem, the design, and the build.
          </p>
        </Reveal>

        <div className="filter-row" role="tablist" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-pill${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
              role="tab"
              aria-selected={active === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((p, i) => (
            <ProjectCard project={p} key={p.slug} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
