import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useMagnetic } from '../hooks';

export default function GitHubPreview() {
  const { repos } = useGitHubRepos();
  const ctaRef = useMagnetic(12);

  return (
    <section className="section github-preview-section">
      <div className="container">
        <div className="github-preview-box">
          <div className="github-preview-head">
            <Reveal>
              <div className="github-preview-badge mono">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>GITHUB</span>
              </div>
              <h2 className="display-md">Code, experiments &amp; things I&rsquo;m learning.</h2>
              <p className="body-lg github-preview-sub">
                Small tools, interactive UI experiments, and AI-assisted workflows exploring frontend implementation.
              </p>
            </Reveal>

            <Reveal delay={100} className="github-preview-actions">
              <a
                ref={ctaRef}
                href="https://github.com/sounakban18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                data-cursor="open"
              >
                <span>View GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
              <Link to="/about#github" className="btn btn-secondary">
                Profile breakdown →
              </Link>
            </Reveal>
          </div>

          <div className="github-preview-repos">
            {repos.slice(0, 2).map((repo, i) => (
              <Reveal
                as="a"
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                delay={i * 80 + 80}
                className="github-preview-card"
                data-cursor="view"
              >
                <div className="github-preview-card-top">
                  <div className="github-repo-title-row">
                    <svg className="github-repo-icon" viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v1.25a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25Z" />
                    </svg>
                    <strong className="github-repo-name mono">{repo.name}</strong>
                  </div>
                  <span className="github-repo-arrow" aria-hidden="true">↗</span>
                </div>
                <p className="github-repo-desc body-sm">{repo.description}</p>
                <div className="github-preview-card-meta">
                  <span className="github-repo-lang mono">
                    <span className="github-lang-dot" style={{ backgroundColor: repo.languageColor }} />
                    {repo.language}
                  </span>
                  <span className="caption mono">View repository ↗</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

