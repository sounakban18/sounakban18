import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import PlaceholderArt from '../components/PlaceholderArt';
import Reveal from '../components/Reveal';
import SgfCaseStudy from './SgfCaseStudy';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/projects" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  if (project.slug === 'sgf-catalogue') return <SgfCaseStudy project={project} next={next} />;

  return (
    <article className="section page-head-section">
      <div className="container">
        <Reveal>
          <Link to="/projects" className="back-link mono">
            ← All projects
          </Link>
        </Reveal>

        <Reveal delay={60} className="project-detail-head">
          <span className="eyebrow">{project.tag}</span>
          <h1 className="display-lg">{project.title}</h1>
          <p className="subhead">{project.summary}</p>
        </Reveal>

        <Reveal delay={120} className="project-detail-meta">
          <div>
            <p className="caption">Brand</p>
            <p className="body-sm">{project.brand}</p>
          </div>
          <div>
            <p className="caption">Role</p>
            <p className="body-sm">{project.role}</p>
          </div>
          <div>
            <p className="caption">Year</p>
            <p className="body-sm">{project.year}</p>
          </div>
          <div>
            <p className="caption">Stack</p>
            <p className="body-sm">{project.stack.join(' · ')}</p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <PlaceholderArt
            label={`${project.title} — cover`}
            accent={project.accent}
            ratio="16 / 9"
            dense
            photo={project.image}
            alt={project.title}
            fit={project.imageFit}
          />
        </Reveal>

        <div className="project-detail-body">
          {project.description.map((para, i) => (
            <Reveal as="p" key={i} delay={i * 60} className="body-lg">
              {para}
            </Reveal>
          ))}
        </div>

        <Reveal className="next-project hairline-top">
          <p className="caption">Next</p>
          <Link to={`/projects/${next.slug}`} className="next-project-link" data-cursor="view">
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
