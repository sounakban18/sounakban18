import { useRef } from 'react';
import Reveal from './Reveal';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useMagnetic } from '../hooks';
import githubProfileImg from '../assets/github-profile.png';

export default function GitHubShowcase() {
  const { repos } = useGitHubRepos();
  const ctaRef = useMagnetic(16);
  const screenshotCardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!screenshotCardRef.current) return;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduced) return;

    const { clientX, clientY } = e;
    const rect = screenshotCardRef.current.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    screenshotCardRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!screenshotCardRef.current) return;
    screenshotCardRef.current.style.transform = '';
  };

  return (
    <section id="github" className="section github-showcase-section">
      <div className="container">
        <div className="github-layout-grid">
          {/* Left Column: Narrative & Repositories */}
          <div className="github-content-col">
            <Reveal>
              <span className="eyebrow">CODE &amp; EXPERIMENTS</span>
              <h2 className="display-md">Building, learning, shipping.</h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="body-lg github-lead-text">
                My GitHub is where I explore frontend development, AI-assisted workflows, small tools, experiments, and projects that help me understand how digital products actually work.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="github-micro-status mono">
                <span className="status-indicator-dot" />
                <span className="status-label">git status:</span>
                <span className="status-text">active learning &amp; shipping</span>
                <span className="status-sep">/</span>
                <span className="status-tag">main branch</span>
              </div>
            </Reveal>

            <Reveal delay={160} className="github-repos-wrapper">
              <span className="caption github-repos-heading mono">FEATURED REPOSITORIES</span>
              <div className="github-repo-list">
                {repos.slice(0, 3).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-repo-card"
                    data-cursor="view"
                  >
                    <div className="github-repo-top">
                      <div className="github-repo-title-row">
                        <svg className="github-repo-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
                          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v1.25a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25Z" />
                        </svg>
                        <strong className="github-repo-name mono">{repo.name}</strong>
                      </div>
                      <span className="github-repo-arrow" aria-hidden="true">↗</span>
                    </div>

                    <p className="github-repo-desc body-sm">{repo.description}</p>

                    <div className="github-repo-meta">
                      <span className="github-repo-lang mono">
                        <span className="github-lang-dot" style={{ backgroundColor: repo.languageColor }} />
                        {repo.language}
                      </span>
                      {repo.stargazers_count > 0 && (
                        <span className="github-repo-stars mono">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                      <span className="github-repo-cta caption">View repository ↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220} className="github-cta-wrapper">
              <a
                ref={ctaRef}
                href="https://github.com/sounakban18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary github-main-cta"
                data-cursor="open"
              >
                <span>View GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>

          {/* Right Column: Screenshot Browser Preview */}
          <div className="github-visual-col">
            <Reveal delay={140}>
              <div
                className="github-browser-window"
                ref={screenshotCardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="github-browser-bar">
                  <div className="github-browser-dots" aria-hidden="true">
                    <span className="dot dot-red" />
                    <span className="dot dot-amber" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="github-browser-url-bar mono">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span>github.com/sounakban18</span>
                  </div>
                  <div className="github-browser-status mono">README.md</div>
                </div>

                <a
                  href="https://github.com/sounakban18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-screenshot-link"
                  data-cursor="open"
                  aria-label="Open Sounak Banerjee's GitHub profile in a new tab"
                >
                  <img
                    src={githubProfileImg}
                    alt="Sounak Banerjee's GitHub profile preview showing bio, tech stack, and README introduction"
                    className="github-screenshot-img"
                    loading="lazy"
                  />
                  <div className="github-screenshot-overlay">
                    <span className="github-floating-pill mono">
                      github.com/sounakban18 ↗
                    </span>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

