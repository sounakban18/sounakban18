import { useState, useEffect } from 'react';
import Reveal from './Reveal';
import outskillCertImg from '../assets/outskill-certificate.png';

export default function CertificationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="section certification-section" id="certifications">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">CERTIFICATIONS</span>
          <h2 className="display-md">Learning that moves into practice.</h2>
          <p className="body-lg">
            Selected certifications that support my work across AI-assisted development, digital systems and practical product building.
          </p>
        </Reveal>

        <Reveal delay={100} className="cert-showcase-wrap">
          <div
            className="cert-card"
            onClick={() => setIsModalOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            aria-label="Open larger preview of Generative AI Mastermind certificate from Outskill"
            data-cursor="view"
          >
            <div className="cert-card-grid">
              {/* Document Visual Frame */}
              <div className="cert-media-frame">
                <img
                  src={outskillCertImg}
                  alt="Outskill Certificate of Completion in Generative AI Mastermind awarded to Sounak Banerjee"
                  className="cert-thumbnail"
                  loading="lazy"
                />
                <div className="cert-overlay-action">
                  <span className="cert-expand-pill mono">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                      <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4ZM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5ZM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                    <span>View certificate</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>

              {/* Document Metadata Details */}
              <div className="cert-details">
                <div className="cert-tag-row">
                  <span className="cert-provider-tag mono">OUTSKILL</span>
                  <span className="cert-status-tag mono">● VERIFIED CREDENTIAL</span>
                </div>

                <h3 className="cert-title">Generative AI Mastermind</h3>

                <p className="body-sm cert-desc">
                  Advanced programme covering generative AI tools, prompt engineering, agentic workflows, and practical applications in digital design, automation, and modern web product development.
                </p>

                <div className="cert-meta-specs">
                  <div>
                    <span className="caption">RECIPIENT</span>
                    <strong className="body-sm">Sounak Banerjee</strong>
                  </div>
                  <div>
                    <span className="caption">ISSUED BY</span>
                    <strong className="body-sm">Vaibhav Sisinty · Founder, Outskill</strong>
                  </div>
                  <div>
                    <span className="caption">FOCUS</span>
                    <strong className="body-sm">Prompt Engineering · Workflow Automation</strong>
                  </div>
                </div>

                <div className="cert-action-prompt">
                  <span className="cert-prompt-text mono">
                    Click to view high-resolution credential <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* High-Resolution Modal Lightbox */}
        {isModalOpen && (
          <div
            className="cert-modal-backdrop"
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate: Generative AI Mastermind"
          >
            <div
              className="cert-modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-bar">
                <div className="cert-modal-title mono">
                  <span>OUTSKILL // CERTIFICATE OF COMPLETION</span>
                </div>
                <button
                  type="button"
                  className="cert-modal-close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close certificate preview"
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </div>

              <div className="cert-modal-image-wrap">
                <img
                  src={outskillCertImg}
                  alt="High-resolution certificate: Generative AI Mastermind awarded to Sounak Banerjee"
                  className="cert-modal-image"
                />
              </div>

              <div className="cert-modal-footer">
                <p className="caption mono">
                  Outskill · Generative AI Mastermind — Awarded to Sounak Banerjee
                </p>
                <button
                  type="button"
                  className="btn btn-secondary cert-close-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

