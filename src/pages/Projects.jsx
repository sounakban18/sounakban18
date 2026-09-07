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
          <span className="eyebrow">PROJECTS</span>
          <h1 className="display-lg">Selected work, experiments and business solutions.</h1>
          <p className="body-lg page-head-copy">
            Real digital products, internal tools, and brand systems built and shipped inside an operating business.
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
