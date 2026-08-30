import { Link } from 'react-router-dom';
import PlaceholderArt from './PlaceholderArt';
import Reveal from './Reveal';
import { useMagnetic } from '../hooks';

export default function ProjectCard({ project, delay = 0 }) {
  const linkRef = useMagnetic(24);

  return (
    <Reveal className="project-card" delay={delay}>
      <Link to={`/projects/${project.slug}`} className="project-card-link" data-cursor="view">
        {project.customPreview === 'dashboard' ? (
          <div className="card-dashboard-preview" style={{ aspectRatio: '16 / 11', '--accent': project.accent }}>
            <div className="mini-dash-top">
              <div className="mini-dash-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="mini-dash-title mono">MORFIIZO · PORTAL</span>
              <span className="mini-dash-status mono">● LIVE</span>
            </div>

            <div className="mini-dash-kpis">
              <div className="mini-kpi">
                <span className="caption">MONTHLY SALES</span>
                <strong>₹12.8L</strong>
              </div>
              <div className="mini-kpi">
                <span className="caption">PENDING</span>
                <strong>₹3.4L</strong>
              </div>
              <div className="mini-kpi">
                <span className="caption">ACTIVE BUYERS</span>
                <strong>184</strong>
              </div>
              <div className="mini-kpi">
                <span className="caption">VENDORS</span>
                <strong>27</strong>
              </div>
            </div>

            <div className="mini-dash-body">
              <div className="mini-dash-chart">
                <svg viewBox="0 0 160 50" className="mini-chart-svg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="miniChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,42 Q20,38 40,28 T80,22 T120,12 T160,6 L160,50 L0,50 Z"
                    fill="url(#miniChartGrad)"
                  />
                  <path
                    d="M0,42 Q20,38 40,28 T80,22 T120,12 T160,6"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                  <circle cx="160" cy="6" r="3" fill="var(--primary)" />
                </svg>
                <div className="mini-chart-footer">
                  <span className="caption">SALES TRAJECTORY</span>
                  <span className="caption mono">+14.2%</span>
                </div>
              </div>

              <div className="mini-dash-list">
                <div className="mini-list-item">
                  <span className="mini-dot active" />
                  <div>
                    <strong className="body-sm">Kolkata Central Hub</strong>
                    <span className="caption">Distributor Tier A</span>
                  </div>
                </div>
                <div className="mini-list-item">
                  <span className="mini-dot" />
                  <div>
                    <strong className="body-sm">Hooghly Trade Point</strong>
                    <span className="caption">Scheme Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mini-dash-footer">
              <span className="caption mono">CONCEPTUAL INTERFACE PREVIEW</span>
            </div>
          </div>
        ) : (
          <PlaceholderArt
            label={project.brand}
            accent={project.accent}
            ratio="16 / 11"
            photo={project.image}
            alt={project.title}
            photoPosition={project.image ? 'top' : undefined}
            fit={project.imageFit}
          />
        )}
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
