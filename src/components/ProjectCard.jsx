import { Link } from 'react-router-dom';
import PlaceholderArt from './PlaceholderArt';
import Reveal from './Reveal';
import { useMagnetic } from '../hooks';

export default function ProjectCard({ project, delay = 0 }) {
  const linkRef = useMagnetic(24);

  return (
    <Reveal className="project-card" delay={delay}>
      <Link to={`/projects/${project.slug}`} className="project-card-link" data-cursor="view">
        <PlaceholderArt label={project.brand} accent={project.accent} ratio="16 / 11" />
        <div className="project-card-body">
          <div className="project-card-tag mono">{project.tag}</div>
          <h3 className="card-title">{project.title}</h3>
          <p className="body-sm">{project.summary}</p>
          <span ref={linkRef} className="project-card-cta">
            View case study <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
